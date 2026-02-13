"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useGoogleForm } from "@/hooks/use-google-form";
import { GOOGLE_SCRIPT_URL } from "@/lib/constants";

export function EnquirySection() {
    const { submit, status, message } = useGoogleForm(GOOGLE_SCRIPT_URL);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        submit({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            grade: formData.get("grade"),
        }, "Home Enquiry");
    };

    return (
        <section className="py-20 bg-background">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold font-serif text-primary uppercase tracking-wide">
                            Admission Enquiry
                        </h2>
                        <div className="w-20 h-1 bg-secondary rounded-full" />
                        <div className="space-y-4 text-foreground/80 leading-relaxed">
                            <p>
                                For any student who wishes to join Oxford School, admissions are laid out in the simplest way possible.
                            </p>
                            <p>
                                A well-versed Admission Team is always there to help you at each & every step of the Admission Process.
                                Procedure to apply in Oxford School is easy going.
                            </p>
                        </div>

                        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                            {[
                                { icon: "🏫", label: "School Life", sub: "Skill Development" },
                                { icon: "🎓", label: "High School", sub: "Over all learning" },
                                { icon: "🏀", label: "Athletics", sub: "Sport Clubs" },
                                { icon: "🤝", label: "Social", sub: "Extra Curricular" },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-2 group cursor-pointer">
                                    <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <div className="font-bold text-primary text-sm">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 bg-card p-8 rounded-xl border border-border shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Your Name*</label>
                                    <input name="name" type="text" className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-background text-foreground" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Your Email*</label>
                                    <input name="email" type="email" className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-background text-foreground" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Your Phone*</label>
                                    <input name="phone" type="tel" className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-background text-foreground" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Class Applying For</label>
                                    <select name="grade" className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-background text-foreground">
                                        <option value="">--Please choose an option--</option>
                                        <option value="Nursery">Nursery</option>
                                        <option value="KG to Grade 5">KG to Grade 5</option>
                                        <option value="Grade 6 to 10">Grade 6 to 10</option>
                                        <option value="Grade 11 & 12">Grade 11 & 12</option>
                                    </select>
                                </div>
                            </div>

                            {status === "error" && <p className="text-red-500 text-sm">{message}</p>}
                            {status === "success" && <p className="text-green-600 text-sm font-bold">{message}</p>}

                            <div className="pt-4">
                                <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white" disabled={status === "submitting"}>
                                    {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
