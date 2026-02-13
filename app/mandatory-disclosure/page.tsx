import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { FileText, Download, Eye } from "lucide-react";
import { DISCLOSURE_DOCUMENTS } from "@/lib/disclosure-data";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mandatory Disclosure | Oxford Public School",
    description: "Public disclosure of documents as mandated by CBSE.",
};

export default function DisclosurePage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-primary pt-24 pb-16 text-center text-white relative">
                <div className="absolute inset-0 bg-white/5 pattern-grid-lg opacity-10" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Mandatory Disclosure</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Information and documents as per the guidelines of the Central Board of Secondary Education (CBSE).
                    </p>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-primary font-serif">Document Name</th>
                                        <th className="px-6 py-4 font-bold text-primary font-serif text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {DISCLOSURE_DOCUMENTS.map((doc, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <Link href={`/mandatory-disclosure/${doc.slug}`} className="flex items-center gap-3 group">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                        <FileText size={16} />
                                                    </div>
                                                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">{doc.title}</span>
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button asChild size="sm" variant="outline" className="gap-2">
                                                        <Link href={`/mandatory-disclosure/${doc.slug}`}>
                                                            <Eye size={14} /> View
                                                        </Link>
                                                    </Button>
                                                    <Button asChild size="sm" variant="primary" className="gap-2 bg-primary hover:bg-primary/90">
                                                        <a href={doc.fileUrl} download target="_blank" rel="noopener noreferrer">
                                                            <Download size={14} /> Download
                                                        </a>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
