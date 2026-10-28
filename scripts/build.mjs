import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=p=>readFile(path.join(root,p),'utf8');
await mkdir(path.join(root,'dist'),{recursive:true});
let html=await read('src/layout.html');
for(const match of [...html.matchAll(/\{\{([a-z-]+)\}\}/g)]){
 html=html.replace(match[0],await read(`src/sections/${match[1]}.html`));
}
if(html.includes('{{')) throw new Error('Unresolved section');
await writeFile(path.join(root,'dist/index.html'),html);
const css=['base','modern'];
await writeFile(path.join(root,'dist/style.css'),(await Promise.all(css.map(n=>read(`src/styles/${n}.css`)))).join(''));
const js=['navigation','reveal','service-selection','booking-form','motion','accordions'];
await writeFile(path.join(root,'dist/app.js'),(await Promise.all(js.map(n=>read(`src/scripts/${n}.js`)))).join(''));
await cp(path.join(root,'public'),path.join(root,'dist'),{recursive:true});
console.log('Built all sections, styles, scripts and assets into dist/');
