/**
 * Removes near-black backgrounds from showcase JPGs → transparent PNG/WebP (@1x + @2x).
 * Usage: node scripts/remove-showcase-bg.mjs
 */
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
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
      'c__Users_rami4_AppData_Roaming_Cursor_User_workspaceStorage_445630cbdb31eee8175bd3695469bee7_images_mcpapers-feb9e073-b829-48f7-a4cc-63fd72afe512.jpg'
    ),
    baseName: 'showcase-mcpaper-wms'
  },
  {
    input: path.join(
      assetsDir,
      'c__Users_rami4_AppData_Roaming_Cursor_User_workspaceStorage_445630cbdb31eee8175bd3695469bee7_images_logistica-94902a0e-d272-4f03-93a5-265761bdcaaf.jpg'
    ),
    baseName: 'showcase-logistica'
  },
  {
    input: path.join(
      assetsDir,
      'c__Users_rami4_AppData_Roaming_Cursor_User_workspaceStorage_445630cbdb31eee8175bd3695469bee7_images_AML-7996e439-c65a-42ed-b546-172ae9607f0b.jpg'
    ),
    baseName: 'showcase-aml'
  }
]

const RETINA_SCALE = 2

/** Feather dark pixels so device edges stay smooth on transparent bg. */
function keyOutBlack(raw, channels) {
  if (channels !== 4) throw new Error('Expected RGBA')
  for (let i = 0; i < raw.length; i += 4) {
    const r = raw[i]
    const g = raw[i + 1]
    const b = raw[i + 2]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)

    if (max <= 20) {
      raw[i + 3] = 0
      continue
    }

    if (max <= 62 && min <= 48 && max - min <= 22) {
      const t = (max - 20) / (62 - 20)
      raw[i + 3] = Math.round(Math.min(255, Math.max(0, t * t * 255)))
      continue
    }

    raw[i + 3] = 255
  }
}

async function rgbaFromInput(input, targetWidth) {
  const meta = await sharp(input).metadata()
  let pipeline = sharp(input, { unlimited: true, sequentialRead: true }).ensureAlpha()

  const upscaling = targetWidth && meta.width && targetWidth > meta.width
  if (targetWidth && meta.width !== targetWidth) {
    pipeline = pipeline.resize(targetWidth, null, {
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: !upscaling
    })
  }

  if (upscaling) {
    pipeline = pipeline.sharpen({
      sigma: 0.65,
      m1: 1,
      m2: 0.45,
      x1: 2,
      y2: 8,
      y3: 16
    })
  }

  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true })
  keyOutBlack(data, info.channels)

  return {
    sharp: sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    }),
    width: info.width,
    height: info.height
  }
}

async function writeVariants({ sharp: rgba, width, height }, basePathNoExt) {
  const pngPath = `${basePathNoExt}.png`
  const png2xPath = `${basePathNoExt}@2x.png`
  const webpPath = `${basePathNoExt}.webp`
  const webp2xPath = `${basePathNoExt}@2x.webp`

  await rgba
    .clone()
    .png({ compressionLevel: 1, adaptiveFiltering: true, effort: 10 })
    .toFile(pngPath)

  await rgba
    .clone()
    .webp({ lossless: true, effort: 6, alphaQuality: 100 })
    .toFile(webpPath)

  console.log('Wrote', pngPath, webpPath, `${width}x${height}`)

  return { width, height, pngPath, webpPath, png2xPath, webp2xPath }
}

async function processOne({ input, baseName }) {
  if (!fs.existsSync(input)) {
    console.error('Missing input:', input)
    process.exitCode = 1
    return
  }

  const publicDir = path.join(repoRoot, 'public')
  const basePathNoExt = path.join(publicDir, baseName)

  const meta = await sharp(input).metadata()
  const width1x = meta.width
  const width2x = Math.round(meta.width * RETINA_SCALE)

  const rgba1x = await rgbaFromInput(input, width1x)
  const v1 = await writeVariants(rgba1x, basePathNoExt)

  const rgba2x = await rgbaFromInput(input, width2x)
  await rgba2x.sharp
    .clone()
    .png({ compressionLevel: 1, adaptiveFiltering: true, effort: 10 })
    .toFile(v1.png2xPath)
  await rgba2x.sharp
    .clone()
    .webp({ lossless: true, effort: 6, alphaQuality: 100 })
    .toFile(v1.webp2xPath)

  console.log('Wrote', v1.png2xPath, v1.webp2xPath, `${rgba2x.width}x${rgba2x.height}`)
}

for (const job of jobs) {
  await processOne(job)
}
