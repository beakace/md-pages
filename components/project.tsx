"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Project as ProjectType } from "@/lib/types";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  imageWidth,
  imageHeight,
  href,
}: ProjectType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity: opacityProgress }}
      className="mb-16 sm:mb-24 last:mb-0"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        {/* Image */}
        {imageUrl && (
          <div className="overflow-hidden mb-6">
            <Image
              className="w-full h-auto transition-transform duration-800 ease-out group-hover:scale-[1.02]"
              src={imageUrl}
              alt={title}
              quality={90}
              width={imageWidth}
              height={imageHeight}
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-400">
              {title}
              <span className="inline-block ml-2 opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">
                →
              </span>
            </h3>
            <p className="text-[15px] leading-relaxed text-muted dark:text-muted-dark max-w-prose">
              {description}
            </p>
          </div>

          {/* Tags as simple text list */}
          <ul className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-muted dark:text-muted-dark">
            {tags.map((tag, index) => (
              <li key={index} className="sm:text-right">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>

      {/* Subtle separator line */}
      <div className="mt-12 sm:mt-16 h-px bg-black/5 dark:bg-white/5" />
    </motion.article>
  );
}
