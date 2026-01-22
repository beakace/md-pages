import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pl" className="!scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] "></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
