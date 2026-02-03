import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-serif text-3xl sm:text-4xl text-center font-normal tracking-tight mb-12 text-[#1a1a1a] dark:text-[#e8e6e3]">
      {children}
    </h2>
  );
}
