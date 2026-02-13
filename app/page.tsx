import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { MagazineSection } from "@/components/home/magazine-section"; // Import the collection
import { EnquirySection } from "@/components/home/enquiry-section";
import { LeadershipSection } from "@/components/home/leadership-section";
import { TvIntro } from "@/components/home/tv-intro";
import { MissionVisionSection } from '@/components/home/mission-vision-section';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best School in Burhanpur | The Oxford School - CBSE English Medium",
  description: "Looking for the best school in Burhanpur? The Oxford School offers holistic CBSE education, experienced faculty, and modern facilities. Apply for 2024-25 admissions.",
  alternates: {
    canonical: "https://theoxfordschoolburhanpur.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <TvIntro />
      <StatsSection />
      <LeadershipSection />
      <TimelineSection />
      <MagazineSection />



      <EnquirySection />
    </>
  );
}
