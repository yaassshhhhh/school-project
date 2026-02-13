import { Container } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import { BookOpen, Brain, Users, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
    title: "Academics | The Oxford School, Burhanpur",
    description: "Explore our holistic curriculum designed to foster academic excellence and character development from Pre-Primary to Higher Secondary.",
};

const levels = [
    {
        id: "pre-primary",
        label: "Pre-Primary",
        title: "Foundational Years (Nursery - KG)",
        description: "Our pre-primary curriculum focuses on play-based learning, social skills, and building curiosity. We believe in nurturing the innate wonder in every child.",
        curriculum: ["Montessori-inspired methods", "Sensory development activities", "Basic numeracy & literacy", "Creative arts & music"],
        icon: Users,
        image: "/images/academics/pre_primary.png"
    },
    {
        id: "primary",
        label: "Primary",
        title: "Building Blocks (Grade 1 - 5)",
        description: "We strengthen core academic skills while encouraging exploration and independence. The focus shifts to structured learning with a touch of creativity.",
        curriculum: ["Core subjects: Math, Science, Languages", "Project-based learning", "Computer literacy intro", "Sports & physical education"],
        icon: BookOpen,
        image: "/images/academics/primary.png"
    },
    {
        id: "secondary",
        label: "Secondary",
        title: "Developing Intellect (Grade 6 - 10)",
        description: "Students dive deeper into subjects, developing critical thinking and analytical skills. We prepare them for board examinations with rigorous practice.",
        curriculum: ["Advanced Science & Math", "Social Sciences & History", "Robotics & Coding", "Debate & Public Speaking"],
        icon: Brain,
        image: "/images/academics/secondary.png"
    },
    {
        id: "higher-secondary",
        label: "Higher Secondary",
        title: "Career Readiness (Grade 11 - 12)",
        description: "Specialized streams providing in-depth knowledge for university and career success. We offer guidance for competitive exams and future career paths.",
        curriculum: ["Science Stream (PCM/PCB)", "Commerce Stream", "Humanities", "Entrance Exam Preparations"],
        icon: Lightbulb,
        image: "/images/academics/higher_secondary.png"
    }
];

export default function AcademicsPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Academic Excellence"
                description="A curriculum designed to inspire, challenge, and empower students at every stage of their journey."
                image="/images/campus_library.webp"
            />

            {/* Curriculum Tabs */}
            <Section>
                <Container>
                    <Tabs defaultValue="pre-primary" className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="bg-muted p-1.5 rounded-full overflow-x-auto max-w-full flex-nowrap md:gap-2 no-scrollbar">
                                {levels.map((level) => (
                                    <TabsTrigger
                                        key={level.id}
                                        value={level.id}
                                        className="rounded-full px-4 md:px-8 py-2.5 text-sm md:text-base data-[state=active]:bg-secondary data-[state=active]:text-primary font-medium"
                                    >
                                        {level.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {levels.map((level) => (
                            <TabsContent key={level.id} value={level.id}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-secondary/10 text-secondary mb-2">
                                            <level.icon size={32} />
                                        </div>
                                        <h2 className="text-3xl font-bold font-serif text-primary">{level.title}</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {level.description}
                                        </p>

                                        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <span suppressHydrationWarning className="w-2 h-2 rounded-full bg-secondary" />
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-3">
                                                {level.curriculum.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                        <span suppressHydrationWarning className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        {/* Fallback image logic handled by CSS or generic placeholder if specific image missing, but verified images exist */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{
                                                backgroundImage: `url('${level.image}')`
                                            }}
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </Container>
            </Section>
        </div>
    );
}
