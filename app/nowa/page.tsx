"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { useRef, useState } from "react";

// Minimal conversion-focused navbar
// Philosophy: One goal = one action. Everything else is noise.
function Navbar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling past hero (roughly 60vh)
    const heroHeight = window.innerHeight * 0.6;
    setVisible(latest > heroHeight);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Logo - anchor to top */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif text-xl tracking-tight hover:text-accent transition-colors duration-300"
        >
          MD
        </Link>

        {/* Single CTA - the only action that matters */}
        <Link
          href="#kontakt"
          className="group flex items-center gap-2 text-sm font-medium"
        >
          <span className="relative">
            Porozmawiajmy
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </nav>
    </motion.header>
  );
}

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animated line separator component
function LineSeparator({ delay = 0 }: { delay?: number }) {
  return (
    <div className="py-16 sm:py-24 flex justify-center">
      <motion.div
        className="h-px bg-accent/40 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ width: "120px" }}
      />
    </div>
  );
}

// Large typographic statement - creates rhythm break
function BigStatement({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 overflow-hidden">
      <motion.blockquote
        className="text-center max-w-[48rem] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-[1.4] text-muted/70 dark:text-muted-dark/70">
          {children}
        </p>
        {author && (
          <footer className="mt-6 text-xs sm:text-sm text-accent tracking-wide">
            — {author}
          </footer>
        )}
      </motion.blockquote>
    </section>
  );
}

// Text reveal on scroll - highlights words as you scroll
function RevealText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const words = children.split(" ");

  return (
    <p ref={ref} className="text-lg sm:text-xl leading-relaxed">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0.2 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.2 }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

