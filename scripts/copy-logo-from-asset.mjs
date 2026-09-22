/**
 * One-time helper: copy the ChatGPT mountain logo from Cursor assets into public/.
 * Run from repo root if you have the file in Cursor workspace assets:
 *   node scripts/copy-logo-from-asset.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..')
const assetsDir = path.join(
  repoRoot,
  '..',
  '..',
  '.cursor',
  'projects',
  'c-Users-rami4-Documents-NH-Solutions-website',
  'assets'
)

function findChatGptLogo(dir) {
  if (!fs.existsSync(dir)) return null
  for (const name of fs.readdirSync(dir)) {
    if (name.includes('ChatGPT') && name.endsWith('.png')) {
      return path.join(dir, name)
    }
  }
  return null
}

const src = findChatGptLogo(assetsDir)
if (!src) {
  console.error('ChatGPT logo PNG not found in Cursor assets. Drop your PNG as public/logo-mark.png')
  process.exit(1)
}

const destMark = path.join(repoRoot, 'public', 'logo-mark.png')
const destMain = path.join(repoRoot, 'public', 'logo.png')
fs.copyFileSync(src, destMark)
fs.copyFileSync(src, destMain)
console.log('Copied logo to public/logo-mark.png and public/logo.png')
