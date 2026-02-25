"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import { Send, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { SERVICES } from "@/lib/constants";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

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

const inputBase =
  "w-full bg-transparent border-0 border-b border-chalk/20 dark:border-ink/20 text-chalk dark:text-ink placeholder:text-chalk/25 dark:placeholder:text-ink/25 py-4 px-0 text-base focus:outline-none focus:border-accent transition-colors duration-300";

export default function ContactForm() {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    email: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
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
        callback: (token: string) => setTurnstileToken(token),
        "error-callback": () => setTurnstileToken(null),
        "expired-callback": () => setTurnstileToken(null),
        theme: theme === "dark" ? "light" : "dark",
      });
    }
  }, [turnstileLoaded, theme]);

  const resetTurnstile = useCallback(() => {
    if (widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken(null);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      if (!turnstileToken) {
        setError("Potwierdź proszę, że nie jesteś robotem.");
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formState.email,
            message: formState.message,
            honeypot: formState.honeypot,
            turnstileToken,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            data.error || "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
          );
        }

        setIsSubmitted(true);
        setFormState({ email: "", message: "", honeypot: "" });
        resetTurnstile();

        setTimeout(() => setIsSubmitted(false), 10000);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Wystąpił nieoczekiwany błąd. Spróbuj ponownie za chwilę.";
        setError(message);
        resetTurnstile();
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState, turnstileToken, resetTurnstile],
  );

  if (!TURNSTILE_SITE_KEY) {
    return (
      <p className="text-sm text-muted-dark dark:text-muted mt-6">
        Formularz wymaga konfiguracji NEXT_PUBLIC_TURNSTILE_SITE_KEY w .env.local
      </p>
    );
  }

  return (
    <>
      <Script
        src={SERVICES.turnstileScript}
        onLoad={() => setTurnstileLoaded(true)}
      />
      <div className="w-full">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2
              className="w-12 h-12 text-accent mx-auto mb-5"
              strokeWidth={1.5}
            />
            <p className="font-serif text-xl text-chalk dark:text-ink mb-1">
              Dziękuję.
            </p>
            <p className="text-sm text-muted-dark dark:text-muted">
              Odezwę się wkrótce.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" aria-describedby={error ? "contact-error" : undefined}>
            <input
              type="text"
              name="honeypot"
              value={formState.honeypot}
              onChange={(e) =>
                setFormState((s) => ({ ...s, honeypot: e.target.value }))
              }
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="contact-email"
                className="block font-sans text-xs uppercase tracking-[0.12em] text-muted-dark dark:text-muted mb-3"
              >
                E-mail
              </label>
              <input
                type="email"
                id="contact-email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className={inputBase}
                placeholder="tutaj@twoj-email.pl"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-sans text-xs uppercase tracking-[0.12em] text-muted-dark dark:text-muted mb-3"
              >
                Wiadomość
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className={`${inputBase} resize-none min-h-[6rem]`}
                placeholder="Opowiedz krótko o projekcie lub pytaniu."
              />
            </div>

            {error && (
              <p id="contact-error" className="text-sm text-red-400 dark:text-red-500" role="alert">
                {error}
              </p>
            )}

            <div key={theme} ref={turnstileRef} className="min-h-[65px] [&_iframe]:max-h-[65px]">
              {!turnstileLoaded && (
                <div className="h-[65px] flex items-center">
                  <div className="w-6 h-6 border-2 border-muted-dark dark:border-muted border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className="group inline-flex items-center gap-2 font-sans text-sm border-b-2 border-accent pb-1.5 text-chalk dark:text-ink hover:border-accent/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-muted-dark dark:text-muted leading-relaxed max-w-[26rem]">
              Wysyłając, wyrażasz zgodę na przetwarzanie danych w celu
              odpowiedzi.{" "}
              <a
                href="/polityka-prywatnosci"
                className="underline underline-offset-2 hover:text-chalk dark:hover:text-ink transition-colors"
              >
                Polityka prywatności
              </a>
            </p>
          </form>
        )}
      </div>
    </>
  );
}
