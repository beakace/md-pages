"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { useTheme } from "@/context/theme-context";
import { MessageCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "48571374407";

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function WhatsAppLink() {
  const { theme } = useTheme();
  const [verified, setVerified] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    widgetIdRef.current = null;
  }, [theme]);

  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: () => setVerified(true),
        "error-callback": () => setVerified(false),
        "expired-callback": () => setVerified(false),
        theme: theme === "alt" ? "dark" : "light",
      });
    }
  }, [turnstileLoaded, theme]);

  if (!TURNSTILE_SITE_KEY) {
    return null;
  }

  return (
    <>
      <Script
        src={SERVICES.turnstileScript}
        onLoad={() => setTurnstileLoaded(true)}
      />

      <div className="mt-8 pt-6 border-t border-white/10 dark:border-black/10">
        {verified ? (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-chalk dark:text-ink [.alt-dimension_&]:text-white border border-chalk/20 dark:border-ink/20 [.alt-dimension_&]:border-white/20 rounded-[12px] [.alt-dimension_&]:rounded-none overflow-hidden transition-all duration-300 hover:border-chalk dark:hover:border-ink [.alt-dimension_&]:hover:border-white active:scale-95 outline-none bg-transparent hover:shadow-sm w-full"
          >
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-2.5 font-medium [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-wider">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
              <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [.alt-dimension_&]:bg-white [.alt-dimension_&]:rounded-none [.alt-dimension_&]:w-2 [.alt-dimension_&]:h-2" />
            </span>
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 [.alt-dimension_&]:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-muted-dark dark:text-muted">
              Potwierdź, aby zobaczyć WhatsApp
            </p>
            <div key={theme} ref={turnstileRef} className="min-h-[65px] [&_iframe]:max-h-[65px]">
              {!turnstileLoaded && (
                <div className="h-[65px] flex items-center">
                  <div className="w-6 h-6 border-2 border-muted-dark dark:border-muted border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
