import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'docs')
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml','.woff2':'font/woff2','.pdf':'application/pdf','.xml':'application/xml','.txt':'text/plain'}
http.createServer(async(req,res)=>{
    try{
        const requestPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname)
        const resolved=path.resolve(root,'.'+requestPath)
        if(resolved!==root && !resolved.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
        let file=resolved
        if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html')
        const data=await fs.readFile(file)
        res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data)
    }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await fs.readFile(path.join(root,'404.html')).catch(()=>Buffer.from('Not found')))}
}).listen(4180,'127.0.0.1',()=>console.log('Portfolio preview: http://127.0.0.1:4180'))
