import React from "react";
import {
  FaBolt,
  FaComments,
  FaBuilding,
  FaPencilRuler,
  FaRocket,
  FaHandshake,
  FaShoppingCart,
  FaWrench,
} from "react-icons/fa";
import alma from "@/public/alma-placeholder.png";
import kalkulacjaLeasingu from "@/public/kalkulacjaleasingu.pl.png";
import searchGithub from "@/public/search-github-card.png";
import blogSS24 from "@/public/blog-ss24.png";
import nieziemsko from "@/public/nieziemsko.png";
import chordon from "@/public/chordon-app.png";
// Local data source only – no Sanity client
import wzrokOk from "@/public/wzrokok.png";
import saraStudio from "@/public/sarastudiowokalne.png";

export const links = [
  {
    name: "Start",
    hash: "#home",
  },
  {
    name: "Usługi",
    hash: "#services",
  },
  {
    name: "Realizacje",
    hash: "#work",
  },
  {
    name: "Proces",
    hash: "#process",
  },
  {
    name: "O mnie",
    hash: "#about",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const processSteps = [
  {
    title: "Rozpoznanie & plan",
    location: "Rozmowa 15–30 min",
    description:
      "Krótka rozmowa, w której poznaję Twój biznes i cele strony. Ustalamy, co ma się na niej znaleźć, do kogo ma trafiać i jaki efekt ma przynieść. Po rozmowie masz jasny plan i kolejne kroki.",
    icon: React.createElement(FaComments),
    date: "Krok 1",
  },
  {
    title: "Projekt & treści",
    location: "Szybkie iteracje",
    description:
      "Projektuję prosty, nowoczesny układ nastawiony na kontakt z klientem. Pomagam uporządkować treści - nawet jeśli zaczynamy od zera. Wprowadzamy szybkie poprawki, aż wszystko będzie czytelne i spójne.",
    icon: React.createElement(FaPencilRuler),
    date: "Krok 2",
  },
  {
    title: "Wdrożenie & funkcje",
    location: "Wersja testowa + poprawki",
    description:
      "Składam gotową stronę: szybką, czytelną i dobrze działającą na telefonach. Dodajemy potrzebne elementy, takie jak sklep, formularz kontaktowy, mapa dojazdu itd.",
    icon: React.createElement(FaRocket),
    date: "Krok 3",
  },
  {
    title: "Publikacja & wsparcie",
    location: "Sprawne przekazanie",
    description:
      "Publikuję stronę i wykonuję podstawowe ustawienia widoczności w Google. Po starcie masz krótkie wsparcie na ewentualne poprawki, żeby wszystko działało tak, jak powinno.",
    icon: React.createElement(FaHandshake),
    date: "Krok 4",
  },
  
] as const;

export const servicesData = [
  {
    title: "Landing page’e, które sprzedają",
    description:
      "Szybkie, nowoczesne landing page’e z jasnym przekazem, mocnym CTA i świetnym doświadczeniem na mobile.",
    icon: React.createElement(FaBolt, { className: "text-xl" }),
    bullets: [
      "Jasna oferta i przekaz",
      "Szybkie ładowanie",
      "CTA + formularz kontaktu",
    ],
  },
  {
    title: "Strony firmowe",
    description:
      "Profesjonalne serwisy dla firm i specjalistów - schludne, wiarygodne i łatwe w utrzymaniu.",
    icon: React.createElement(FaBuilding, { className: "text-xl" }),
    bullets: [
      "Wiarygodny wizerunek",
      "Przejrzysta struktura",
      "Widoczność w Google (podstawy)",
    ],
  },
  {
    title: "Ulepszenia istniejącej strony",
    description:
      "Jeśli masz już stronę, ale nie działa tak jak powinna: poprawię szybkość, czytelność oferty i ścieżkę do kontaktu.",
    icon: React.createElement(FaWrench, { className: "text-xl" }),
    bullets: ["Więcej zapytań", "Lepsze UX", "Szybsze ładowanie"],
  },
  {
    title: "Sklepy internetowe",
    description:
      "Dla firm, które chcą pokazać ofertę i produkty w czytelny sposób - z naciskiem na prostą obsługę i konwersję.",
    icon: React.createElement(FaShoppingCart, { className: "text-xl" }),
    bullets: [
      "Czytelna prezentacja oferty",
      "Wygodna na telefonie",
      "Szybkie wdrożenie",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Sara Studio Wokalne",
    description:
      "Landing page dla trenerki wokalnej. Projekt i wdrożenie po mojej stronie.",
    tags: ["Landing page", "Wizytówka"],
    imageUrl: saraStudio,
    href: "https://www.sarastudiowokalne.pl/",
  },
  {
    title: "Wzrok Ok! Sklep",
    description:
      "Sklep online dla innowacyjnej firmy z produktami medycznymi.",
    tags: ["Sklep online", "Oferta", "Zakupy"],
    imageUrl: wzrokOk,
    href: "https://wzrokok.pl/",
  },
  {
    title: "Nieziemsko",
    description:
      "Landing page od zera: jasny przekaz, spójny wygląd..",
    tags: ["Landing page", "Atrakcyjny design", "CTA"],
    imageUrl: nieziemsko,
    href: "https://nieziemsko.com",
  },
  {
    title: "Kalkulacja Leasingu",
    description:
      "Rozbudowany serwis z wieloma podstronami - skupiony na porównywaniu ofert i generowaniu leadów.",
    tags: ["Serwis firmowy", "Wiele podstron", "Pozyskiwanie klientów"],
    imageUrl: kalkulacjaLeasingu,
    href: "https://kalkulacjaleasingu.pl",
  },
  {
    title: "Chordon",
    description:
      "Proste narzędzie, które pomaga muzykom tworzyć progresje akordów i inspirować do tworzenia.",
    tags: ["Aplikacja", "Narzędzie", "Muzyka"],
    imageUrl: chordon,
    href: "https://chordon.vercel.app",
  },


] as const;

export const skillsData = [
  "Szybkość i płynność działania",
  "Nowoczesny wygląd i spójny branding",
  "Jasna oferta + mocne CTA",
  "Wersja mobile dopięta na 100%",
  "Podstawy widoczności w Google",
  "Mierzenie zapytań i kontaktów",
] as const;

export async function getProjects() {
  // Map local data to the Project type shape expected by the UI
  return projectsData.map((project, index) => ({
    _id: String(index + 1),
    ...project,
    // Ensure tags is a mutable array to satisfy Project type
    tags: [...project.tags],
    imageWidth: 1920,
    imageHeight: 1080,
  }));
}
