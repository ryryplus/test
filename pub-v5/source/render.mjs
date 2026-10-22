// node render.mjs preview t1 t2 …  → images clés (540×960) dans preview/
// node render.mjs frames start end worker → sous-images à 120/s (1080×1920) dans sub/
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import { mkdirSync } from 'node:fs';
const [mode, ...args] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--force-color-profile=srgb'] });
const scale = mode === 'preview' ? 0.5 : 1;
const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: scale });
const errors = []; p.on('pageerror', e => errors.push(e.message)); p.on('requestfailed', r => errors.push('fail ' + r.url()));
await p.goto('http://127.0.0.1:8766/pub.html', { waitUntil: 'networkidle' });
await p.evaluate(() => window.ready);
await p.evaluate(async () => { for (let t = 0; t < window.DURATION; t += 0.5) { render(t); await new Promise(r => requestAnimationFrame(r)); } });
await p.waitForTimeout(800);
if (errors.length) console.log('ERREURS', errors);
if (mode === 'preview') {
  mkdirSync('preview', { recursive: true });
  for (const t of args.map(Number)) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `preview/t${t.toFixed(2).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 85 }); }
} else {
  const [start, end] = args.map(Number); mkdirSync('sub', { recursive: true });
  for (let f = start; f < end; f++) {
    await p.evaluate(t => render(t), f / 120);
    await p.screenshot({ path: `sub/f${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 94 });
  }
}
await b.close();
