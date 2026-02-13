import { DISCLOSURE_DOCUMENTS } from "@/lib/disclosure-data";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { OptimizedPdfViewer } from "@/components/ui/optimized-pdf-viewer";

// Correctly type properties for Next.js App Router Page
type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return DISCLOSURE_DOCUMENTS.map((doc) => ({
        slug: doc.slug,
    }));
}

export default async function DisclosurePage({ params }: Props) {
    const { slug } = await params;

    // Find doc by slug
    const document = DISCLOSURE_DOCUMENTS.find((d) => d.slug === slug);

    if (!document) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen py-16">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-1/4 shrink-0">
                        <div className="bg-card border border-border/50 rounded-lg shadow-sm p-6 sticky top-24">
                            <h3 className="font-serif text-xl font-bold text-primary mb-4 pb-2 border-b border-border/50">
                                Mandatory Disclosure
                            </h3>
                            <nav className="flex flex-col gap-2">
                                {DISCLOSURE_DOCUMENTS.map((doc) => (
                                    <Link
                                        key={doc.slug}
                                        href={`/mandatory-disclosure/${doc.slug}`}
                                        className={cn(
                                            "px-4 py-2 rounded-md text-sm transition-colors duration-200",
                                            slug === doc.slug
                                                ? "bg-primary text-white font-medium shadow-md"
                                                : "text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                                        )}
                                    >
                                        {doc.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1">
                        <div className="bg-card border border-border/50 rounded-lg shadow-sm p-8">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-border/50 gap-4">
                                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary">
                                    {document.title}
                                </h1>
                                <Button asChild variant="outline" className="gap-2 shrink-0">
                                    <a href={document.fileUrl} download target="_blank" rel="noopener noreferrer">
                                        <Download size={16} />
                                        Download PDF
                                    </a>
                                </Button>
                            </div>

                            <OptimizedPdfViewer
                                url={document.fileUrl}
                                title={document.title}
                                previewImage={document.previewImage}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
