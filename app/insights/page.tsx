import Link from "next/link";
import { SEO_BLOGS } from "@/lib/seo-content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function InsightsIndex() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif text-[#0F2437] font-bold">
                    Knowledge Hub & Insights
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
                    Expert resources, parenting guides, and educational updates from The Oxford School, Burhanpur.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {SEO_BLOGS.map((blog) => (
                    <Link href={`/insights/${blog.slug}`} key={blog.slug} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#C9A24D]">
                            <CardHeader>
                                <div className="text-sm font-semibold text-[#7A2E1F] mb-2 uppercase tracking-wide">
                                    Detailed Guide
                                </div>
                                <CardTitle className="font-serif text-2xl text-[#0F2437] group-hover:text-[#7A2E1F] transition-colors">
                                    {blog.title}
                                </CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {blog.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-[#C9A24D] font-bold group-hover:translate-x-1 transition-transform">
                                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
