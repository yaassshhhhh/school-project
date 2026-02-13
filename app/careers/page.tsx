import { Container } from "@/components/ui/container";
import { Metadata } from "next";
import { CareerForm } from "@/components/career-form";
import { ApplyButton } from "@/components/apply-button";

export const metadata: Metadata = {
    title: "Careers | Oxford Public School",
    description: "Join our team of passionate educators.",
};

export default function CareersPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-primary pt-24 pb-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/campus_library.webp" alt="Library Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                </div>
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Work With Us</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Join a team that is shaping the future. We are always looking for passionate educators.
                    </p>
                    <div className="mt-8">
                        <ApplyButton size="lg" variant="secondary" className="font-semibold text-primary">
                            Apply Now
                        </ApplyButton>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50/50">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <CareerForm />
                    </div>
                </Container>
            </section>
        </div>
    );
}
