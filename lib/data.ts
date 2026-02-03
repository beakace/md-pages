import kalkulacjaLeasingu from "@/public/kalkulacjaleasingu.pl.png";
import nieziemsko from "@/public/nieziemsko.png";
import czystotu from "@/public/czystotuwroclaw.png";
import wzrokOk from "@/public/wzrokok.png";
import saraStudio from "@/public/sarastudiowokalne.png";

export const links = [
  {
    name: "Start",
    hash: "#home",
  },
  {
    name: "Realizacje",
    hash: "#work",
  },
  {
    name: "Usługi",
    hash: "#services",
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
    step: "01",
  },
  {
    title: "Projekt & treści",
    location: "Szybkie iteracje",
    description:
      "Projektuję prosty, nowoczesny układ nastawiony na kontakt z klientem. Pomagam uporządkować treści — nawet jeśli zaczynamy od zera. Wprowadzamy szybkie poprawki, aż wszystko będzie czytelne i spójne.",
    step: "02",
  },
  {
    title: "Wdrożenie & funkcje",
    location: "Wersja testowa + poprawki",
    description:
      "Składam gotową stronę: szybką, czytelną i dobrze działającą na telefonach. Dodajemy potrzebne elementy, takie jak sklep, formularz kontaktowy, mapa dojazdu itd.",
    step: "03",
  },
  {
    title: "Publikacja & wsparcie",
    location: "Sprawne przekazanie",
    description:
      "Publikuję stronę i wykonuję podstawowe ustawienia widoczności w Google. Po starcie masz krótkie wsparcie na ewentualne poprawki, żeby wszystko działało tak, jak powinno.",
    step: "04",
  },
] as const;

export const servicesData = [
  {
    title: "Landing page'e",
    description:
      "Szybkie, nowoczesne landing page'e z jasnym przekazem, mocnym CTA i świetnym doświadczeniem na mobile.",
  },
  {
    title: "Strony firmowe",
    description:
      "Profesjonalne serwisy dla firm i specjalistów — schludne, wiarygodne i łatwe w utrzymaniu.",
  },
  {
    title: "Ulepszenia",
    description:
      "Jeśli masz już stronę, ale nie działa tak jak powinna — poprawię szybkość, czytelność oferty i ścieżkę do kontaktu.",
  },
  {
    title: "Sklepy",
    description:
      "Dla firm, które chcą pokazać ofertę i produkty w czytelny sposób — z naciskiem na prostą obsługę i konwersję.",
  },
] as const;

export const projectsData = [
  {
    title: "Czysto Tu",
    description:
      "Strona dla firmy sprzątającej z Wrocławia. Prosty układ + mocne CTA, żeby szybko zamieniać odwiedziny w zapytania.",
    tags: ["Landing page", "Formularz kontaktowy", "Wizytówka"],
    imageUrl: czystotu,
    href: "https://www.czystotuwroclaw.pl/",
  },
  {
    title: "Sara Studio Wokalne",
    description:
      "Strona dla trenerki wokalnej. Czytelna oferta i szybki kontakt — tak, żeby łatwo było umówić lekcję.",
    tags: ["Landing page", "Wizytówka"],
    imageUrl: saraStudio,
    href: "https://www.sarastudiowokalne.pl/",
  },
  {
    title: "Kalkulacja Leasingu",
    description:
      "Rozbudowany serwis dla firmy z branży leasingowej. Struktura pod leady: porównanie oferty, jasne komunikaty i ścieżka do kontaktu.",
    tags: ["Serwis firmowy", "Wiele podstron", "Pozyskiwanie klientów"],
    imageUrl: kalkulacjaLeasingu,
    href: "https://kalkulacjaleasingu.pl",
  },
  {
    title: "Wzrok Ok!",
    description:
      "Sklep internetowy dla firmy z produktami medycznymi. Przejrzysta prezentacja produktów i wygodne zakupy na telefonie.",
    tags: ["Sklep online", "Oferta", "Zakupy"],
    imageUrl: wzrokOk,
    href: "https://wzrokok.pl/",
  },
  {
    title: "Nieziemsko",
    description: "Landing page od zera: jasny przekaz, spójny wygląd.",
    tags: ["Landing page", "Atrakcyjny design", "CTA"],
    imageUrl: nieziemsko,
    href: "https://nieziemsko.com",
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
  return projectsData.map((project, index) => ({
    _id: String(index + 1),
    ...project,
    tags: [...project.tags],
    imageWidth: 1920,
    imageHeight: 1080,
  }));
}
