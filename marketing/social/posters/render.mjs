// Renders every poster in posters.html to a PNG in ./out using headless Chrome.
//   node marketing/social/posters/render.mjs            -> all posters
//   node marketing/social/posters/render.mjs ig2 li2    -> only ids starting with these
import {spawn} from 'node:child_process';
import {existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const page = join(here, 'posters.html');
const out = join(here, 'out');
mkdirSync(out, {recursive: true});

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!browser) throw new Error('Chrome or Edge not found; set CHROME_PATH.');

// Poster ids are the `id: '...'` entries in posters.html.
const ids = [...readFileSync(page, 'utf8').matchAll(/id: [`']((?:ig|li)[\w-]*?)[`'],/g)].map((m) => m[1]);
// ig3-2..ig3-6 are generated in a loop, so add them explicitly.
for (let i = 2; i <= 6; i++) ids.push(`ig3-${i}`);
const filters = process.argv.slice(2);
const todo = [...new Set(ids)].filter((id) => !filters.length || filters.some((f) => id.startsWith(f))).sort();

function shoot(id) {
  const [w, h] = id.startsWith('ig') ? [1080, 1350] : [1200, 1200];
  // A throwaway profile, so headless Chrome never waits on the user's open browser.
  const profile = mkdtempSync(join(tmpdir(), 'vx-poster-'));
  return new Promise((resolve) => {
    const proc = spawn(browser, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
      '--no-first-run', '--no-default-browser-check', '--disable-extensions',
      `--user-data-dir=${profile}`, '--allow-file-access-from-files', '--virtual-time-budget=4000',
      `--window-size=${w},${h}`, `--screenshot=${join(out, `${id}.png`)}`, `${pathToFileURL(page).href}#${id}`,
    ], {stdio: 'ignore'});
    const timer = setTimeout(() => proc.kill(), 60_000);
    proc.on('exit', () => {
      clearTimeout(timer);
      try { rmSync(profile, {recursive: true, force: true, maxRetries: 5}); } catch {} // Chrome may still hold cache files on Windows
      console.log(`${existsSync(join(out, `${id}.png`)) ? 'ok  ' : 'FAIL'} ${id}.png  ${w}x${h}`);
      resolve();
    });
  });
}

const queue = [...todo];
await Promise.all(Array.from({length: 4}, async () => {
  while (queue.length) await shoot(queue.shift());
}));
