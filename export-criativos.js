const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE = path.join(__dirname, 'anuncios');

const files = [
  { src: 'conjunto-1-dor/criativo-1a-texto-direto.html', out: 'conjunto-1-dor/criativo-1a-texto-direto.png' },
  { src: 'conjunto-1-dor/criativo-1b-depoimento.html', out: 'conjunto-1-dor/criativo-1b-depoimento.png' },
  { src: 'conjunto-1-dor/criativo-1c-escassez.html', out: 'conjunto-1-dor/criativo-1c-escassez.png' },
  { src: 'conjunto-2-desejo/criativo-2a-beneficio.html', out: 'conjunto-2-desejo/criativo-2a-beneficio.png' },
  { src: 'conjunto-2-desejo/criativo-2b-audio.html', out: 'conjunto-2-desejo/criativo-2b-audio.png' },
  { src: 'conjunto-2-desejo/criativo-2c-carrossel/slide-1.html', out: 'conjunto-2-desejo/criativo-2c-carrossel/slide-1.png' },
  { src: 'conjunto-2-desejo/criativo-2c-carrossel/slide-2.html', out: 'conjunto-2-desejo/criativo-2c-carrossel/slide-2.png' },
  { src: 'conjunto-2-desejo/criativo-2c-carrossel/slide-3.html', out: 'conjunto-2-desejo/criativo-2c-carrossel/slide-3.png' },
  { src: 'conjunto-2-desejo/criativo-2c-carrossel/slide-4.html', out: 'conjunto-2-desejo/criativo-2c-carrossel/slide-4.png' },
  { src: 'conjunto-2-desejo/criativo-2c-carrossel/slide-5.html', out: 'conjunto-2-desejo/criativo-2c-carrossel/slide-5.png' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

  for (const file of files) {
    const htmlPath = path.join(BASE, file.src);
    const pngPath = path.join(BASE, file.out);

    console.log(`Exporting: ${file.src}`);
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: pngPath, type: 'png' });
    console.log(`  -> ${file.out}`);
  }

  await browser.close();
  console.log('\nDone! All PNGs exported.');
})();
