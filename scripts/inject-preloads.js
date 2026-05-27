// Inject preload hints into static HTML so the browser discovers the
// Spline scene and runtime early — before React/Next.js JavaScript runs.
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'out', 'index.html');
let html = fs.readFileSync(file, 'utf8');

const hints = [
  '<link rel="preconnect" href="https://unpkg.com" crossorigin="anonymous">',
  '<link rel="preload" as="fetch" href="/agedplanet-spline.html">',
  '<link rel="modulepreload" href="https://unpkg.com/@splinetool/runtime@1.0.66/build/runtime.js" crossorigin="anonymous">',
].join('\n');

// Insert right after <head>
html = html.replace('<head>', '<head>\n' + hints);

fs.writeFileSync(file, html);
console.log('Preload hints injected into out/index.html');
