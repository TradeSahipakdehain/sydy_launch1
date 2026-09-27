const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const out = path.resolve(__dirname, '../public/brand/sydy-final');
fs.mkdirSync(out, { recursive: true });
// Reconstruct the approved interlocking SYDY monogram. The final D/Y shares its silhouette.
const s = '<path d="M168 64H92C30 64 30 144 92 144H108C188 144 188 256 108 256H40" fill="none" stroke="currentColor" stroke-width="48" stroke-linecap="butt"/>';
const y = '<path fill="currentColor" d="M206 40H258L302 112L346 40H398L328 160V280H276V160Z"/>';
const dy = '<path transform="translate(394 0)" fill="currentColor" d="M40 40L128 180V280H40Z M70 40H152C170 40 187 43.125 202.375 48.90625L140 153Z M228.16 62.08C259.84 83.2 280 118 280 160C280 230 224 280 152 280V180Z"/>';
const mark = s + y + dy;
const glyphs = {S:'M42 9C33 0 6 1 6 18C6 36 43 25 43 43C43 60 15 63 5 51',Y:'M3 6L24 31L45 6M24 31V57',D:'M7 6H23C52 6 52 57 23 57H7Z',C:'M43 11C3 -10 -9 71 43 52',A:'M3 57L24 6L45 57M11 39H37',P:'M7 57V6H26C49 6 49 32 26 32H7',I:'M24 6V57',T:'M3 6H45M24 6V57',L:'M7 6V57H43'};
const caption = `<g transform="translate(50 337) scale(.65)" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round">${[...'SYDY CAPITAL'].map((c,i)=>c===' '?'':`<path transform="translate(${i*82} 0)" d="${glyphs[c]}"/>`).join('')}</g>`;
const svg = (color,full=true) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714 ${full?420:320}" color="${color}" role="img" aria-labelledby="logo-title"><title id="logo-title">SYDY Capital</title>${mark}${full?caption:''}</svg>`;
async function main(){
 for(const [tone,color] of [['black','#000000'],['white','#ffffff']]) for(const [type,full] of [['logo',true],['mark',false]]){
  const content=svg(color,full); fs.writeFileSync(path.join(out,`sydy-${type}-${tone}.svg`),content);
  await sharp(Buffer.from(content)).resize({width:1440}).png().toFile(path.join(out,`sydy-${type}-${tone}.png`));
 }
 const preview=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="650"><path fill="#fff" d="M0 0H800V650H0Z"/><path fill="#0b0b0b" d="M800 0H1600V650H800Z"/><g transform="translate(30 120)" color="#000">${mark}${caption}</g><g transform="translate(830 120)" color="#fff">${mark}${caption}</g></svg>`;
 await sharp(Buffer.from(preview)).png().toFile(path.join(out,'preview.png'));
 fs.writeFileSync(path.join(out,'README.txt'),'SYDY CAPITAL — approved interlocking monogram\nTransparent SVGs use vector paths and strokes with no embedded bitmap or font dependency. The D and final Y share one fused shape, matching the approved artwork. Black is for light backgrounds; white is for dark backgrounds. Logo includes the SYDY CAPITAL caption; mark-only files contain the symbol. PNGs are transparent 1440px exports. reference-final.png retains the supplied approval image.\n');
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify({source:'User-approved codex-clipboard-1f87de96-5db5-41ee-a323-18a44a06d8ed.png',method:'SVG path reconstruction',generator:'scripts/build-final-logo.cjs',variants:['black','white'],formats:['svg','png'],finalDY:'interlocked, shared silhouette'},null,2));
 console.log(out);
}
main().catch(error=>{console.error(error);process.exitCode=1;});
