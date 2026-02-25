"use client";

import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { accentFilter } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function StickyFooter() {
  return (
    <footer
      id="kontakt"
      className="sticky z-0 bottom-0 left-0 w-full min-h-[70vh] lg:min-h-[60vh] bg-ink dark:bg-washi flex items-center justify-center scroll-mt-20 overflow-hidden"
    >
      <img
        src="/svg/7.svg"
        alt=""
        aria-hidden="true"
        className="absolute lg:left-[8%] left-[5%] top-[5%] lg:top-1/3 w-32 sm:w-40 pointer-events-none select-none opacity-20"
        style={{ filter: accentFilter }}
      />
      <div className="relative w-full max-w-[64rem] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
          <div className="text-center lg:text-left">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] leading-[1.3] mb-4 lg:mb-6 font-semibold text-chalk dark:text-ink">
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
                className="group inline-flex items-center justify-center gap-3 text-[15px] font-medium bg-chalk dark:bg-ink text-ink dark:text-washi px-6 py-3 organic-border hover:bg-chalk/90 dark:hover:bg-ink/90 transition-all duration-300 active:scale-[0.98] min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent"
              >
                Umów rozmowę
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center justify-center gap-3 text-[15px] font-medium border border-chalk/20 dark:border-ink/20 text-chalk dark:text-ink px-6 py-3 organic-border hover:bg-chalk/10 dark:hover:bg-ink/10 transition-all duration-300 active:scale-[0.98] min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent"
              >
                Napisz maila
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="lg:hidden">
              <WhatsAppLink />
            </div>
          </div>

          <div className="hidden lg:block lg:pl-12 lg:border-l border-white/10 dark:border-black/10">
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-muted-dark dark:text-muted mb-8">
              Wyślij wiadomość
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <span className="absolute bottom-0 left-4 font-serif text-[60px] sm:text-[100px] lg:text-[200px] text-accent/5 leading-none pointer-events-none select-none translate-y-1/4">
        mdpages
      </span>
    </footer>
  );
}
