"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Award, TrendingUp, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";
import { InstagramReel } from "@/components/about/instagram-reel";

export default function WhyOxfordPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Excellence",
      description: "At Oxford school the pursuit of excellence is ingrained in us. We place the bar high for ourselves as an institution, and for our students as learners."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      title: "Resource Enhancement",
      description: "While our physical resources and spaces are always maintained at their optimum level, our teachers are regularly sent on enrichment programmes to stay energized and inspired."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
      title: "Integrity",
      description: "We hold ourselves up to high standards of integrity at The Oxford School. We impart important lessons of honesty, ethics and good practices to our children so that they grow to be world citizens."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      title: "Safety",
      description: "Institute is a physically and emotionally safe space for children because being safe is crucial to a child’s sense of self-esteem and well-being."
    }
  ];

  const visionPoints = [
    "A well-integrated quality education to all students",
    "Instill Good Moral values",
    "Foster personal responsibility",
    "Encourage and challenge students to take leadership role in the society"
  ];

  const missionPoints = [
    "To create a youth that will lead the country towards success",
    "Create responsible students that are well-educated and prepared to take on challenges",
    "Mind, Body and Spiritual development of a child to lead them towards success"
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/inspirations/logo.webp')] bg-cover bg-center opacity-10" />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Why Oxford School
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-secondary mx-auto"
          />
        </Container>
      </section>

      {/* Instagram Reel Section */}
      <InstagramReel />

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The pillars that support our educational philosophy and guide our daily interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-secondary" />,
                title: "Excellence",
                description: "At Oxford school the pursuit of excellence is ingrained in us. We place the bar high for ourselves as an institution, and for our students as learners.",
                image: "/Todays work/home gallery/hassan22.webp"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-secondary" />,
                title: "Resource Enhancement",
                description: "While our physical resources and spaces are always maintained at their optimum level, our teachers are regularly sent on enrichment programmes to stay energized and inspired.",
                image: "/images/resource-enhancement.jpg"
              },
              {
                icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
                title: "Integrity",
                description: "We hold ourselves up to high standards of integrity at The Oxford School. We impart important lessons of honesty, ethics and good practices to our children so that they grow to be world citizens.",
                image: "/Todays work/home gallery/staff.webp"
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
                title: "Safety",
                description: "Institute is a physically and emotionally safe space for children because being safe is crucial to a child’s sense of self-esteem and well-being.",
                image: "/Todays work/home gallery/haasan8.webp"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 bg-primary/5 group-hover:bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium rounded-full text-sm mb-2">Our Vision</div>
              <h2 className="text-3xl font-serif font-bold text-primary">Creating Future Leaders</h2>
              <p className="text-foreground/80 leading-relaxed">
                We at Oxford are determined on providing the best education to our students. We believe that creating well-prepared youth that is capable of taking on any challenges that come in their way. The Oxford School focuses on creating an easy-going learning experience. Oxford School makes sure that the following are provided to its students:
              </p>
              <ul className="space-y-4 mt-6">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:pl-8 lg:border-l border-border/50"
            >
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium rounded-full text-sm mb-2">Our Mission</div>
              <h2 className="text-3xl font-serif font-bold text-primary">Guiding Towards Success</h2>
              <p className="text-foreground/80 leading-relaxed">
                We at Oxford are motivated to capable youth that will guide our nation to its success. Our students are made to learn the values of societal belonging. Creating a personality starts in school and it happens only through proper learning. We invite you to be a part of this journey through a variety of ways – by learning with us, by contributing in thought and spirit and by sharing your learning experiences. We believe in the following:
              </p>
              <ul className="space-y-4 mt-6">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
