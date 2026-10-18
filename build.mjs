import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { siteContent } from './content.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'docs')
const staging = path.join(root, '.build')
const cache = path.join(root, 'asset-cache')
await Promise.all([fs.mkdir(dist,{recursive:true}),fs.mkdir(staging,{recursive:true}),fs.mkdir(cache,{recursive:true}),fs.mkdir(path.join(dist,'assets'),{recursive:true})])
await build({entryPoints:[path.join(root,'site.tsx')],outfile:path.join(staging,'site.mjs'),platform:'node',format:'esm',bundle:true,packages:'external',jsx:'transform'})
const {Page,sharedAssets,siteBiography} = await import('./.build/site.mjs?time=' + Date.now())

const urls = new Set(sharedAssets)
for(const project of siteContent.projects) {
    urls.add(project.coverImage)
    urls.add(project.heroImage)
    if(project.slug==='aircraft-seating' && project.hoverImage) urls.add(project.hoverImage)
    for(const section of project.sections) for(const block of section.blocks) if(block.type==='image' && block.src) urls.add(block.src)
}
const assets = {}
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
// Remove assets retired from the current public pages.
const currentAssets = new Set([...Object.values(assets).map(asset=>path.basename(asset)), 'manrope.woff2'])
for (const file of await fs.readdir(path.join(dist,'assets'))) {
    if (!currentAssets.has(file)) await fs.unlink(path.join(dist,'assets',file))
}
await fs.copyFile(path.join(root,'styles.css'),path.join(dist,'styles.css'))
await build({entryPoints:[path.join(root,'client.tsx')],outfile:path.join(dist,'client.js'),platform:'browser',format:'iife',bundle:true,minify:true,jsx:'transform',define:{'process.env.NODE_ENV':'"production"'}})
await fs.cp(path.join(root,'public'),dist,{recursive:true})
const origin='https://mystify59.github.io'
const pages=[{key:'home',route:'',title:'Boxuan Wang | Design Engineering Portfolio',description:siteBiography},{key:'about',route:'about/',title:'About | Boxuan Wang',description:siteBiography},{key:'resume',route:'resume/',title:'Resume | Boxuan Wang',description:'Experience, education and skills in design engineering, mechanical design and robotics.'},...siteContent.projects.map(project=>({key:'case-studies/'+project.slug,route:'case-studies/'+project.slug+'/',title:project.title+' | Boxuan Wang',description:project.description})),{key:'404',route:'404.html',title:'Page not found | Boxuan Wang',description:'Browse Boxuan Wang’s design engineering portfolio.'}]
const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
for(const page of pages) {
    const depth=page.key==='home'||page.key==='404'?0:page.key.startsWith('case-studies/')?2:1
    const prefix=page.key==='404'?'/':'../'.repeat(depth)
    const content=renderToStaticMarkup(React.createElement(Page,{page:page.key,projects:siteContent.projects,assets}))
    const html='<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#111315"><title>'+escape(page.title)+'</title><meta name="description" content="'+escape(page.description)+'"><meta property="og:title" content="'+escape(page.title)+'"><meta property="og:description" content="'+escape(page.description)+'"><meta property="og:type" content="website"><meta property="og:url" content="'+origin+'/'+page.route+'"><meta property="og:image" content="'+origin+'/'+assets[sharedAssets[0]]+'"><link rel="canonical" href="'+origin+'/'+page.route+'"><link rel="icon" href="'+prefix+assets[sharedAssets[0]]+'"><link rel="preload" href="'+prefix+'assets/manrope.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="'+prefix+'styles.css"></head><body>'+content+'<script src="'+prefix+'client.js" defer></script></body></html>'
    const output=page.key==='404'?path.join(dist,'404.html'):path.join(dist,page.route,'index.html')
    await fs.mkdir(path.dirname(output),{recursive:true})
    await fs.writeFile(output,html)
}
await fs.writeFile(path.join(dist,'.nojekyll'),'')
await fs.writeFile(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n')
await fs.writeFile(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.filter(p=>p.key!=='404').map(p=>'<url><loc>'+origin+'/'+p.route+'</loc></url>').join('')+'</urlset>')
console.log('Built '+pages.length+' pages and '+urls.size+' local images in docs/')
