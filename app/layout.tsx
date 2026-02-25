import "./globals.css";
import { Caveat, Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import ThemeContextProvider from "@/context/theme-context";
import CookieConsent from "@/components/CookieConsent";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.stronypolydzku.pl"),
  title: "Michał Dziuba | Strony internetowe",
  description:
    "Bez agencyjnych sztuczek. Bez przypadkowych szablonów AI. Profesjonalnie, skutecznie i w rozsądnej cenie.",
  openGraph: {
    title: "Michał Dziuba | Strony internetowe",
    description:
      "Bez agencyjnych sztuczek. Bez przypadkowych szablonów AI. Profesjonalnie, skutecznie i w rozsądnej cenie.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/mdpages.pl.png",
        alt: "mdpages.pl — Michał Dziuba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michał Dziuba | Strony internetowe",
    description:
      "Bez agencyjnych sztuczek. Bez przypadkowych szablonów AI. Profesjonalnie, skutecznie i w rozsądnej cenie.",
    images: ["/mdpages.pl.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`!scroll-smooth ${plusJakarta.variable} ${libreBaskerville.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans relative bg-washi text-ink dark:bg-surface-dark dark:text-[#e8e6e3] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm"
        >
          Przejdź do treści
        </a>
        <ThemeContextProvider>
          {children}
          <Toaster position="top-right" />
          <CookieConsent />
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
