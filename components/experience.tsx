"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { processSteps } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

interface ExperienceItem {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}

interface TimelineElementProps {
  item: ExperienceItem;
  theme: string;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ item, theme }) => (
  <div className="mb-8 flex flex-col md:flex-row">
    <div className="flex flex-col items-center mr-4">
      <div
        className={`w-px h-full ${
          theme === "light" ? "bg-gray-300" : "bg-gray-700"
        }`}
      />
      <div
        className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center ${
          theme === "light" ? "bg-white text-gray-900" : " text-white"
        }`}
      >
        {item.icon}
      </div>
      <div
        className={`w-px h-full ${
          theme === "light" ? "bg-gray-300" : "bg-gray-700"
        }`}
      />
    </div>
    <div
      className={`flex-1 p-4 rounded-lg ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <h3 className="font-semibold capitalize">{item.title}</h3>
      <p className="font-normal mt-1">{item.location}</p>
      <p className="mt-2 text-sm">{item.date}</p>
      <p
        className={`mt-2 ${
          theme === "light" ? "text-gray-700" : "text-gray-300"
        }`}
      >
        {item.description}
      </p>
    </div>
  </div>
);

const Process: React.FC = () => {
  const { ref } = useSectionInView("Process");
  const { theme } = useTheme();

  return (
    <section id="process" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Process</SectionHeading>
      <div className="mt-8">
        {processSteps.map((item, index) => (
          <TimelineElement key={index} item={item} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default Process;
