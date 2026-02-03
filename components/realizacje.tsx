"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Project as ProjectType } from "@/lib/types";

interface RealizacjeProps {
  projects: ProjectType[];
}

export default function Realizacje({ projects = [] }: RealizacjeProps) {
  const { ref } = useSectionInView("Realizacje");

  return (
    <section ref={ref} id="work" className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,42rem)]">
      <SectionHeading>Realizacje</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}


