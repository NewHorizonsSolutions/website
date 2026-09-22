/**
 * Removes near-black backgrounds from showcase JPGs → transparent PNGs.
 * Usage: node scripts/remove-showcase-bg.mjs <input> <output>
 */
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..')

const assetsDir =
  process.env.SHOWCASE_ASSETS_DIR ||
  path.join(
    process.env.USERPROFILE || '',
    '.cursor',
    'projects',
    'c-Users-rami4-Documents-NH-Solutions-website',
    'assets'
  )

const jobs = [
  {
    input: path.join(
      assetsDir,
      'c__Users_rami4_AppData_Roaming_Cursor_User_workspaceStorage_445630cbdb31eee8175bd3695469bee7_images_tablets-2c8dfeff-57dd-4975-b592-ad735db909c6.jpg'
    ),
    output: path.join(repoRoot, 'public', 'showcase-tablet.png')
  },
  {
    input: path.join(
      assetsDir,
      'c__Users_rami4_AppData_Roaming_Cursor_User_workspaceStorage_445630cbdb31eee8175bd3695469bee7_images_notebook-e8a55907-ceef-4ba1-91f0-d194c5db3e84.jpg'
    ),
    output: path.join(repoRoot, 'public', 'showcase-notebook.png')
  }
]

/** Turn dark background pixels transparent; soft edge for anti-aliasing. */
function keyOutBlack(raw, channels) {
  if (channels !== 4) throw new Error('Expected RGBA')
  for (let i = 0; i < raw.length; i += 4) {
    const r = raw[i]
    const g = raw[i + 1]
    const b = raw[i + 2]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)

    // Pure/near-black background
    if (max <= 22) {
      raw[i + 3] = 0
      continue
    }

    // Dark gray shadow fringe on black studio bg
    if (max <= 55 && min <= 40 && max - min <= 18) {
      const t = (max - 22) / (55 - 22)
      raw[i + 3] = Math.round(Math.min(255, Math.max(0, t * t * 255)))
      continue
    }

    raw[i + 3] = 255
  }
}

const OUTPUT_SCALE = 2

async function processOne({ input, output }) {
  const meta = await sharp(input).metadata()
  const targetWidth = Math.round(meta.width * OUTPUT_SCALE)

  const { data, info } = await sharp(input)
    .resize(targetWidth, null, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.55, m1: 0.6, m2: 0.35 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  keyOutBlack(data, info.channels)

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png({ compressionLevel: 4, adaptiveFiltering: true, effort: 10 })
    .toFile(output)

  console.log('Wrote', output, `${info.width}x${info.height}`)
}

for (const job of jobs) {
  await processOne(job)
}
