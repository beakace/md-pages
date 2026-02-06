"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Navbar,
  LineSeparator,
  BigStatement,
  StickyFooter,
  HeroSection,
  ProblemSection,
  SpectrumSection,
  SolutionSection,
  AudienceSection,
  ProjectsSection,
  MidCTA,
  TestimonialsSection,
  ProcessSection,
  AboutSection,
} from "@/components/landing";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative">
      {/* Minimal navbar - appears after hero */}
      <Navbar />

      {/* Pionowa kreska */}
      <motion.div
        className="fixed left-6 sm:left-10 top-0 w-px bg-accent/20 origin-top hidden lg:block z-[60] pointer-events-none"
        style={{ height: lineHeight }}
      />

      {/* Main content */}
      <main className="relative z-10 bg-[#fafaf9] dark:bg-[#0c0c0c]">
        <HeroSection />

        <LineSeparator />

        <ProblemSection />

        <BigStatement>
          „Zamiast loterii z ogłoszenia, i zamiast biurokracji agencji. Jeden
          człowiek, który dotrzymuje słowa."
        </BigStatement>

        <SolutionSection />

        <LineSeparator delay={0.1} />

        <AudienceSection />
        <SpectrumSection />

        <LineSeparator delay={0.1} />

        <ProjectsSection />

        <MidCTA />

        <TestimonialsSection />

        <LineSeparator delay={0.1} />

        <ProcessSection />

        <AboutSection />

        {/* Spacer for sticky footer reveal */}
        <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]" />
      </main>

      {/* Sticky footer */}
      <StickyFooter />
    </div>
  );
}
