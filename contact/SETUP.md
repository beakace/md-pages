# Formularz Kontaktowy - Setup

## Szybki start (5 min)

### 1. Skopiuj pliki

```bash
# Z folderu templates/contact/ skopiuj:
cp -r components/Contact.tsx ../PROJEKT/components/
cp -r app/api/contact ../PROJEKT/app/api/
cp .env.example ../PROJEKT/.env.local
```

### 2. Wypełnij .env.local

```bash
RESEND_API_KEY=re_xxxxx           # Twój główny klucz
FROM_EMAIL="Firma <onboarding@resend.dev>"  # lub zweryfikowana domena
CONTACT_EMAIL=klient@email.pl     # gdzie trafiają maile
SITE_NAME="Nazwa Firmy"
SITE_URL="domena.pl"
TURNSTILE_SECRET_KEY=0x4AAA...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAA...
```

### 3. Dostosuj Contact.tsx

Edytuj `contactInfo` w komponencie:
- Numery telefonów
- Email kontaktowy
- Godziny pracy
- (opcjonalnie) Social media

### 4. Dodaj do strony

```tsx
import Contact from "@/components/Contact";

// W komponencie strony:
<Contact />
```

### 5. Zależności

```bash
npm install lucide-react
# lub
pnpm add lucide-react
```

---

## Opcjonalnie: Custom domena w Resend

Jeśli chcesz wysyłać jako `formularz@domena-klienta.pl`:

1. Wejdź na https://resend.com/domains
2. Kliknij "Add Domain"
3. Wpisz domenę klienta
4. Dodaj rekordy DNS (MX, TXT) u klienta
5. Poczekaj na weryfikację
6. Zmień `FROM_EMAIL` w .env.local

---

## Opcjonalnie: Nowy Turnstile widget

Dla każdego projektu możesz stworzyć osobny widget:

1. Wejdź na https://dash.cloudflare.com → Turnstile
2. "Add site"
3. Nazwa: nazwa projektu
4. Domain: domena.pl
5. Widget type: Managed
6. Skopiuj Site Key i Secret Key do .env.local

---

## Checklist

- [ ] Skopiowane pliki
- [ ] .env.local wypełniony
- [ ] contactInfo dostosowane
- [ ] lucide-react zainstalowane
- [ ] Test wysyłki formularza
