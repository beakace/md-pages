import { NextRequest, NextResponse } from "next/server";
import { SERVICES } from "@/lib/constants";

const config = {
  resendApiKey: process.env.RESEND_API_KEY!,
  turnstileSecret: process.env.TURNSTILE_SECRET_KEY!,
  toEmail: process.env.CONTACT_EMAIL!,
  fromEmail: process.env.FROM_EMAIL || "Formularz <onboarding@resend.dev>",
  siteName: process.env.SITE_NAME || "Strona",
  siteUrl: process.env.SITE_URL || "strona.pl",
};

/** Sanitize user input to prevent XSS in email HTML */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Verify Turnstile token with Cloudflare */
async function verifyTurnstile(token: string): Promise<boolean> {
  const response = await fetch(SERVICES.turnstileVerify, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: config.turnstileSecret,
      response: token,
    }),
  });
  const data = await response.json();
  return data.success === true;
}

/** Send email via Resend API with one retry */
async function sendEmail(email: string, message: string): Promise<Response> {
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const payload = {
    from: config.fromEmail,
    to: [config.toEmail],
    subject: `Nowe zapytanie ze strony ${config.siteName}`,
    reply_to: email,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
        <div style="padding: 24px 0 16px; border-bottom: 2px solid #c45a3b;">
          <h1 style="color: #1a1a1a; margin: 0; font-size: 20px; font-weight: 600;">Nowe zapytanie — ${config.siteName}</h1>
        </div>
        <div style="padding: 24px 0;">
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">Od</p>
          <p style="margin: 0 0 20px 0; font-size: 16px;">${safeEmail}</p>
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">Wiadomość</p>
          <div style="background: #fafaf9; padding: 16px; border-radius: 4px; border: 1px solid #e5e5e5;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.5;">${safeMessage}</p>
          </div>
        </div>
        <p style="color: #a3a3a3; font-size: 12px; margin: 0;">
          Z formularza na ${config.siteUrl}
        </p>
      </div>
    `,
  };

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  // First attempt
  let response = await fetch(SERVICES.resendApi, fetchOptions);

  // Retry once on 5xx
  if (response.status >= 500) {
    await new Promise((r) => setTimeout(r, 1000));
    response = await fetch(SERVICES.resendApi, fetchOptions);
  }

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, message, honeypot, turnstileToken } = body;

    // Honeypot — silent success for bots
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Weryfikacja antyspamowa nie powiodła się" },
        { status: 400 },
      );
    }

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email i wiadomość są wymagane" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email" },
        { status: 400 },
      );
    }

    // Turnstile verification
    const isHuman = await verifyTurnstile(turnstileToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Weryfikacja antyspamowa nie powiodła się" },
        { status: 400 },
      );
    }

    // Config check
    if (!config.resendApiKey) {
      console.error("[contact] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Błąd konfiguracji serwera" },
        { status: 500 },
      );
    }

    // Send email (with retry)
    const response = await sendEmail(email, message);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[contact] Resend API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Wystąpił nieoczekiwany błąd serwera" },
      { status: 500 },
    );
  }
}
