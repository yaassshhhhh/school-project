import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Educational Insights | The Oxford School Burhanpur",
    description: "Expert guides and articles on education, parenting, and school life in Burhanpur.",
    robots: {
        index: true,
        follow: true,
    }
};

export default function InsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#F6F1E7] min-h-screen pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </div>
        </div>
    );
}
