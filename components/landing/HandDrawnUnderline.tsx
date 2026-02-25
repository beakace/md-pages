"use client";

import Image from "next/image";

export default function HandDrawnUnderline() {
  return (
    <span
      className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-[12px] sm:h-[16px] pointer-events-none"
      style={{
        clipPath: "inset(0 100% 0 0)",
        animation: "reveal-right 0.8s 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      }}
    >
      <Image
        src="/ancient/underline-orange.png"
        alt=""
        width={400}
        height={20}
        className="w-full h-full object-cover object-left"
        aria-hidden="true"
        priority
        quality={75}
      />
    </span>
  );
}