// Parallax wrapper for background elements
function ParallaxText({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
}

// Hand-drawn underline component with drawing animation
function HandDrawnUnderline() {
  return (
    <motion.span
      className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-[12px] sm:h-[16px] pointer-events-none"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0.4, 0, 0.2, 1],
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
      />
    </motion.span>
  );
}

export default function NowaStrona() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative">
      {/* Minimal navbar - appears after hero */}
      <Navbar />

      {/* Main content - sits on top of sticky footer */}
      <main className="relative z-10 bg-[#fafaf9] dark:bg-[#0c0c0c]">
        {/* Vertical progress line on the left */}
        <motion.div
          className="fixed left-6 sm:left-10 top-0 w-px bg-accent/20 origin-top hidden lg:block"
          style={{ height: lineHeight }}
        />

        {/* ============ HERO ============ */}
        <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 max-w-[56rem] mx-auto relative">
          {/* Doodle - stars */}
          <motion.img
            src="/svg/3.svg"
            alt=""
            aria-hidden="true"
            className="absolute -right-16 top-1/4 w-32 sm:w-40 pointer-events-none select-none hidden lg:block opacity-25"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
            }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ 
              duration: 0.6,
              delay: 1.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-8">
              Strony internetowe
              <br />
              <span className="relative inline-block italic">
                po ludzku
                <HandDrawnUnderline />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted dark:text-muted-dark max-w-[32rem] leading-relaxed mb-10">
              Bez agencyjnego żargonu. Bez szablonów z internetu.
              <br />
              Prosta strona, która robi to, co powinna — przynosi klientów.
            </p>

            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-3 text-sm border-b border-accent pb-1 hover:border-accent/50 transition-colors duration-400"
            >
              Porozmawiajmy
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </section>

        <LineSeparator />

        {/* ============ PROBLEM ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-[48rem] mx-auto relative">
          {/* Large background number */}
          <div className="absolute -left-20 top-0 pointer-events-none select-none hidden lg:block">
            <ParallaxText speed={-0.2}>
              <span className="font-serif text-[20rem] leading-none text-black/[0.02] dark:text-white/[0.02]">
                ?
              </span>
            </ParallaxText>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="relative z-10"
          >
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
              variants={fadeIn}
            >
              Potrzebujesz strony.
              <br />
              Ale od czego zacząć?
            </motion.h2>

            <motion.div
              className="space-y-4 text-[17px] leading-relaxed text-muted dark:text-muted-dark"
              variants={fadeIn}
            >
              {[
                { text: "Agencja?", sub: "Drogo i długo." },
                { text: "Freelancer z internetu?", sub: "Loteria." },
                { text: "Zrobić samemu?", sub: "Nie masz na to czasu." },
                {
                  text: "Wix, Squarespace, AI?",
                  sub: "Kolejna rzecz do ogarnięcia.",
                },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  <span className="text-accent/60 select-none">—</span>
                  <span>
                    <span className="text-[#1a1a1a] dark:text-[#e8e6e3]">
                      {item.text}
                    </span>{" "}
                    {item.sub}
                  </span>
                </motion.p>
              ))}
            </motion.div>

            <div className="mt-16">
              <RevealText>
                Szukasz kogoś, kto po prostu zrobi to dobrze. Bez komplikacji.
                Bez korporacyjnej nowomowy.
              </RevealText>
            </div>
          </motion.div>
        </section>

        {/* Big statement */}
        <BigStatement>
          „Dobra strona to taka, która pracuje — nawet gdy Ty śpisz."
        </BigStatement>

        {/* Doodle - arrow pointing to next section */}
        <div className="relative hidden lg:block">
          <motion.img
            src="/svg/9.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-[12%] -top-10 w-44 pointer-events-none select-none -rotate-90 opacity-25"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
            }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
        </div>

        {/* ============ ROZWIĄZANIE ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8">
          <motion.div
            className="max-w-[48rem] mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
              variants={fadeIn}
            >
              Dlatego robię to inaczej
            </motion.h2>

            <motion.p className="text-lg mb-10" variants={fadeIn}>
              Jeden człowiek, jasne zasady, konkretny efekt.
            </motion.p>

            <motion.ul
              className="space-y-4 text-[17px] leading-relaxed"
              variants={fadeIn}
            >
              {[
                "Mówię prostym językiem, nie technicznym żargonem",
                "Pokazuję co robię i ile to kosztuje, zanim zaczniesz płacić",
                "Dowożę w tygodniach, nie miesiącach",
                "Nie znikam po publikacji",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  <span className="text-accent select-none">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-12 font-serif text-xl italic text-muted dark:text-muted-dark"
              variants={fadeIn}
            >
              Strona po ludzku — zrobiona przez człowieka, dla ludzi.
            </motion.p>
          </motion.div>
        </section>

        <LineSeparator delay={0.1} />

        {/* ============ CO DOSTAJESZ ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-[56rem] mx-auto relative">
          {/* Doodle - scribble */}
          <motion.img
            src="/svg/4.svg"
            alt=""
            aria-hidden="true"
            className="absolute -left-20 top-6 w-44 pointer-events-none select-none hidden lg:block opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
            }}
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-12 font-semibold"
              variants={fadeIn}
            >
              Co dostajesz
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
              {[
                {
                  title: "Stronę, która działa",
                  desc: "Szybka, nowoczesna, czytelna i dopasowana do wszystkich urządzeń.",
                },
                {
                  title: "Jasny przekaz",
                  desc: "Strona, która mówi wprost czym się zajmujesz i dlaczego warto.",
                },
                {
                  title: "Przemyślaną strukturę",
                  desc: "Każdy element ma swoje miejsce i cel. Nic na siłę.",
                },
                {
                  title: "Spokój głowy",
                  desc: "Wiesz co dostajesz, kiedy i za ile. Bez niespodzianek.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  <motion.span
                    className="text-accent text-2xl leading-none block mb-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
                    style={{
                      originX: 0,
                      display: "inline-block",
                      width: "24px",
                      height: "2px",
                      backgroundColor: "currentColor",
                    }}
                  />
                  <h3 className="font-serif text-lg sm:text-xl tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-muted dark:text-muted-dark leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <LineSeparator delay={0.1} />

        {/* ============ DLA KOGO ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8">
          <motion.div
            className="max-w-[48rem] mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
              variants={fadeIn}
            >
              Dla kogo to jest
            </motion.h2>

            <motion.p className="text-lg mb-8" variants={fadeIn}>
              Dla lokalnych firm i specjalistów:
            </motion.p>

            <motion.ul
              className="space-y-3 text-[17px] text-muted dark:text-muted-dark"
              variants={fadeIn}
            >
              {[
                "Usługi (sprzątanie, remonty, fizjoterapia, coaching...)",
                "Gabinety i praktyki (lekarze, prawnicy, architekci...)",
                "Sklepy i lokale (restauracje, kawiarnie, butiki...)",
                "Freelancerzy i jednoosobowe działalności",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <span className="text-accent/60 select-none">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p className="mt-10 text-lg" variants={fadeIn}>
              Jeśli potrzebujesz strony, która przedstawi Twoją ofertę
              <br />i ułatwi kontakt — mogę pomóc.
            </motion.p>
          </motion.div>
        </section>

        <LineSeparator delay={0.1} />

        {/* ============ REALIZACJE ============ */}
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
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
                }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1]
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
                        sizes="100vw"
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

        {/* ============ OPINIE ============ */}
        <section className="py-24 sm:py-32">
          <motion.h2
            className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] font-semibold mb-16 sm:mb-20 px-6 sm:px-8 max-w-[56rem] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Opinie
          </motion.h2>

          {/* Testimonials - vertical, each one dramatic */}
          <div className="space-y-32 sm:space-y-48">
            {[
              {
                quote:
                  "Widać, że tworzenie stron to jego pasja — efekty mówią same za siebie.",
                author: "Zespół CzystoTu",
                role: "Firma sprzątająca, Wrocław",
                align: "left",
              },
              {
                quote:
                  "Profesjonalne podejście i świetna komunikacja. Strona dokładnie taka, jakiej potrzebowaliśmy.",
                author: "Lorem Ipsum",
                role: "Placeholder, Miasto",
                align: "right",
              },
              {
                quote:
                  "Szybko, sprawnie i bez zbędnego komplikowania. Polecam każdemu, kto ceni swój czas.",
                author: "Lorem Ipsum",
                role: "Placeholder, Miasto",
                align: "left",
              },
            ].map((testimonial, i) => (
              <motion.blockquote
                key={i}
                className={`px-6 sm:px-8 max-w-[56rem] ${
                  testimonial.align === "right"
                    ? "ml-auto mr-6 sm:mr-8 md:mr-[10%] text-right"
                    : "ml-6 sm:ml-8 md:ml-[10%]"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic leading-[1.25] mb-8 sm:mb-10">
                  „{testimonial.quote}"
                </p>
                <footer
                  className={`flex items-center gap-5 ${
                    testimonial.align === "right" ? "justify-end" : ""
                  }`}
                >
                  <div className="w-12 sm:w-16 h-px bg-accent" />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted dark:text-muted-dark">
                      {testimonial.role}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <LineSeparator delay={0.1} />

        {/* ============ PROCES ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 relative">
          {/* Doodle - flourish */}
          <motion.img
            src="/svg/6.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-[15%] top-20 w-56 pointer-events-none select-none hidden lg:block opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
            }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
          <div className="max-w-[64rem] mx-auto">
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-14 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Proces
            </motion.h2>

            <div className="space-y-16 sm:space-y-24">
              {[
                {
                  step: "01",
                  title: "Rozmowa",
                  desc: "Poznaję Twoją firmę i potrzeby. Ty poznajesz mnie. Sprawdzamy, czy jest sens iść dalej.",
                },
                {
                  step: "02",
                  title: "Propozycja",
                  desc: "Dostajesz konkretną ofertę: co zrobię, kiedy, za ile. Bez ukrytych kosztów.",
                },
                {
                  step: "03",
                  title: "Realizacja",
                  desc: "Strona powstaje w 2-3 tygodnie. Widzisz postępy, zgłaszasz uwagi na bieżąco.",
                },
                {
                  step: "04",
                  title: "Start",
                  desc: "Publikuję stronę i pokazuję, jak z niej korzystać. Po starcie jestem dostępny.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                >
                  {/* Large background number */}
                  <div className="absolute -left-4 sm:left-0 top-0 pointer-events-none select-none opacity-[0.03]">
                    <span className="font-serif text-[8rem] sm:text-[12rem] leading-none">
                      {item.step}
                    </span>
                  </div>

                  {/* Step number + title */}
                  <div className="relative z-10">
                    <span className="text-accent text-sm tracking-wide block mb-2">
                      Krok {item.step}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-[15px] sm:text-base text-muted dark:text-muted-dark leading-relaxed sm:pt-8">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ O MNIE ============ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 relative">
          <motion.div
            className="max-w-[48rem] mx-auto relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Doodle - lines above heading */}
            <motion.img
              src="/svg/5.svg"
              alt=""
              aria-hidden="true"
              className="w-16 sm:w-20 mb-4 ml-1 pointer-events-none select-none opacity-40"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
              }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
            <motion.h2
              className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
              variants={fadeIn}
            >
              O mnie
            </motion.h2>

            <motion.div
              className="space-y-6 text-[17px] sm:text-lg leading-relaxed max-w-[38rem]"
              variants={fadeIn}
            >
              <p>
                <span className="text-[#1a1a1a] dark:text-[#e8e6e3]">
                  Michał Dziuba
                </span>
                , web developer z Wrocławia.
              </p>
              <p className="text-muted dark:text-muted-dark">
                Tworzę strony dla firm, które cenią prostotę i konkret.
                Wcześniej pracowałem w marketingu — dlatego patrzę na stronę jak
                na narzędzie, nie jak na projekt graficzny.
              </p>
              <p className="text-muted dark:text-muted-dark">
                Lubię jasną komunikację i dotrzymywanie słowa.
              </p>
            </motion.div>

            {/* Signature-like element */}
            <motion.div
              className="mt-12 pt-8 border-t border-black/5 dark:border-white/5"
              variants={fadeIn}
            >
              <span className="font-serif italic text-xl text-accent">MD</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Spacer for sticky footer reveal */}
        <div className="h-[70vh] sm:h-[60vh]" />
      </main>

      {/* Sticky footer - revealed as main content scrolls away */}
      <StickyFooter />
    </div>
  );
}

// Sticky footer component
function StickyFooter() {
  return (
    <footer
      id="kontakt"
      className="sticky z-0 bottom-0 left-0 w-full min-h-[70vh] sm:min-h-[60vh] bg-[#0c0c0c] dark:bg-[#fafaf9] flex items-center justify-center scroll-mt-20 overflow-hidden"
    >
      {/* Doodle - decorative */}
      <img
        src="/svg/7.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[8%] top-1/3 w-32 sm:w-40 pointer-events-none select-none hidden lg:block opacity-20"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)",
        }}
      />
      <div className="relative w-full max-w-[42rem] mx-auto text-center px-6 sm:px-8">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] leading-[1.3] mb-6 font-semibold text-[#e8e6e3] dark:text-[#1a1a1a]">
          Kontakt
        </h2>

        <p className="text-lg text-[#888888] dark:text-[#6b6b6b] mb-12">
          Opowiedz o swojej firmie — powiem Ci, czy mogę pomóc.
          <br />
          30 minut, bez zobowiązań.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12">
          <a
            href="https://calendly.com/michaldz/30min"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-[15px] border-b border-accent pb-1 text-[#e8e6e3] dark:text-[#1a1a1a] hover:border-accent/50 transition-colors duration-400"
          >
            Umów rozmowę
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:michaldziuba26@gmail.com"
            className="group inline-flex items-center gap-3 text-[15px] text-[#888888] dark:text-[#6b6b6b] hover:text-[#e8e6e3] dark:hover:text-[#1a1a1a] transition-colors duration-400"
          >
            Napisz maila
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <p className="text-sm text-[#888888] dark:text-[#6b6b6b]">
          michaldziuba26@gmail.com
        </p>
      </div>

      {/* Large decorative text */}
      <span className="absolute bottom-0 left-4 font-serif text-[80px] sm:text-[150px] md:text-[200px] text-accent/5 leading-none pointer-events-none select-none translate-y-1/4">
        mdpages
      </span>
    </footer>
  );
}
