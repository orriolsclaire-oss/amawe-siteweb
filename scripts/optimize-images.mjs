import sharp from "sharp"
import { readdir, mkdir } from "node:fs/promises"
import { join } from "node:path"

const INPUT_DIR = "/tmp/amawe-raw-images"
const OUTPUT_DIR = join(import.meta.dirname, "..", "public", "images")

// Image configs: filename -> { maxWidth, maxHeight, quality }
const configs = {
  // Hero portrait (homepage) — tall, high quality
  "claire-portrait-full": { maxWidth: 800, maxHeight: 1200, quality: 82 },
  // Claire portrait (about page)
  "claire-energie-illimitee": { maxWidth: 800, maxHeight: 1200, quality: 82 },
  "claire-energie-illimitee2": { maxWidth: 800, maxHeight: 1200, quality: 82 },
  // Claire stage
  "claire-stage": { maxWidth: 1200, maxHeight: 800, quality: 80 },
  // Claire danse libre
  "claire-danse-libre": { maxWidth: 1200, maxHeight: 800, quality: 80 },
  // Claire BMD
  "claire-bmd": { maxWidth: 800, maxHeight: 1200, quality: 80 },
  // Claire small portrait
  "claire-portrait": { maxWidth: 400, maxHeight: 600, quality: 82 },
  // Meditation
  "meditation-retraite": { maxWidth: 1200, maxHeight: 800, quality: 78 },
  "silence-meditation": { maxWidth: 1200, maxHeight: 800, quality: 78 },
  "introspection": { maxWidth: 1200, maxHeight: 800, quality: 78 },
  // Ecolieu / venue
  "salle-pratique": { maxWidth: 1200, maxHeight: 900, quality: 78 },
  "ecolieu-la-margue": { maxWidth: 1200, maxHeight: 900, quality: 78 },
  "ecolieu-paysage": { maxWidth: 1400, maxHeight: 1050, quality: 75 },
  "la-margue-exterieur": { maxWidth: 800, maxHeight: 1200, quality: 78 },
  // Nature
  "nature-aveyron": { maxWidth: 800, maxHeight: 1200, quality: 78 },
  "paysage-aveyron": { maxWidth: 1400, maxHeight: 900, quality: 75 },
  // Roue sante holistique
  "roue-sante-holistique": { maxWidth: 800, maxHeight: 800, quality: 82 },
  // Stage groupe
  "stage-groupe": { maxWidth: 1200, maxHeight: 1600, quality: 78 },
}

async function optimize() {
  await mkdir(OUTPUT_DIR, { recursive: true })
  const files = await readdir(INPUT_DIR)

  let totalOriginal = 0
  let totalOptimized = 0

  for (const file of files) {
    const name = file.replace(/\.[^.]+$/, "")
    const config = configs[name] || { maxWidth: 1200, maxHeight: 900, quality: 78 }

    const inputPath = join(INPUT_DIR, file)
    const outputPath = join(OUTPUT_DIR, `${name}.webp`)

    try {
      const input = sharp(inputPath)
      const metadata = await input.metadata()
      const originalSize = metadata.size || 0
      totalOriginal += originalSize

      const output = await input
        .resize(config.maxWidth, config.maxHeight, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: config.quality, effort: 6 })
        .toFile(outputPath)

      totalOptimized += output.size
      const savings = ((1 - output.size / originalSize) * 100).toFixed(0)

      console.log(
        `  ${name}.webp — ${(output.size / 1024).toFixed(0)}KB (${output.width}x${output.height}) — ${savings}% smaller`
      )
    } catch (err) {
      console.error(`  ERROR: ${name} — ${err.message}`)
    }
  }

  console.log(`\nTotal: ${(totalOriginal / 1024).toFixed(0)}KB -> ${(totalOptimized / 1024).toFixed(0)}KB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}% reduction)`)
}

optimize()
