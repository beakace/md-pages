"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPinnedSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".pinned-projects-title", {
        scrollTrigger: { trigger: ".pinned-projects-title", start: "top 85%" },
        y: 30,
        opacity: 0,
        rotationZ: -1,
        duration: 1,
        ease: "power2.out",
      });

      // Set up ScrollTriggers for each text block on desktop to handle the sticky image switch
      if (window.innerWidth >= 1024) {
        projectsData.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.pinned-text-${i}`,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIdx(i);
              
              // Fade in corresponding image
              gsap.to(`.pinned-img-${i}`, { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                duration: 0.6, 
                ease: "power3.out" 
              });
              
            } else {
              // Fade out corresponding image
              gsap.to(`.pinned-img-${i}`, { 
                opacity: 0, 
                scale: 0.95, 
                y: 20,
                duration: 0.6, 
                ease: "power3.out" 
              });
            }
          }
        });
      });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 sm:py-36 bg-washi dark:bg-surface-dark relative">
      <div className="px-6 sm:px-8 max-w-[88rem] mx-auto mb-16 relative flex justify-between items-end">
        <div>
          <p className="font-handwritten text-accent text-xl md:text-2xl mb-4 rotate-2">
            Wybrane prace
          </p>
          <h2 className="pinned-projects-title font-serif italic text-4xl md:text-6xl text-ink dark:text-chalk leading-none">
            Realizacje
          </h2>
        </div>
      </div>

      <div className="max-w-[88rem] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Side: Scrollable Text Blocks */}
          <div className="w-full lg:w-1/2 pb-16 lg:pb-[50vh]">
            {projectsData.map((project, i) => (
              <div 
                key={i} 
                className={`pinned-text-${i} mb-16 lg:mb-0 min-h-0 lg:min-h-[40vh] flex flex-col justify-center`}
              >
                <div 
                  className={`
                    pinned-text-content-${i} pl-0 lg:pl-8 py-0 lg:py-6 pr-0 lg:pr-6 relative rounded-r-xl 
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    opacity-100 ${activeIdx === i ? 'lg:translate-x-6 lg:opacity-100' : 'lg:translate-x-0 lg:opacity-40'}
                  `} 
                >
                  {/* Subtle Background for Active State (Desktop Only) */}
                  <div 
                    className={`hidden lg:block absolute inset-0 bg-graphite/[0.03] dark:bg-chalk/5 -z-10 rounded-r-xl transition-opacity duration-500 ${activeIdx === i ? 'opacity-100' : 'opacity-0'}`} 
                  />
                  
                  {/* Accent Line (Animated on Desktop, Hidden on Mobile) */}
                  <div 
                    className={`hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top transition-transform duration-500 ${activeIdx === i ? 'scale-y-100' : 'scale-y-0'}`} 
                  />
                  
                  {/* Number (Hidden on mobile) */}
                  <span className="hidden lg:block font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-graphite/40 dark:text-chalk/30 uppercase mb-3">
                    0{i + 1}
                  </span>
                  
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink dark:text-chalk mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-base md:text-lg text-graphite/70 dark:text-chalk/60 leading-relaxed mb-6 max-w-sm">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-bold font-sans uppercase tracking-[0.1em] text-ink dark:text-chalk hover:text-accent transition-colors"
                  >
                    Zobacz projekt <span className="text-accent text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Pinned Image Container (Desktop Only) */}
          <div className="hidden lg:block w-1/2 relative pl-12 xl:pl-24">
            <div className="sticky top-[20vh] h-[60vh] w-full max-h-[700px] flex flex-col justify-center perspective-[1200px]">
              
              {/* Outer "OS Window" Frame */}
              <div className="w-full aspect-[4/3] rounded-[16px] bg-white dark:bg-ink shadow-[0_20px_50px_rgba(28,27,24,0.1)] border border-graphite/5 dark:border-chalk/5 overflow-hidden flex flex-col relative">
                
                {/* Top Window Bar */}
                <div className="h-10 w-full bg-washi dark:bg-surface-dark border-b border-graphite/5 dark:border-chalk/5 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                </div>
                
                {/* Image Stack */}
                <div className="relative flex-1 w-full h-full bg-graphite/5 dark:bg-surface-dark">
                  {projectsData.map((project, i) => (
                    <div 
                      key={i}
                      className={`pinned-img-${i} absolute inset-0 w-full h-full origin-bottom ${i === 0 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-5"}`}
                      style={{ 
                        zIndex: activeIdx === i ? 10 : 0
                      }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-top scale-[1.03] origin-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative floating sketch */}
              <svg className="absolute -right-8 -bottom-12 w-24 h-24 text-accent/30 -z-10 rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 50 Q 30 10, 50 50 T 90 50" strokeLinecap="round" />
                <path d="M30 30 Q 50 70, 70 30" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
              </svg>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
