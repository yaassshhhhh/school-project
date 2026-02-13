import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | The Oxford School, Burhanpur",
    description: "Discover our legacy of academic excellence, our mission to empower students, and the visionary leadership behind The Oxford School.",
};

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Us"
                description="Nurturing creative, confident, and compassionate leaders since 2002."
                image="/images/campus_main_building.webp"
            />

            {/* Introduction / History */}
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">A Legacy of Excellence</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Established in 2002 by the Mahakaushal Education Society, The Oxford School, Burhanpur, has been a beacon of quality education in the region.
                            As a co-educational English medium school affiliated with CBSE, we are committed to providing a holistic learning environment where
                            academic rigor meets extra-curricular vibrancy.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Located in the heart of Naval Nagar, our campus is designed to be a secure, joyful, and stimulating space where every child can flourish.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Mission & Vision */}
            <Section variant="muted">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-l-4 border-primary relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-primary mb-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To provide a stimulating learning environment that fosters critical thinking, creativity, and character. We strive to empower every student with the skills and values needed to thrive in a rapidly changing world, emphasizing conceptual learning over rote memorization.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-primary p-8 md:p-12 rounded-2xl shadow-sm border-l-4 border-secondary relative overflow-hidden text-white group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-24 h-24 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-secondary mb-4">Our Vision</h3>
                            <p className="text-white/90 leading-relaxed">
                                To be a global leader in education, recognized for academic excellence and holistic development. We envision a future where our students grow into responsible, confident, and compassionate citizens who contribute positively to society.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Leadership / Management */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Managed By Mahakaushal Education Society</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100">
                            <img
                                src="/images/management_team.png"
                                alt="Mahakaushal Education Society Management Team"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The school is managed by the <b>Mahakaushal Education Society</b>, a body dedicated to educational and social upliftment. Under their guidance, the school has grown from its humble beginnings in 2002 to becoming a premier institution in Burhanpur.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our leadership believes in "Education for Life," ensuring that infrastructure, faculty, and curriculum interact seamlessly to create the best possible experience for the child.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
