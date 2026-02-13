import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';
import sharp from 'sharp';

const execPromise = util.promisify(exec);

const PDF_DIR = path.join(process.cwd(), 'public/images/mandatory-disclosure');
const OUTPUT_DIR = PDF_DIR;

async function generatePreviews() {
    try {
        if (!fs.existsSync(PDF_DIR)) {
            console.error(`Directory not found: ${PDF_DIR}`);
            return;
        }

        const files = fs.readdirSync(PDF_DIR).filter(file => file.toLowerCase().endsWith('.pdf'));
        console.log(`Found ${files.length} PDFs.`);

        for (const file of files) {
            const pdfPath = path.join(PDF_DIR, file);
            const basename = path.basename(file, '.pdf');
            // Create a clean slug-like filename for the image
            const cleanName = basename.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const webpPath = path.join(OUTPUT_DIR, `${cleanName}.webp`);
            const tempPngPrefix = path.join(OUTPUT_DIR, `temp_${cleanName}`);
            const tempPngPath = `${tempPngPrefix}.png`;

            if (fs.existsSync(webpPath)) {
                console.log(`Skipping ${file}, preview exists.`);
                continue;
            }

            console.log(`Processing ${file}...`);

            // Convert first page to PNG using pdftoppm
            // -f 1 -l 1: First page only
            // -singlefile: Writes to output.png (no numbering)
            try {
                await execPromise(`pdftoppm -png -f 1 -l 1 -singlefile "${pdfPath}" "${tempPngPrefix}"`);

                // Convert PNG to WebP using sharp
                await sharp(tempPngPath)
                    .resize({ width: 600 }) // Resize for thumbnail/preview
                    .webp({ quality: 80 })
                    .toFile(webpPath);

                console.log(`Generated ${cleanName}.webp`);

                // Cleanup
                if (fs.existsSync(tempPngPath)) {
                    fs.unlinkSync(tempPngPath);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
        console.log('All done!');
    } catch (error) {
        console.error('Script failed:', error);
    }
}

generatePreviews();
