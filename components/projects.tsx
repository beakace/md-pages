"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Project as ProjectType } from "@/lib/types";

interface ProjectsProps {
  projects: ProjectType[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  const { ref } = useSectionInView("Work");

  return (
    <section ref={ref} id="work" className="scroll-mt-28 mb-28">
      <SectionHeading>Recent work</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
