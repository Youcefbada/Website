import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const { data, info } = await sharp(join(root, 'logo.png'))
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const W = info.width, H = info.height;
const px = (x, y) => {
  const i = (y * W + x) * 4;
  return { r: data[i], g: data[i+1], b: data[i+2], a: data[i+3] };
};

console.log('Image size:', W, 'x', H);
console.log('Top-left corner (0,0):       ', px(0, 0));
console.log('Top-right corner:            ', px(W-1, 0));
console.log('Bottom-left corner:          ', px(0, H-1));
console.log('Bottom-right corner:         ', px(W-1, H-1));
console.log('Center pixel:                ', px(Math.floor(W/2), Math.floor(H/2)));
console.log('1/4 from left, mid height:   ', px(Math.floor(W/4), Math.floor(H/2)));

// Scan to find actual content bounds
let minX = W, maxX = 0, minY = H, maxY = 0;
let threshold = 248;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = px(x, y);
    if (p.r < threshold || p.g < threshold || p.b < threshold) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
console.log('\nContent bounds (threshold', threshold, '):');
console.log('  minX:', minX, 'maxX:', maxX, 'minY:', minY, 'maxY:', maxY);
console.log('  Content size:', (maxX - minX), 'x', (maxY - minY));
