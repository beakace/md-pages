"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { fadeIn, stagger, accentFilter } from "@/lib/animations";

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="px-6 sm:px-8 max-w-[48rem] mx-auto mb-16 relative"
      >
        <motion.h2
          className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] font-semibold"
          variants={fadeIn}
        >
          Realizacje
          <motion.img
            src="/svg/8.svg"
            alt=""
            aria-hidden="true"
            className="inline-block w-8 sm:w-10 ml-3 -mt-1 pointer-events-none select-none opacity-50"
            style={{ filter: accentFilter }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </motion.h2>
      </motion.div>

      {/* Projects - clean editorial list */}
      <div>
        {projectsData.slice(0, 4).map((project, i) => (
          <motion.a
            key={i}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-black/10 dark:border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="py-10 sm:py-14 px-6 sm:px-8 max-w-[64rem] mx-auto">
              <div className="flex items-baseline justify-between gap-8 mb-4">
                {/* Number + Title */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-serif text-accent/40 text-xs sm:text-sm tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow */}
                <span className="text-lg sm:text-xl text-accent opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0">
                  →
                </span>
              </div>

              {/* Description */}
              <p className="text-[15px] sm:text-base text-muted dark:text-muted-dark leading-relaxed max-w-[36rem] ml-8 sm:ml-12">
                {project.description}
              </p>

              {/* Mobile image */}
              <div className="sm:hidden mt-6 ml-8">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
        {/* Final border */}
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>
    </section>
  );
}
