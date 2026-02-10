"use client";

import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { accentFilter } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function StickyFooter() {
  return (
    <footer
      id="kontakt"
      className="sticky z-0 bottom-0 left-0 w-full min-h-[70vh] lg:min-h-[60vh] bg-[#0c0c0c] dark:bg-[#fafaf9] flex items-center justify-center scroll-mt-20 overflow-hidden"
    >
      {/* Doodle - decorative */}
      <img
        src="/svg/7.svg"
        alt=""
        aria-hidden="true"
        className="absolute lg:left-[8%] left-[5%] top-[5%] lg:top-1/3 w-32 sm:w-40 pointer-events-none select-none opacity-20"
        style={{ filter: accentFilter }}
      />
      <div className="relative w-full max-w-[64rem] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
          {/* Lewa kolumna: nagłówek + CTA */}
          <div className="text-center lg:text-left">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] leading-[1.3] mb-4 lg:mb-6 font-semibold text-[#e8e6e3] dark:text-[#1a1a1a]">
              Kontakt
            </h2>
            <p className="text-base lg:text-lg text-muted-dark dark:text-muted leading-relaxed mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 lg:max-w-none">
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
                className="group inline-flex items-center gap-3 text-[15px] border-b-2 border-accent pb-1.5 text-[#e8e6e3] dark:text-[#1a1a1a] hover:border-accent/70 transition-colors duration-300"
              >
                Umów rozmowę
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-3 text-[15px] text-muted-dark dark:text-muted hover:text-[#e8e6e3] dark:hover:text-[#1a1a1a] transition-colors duration-300"
              >
                Napisz maila
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>

            {/* WhatsApp - tylko na mobile (gdzie nie ma formularza) */}
            <div className="lg:hidden">
              <WhatsAppLink />
            </div>
          </div>

          {/* Prawa kolumna: formularz - tylko na desktop */}
          <div className="hidden lg:block lg:pl-12 lg:border-l border-white/10 dark:border-black/10">
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-muted-dark dark:text-muted mb-8">
              Wyślij wiadomość
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Large decorative text */}
      <span className="absolute bottom-0 left-4 font-serif text-[60px] sm:text-[100px] lg:text-[200px] text-accent/5 leading-none pointer-events-none select-none translate-y-1/4">
        mdpages
      </span>
    </footer>
  );
}
