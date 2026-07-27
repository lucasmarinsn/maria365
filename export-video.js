const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'anuncios');
const FRAMES_DIR = path.join(BASE, 'frames');
const OUTPUT = path.join(BASE, 'maria365-reels.mp4');

const SLIDES = [
  { html: 'conjunto-1-dor/criativo-1a-texto-direto.html', duration: 3 },
  { html: 'conjunto-1-dor/criativo-1b-depoimento.html', duration: 3 },
  { html: 'conjunto-1-dor/criativo-1c-escassez.html', duration: 3 },
  { html: 'conjunto-2-desejo/criativo-2a-beneficio.html', duration: 3 },
  { html: 'conjunto-2-desejo/criativo-2b-audio.html', duration: 3 },
];

async function main() {
  // Clean/create frames dir
  if (fs.existsSync(FRAMES_DIR)) {
    fs.readdirSync(FRAMES_DIR).forEach(f => fs.unlinkSync(path.join(FRAMES_DIR, f)));
  } else {
    fs.mkdirSync(FRAMES_DIR, { recursive: true });
  }

  console.log('Loading Puppeteer...');
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: 'C:\\Users\\lucas\\.cache\\puppeteer\\chrome\\win64-151.0.7922.47\\chrome-win64\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });

  // Capture each slide as a single PNG
  const slideImages = [];
  for (let i = 0; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    const htmlPath = path.join(BASE, slide.html);
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    
    console.log(`[${i+1}/${SLIDES.length}] ${slide.html}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    
    // Inject CSS for Reels format (1080x1920)
    await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent = `
        body { width: 1080px !important; height: 1920px !important; }
        .ad { width: 1080px !important; height: 1920px !important; }
        .slide { width: 1080px !important; height: 1920px !important; }
      `;
      document.head.appendChild(style);
    });
    
    await new Promise(r => setTimeout(r, 500));

    const imgPath = path.join(FRAMES_DIR, `slide_${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: imgPath, type: 'png' });
    slideImages.push({ path: imgPath, duration: slide.duration });
    console.log(`  -> captured`);
  }

  await browser.close();

  // Build FFmpeg command using concat demuxer
  console.log('\nCreating video with FFmpeg...');
  
  const concatFile = path.join(FRAMES_DIR, 'concat.txt').replace(/\\/g, '/');
  let concatContent = '';
  for (const img of slideImages) {
    const imgPath = img.path.replace(/\\/g, '/');
    concatContent += `file '${imgPath}'\nduration ${img.duration}\n`;
  }
  // Last image needs to be listed again
  const lastImg = slideImages[slideImages.length - 1].path.replace(/\\/g, '/');
  concatContent += `file '${lastImg}'`;
  
  fs.writeFileSync(path.join(FRAMES_DIR, 'concat.txt'), concatContent);

  const outputPath = OUTPUT.replace(/\\/g, '/');
  const concatPath = path.join(FRAMES_DIR, 'concat.txt').replace(/\\/g, '/');
  
  const ffmpegCmd = `ffmpeg -y -f concat -safe 0 -i "${concatPath}" -vf "scale=1080:1920" -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 -movflags +faststart "${outputPath}"`;
  
  console.log('Running FFmpeg...');
  execSync(ffmpegCmd, { stdio: 'inherit' });

  // Cleanup
  console.log('\nCleaning up...');
  fs.readdirSync(FRAMES_DIR).forEach(f => fs.unlinkSync(path.join(FRAMES_DIR, f)));
  fs.rmdirSync(FRAMES_DIR);

  const stats = fs.statSync(OUTPUT);
  console.log(`\nDone!`);
  console.log(`Video: ${OUTPUT}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(0)}KB`);
  console.log(`Duration: ~${SLIDES.reduce((a, s) => a + s.duration, 0)}s`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
