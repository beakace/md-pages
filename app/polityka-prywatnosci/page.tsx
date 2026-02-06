import Link from "next/link";

export const metadata = {
  title: "Polityka prywatności | Michał Dziuba",
  description: "Polityka prywatności i informacje o przetwarzaniu danych osobowych.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fafaf9] dark:bg-[#0c0c0c] py-20 px-6 sm:px-8">
      <article className="max-w-[42rem] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors mb-12"
        >
          ← Powrót
        </Link>

        <h1 className="font-sans text-2xl sm:text-3xl uppercase tracking-[0.12em] font-semibold mb-12">
          Polityka prywatności
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-[17px] leading-relaxed text-muted dark:text-muted-dark">
          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              1. Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych jest Michał Dziuba, prowadzący
              działalność pod adresem e-mail: michaldziuba26@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              2. Zakres zbieranych danych
            </h2>
            <p>Zbieramy następujące dane:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Adres e-mail — gdy wypełniasz formularz kontaktowy</li>
              <li>Treść wiadomości — gdy wypełniasz formularz kontaktowy</li>
              <li>
                Dane analityczne — anonimowe informacje o korzystaniu ze strony
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              3. Cel przetwarzania
            </h2>
            <p>Twoje dane przetwarzamy w celu:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Odpowiedzi na Twoje zapytanie</li>
              <li>Kontaktu w sprawie potencjalnej współpracy</li>
              <li>Analizy ruchu na stronie i jej ulepszania</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              4. Pliki cookies
            </h2>
            <p>
              Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego
              działania, analizy ruchu oraz zapamiętania Twoich preferencji
              (np. tryb ciemny/jasny).
            </p>
            <p className="mt-3">Używamy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Cookies niezbędne</strong> — do działania strony
                (weryfikacja Turnstile)
              </li>
              <li>
                <strong>Cookies preferencji</strong> — zapamiętanie trybu
                wyświetlania
              </li>
              <li>
                <strong>Cookies analityczne</strong> — anonimowa analiza ruchu
              </li>
            </ul>
            <p className="mt-3">
              Możesz zarządzać cookies w ustawieniach przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              5. Okres przechowywania
            </h2>
            <p>
              Dane z formularza kontaktowego przechowujemy przez okres niezbędny
              do realizacji celu, maksymalnie 2 lata od ostatniego kontaktu.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              6. Twoje prawa
            </h2>
            <p>Masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania</li>
            </ul>
            <p className="mt-3">
              W celu realizacji tych praw skontaktuj się: michaldziuba26@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              7. Bezpieczeństwo
            </h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne, aby
              chronić Twoje dane przed nieautoryzowanym dostępem, utratą lub
              zniszczeniem.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg uppercase tracking-[0.08em] font-semibold text-[#1a1a1a] dark:text-[#e8e6e3] mb-4">
              8. Kontakt
            </h2>
            <p>
              W sprawach dotyczących ochrony danych osobowych możesz skontaktować
              się pod adresem: michaldziuba26@gmail.com
            </p>
          </section>

          <p className="text-sm text-muted/60 dark:text-muted-dark/60 pt-8 border-t border-black/5 dark:border-white/5">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>
        </div>
      </article>
    </main>
  );
}
