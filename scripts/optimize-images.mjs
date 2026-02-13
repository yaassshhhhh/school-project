import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

// CONFIGURATION
const QUALITY_SETTINGS = {
  default: { quality: 80, effort: 6 }, // Balanced
  hero: { quality: 85, width: 1920 }, // High fidelity
  gallery: { quality: 80, width: 1200 }, // Good detail
  thumb: { quality: 75, width: 600 }, // Aggressive compression
};

const processImages = async () => {
  // Find all legacy formats in public folder
  const files = await glob('public/**/*.{png,jpg,jpeg}');
  
  console.log(`Found ${files.length} images to process...`);

  for (const file of files) {
    const ext = path.extname(file);
    const basePath = file.replace(ext, '');
    const webpPath = `${basePath}.webp`;

    // Skip if webp already exists (incremental build)
    try {
      await fs.access(webpPath);
      continue; 
    } catch {}

    // Determine settings based on folder naming or default
    let options = QUALITY_SETTINGS.default;
    if (file.includes('/hero/')) options = QUALITY_SETTINGS.hero;
    else if (file.includes('/gallery/')) options = QUALITY_SETTINGS.gallery;
    else if (file.includes('/thumbnails/')) options = QUALITY_SETTINGS.thumb;

    const pipeline = sharp(file);

    // Metadata preservation (orientation)
    pipeline.rotate(); 

    // Resize if specific width is targeted (optional - careful with this if keeping original aspect ratio)
    if (options.width) {
      pipeline.resize({ width: options.width, withoutEnlargement: true });
    }

    await pipeline
      .webp({ 
        quality: options.quality, 
        effort: 6, // 0-6 (6 takes longer but compresses better)
        smartSubsample: true 
      })
      .toFile(webpPath);

    console.log(`✅ Converted: ${file} -> ${webpPath}`);
    
    // Optional: Delete original
    // await fs.unlink(file); 
  }
};

processImages().catch(console.error);