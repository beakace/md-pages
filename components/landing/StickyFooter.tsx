"use client";

import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { accentFilter } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function StickyFooter() {
  return (
    <footer
      id="kontakt"
      className="sticky z-0 bottom-0 left-0 w-full min-h-[70vh] lg:min-h-[60vh] bg-ink dark:bg-washi [.alt-dimension_&]:bg-black [.alt-dimension_&]:text-white flex items-center justify-center scroll-mt-20 overflow-hidden transition-colors duration-1000"
    >
      <img
        src="/svg/7.svg"
        alt=""
        aria-hidden="true"
        className="absolute lg:left-[8%] left-[5%] top-[5%] lg:top-1/3 w-32 sm:w-40 pointer-events-none select-none opacity-20 transition-opacity duration-1000 [.alt-dimension_&]:hidden"
        style={{ filter: accentFilter }}
      />
      <div className="relative w-full max-w-[64rem] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
          <div className="text-center lg:text-left">
            <img
              src="/svg/5.svg"
              alt=""
              aria-hidden="true"
              className="w-12 sm:w-16 mb-4 opacity-30 select-none pointer-events-none mx-auto lg:mx-0 transition-opacity duration-1000 [.alt-dimension_&]:hidden"
              style={{ filter: accentFilter }}
            />
            <p className="font-handwritten text-accent text-xl md:text-2xl mb-2 -rotate-2 [.alt-dimension_&]:text-white [.alt-dimension_&]:font-sans [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-[0.2em] [.alt-dimension_&]:text-xs [.alt-dimension_&]:font-bold [.alt-dimension_&]:not-italic [.alt-dimension_&]:transform-none transition-all duration-700">
              Zacznijmy współpracę
            </p>
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-chalk dark:text-ink [.alt-dimension_&]:text-white leading-tight mb-4 lg:mb-6 transition-colors duration-700">
              Kontakt
            </h2>
            <p className="text-base lg:text-lg text-chalk/70 dark:text-graphite/70 [.alt-dimension_&]:text-white/70 leading-relaxed mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 lg:max-w-none font-sans transition-colors duration-700">
              Opowiedz o swojej firmie — powiem Ci, jak mogę pomóc.
              <span className="hidden sm:inline">
                {" "}
                30 minut, bez zobowiązań.
              </span>
            </p>
            <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-6">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-ink dark:text-surface-dark [.alt-dimension_&]:text-white bg-chalk dark:bg-chalk [.alt-dimension_&]:bg-accent rounded-[12px] [.alt-dimension_&]:rounded-none overflow-hidden transition-all duration-500 active:scale-95 outline-none hover:shadow-lg shadow-sm w-full lg:w-auto"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2.5 font-medium [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-wider">
                  Zarezerwuj termin
                  <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [.alt-dimension_&]:bg-white [.alt-dimension_&]:rounded-none [.alt-dimension_&]:w-2 [.alt-dimension_&]:h-2" />
                </span>
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10 [.alt-dimension_&]:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-chalk dark:text-ink [.alt-dimension_&]:text-white border border-chalk/20 dark:border-ink/20 [.alt-dimension_&]:border-white/20 rounded-[12px] [.alt-dimension_&]:rounded-none overflow-hidden transition-all duration-300 hover:border-chalk dark:hover:border-ink [.alt-dimension_&]:hover:border-white active:scale-95 outline-none bg-transparent hover:shadow-sm w-full lg:w-auto"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2.5 font-medium [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-wider">
                  Wyślij e-mail
                  <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [.alt-dimension_&]:bg-white [.alt-dimension_&]:rounded-none [.alt-dimension_&]:w-2 [.alt-dimension_&]:h-2" />
                </span>
                <div className="absolute inset-0 bg-white/5 dark:bg-black/5 [.alt-dimension_&]:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <div className="lg:hidden">
              <WhatsAppLink />
            </div>
          </div>

          <div className="hidden lg:block lg:pl-12 lg:border-l border-white/10 dark:border-black/10">
            <p className="font-serif italic text-xl text-chalk dark:text-ink mb-8">
              Wyślij wiadomość
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <span className="absolute bottom-0 left-4 font-serif text-[60px] sm:text-[100px] lg:text-[200px] text-accent/5 [.alt-dimension_&]:text-white/[0.02] leading-none pointer-events-none select-none translate-y-1/4 transition-colors duration-1000">
        mdpages
      </span>
    </footer>
  );
}
