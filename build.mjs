import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { siteContent } from './content.mjs'
import { createResponsiveImage, createSocialImage } from './image-build.mjs'
import chineseUI from './zh-ui.mjs'
import chineseEngineering from './zh-engineering.mjs'
import chineseProduct from './zh-product.mjs'
import chinesePersonal from './zh-personal.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'docs')
const staging = path.join(root, '.build')
const cache = path.join(root, 'asset-cache')
await Promise.all([fs.mkdir(dist,{recursive:true}),fs.mkdir(staging,{recursive:true}),fs.mkdir(cache,{recursive:true}),fs.mkdir(path.join(dist,'assets'),{recursive:true})])
await build({entryPoints:[path.join(root,'site.tsx')],outfile:path.join(staging,'site.mjs'),platform:'node',format:'esm',bundle:true,packages:'external',jsx:'transform'})
const {Page,sharedAssets,siteBiography,projectRoute} = await import('./.build/site.mjs?time=' + Date.now())

const urls = new Set(sharedAssets)
const allProjects = [...siteContent.projects, ...(siteContent.revivals || [])]
for(const project of allProjects) {
    urls.add(project.coverImage)
    urls.add(project.heroImage)
    if(project.slug==='aircraft-seating' && project.hoverImage) urls.add(project.hoverImage)
    for(const section of project.sections) for(const block of section.blocks) if(block.type==='image') {
        if(block.src) urls.add(block.src)
        if(block.mobileSrc) urls.add(block.mobileSrc)
    }
}
const assets = {}
const imageMetadata = {}
async function saveAsset(url) {
    if (url?.startsWith('project-assets/')) {
        const localRoot = path.resolve(root, 'project-assets');
        const localPath = path.resolve(root, url);
        if (!localPath.startsWith(localRoot + path.sep)) throw new Error('Invalid local image path: ' + url);
        const extension = path.extname(localPath).toLowerCase();
        if (!['.png','.jpg','.jpeg','.webp','.avif','.svg'].includes(extension)) throw new Error('Unexpected local media format: '+url);
        const bytes = await fs.readFile(localPath);
        const name = crypto.createHash('sha256').update(bytes).digest('hex').slice(0,18)+extension;
        await fs.writeFile(path.join(dist,'assets',name),bytes);
        assets[url] = 'assets/'+name;
        imageMetadata[url] = await createResponsiveImage({bytes,original:assets[url],outDir:path.join(dist,'assets'),small:sharedAssets.includes(url)});
        return;
    }
    if(!url || !/^https:\/\//.test(url)) throw new Error('Missing or invalid portfolio image: '+url)
    const parsed = new URL(url)
    const extension = path.extname(parsed.pathname).toLowerCase()
    if(!['.png','.jpg','.jpeg','.webp','.avif','.svg'].includes(extension)) throw new Error('Unexpected media format: '+url)
    const name = crypto.createHash('sha256').update(url).digest('hex').slice(0,18)+extension
    const cached = path.join(cache,name)
    try { await fs.access(cached) } catch {
        const response = await fetch(url,{signal:AbortSignal.timeout(45000)})
        if(!response.ok)throw new Error('Image download '+response.status+': '+url)
        await fs.writeFile(cached,Buffer.from(await response.arrayBuffer()))
    }
    await fs.copyFile(cached,path.join(dist,'assets',name))
    assets[url] = 'assets/'+name
    imageMetadata[url] = await createResponsiveImage({bytes:await fs.readFile(cached),original:assets[url],outDir:path.join(dist,'assets'),small:sharedAssets.includes(url)})
}
const pending = [...urls]
await Promise.all(Array.from({length:4},async()=>{while(pending.length)await saveAsset(pending.shift())}))

// Google Fonts delivers a self-hostable font file; choose only the Latin subset.
const fontPath = path.join(cache,'manrope.woff2')
try { await fs.access(fontPath) } catch {
    const response=await fetch('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap',{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'}})
    if(!response.ok)throw new Error('Font CSS request failed: '+response.status)
    const css = await response.text()
    const candidates=[...css.matchAll(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/g)]
    if(!candidates.length) throw new Error('Could not find the Manrope WOFF2 file')
    const font = await fetch(candidates.at(-1)[1])
    if(!font.ok)throw new Error('Font file request failed: '+font.status)
    await fs.writeFile(fontPath,Buffer.from(await font.arrayBuffer()))
}
await fs.copyFile(fontPath,path.join(dist,'assets','manrope.woff2'))
const socialImages = {site:await createSocialImage({outDir:path.join(dist,'assets')})}
for (const project of allProjects) {
    socialImages[projectRoute(project)] = await createSocialImage({outDir:path.join(dist,'assets'),title:project.title,imageFile:path.join(dist,assets[project.coverImage]),caption:project.coverCaption})
}
// Remove assets retired from the current public pages.
const currentAssets = new Set([
    ...Object.values(assets).map(asset=>path.basename(asset)),
    ...Object.values(imageMetadata).flatMap(image=>image.variants.map(variant=>path.basename(variant.src))),
    ...Object.values(socialImages).map(image=>path.basename(image.src)),
    'manrope.woff2'
])
for (const file of await fs.readdir(path.join(dist,'assets'))) {
    if (!currentAssets.has(file)) await fs.unlink(path.join(dist,'assets',file))
}
await fs.copyFile(path.join(root,'styles.css'),path.join(dist,'styles.css'))
await build({entryPoints:[path.join(root,'client.tsx')],outfile:path.join(dist,'client.js'),platform:'browser',format:'iife',bundle:true,minify:true,jsx:'transform',define:{'process.env.NODE_ENV':'"production"'}})
await fs.cp(path.join(root,'public'),dist,{recursive:true})
const origin='https://mystify59.github.io'
const pages=[{key:'home',route:'',title:'Design Engineering Portfolio',description:siteBiography},{key:'about',route:'about/',title:'About',description:siteBiography},{key:'resume',route:'resume/',title:'Resume',description:'Experience, education and skills in design engineering, mechanical design and robotics.'},...allProjects.map(project=>({key:projectRoute(project),route:projectRoute(project)+'/',title:project.title,description:project.description})),{key:'404',route:'404.html',title:'Page not found',description:'Browse Boxuan Wang’s design engineering portfolio.'}]
const chineseMessages = {...chineseEngineering, ...chineseProduct, ...chinesePersonal, ...chineseUI}
const chinese = value => Object.hasOwn(chineseMessages, value) ? chineseMessages[value] : value
const textFields = new Set(['title','company','year','description','role','timeline','team','platform','cardSummary','heroCaption','coverAlt','coverCaption','status','backLabel','name','heading','text','alt','comparison','attribution','observations','label','columns','rows'])
function localize(value, field) {
    if (typeof value === 'string' && textFields.has(field)) return chinese(value)
    if (Array.isArray(value)) return value.map(item => localize(item, field))
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key,item]) => [key,localize(item,key)]))
    }
    return value
}
const editions = [
    {language:'en', directory:'', content:siteContent, t:value => value},
    {language:'zh-CN', directory:'zh/', content:localize(siteContent), t:chinese},
]
const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
for (const {language,directory,content:edition,t} of editions) for (const page of pages) {
    const route=directory+page.route
    const url=origin+'/'+route
    const depth=(page.key==='home'||page.key==='404'?0:page.key.split('/').length)+Number(Boolean(directory))
    const prefix=page.key==='404'?'/':'../'.repeat(depth)
    const content=renderToStaticMarkup(React.createElement(Page,{page:page.key,projects:edition.projects,revivals:edition.revivals,assets,imageMetadata,language,t}))
    const social=socialImages[page.key] || socialImages.site
    const favicon=imageMetadata[sharedAssets[0]].variants[0]?.src || assets[sharedAssets[0]]
    const title=escape(page.key==='home'?'Boxuan Wang | '+t(page.title):t(page.title)+' | Boxuan Wang')
    const description=escape(t(page.description))
    const socialAlt=escape(directory?(page.key in socialImages ? t(page.title)+' · Boxuan Wang 的设计工程作品集' : 'Boxuan Wang 的设计工程作品集'):social.alt)
    const alternate=editions.map(other=>'<link rel="alternate" hreflang="'+other.language+'" href="'+origin+'/'+other.directory+page.route+'">').join('')
    const sharing='<meta property="og:image" content="'+origin+'/'+social.src+'"><meta property="og:image:width" content="'+social.width+'"><meta property="og:image:height" content="'+social.height+'"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:alt" content="'+socialAlt+'"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+title+'"><meta name="twitter:description" content="'+description+'"><meta name="twitter:image" content="'+origin+'/'+social.src+'"><meta name="twitter:image:alt" content="'+socialAlt+'">'
    const html='<!doctype html>\n<html lang="'+language+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#111315"><title>'+title+'</title><meta name="description" content="'+description+'"><meta property="og:title" content="'+title+'"><meta property="og:description" content="'+description+'"><meta property="og:type" content="website"><meta property="og:url" content="'+url+'">'+sharing+'<link rel="canonical" href="'+url+'">'+alternate+'<link rel="icon" href="'+prefix+favicon+'"><link rel="preload" href="'+prefix+'assets/manrope.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="'+prefix+'styles.css"></head><body>'+content+'<script src="'+prefix+'client.js" defer></script></body></html>'
    const output=page.key==='404'?path.join(dist,route):path.join(dist,route,'index.html')
    await fs.mkdir(path.dirname(output),{recursive:true})
    await fs.writeFile(output,html)
}
await fs.writeFile(path.join(dist,'.nojekyll'),'')
await fs.writeFile(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n')
const sitemapRoutes=editions.flatMap(({directory})=>pages.filter(p=>p.key!=='404').map(p=>directory+p.route))
await fs.writeFile(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+sitemapRoutes.map(route=>'<url><loc>'+origin+'/'+route+'</loc></url>').join('')+'</urlset>')
await fs.writeFile(path.join(staging,'image-manifest.json'),JSON.stringify({
    images:Object.fromEntries(Object.entries(imageMetadata).sort(([a],[b])=>a.localeCompare(b))),
    socialImages,
    totals:{originalBytes:Object.values(imageMetadata).reduce((sum,image)=>sum+image.originalBytes,0),responsiveBytes:Object.values(imageMetadata).flatMap(image=>image.variants).reduce((sum,image)=>sum+image.bytes,0),originals:urls.size,variants:Object.values(imageMetadata).reduce((sum,image)=>sum+image.variants.length,0)}
},null,2)+'\n')
console.log('Built '+pages.length*editions.length+' pages and '+urls.size+' local images in docs/')
