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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    gsap.fromTo(
      ref.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      },
    );
  }, [delay]);

  return (
    <div className="py-16 sm:py-24 flex justify-center">
      <div
        ref={ref}
        className="h-px bg-accent/40 origin-left"
        style={{ width: "120px" }}
      />
    </div>
  );
}
