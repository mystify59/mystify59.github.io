import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import crypto from 'node:crypto'
import sharp from 'sharp'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'docs')
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value]) => [key,value]))
const sourceFile = (htmlFile, src) => src.startsWith('/') ? path.join(dist, src) : path.resolve(path.dirname(htmlFile), src)

async function htmlFiles(directory) {
    const entries = await fs.readdir(directory, {withFileTypes:true})
    return (await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(path.join(directory, entry.name)) : entry.name.endsWith('.html') ? [path.join(directory, entry.name)] : []))).flat()
}

test('rendered content images have responsive sources and reserved intrinsic dimensions', async () => {
    for (const file of await htmlFiles(dist)) {
        const html = await fs.readFile(file, 'utf8')
        for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
            const image = attributes(tag[0])
            if (!image.src) continue // The dialog starts empty and loads an original only when opened.
            assert.ok(Number(image.width) > 0 && Number(image.height) > 0, `${file}: missing image dimensions`)
            assert.ok(/\.(webp|svg)$/.test(image.src), `${file}: original raster delivered inline: ${image.src}`)
            if (!image.src.endsWith('.svg')) {
                assert.ok(image.srcSet && image.sizes, `${file}: missing responsive image candidates`)
                for (const candidate of image.srcSet.split(', ')) {
                    const [src, width] = candidate.split(' ')
                    const actual = await sharp(sourceFile(file, src)).metadata()
                    assert.equal(actual.width, Number(width.replace('w','')), `Incorrect width descriptor for ${src}`)
                }
            }
        }
        for (const [,src] of html.matchAll(/data-full-src="([^"]+)"/g)) {
            assert.ok((await fs.stat(sourceFile(file, src))).size > 0)
        }
    }
})

test('sharing metadata uses a landscape image and project-specific previews', async () => {
    const previews = new Map()
    for (const file of await htmlFiles(dist)) {
        const html = await fs.readFile(file, 'utf8')
        const meta = Object.fromEntries([...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag)).map(a => [a.property || a.name, a.content]))
        assert.equal(meta['twitter:card'], 'summary_large_image', file)
        assert.equal(meta['og:image:width'], '1200', file)
        assert.equal(meta['og:image:height'], '630', file)
        assert.ok(meta['og:image:alt'], file)
        const actual = await sharp(path.join(dist, new URL(meta['og:image']).pathname)).metadata()
        assert.equal(actual.width, 1200)
        assert.equal(actual.height, 630)
        if (file.includes(`${path.sep}case-studies${path.sep}`) || file.includes(`${path.sep}project-revival${path.sep}`)) {
            assert.ok(!previews.has(meta['og:image']), `Project sharing preview reused by ${file} and ${previews.get(meta['og:image'])}`)
            previews.set(meta['og:image'], file)
        }
    }
})

test('image manifest retains originals byte-for-byte and preserves derivative aspect ratios', async () => {
    const manifestFile = path.join(root, '.build', 'image-manifest.json')
    const manifestExists = await fs.access(manifestFile).then(() => true, () => false)
    assert.ok(manifestExists, 'Build must emit an image manifest')
    const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'))
    for (const image of Object.values(manifest.images)) {
        const bytes = await fs.readFile(path.join(dist, image.original))
        assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), image.sha256)
        assert.equal(bytes.length, image.originalBytes)
        for (const variant of image.variants) {
            const actual = await sharp(path.join(dist, variant.src)).metadata()
            assert.ok(actual.width <= image.width && actual.height <= image.height, `Upscaled ${variant.src}`)
            assert.ok(Math.abs(actual.height - actual.width * image.height / image.width) <= 1, `Cropped ${variant.src}`)
        }
    }
})
