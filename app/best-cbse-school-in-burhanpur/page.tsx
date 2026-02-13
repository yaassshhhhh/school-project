
import { SeoContent } from "@/components/home/seo-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best CBSE School in Burhanpur | The Oxford School",
    description: "Shape your child's future at The Oxford School, Burhanpur's best CBSE English medium school. Conceptual learning, top facilities, and holistic development.",
    alternates: {
        canonical: "/best-cbse-school-in-burhanpur",
    },
};

export default function BestSchoolInBurhanpurPage() {
    return (
        <main>
            <SeoContent />
        </main>
    );
}
