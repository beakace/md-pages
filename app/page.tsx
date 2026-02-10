"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ErrorBoundary from "@/components/ErrorBoundary";
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

        <ErrorBoundary>
          <ProblemSection />
        </ErrorBoundary>

        <BigStatement>
          „Zamiast loterii z ogłoszenia, i zamiast biurokracji agencji. Jeden
          człowiek, który dotrzymuje słowa."
        </BigStatement>

        <ErrorBoundary>
          <SolutionSection />
        </ErrorBoundary>

        <LineSeparator delay={0.1} />

        <ErrorBoundary>
          <AudienceSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <SpectrumSection />
        </ErrorBoundary>

        <LineSeparator delay={0.1} />

        <ErrorBoundary>
          <ProjectsSection />
        </ErrorBoundary>

        <MidCTA />

        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>

        <LineSeparator delay={0.1} />

        <ErrorBoundary>
          <ProcessSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        {/* Spacer for sticky footer reveal */}
        <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]" />
      </main>

      {/* Sticky footer */}
      <StickyFooter />
    </div>
  );
}
