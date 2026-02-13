const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createPdf() {
    const inputDir = path.join(__dirname, '../public/Todays work/document');
    const outputDir = path.join(__dirname, '../public/Todays work/all pdf');
    const outputFile = path.join(outputDir, 'documents.pdf');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const pdfDoc = await PDFDocument.create();
    const images = fs.readdirSync(inputDir)
        .filter(file => /\.(png|jpe?g|webp)$/i.test(file))
        .sort();

    if (images.length === 0) {
        console.error('No images found in', inputDir);
        process.exit(1);
    }

    console.log(`Converting ${images.length} images to PDF using pdf-lib...`);

    for (const imageFile of images) {
        const imagePath = path.join(inputDir, imageFile);
        const imageBytes = fs.readFileSync(imagePath);

        let image;
        if (imageFile.toLowerCase().endsWith('.png')) {
            image = await pdfDoc.embedPng(imageBytes);
        } else if (imageFile.toLowerCase().endsWith('.jpg') || imageFile.toLowerCase().endsWith('.jpeg')) {
            image = await pdfDoc.embedJpg(imageBytes);
        } else {
            console.log(`Skipping unsupported format: ${imageFile}`);
            continue;
        }

        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
    }

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputFile, pdfBytes);
    console.log('PDF created successfully at', outputFile);
}

createPdf().catch(err => {
    console.error('Error creating PDF:', err);
    process.exit(1);
});
