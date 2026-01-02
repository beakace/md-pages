"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="rounded-full h-24 w-24 border-[0.35rem] object-cover border-white shadow-xl"
              src="/portrait-final-michal.png"
              alt="Portrait"
              width={901}
              height={901}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-2xl sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <span className="font-bold">Hi, I’m Michał.</span> I build fast, modern{" "}
        <span className="font-bold">websites</span> and{" "}
        <span className="font-bold">landing pages</span> that help you get
        customers. I specialize in{" "}
        <span className="font-bold">Next.js / React</span> and{" "}
        <span className="font-bold">WordPress</span>, with a strong focus on
        performance, UX, and clean implementation.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get a quote
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href="#work"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Work");
            setTimeOfLastClick(Date.now());
          }}
        >
          See my work
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV-Michal-Dziuba-Frontend-Developer-compressed.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 px-4 py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:text-white/60 dark:bg-white/10"
          href="https://www.linkedin.com/in/micha%C5%82-dziuba-34650b183/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 text-[1.35rem] px-4 py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/beakace"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
