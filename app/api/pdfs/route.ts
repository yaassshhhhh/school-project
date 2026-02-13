import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const pdfDirectory = path.join(process.cwd(), 'public/Todays work/all pdf');

        // Check if directory exists
        if (!fs.existsSync(pdfDirectory)) {
            return NextResponse.json({ files: [] });
        }

        const files = fs.readdirSync(pdfDirectory)
            .filter(file => file.toLowerCase().endsWith('.pdf'))
            .map(file => {
                const filePath = path.join(pdfDirectory, file);
                const stats = fs.statSync(filePath);
                return {
                    name: file,
                    path: `/Todays work/all pdf/${file}`,
                    size: stats.size,
                    lastModified: stats.mtime
                };
            });

        return NextResponse.json({ files });
    } catch (error) {
        console.error('Error reading PDF directory:', error);
        return NextResponse.json({ error: 'Failed to read files' }, { status: 500 });
    }
}
