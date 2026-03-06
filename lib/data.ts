import agFizjo from "@/public/updated-projects/ag2.png";
import czysto from "@/public/updated-projects/ctw.png";
import kalkulacjaGap from "@/public/updated-projects/kg.png";
import nieziemsko from "@/public/updated-projects/n.png";
import saraStudio from "@/public/updated-projects/ssw.png";
import wzrokOk from "@/public/updated-projects/wo.png";

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
      "Krótka rozmowa, w\u00A0której poznaję Twój biznes i\u00A0cele strony. Ustalamy, co ma się na\u00A0niej znaleźć, do\u00A0kogo ma trafiać i\u00A0jaki efekt ma przynieść. Po\u00A0rozmowie masz jasny plan i\u00A0kolejne kroki.",
    step: "01",
  },
  {
    title: "Projekt & treści",
    location: "Szybkie iteracje",
    description:
      "Projektuję prosty, nowoczesny układ nastawiony na kontakt z klientem. Pomagam uporządkować treści — nawet jeśli zaczynamy od zera. Wprowadzamy szybkie poprawki, aż wszystko będzie czytelne i spójne.",
    step: "02",
  },
  {
    title: "Wdrożenie & funkcje",
    location: "Wersja testowa + poprawki",
    description:
      "Składam gotową stronę: szybką, czytelną i dobrze działającą na telefonach. Dodajemy potrzebne elementy, takie jak sklep, formularz kontaktowy, mapa dojazdu itd.",
    step: "03",
  },
  {
    title: "Publikacja & wsparcie",
    location: "Sprawne przekazanie",
    description:
      "Publikuję stronę i wykonuję podstawowe ustawienia widoczności w Google. Po starcie masz krótkie wsparcie na ewentualne poprawki, żeby wszystko działało tak, jak powinno.",
    step: "04",
  },
] as const;

export const servicesData = [
  {
    title: "Landing page'e",
    description:
      "Szybkie, nowoczesne landing page'e z jasnym przekazem, mocnym CTA i świetnym doświadczeniem na mobile.",
  },
  {
    title: "Strony firmowe",
    description:
      "Profesjonalne serwisy dla firm i specjalistów — schludne, wiarygodne i łatwe w utrzymaniu.",
  },
  {
    title: "Ulepszenia",
    description:
      "Jeśli masz już stronę, ale nie działa tak jak powinna — poprawię szybkość, czytelność oferty i ścieżkę do kontaktu.",
  },
  {
    title: "Sklepy",
    description:
      "Dla firm, które chcą pokazać ofertę i produkty w czytelny sposób — z naciskiem na prostą obsługę i konwersję.",
  },
] as const;

export const projectsData = [
  {
    title: "Aleksandra Głód Fizjoterapia",
    description:
      "Strona z ofertą gabinetu fizjoterapeutycznego. Profesjonalny wizerunek, wyraźnie opisane usługi i wbudowany formularz ułatwiający rezerwację wizyt.",
    tags: ["Gabinet", "Usługi", "Rezerwacje"],
    imageUrl: agFizjo,
    href: "https://www.agfizjoterapia.com/", 
  },
  {
    title: "Czysto Tu",
    description:
      "Strona dla firmy sprzątającej z Wrocławia. Prosty układ + mocne CTA, żeby szybko zamieniać odwiedziny w zapytania.",
    tags: ["Landing page", "Formularz kontaktowy", "Wizytówka"],
    imageUrl: czysto,
    href: "https://www.czystotuwroclaw.pl/",
  },
  {
    title: "Sara Studio Wokalne",
    description:
      "Strona dla trenerki wokalnej. Czytelna oferta i szybki kontakt — tak, żeby łatwo było umówić lekcję.",
    tags: ["Landing page", "Wizytówka"],
    imageUrl: saraStudio,
    href: "https://www.sarastudiowokalne.pl/",
  },
  {
    title: "Kalkulacja GAP",
    description:
      "Rozbudowany serwis dla firmy z branży ubezpieczeń i leasingowej. Struktura pod leady: porównanie oferty, jasne komunikaty i ścieżka do kontaktu.",
    tags: ["Serwis firmowy", "Wiele podstron", "Pozyskiwanie klientów"],
    imageUrl: kalkulacjaGap,
    href: "https://kalkulacjagap.pl",
  },
  {
    title: "Wzrok Ok!",
    description:
      "Sklep internetowy dla firmy z produktami medycznymi. Przejrzysta prezentacja produktów i wygodne zakupy na telefonie.",
    tags: ["Sklep online", "Oferta", "Zakupy"],
    imageUrl: wzrokOk,
    href: "https://wzrokok.pl/",
  },
  {
    title: "Nieziemsko",
    description: "Nowoczesny landing page dla aplikacji zrzeszającej konsultantów.",
    tags: ["Landing page", "Atrakcyjny design", "CTA"],
    imageUrl: nieziemsko,
    href: "https://nieziemsko.com",
  },
] as const;

export const skillsData = [
  "Szybkość i płynność działania",
  "Nowoczesny wygląd i spójny branding",
  "Jasna oferta + mocne CTA",
  "Wersja mobile dopięta na 100%",
  "Podstawy widoczności w Google",
  "Mierzenie zapytań i kontaktów",
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
