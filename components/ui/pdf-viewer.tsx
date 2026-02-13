"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PdfViewerProps {
    url: string;
    title: string;
}

export function PdfViewer({ url, title }: PdfViewerProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-[800px] bg-slate-50 rounded-lg border border-border overflow-hidden relative group">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20">
                    <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                    <p className="text-muted-foreground animate-pulse">Loading document...</p>
                </div>
            )}

            <iframe
                src={`${url}#toolbar=0`}
                className={`w-full h-full relative z-10 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                title={title}
                onLoad={() => setIsLoading(false)}
            >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <p className="mb-4 text-muted-foreground">
                        Your browser does not support PDF embedding.
                    </p>
                    <Button asChild>
                        <a href={url} download>
                            Download PDF
                        </a>
                    </Button>
                </div>
            </iframe>
        </div>
    );
}
