import { NextRequest, NextResponse } from "next/server";

// Konfiguracja - wszystko z env
const config = {
  resendApiKey: process.env.RESEND_API_KEY!,
  turnstileSecret: process.env.TURNSTILE_SECRET_KEY!,
  toEmail: process.env.CONTACT_EMAIL!,
  fromEmail: process.env.FROM_EMAIL || "Formularz <onboarding@resend.dev>",
  siteName: process.env.SITE_NAME || "Strona",
  siteUrl: process.env.SITE_URL || "strona.pl",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, message, honeypot, turnstileToken } = body;

    // Spam protection - honeypot field should be empty
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Weryfikacja antyspamowa nie powiodła się" },
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: config.turnstileSecret,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      console.error("Turnstile verification failed:", turnstileData);
      return NextResponse.json(
        { error: "Weryfikacja antyspamowa nie powiodła się" },
        { status: 400 }
      );
    }

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email i wiadomość są wymagane" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email" },
        { status: 400 }
      );
    }

    if (!config.resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Błąd konfiguracji serwera" },
        { status: 500 }
      );
    }

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: [config.toEmail],
        subject: `Nowe zapytanie ze strony ${config.siteName}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1c5498 0%, #144072 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nowe zapytanie ze strony</h1>
            </div>
            <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="margin: 0 0 20px 0;"><strong>Od:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Wiadomość:</strong></p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Ta wiadomość została wysłana z formularza kontaktowego na stronie ${config.siteUrl}
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd serwera" },
      { status: 500 }
    );
  }
}
