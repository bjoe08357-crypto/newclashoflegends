import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(path.join(__dirname, '..'));
const publicLogosRoot = path.join(projectRoot, 'public', 'logos');

const categories = [
  { sources: ['Organized by', 'organized by'], dest: 'organized-by' },
  { sources: ['sponsored by'], dest: 'sponsored-by' },
  { sources: ['community partner'], dest: 'community-partner' },
  { sources: ['supporting partner'], dest: 'supporting-partner' },
  { sources: ['ticketing partner'], dest: 'ticketing-partner' },
];

const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.avif']);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]*$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60) || 'logo';
}

function* walkFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    if (!current) continue;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const p = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(p);
      else if (entry.isFile()) yield p;
    }
  }
}

function copyCategory(sourceDir, destDir) {
  if (!fs.existsSync(sourceDir)) return { copied: 0, files: [] };
  ensureDir(destDir);
  let index = 1;
  const copied = [];
  for (const srcPath of walkFiles(sourceDir)) {
    const ext = path.extname(srcPath).toLowerCase();
    if (!allowedExtensions.has(ext)) continue;
    const base = slugify(path.basename(srcPath));
    let destName = `${index}-${base}${ext}`;
    let destPath = path.join(destDir, destName);
    while (fs.existsSync(destPath)) {
      index += 1;
      destName = `${index}-${base}${ext}`;
      destPath = path.join(destDir, destName);
    }
    fs.copyFileSync(srcPath, destPath);
    copied.push(destPath);
    index += 1;
  }
  return { copied: copied.length, files: copied };
}

function run() {
  ensureDir(publicLogosRoot);
  const downloadsRoot = path.join(os.homedir(), 'Downloads');
  const summary = [];
  for (const cat of categories) {
    const destDir = path.join(publicLogosRoot, cat.dest);
    ensureDir(destDir);
    let total = 0;
    const files = [];
    for (const srcName of cat.sources) {
      const sourceDir = path.join(downloadsRoot, srcName);
      const res = copyCategory(sourceDir, destDir);
      total += res.copied;
      files.push(...res.files);
    }
    // Convert absolute paths to public URL paths
    const urls = files.map((abs) => {
      const rel = path.relative(path.join(projectRoot, 'public'), abs);
      return '/' + rel.split(path.sep).join('/');
    });
    summary.push({ dest: cat.dest, total, files: urls });
  }
  // Print concise summary
  for (const s of summary) {
    console.log(`Category: ${s.dest} -> ${s.total} file(s)`);
  }
  // Write data file for the app
  const dataDir = path.join(projectRoot, 'src', 'data');
  ensureDir(dataDir);
  const payload = {
    organizedBy: (summary.find((s) => s.dest === 'organized-by')?.files) || [],
    sponsoredBy: (summary.find((s) => s.dest === 'sponsored-by')?.files) || [],
    communityPartner: (summary.find((s) => s.dest === 'community-partner')?.files) || [],
    supportingPartner: (summary.find((s) => s.dest === 'supporting-partner')?.files) || [],
    ticketingPartner: (summary.find((s) => s.dest === 'ticketing-partner')?.files) || [],
  };
  fs.writeFileSync(path.join(dataDir, 'logos.json'), JSON.stringify(payload, null, 2));
}

run();


