
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function SeoContent() {
    return (
        <section className="py-16 bg-background text-foreground container mx-auto px-4 md:px-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">

                {/* Section 1: Hero / Introduction */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Shaping Future Leaders at the Best CBSE School in Burhanpur
                    </h1>
                    <p className="mb-4">
                        Every parent dreams of a school where their child is not just a student, but a future leader. At <strong>The Oxford School, Burhanpur</strong>, we turn that dream into reality. Located in the peaceful and accessible area of <strong>Naval Nagar</strong>, we are recognized as the top choice for parents seeking a high-quality <strong>English medium education</strong> in the city.
                    </p>
                    <p className="mb-4">
                        Managed by the esteemed <strong>Mahakaushal Education Society</strong>, our legacy since 2002 has been built on trust, discipline, and academic excellence. We don't just teach meaningful chapters; we teach life skills. Whether you are looking for a <strong>nursery school in Burhanpur</strong> for your toddler or a <strong>higher secondary school</strong> for your teenager, The Oxford School is your partner in parenting.
                    </p>
                    <p className="italic font-medium text-muted-foreground">
                        Apne bacche ke behtar bhavishya ke liye, aaj hi chuniye The Oxford School. (Choose The Oxford School today for your child's better future.)
                    </p>
                </div>

                {/* Section 2: Why Choose Us */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        Why We Are the Top School in Burhanpur for Your Child
                    </h2>
                    <p className="mb-6">
                        Finding the right school is a big decision. Parents in <strong>Burhanpur (MP)</strong> often ask, "Which is the safest and best school near me?" Here is why hundreds of families trust us:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-primary mb-3">1. Conceptual Learning (No Rote Memorization)</h3>
                            <p>
                                We believe in understanding, not just memorizing. Our <strong>CBSE curriculum</strong> is designed to foster critical thinking. Unlike other schools where students just copy from the board, our students ask "Why?" and "How?". This approach makes us the <strong>best result-oriented school in Burhanpur</strong>.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-primary mb-3">2. English Environment with Indian Values</h3>
                            <p>
                                Global success requires English proficiency. From day one, we emphasize reading, writing, and speaking in English. However, we stay rooted in our culture. <em>Modern education with traditional sanskar</em> is our promise.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-primary mb-3">3. Experienced & Caring Faculty</h3>
                            <p>
                                A school is only as good as its teachers. Our faculty consists of highly qualified educators from Burhanpur and nearby regions who are passionate about teaching. They are mentors who guide your child through every difficulty.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-primary mb-3">4. Safety & Discipline First</h3>
                            <p>
                                We understand your concern for safety. The Oxford School provides a secure, gated campus in <strong>Naval Nagar</strong> with 24/7 surveillance. Discipline is the core of our character; we groom students to be respectful and responsible citizens.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Academics */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        Complete Educational Journey - Nursery to Class 12
                    </h2>
                    <p className="mb-4">
                        We are a complete <strong>K-12 institution</strong>. You don't need to shift schools as your child grows.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                            <strong>Pre-Primary (Playgroup, Nursery, KG):</strong> A "home away from home". Our kindergarten wing is colorful, safe, and activity-based. We focus on motor skills and phonics.
                        </li>
                        <li>
                            <strong>Primary School (Class 1-5):</strong> Building strong foundations in Mathematics and Science.
                        </li>
                        <li>
                            <strong>Middle School (Class 6-8):</strong> Introduction to analytical subjects and project-based learning.
                        </li>
                        <li>
                            <strong>Secondary & Higher Secondary (Class 9-12):</strong> Intensive preparation for board exams and competitive future. We offer guidance for Science, Commerce, and Arts streams (as applicable), helping students aiming for IIT, NEET, or CA excellence.
                        </li>
                    </ul>
                </div>

                {/* Section 4: Facilities */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        World-Class School Facilities in Burhanpur
                    </h2>
                    <p className="mb-4">We believe a good environment elevates learning. Our campus facilities include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Smart Classrooms:</strong> Equipped with digital learning tools for interactive sessions.</li>
                        <li><strong>Science & Computer Labs:</strong> Modern labs where students practice theory practically. <em>Information Technology</em> is a key focus.</li>
                        <li><strong>Library:</strong> A vast collection of books to encourage reading habits.</li>
                        <li><strong>Sports Academy:</strong> Massive playground for Cricket, Football, and Athletics. We believe <em>khelega India tabhi toh badhega India</em>.</li>
                        <li><strong>Transport Facility:</strong> Safe bus service covering all major areas of Burhanpur, ensuring your child reaches school safely and on time.</li>
                    </ul>
                </div>

                {/* Section 5: Holistic Development */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        Beyond Books – Sports, Arts, and Personality Development
                    </h2>
                    <p className="mb-4">
                        Education is incomplete without extracurriculars. At The Oxford School, we ensure every child discovers their hidden talent.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 font-medium text-lg mb-4 text-secondary">
                        <li>Annual Function & Cultural Events</li>
                        <li>Sports Competitions</li>
                        <li>Debate & Elocution</li>
                        <li>Art & Craft</li>
                    </ul>
                    <p>
                        We categorize students into houses to foster healthy competition and team spirit. This holistic approach makes us the <strong>best school for personality development in Burhanpur</strong>.
                    </p>
                </div>

                {/* Section 6: FAQs for Local SEO */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-left">Where is The Oxford School located in Burhanpur?</AccordionTrigger>
                            <AccordionContent>
                                We are conveniently located in <strong>Naval Nagar, Burhanpur, Madhya Pradesh</strong>. It is a peaceful, noise-free zone perfect for education.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-left">Is The Oxford School CBSE affiliated?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we follow the <strong>CBSE curriculum</strong>, ensuring your child gets a standardized, nationally recognized education helpful for competitive exams like JEE and NEET.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium text-left">What is the admission process for 2024-25?</AccordionTrigger>
                            <AccordionContent>
                                Admissions are open from Nursery to Class 12. You can visit our campus for the admission form or call us at <strong>+91 9243944355</strong>. We recommend applying early as seats fill up fast.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-medium text-left">Do you strictly use English as a medium of instruction?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. We are an <strong>English medium school</strong>. We put special effort into ensuring students speak fluent English, which distinguishes us from other Hindi medium or semi-English schools in the district.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-medium text-left">Is school transport available for all areas in Burhanpur?</AccordionTrigger>
                            <AccordionContent>
                                Yes, our bus fleet covers most localities in Burhanpur city and nearby suburbs. Please check with our transport office for specific route details.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </section>
    );
}
