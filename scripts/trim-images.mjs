import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function trimImage(srcPath, destPath) {
  const { data, info } = await sharp(srcPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const W = info.width, H = info.height;
  let minX = W, maxX = 0, minY = H, maxY = 0;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 4;
      const a = data[idx + 3];
      // Skip fully transparent pixels — only count visible (alpha > 10) pixels
      if (a > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 20;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(W - 1, maxX + pad);
  maxY = Math.min(H - 1, maxY + pad);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  await sharp(srcPath)
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .png() // keep transparency — no flatten
    .toFile(destPath);

  console.log(`  ${W}x${H}  →  ${cropW}x${cropH}  saved.`);
}

console.log('logo.png:');
await trimImage(join(root, 'logo.png'), join(root, 'src/assets/logo.png'));

console.log('icon.png:');
await trimImage(join(root, 'icon.png'), join(root, 'src/assets/icon.png'));

copyFileSync(join(root, 'src/assets/icon.png'), join(root, 'public/favicon.png'));
console.log('favicon.png updated in public/');
