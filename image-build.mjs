import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import sharp from 'sharp'

const hash = value => crypto.createHash('sha256').update(value).digest('hex')
const escapeXml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]))
const webpOptions = {quality:85, effort:6, smartSubsample:true}

// Full-resolution sources remain separate. Only these display variants are resized.
export async function createResponsiveImage({bytes, original, outDir, small = false}) {
    const source = await sharp(bytes).metadata()
    const rotated = [5,6,7,8].includes(source.orientation)
    const width = rotated ? source.height : source.width
    const height = rotated ? source.width : source.height
    if (!width || !height) throw new Error('Image has no intrinsic dimensions: ' + original)
    const sha256 = hash(bytes)
    const result = {original, sha256, originalBytes:bytes.length, width, height, src:original, variants:[]}
    // Vectors are already resolution-independent and are typically smaller than a raster copy.
    if (source.format === 'svg') return result
    const maximumWidth = Math.min(width,1920)
    const widths = [...new Set([...(small ? [96,192] : []),480,800,1280,1920,maximumWidth].filter(size => size <= maximumWidth))].sort((a,b) => a-b)
    const recipe = hash(JSON.stringify({sha256, webpOptions, sharp:sharp.versions.sharp, vips:sharp.versions.vips, operation:'auto-orient-resize-v1'})).slice(0,18)
    for (const targetWidth of widths) {
        const name = `${recipe}-${targetWidth}w.webp`
        const output = path.join(outDir, name)
        let info
        try {
            const [metadata, stat] = await Promise.all([sharp(output).metadata(),fs.stat(output)])
            info = {...metadata,size:stat.size}
        } catch {
            info = await sharp(bytes).rotate().resize({width:targetWidth,withoutEnlargement:true}).webp(webpOptions).toFile(output)
        }
        result.variants.push({src:'assets/'+name,width:info.width,height:info.height,bytes:info.size})
    }
    result.src = result.variants.filter(variant => variant.width <= 1280).at(-1)?.src || result.variants[0].src
    return result
}

function titleLines(title, maximumLength = 18) {
    const lines = []
    for (const word of title.split(/\s+/)) {
        if (!lines.length || (lines.at(-1) + ' ' + word).length > maximumLength) lines.push(word)
        else lines[lines.length-1] += ' ' + word
    }
    return lines
}

// Social artwork uses only approved project imagery, contained without cropping,
// plus a small typographic label. The general card contains no portrait.
export async function createSocialImage({outDir, title, imageFile, caption}) {
    const isProject = Boolean(imageFile)
    const titleSvg = isProject
        ? titleLines(title).map((line,index) => `<text x="64" y="${236+index*68}" font-size="56" font-weight="600">${escapeXml(line)}</text>`).join('')
        : '<text x="72" y="263" font-size="88" font-weight="600">Boxuan Wang</text><text x="76" y="344" font-size="40">Design engineering</text><text x="76" y="414" font-size="25" fill="#b2b9c1">Product design · Mechanical engineering · Robotics</text>'
    const captionSvg = caption ? `<text x="568" y="559" font-size="17" fill="#b2b9c1">${escapeXml(caption)}</text>` : ''
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#111315"/><g font-family="Arial, sans-serif" fill="#f4f4f2"><text x="${isProject ? 64 : 76}" y="104" font-size="18" letter-spacing="3" fill="#b2b9c1">${isProject ? 'BOXUAN WANG' : 'SELECTED WORK'}</text>${titleSvg}<rect x="${isProject ? 64 : 76}" y="${isProject ? 480 : 482}" width="52" height="3" fill="#b8cbbf"/><text x="${isProject ? 64 : 76}" y="554" font-size="16" fill="#b2b9c1">${isProject ? 'DESIGN ENGINEERING PORTFOLIO' : 'mystify59.github.io'}</text>${captionSvg}</g></svg>`
    const layers = []
    if (isProject) {
        const image = await sharp(imageFile).rotate().resize({width:576,height:432,fit:'contain',background:'#191d21'}).png().toBuffer()
        layers.push({input:image,left:568,top:99})
    }
    const bytes = await sharp(Buffer.from(svg)).composite(layers).jpeg({quality:90,mozjpeg:true}).toBuffer()
    const name = `social-${hash(bytes).slice(0,18)}.jpg`
    await fs.writeFile(path.join(outDir,name),bytes)
    return {src:'assets/'+name,width:1200,height:630,bytes:bytes.length,alt:isProject ? title+' — Boxuan Wang’s design engineering portfolio'+(caption ? '. '+caption : '') : 'Boxuan Wang — design engineering portfolio: product design, mechanical engineering and robotics'}
}
