import "./globals.css";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL("https://mdpages.pl"),
  title: "Michał Dziuba | Strony internetowe",
  description:
    "Tworzę szybkie, nowoczesne strony i landing page’e, które pomagają lokalnym firmom zdobywać klientów i zapytania.",
  openGraph: {
    title: "Michał Dziuba | Strony internetowe",
    description:
      "Tworzę szybkie, nowoczesne strony i landing page’e, które pomagają lokalnym firmom zdobywać klientów i zapytania.",
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
      "Tworzę szybkie, nowoczesne strony i landing page’e, które pomagają lokalnym firmom zdobywać klientów i zapytania.",
    images: ["/mdpages.pl.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`!scroll-smooth dark ${plusJakarta.variable} ${libreBaskerville.variable}`} suppressHydrationWarning>
      <body
        className="font-sans relative bg-[#fafaf9] text-[#1a1a1a] dark:bg-[#0c0c0c] dark:text-[#e8e6e3] antialiased"
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
