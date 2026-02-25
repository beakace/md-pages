"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ErrorBoundary from "@/components/ErrorBoundary";
import { prefersReducedMotion } from "@/lib/animations";
import {
  Navbar,
  LineSeparator,
  PhilosophySection,
  StickyFooter,
  HeroSection,
  ProblemSpectrumSection,
  SolutionSection,
  AudienceSection,
  ProjectsPinnedSection,
  MidCTA,
  TestimonialsSection,
  AboutSection,
} from "@/components/landing";
import OpusProcessSection from "@/components/opus/sections/ProcessSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !lineRef.current) return;

    const tween = gsap.to(lineRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div
        ref={lineRef}
        className="fixed left-6 sm:left-10 top-0 bottom-0 w-px bg-accent/20 origin-top hidden lg:block z-[60] pointer-events-none"
        style={{ transform: "scaleY(0)" }}
      />

      <main id="main-content" className="relative z-10 bg-washi dark:bg-surface-dark">
        <HeroSection />

        <LineSeparator />

        <ErrorBoundary>
          <ProblemSpectrumSection />
        </ErrorBoundary>

        <PhilosophySection />

        <ErrorBoundary>
          <SolutionSection />
        </ErrorBoundary>

        <LineSeparator delay={0.1} />

        <ErrorBoundary>
          <AudienceSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <ProjectsPinnedSection />
        </ErrorBoundary>

        <MidCTA />

        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>

        <LineSeparator delay={0.1} />

        <ErrorBoundary>
          <OpusProcessSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>
      </main>

      <StickyFooter />
    </div>
  );
}
