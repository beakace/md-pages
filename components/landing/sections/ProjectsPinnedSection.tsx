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

        // Window Entrance Animation
        const windowTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-content-grid",
            start: "top 40%", // Start animating when the container is 60% down the viewport
            end: "top 10%", // Finish animating slightly earlier
            scrub: 1,
          }
        });

        // Start from center, scaled up, and move to its natural right position
        windowTl.fromTo(".project-window-wrapper",
          { 
            xPercent: -65,
            y: -150, // Start significantly higher, closer to "Realizacje"
            scale: 1.25,
            rotationY: -10,
            rotationX: 2,
          },
          {
            xPercent: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            ease: "power2.inOut"
          }
        );

        projectsData.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.pinned-text-${i}`,
          start: "top 35%",
          end: "bottom 35%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIdx(i);

              // Fade out the placeholder when first project activates
              if (i === 0) {
                gsap.to(".project-placeholder", {
                  opacity: 0,
                  scale: 0.95,
                  duration: 0.6,
                  ease: "power3.out",
                });
              }
              
              // Fade in corresponding image
              gsap.to(`.pinned-img-${i}`, { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                duration: 0.6, 
                ease: "power3.out" 
              });
              
            } else {
              // When first project deactivates going UP, bring back the placeholder
              if (i === 0 && self.direction === -1) {
                gsap.to(".project-placeholder", {
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  ease: "power3.out",
                });
              }

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 sm:py-36 bg-washi dark:bg-surface-dark relative">
      <div className="px-6 sm:px-8 max-w-[88rem] mx-auto mb-16 relative flex justify-between items-end">
        <div>
          <p className="font-handwritten text-accent text-xl md:text-2xl mb-4 rotate-2 [.alt-dimension_&]:text-white [.alt-dimension_&]:font-sans [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-[0.2em] [.alt-dimension_&]:text-xs [.alt-dimension_&]:font-bold [.alt-dimension_&]:not-italic [.alt-dimension_&]:transform-none transition-all duration-700">
            Wybrane prace
          </p>
          <h2 className="pinned-projects-title font-serif italic text-4xl md:text-6xl text-ink dark:text-chalk leading-none">
            Realizacje
          </h2>
        </div>
      </div>

      <div className="max-w-[88rem] mx-auto px-6 sm:px-8">
        <div className="projects-content-grid flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Side: Scrollable Text Blocks */}
          <div className="w-full lg:w-1/2 pb-16 lg:pb-[50vh] pt-0 lg:pt-[50vh]">
            {projectsData.map((project, i) => (
              <div 
                key={i} 
                className={`pinned-text-${i} mb-16 lg:mb-0 min-h-0 lg:min-h-[40vh] flex flex-col justify-center ${i > 0 ? 'pt-12 border-t border-graphite/10 dark:border-chalk/10 lg:border-0 lg:pt-0' : ''}`}
              >
                {/* Mobile number indicator */}
                <span className="lg:hidden font-sans text-xs font-bold tracking-[0.2em] text-accent/60 uppercase mb-3">
                  0{i + 1}
                </span>
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
              <div className="project-window-wrapper w-full aspect-[4/3] rounded-[16px] bg-white dark:bg-ink shadow-[0_20px_50px_rgba(28,27,24,0.1)] border border-graphite/5 dark:border-chalk/5 overflow-hidden flex flex-col relative perspective-[1200px]">
                
                {/* Top Window Bar */}
                <div className="h-10 w-full bg-washi dark:bg-surface-dark border-b border-graphite/5 dark:border-chalk/5 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-graphite/10 dark:bg-chalk/10" />
                </div>
                
                {/* All project images start hidden */}
                <div className="relative flex-1 w-full h-full bg-graphite/5 dark:bg-surface-dark">
                  {/* Decorative Placeholder — MD monogram watermark */}
                  <div className="project-placeholder absolute inset-0 w-full h-full flex items-center justify-center z-20 bg-white dark:bg-ink pointer-events-none">
                    <span className="font-serif italic text-[8rem] xl:text-[10rem] text-graphite/[0.06] dark:text-chalk/[0.06] leading-none select-none tracking-tight">
                      MD
                    </span>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
                  </div>

                  {projectsData.map((project, i) => (
                    <a
                      key={i}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`pinned-img-${i} absolute inset-0 w-full h-full origin-bottom block group overflow-hidden opacity-0 scale-95 translate-y-5`}
                      style={{ 
                        zIndex: activeIdx === i ? 10 : 0
                      }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-top scale-[1.01] origin-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 dark:group-hover:bg-white/5 transition-colors duration-700 z-10 pointer-events-none" />
                    </a>
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
