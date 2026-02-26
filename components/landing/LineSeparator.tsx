"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

interface LineSeparatorProps {
  delay?: number;
}

export default function LineSeparator({ delay = 0 }: LineSeparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        scaleX: 1,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power2.out",
      },
    );
  }, [delay]);

  return (
    <div ref={containerRef} className="flex justify-center w-full my-8 md:my-16">
      <div
        ref={lineRef}
        className="h-px bg-accent/40 origin-left"
        style={{ width: "120px" }}
      />
    </div>
  );
}
