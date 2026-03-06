"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";

// ⚠️ USTAW TURNSTILE SITE KEY W ENV
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

// ⚠️ DOSTOSUJ DANE KONTAKTOWE
const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    values: [
      { value: "XXX XXX XXX", href: "tel:+48XXXXXXXXX" },
    ],
    description: "Zadzwoń do nas",
  },
  {
    icon: Mail,
    label: "E-mail",
    values: [
      { value: "kontakt@domena.pl", href: "mailto:kontakt@domena.pl" },
    ],
    description: "Napisz do nas",
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    values: [{ value: "Pon-Pt: 8:00 - 17:00", href: null }],
    description: "Lokalizacja",
  },
];

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function Contact() {
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
    if (turnstileLoaded && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "error-callback": () => setTurnstileToken(null),
        "expired-callback": () => setTurnstileToken(null),
        theme: "light",
      });
    }
  }, [turnstileLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!turnstileToken) {
      setError("Proszę potwierdzić, że nie jesteś robotem.");
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Nie udało się wysłać wiadomości");
      }

      setIsSubmitted(true);
      setFormState({ email: "", message: "", honeypot: "" });
      setTurnstileToken(null);

      if (widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }

      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Wystąpił błąd. Spróbuj ponownie."
      );
      if (widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={() => setTurnstileLoaded(true)}
      />
      <section
        id="kontakt"
        className="relative py-12 sm:py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1c5498 0%, #184a85 50%, #144072 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="section-container relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Kontakt
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-xl text-white/80">
              Napisz lub zadzwoń - odpowiemy najszybciej jak to możliwe
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #1c5498 0%, #144072 100%)",
                      }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">{item.label}</p>
                      <div className="space-y-1">
                        {item.values.map((v, idx) =>
                          v.href ? (
                            <a
                              key={idx}
                              href={v.href}
                              className="block font-semibold text-white hover:text-[#6fb242] transition-colors"
                            >
                              {v.value}
                            </a>
                          ) : (
                            <p key={idx} className="font-semibold text-white">
                              {v.value}
                            </p>
                          )
                        )}
                      </div>
                      <p className="text-sm text-white/60 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Wyślij wiadomość
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(111, 178, 66, 0.15)" }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: "#6fb242" }} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dziękujemy!</h4>
                    <p className="text-gray-600">
                      Twoja wiadomość została wysłana. Odezwiemy się wkrótce.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formState.honeypot}
                      onChange={(e) =>
                        setFormState({ ...formState, honeypot: e.target.value })
                      }
                      className="absolute -left-[9999px] opacity-0 pointer-events-none"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Adres e-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="jan.kowalski@gmail.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Wiadomość *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tutaj wpisz swoją wiadomość..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Turnstile Widget */}
                    {!turnstileToken ? (
                      <div ref={turnstileRef} className="flex justify-center" />
                    ) : (
                      <div
                        className="flex items-center justify-center gap-2 text-sm py-2"
                        style={{ color: "#6fb242" }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Zweryfikowano</span>
                      </div>
                    )}

                    <p className="text-sm text-gray-500">
                      Wysyłając formularz wyrażasz zgodę na przetwarzanie danych
                      osobowych zgodnie z{" "}
                      <a
                        href="/polityka-prywatnosci"
                        className="text-blue-600 hover:underline"
                      >
                        Polityką Prywatności
                      </a>
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting || !turnstileToken}
                      className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, #1c5498 0%, #144072 100%)",
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Wysyłanie...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Wyślij wiadomość
                          <Send className="w-5 h-5" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
