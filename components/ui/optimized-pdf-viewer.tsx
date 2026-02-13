"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, FileText } from "lucide-react";
import Image from "next/image";

interface OptimizedPdfViewerProps {
    url: string;
    title: string;
    previewImage: string;
}

export function OptimizedPdfViewer({ url, title, previewImage }: OptimizedPdfViewerProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleViewPdf = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full bg-slate-50 rounded-lg border border-border overflow-hidden">
            {/* Preview Image Section */}
            <div className="relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="relative w-full aspect-[3/4] bg-white">
                    <Image
                        src={previewImage}
                        alt={`${title} Preview`}
                        fill
                        className="object-contain p-4"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                        <FileText className="h-12 w-12 mx-auto" />
                        <p className="font-medium">Click to {isExpanded ? 'collapse' : 'expand'}</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 bg-white border-t border-border/50 flex gap-3">
                <Button
                    onClick={handleViewPdf}
                    className="flex-1 gap-2"
                >
                    <ExternalLink size={16} />
                    View Full PDF
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="gap-2"
                >
                    <a href={url} download>
                        <Download size={16} />
                        Download
                    </a>
                </Button>
            </div>

            {/* Expandable Info */}
            {isExpanded && (
                <div className="p-4 bg-slate-100 border-t border-border/50 text-sm text-muted-foreground">
                    <p className="mb-2">
                        <strong>Document:</strong> {title}
                    </p>
                    <p className="text-xs">
                        Click "View Full PDF" to open the complete document in a new tab.
                    </p>
                </div>
            )}
        </div>
    );
}
