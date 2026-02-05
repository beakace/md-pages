"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Widać, że tworzenie stron to jego pasja - efekty mówią same za siebie.",
    author: "Zespół CzystoTu",
    role: "Firma sprzątająca, Wrocław",
    align: "left" as const,
  },
  {
    quote:
      "Michał łączy wdrażanie i projektowanie stron na tyle dobrze, że zaoszczędzisz podwójny budżet bez utraty jakości",
    author: "Łukasz",
    role: "Przedsiębiorca, Wrocław",
    align: "right" as const,
  },
  {
    quote:
      "Szybko, sprawnie i bez zbędnego komplikowania. Polecam każdemu, kto ceni swój czas.",
    author: "Lorem Ipsum",
    role: "Placeholder, Miasto",
    align: "left" as const,
  },
];

export default function TestimonialsSection() {
  return (
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
        {testimonials.map((testimonial, i) => (
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
  );
}
