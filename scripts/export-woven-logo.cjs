const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const out = path.resolve(__dirname, '../public/brand/sydy-woven');
async function main() {
  fs.mkdirSync(out, { recursive: true });
  const { data, info } = await sharp(path.join(out, 'approved-reference.png'))
    .extract({ left: 60, top: 220, width: 870, height: 350 })
    .removeAlpha().raw().toBuffer({ resolveWithObject: true });
  for (const [tone, value] of [['white', 255], ['black', 0]]) {
    const rgba = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < info.width * info.height; i++) {
      const luminance = (data[i * info.channels] + data[i * info.channels + 1] + data[i * info.channels + 2]) / 3;
      rgba[i * 4] = rgba[i * 4 + 1] = rgba[i * 4 + 2] = value;
      rgba[i * 4 + 3] = Math.round(255 * Math.max(0, Math.min(1, (245 - luminance) / 230)));
    }
    await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png().toFile(path.join(out, `sydy-logo-${tone}.png`));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
