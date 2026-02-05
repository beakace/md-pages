import kalkulacjaLeasingu from "@/public/kalkulacjaleasingu.pl.png";
import nieziemsko from "@/public/nieziemsko.png";
import czystotu from "@/public/czystotuwroclaw.png";
import wzrokOk from "@/public/wzrokok.png";
import saraStudio from "@/public/sarastudiowokalne.png";

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
