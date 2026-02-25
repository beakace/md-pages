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
        theme: theme === "dark" ? "light" : "dark",
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
            className="group inline-flex items-center gap-3 text-[15px] text-[#25D366] hover:text-[#20bd5a] transition-colors duration-300 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
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
