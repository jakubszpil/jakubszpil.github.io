---
title: Wprowadzenie do Semantycznego HTML
description: Semantyczny HTML polega na używaniu elementów HTML, które jednoznacznie opisują swoje znaczenie i cel. Elementy semantyczne nie tylko definiują strukturę dokumentu, ale również pomagają w interpretacji jego zawartości zarówno przez przeglądarki, jak i przez wyszukiwarki internetowe oraz technologie wspomagające (np. czytniki ekranowe).
keywords: [html, semantyka, seo, dostępność, learning]
categories: [html]
createdAt: 2024-07-05
quiz:
  title: "Quiz: Semantyczny HTML"
  questions:
    - question: "Który element HTML najlepiej nadaje się do oznaczenia głównej treści strony?"
      options:
        - "<section>"
        - "<aside>"
        - "<main>"
        - "<header>"
      answer: 2
      explanation: "Element <main> służy do oznaczenia głównej, unikatowej treści dokumentu."

    - question: "Do czego służy element `<nav>`?"
      options:
        - "Do oznaczania artykułu"
        - "Do grupowania linków nawigacyjnych na stronie"
        - "Do wyświetlania stopki strony"
        - "Do osadzania obrazka z podpisem"
      answer: 1
      explanation: "Element <nav> grupuje linki prowadzące do różnych części witryny lub innych stron."

    - question: "Gdzie możesz legalnie umieścić element `<footer>`?"
      options:
        - "Tylko na początku strony"
        - "Tylko w <main>"
        - "Wyłącznie w <aside>"
        - "Na końcu całej strony lub na końcu sekcji/artykułu"
      answer: 3
      explanation: "<footer> może być użyty zarówno dla całej strony, jak i dla poszczególnych sekcji czy artykułów."

    - question: "Który element HTML semantyczny najlepiej nadaje się na poboczny panel z reklamami lub linkami powiązanymi?"
      options:
        - "<figure>"
        - "<mark>"
        - "<aside>"
        - "<time>"
      answer: 2
      explanation: "<aside> przeznaczony jest na treści poboczne, niezwiązane bezpośrednio z główną osią tematyczną."

    - question: "Jakiego atrybutu użyjesz z `<time>`, by data była czytelna dla maszyn?"
      options:
        - "date"
        - "datetime"
        - "machine"
        - "format"
      answer: 1
      explanation: "Atrybut datetime pozwala maszynom poprawnie interpretować podaną datę/czas."
---

Witaj w świecie Semantycznego HTML! 🌍 Jeśli tworzysz strony internetowe, to na pewno zależy Ci, by były one nie tylko ładne wizualnie, ale też dobrze "rozumiane" przez przeglądarki, wyszukiwarki i technologie wspomagające. Właśnie w tym pomoże Ci semantyka! Zamiast polegać tylko na generycznych elementach jak <div> czy <span>, nauczysz się używać znaczników, które jednoznacznie opisują swoje znaczenie i cel. Gotowy/a na budowanie stron, które są inteligentne i dostępne dla wszystkich? Zaczynamy! 🚀

## Spis treści

1.  [Co to jest Semantyczny HTML?](#co-to-jest-semantyczny-html)
2.  [Dlaczego warto używać Semantycznego HTML?](#dlaczego-warto-używać-semantycznego-html)
3.  [Kluczowe elementy Semantycznego HTML](#kluczowe-elementy-semantycznego-html)
    - [`<!DOCTYPE html>`](#doctype-html)
    - [`<header>`](#header)
    - [`<nav>`](#nav)
    - [`<main>`](#main)
    - [`<article>`](#article)
    - [`<section>`](#section)
    - [`<aside>`](#aside)
    - [`<footer>`](#footer)
    - [`<figure>` i `<figcaption>`](#figure-i-figcaption)
    - [`<time>`](#time)
    - [`<mark>`](#mark)
    - [`<address>`](#address)
4.  [Pułapki i najlepsze praktyki](#pułapki-i-najlepsze-praktyki)
5.  [Podsumowanie](#podsumowanie)
6.  [Zadania praktyczne](#zadania-praktyczne)
    - [Zadanie 1: Podstawowa struktura](#zadanie-1-podstawowa-struktura)
    - [Zadanie 2: Rozbudowa o treść i sidebar](#zadanie-2-rozbudowa-o-treść-i-sidebar)
    - [Zadanie 3: Ilustracja z opisem](#zadanie-3-ilustracja-z-opisem)

## Co to jest Semantyczny HTML?

**Semantyczny HTML** to podejście do tworzenia struktury dokumentów HTML, które polega na używaniu odpowiednich tagów (elementów) do opisania znaczenia i roli poszczególnych części strony. Zamiast używać wszędzie generycznych `<div>` lub `<span>`, stosujemy elementy, które mają wbudowane znaczenie – tak, aby przeglądarka, silniki wyszukiwarek i technologie wspomagające (np. czytniki ekranowe dla osób niewidomych) mogły łatwo zrozumieć, co reprezentuje dany fragment kodu.

Pomyśl o tym tak:

- **HTML bez semantyki** jest jak książka, w której wszystkie rozdziały są po prostu zaznaczone pogrubionym tekstem – niby wiesz, że to rozdział, ale nie ma jasnego oznaczenia, że to _jest_ rozdział.
- **HTML semantyczny** jest jak książka z wyraźnie oznaczonymi tytułami rozdziałów, spisem treści, numeracją stron i indeksami. Wszystko jest na swoim miejscu i łatwo to znaleźć.

## Dlaczego warto używać Semantycznego HTML?

Stosowanie semantycznych znaczników to nie tylko dobry styl kodowania, ale też przynosi realne korzyści:

1.  **Dostępność (Accessibility) 💪:** Jest to absolutnie kluczowe dla osób korzystających z czytników ekranowych. Kiedy czytnik napotka `<nav>`, "wie", że to jest nawigacja i może poinformować o tym użytkownika, pozwalając mu szybko przejść do interesujących go sekcji. Bez semantyki, czytnik po prostu czyta "div", co nie daje żadnego kontekstu.
2.  **SEO (Search Engine Optimization) 📈:** Wyszukiwarki, takie jak Google, wykorzystują semantyczne znaczniki do zrozumienia struktury i kontekstu treści na stronie. Lepsze zrozumienie = potencjalnie wyższe pozycje w wynikach wyszukiwania. Wyszukiwarka "wie", że to, co znajduje się w `<main>`, jest najważniejszą treścią, a to, co w `<footer>`, to stopka.
3.  **Łatwiejsza konserwacja i czytelność kodu 🧑‍💻:** Ty (i inni deweloperzy) szybciej zrozumiecie, co dany blok kodu reprezentuje. Widząc `<article>` od razu wiesz, że to samodzielna treść, a nie przypadkowy `<div>`. To ułatwia rozbudowę i debugowanie.
4.  **Wsparcie dla przyszłych technologii:** W miarę rozwoju sieci, nowe technologie i narzędzia będą w stanie lepiej wykorzystywać semantyczną strukturę dokumentu.

## Kluczowe elementy Semantycznego HTML

Poznajmy najważniejsze elementy semantyczne wprowadzone w HTML5, które pomogą Ci budować lepsze strony.

### `<!DOCTYPE html>`

Chociaż nie jest to element HTML w ścisłym tego słowa znaczeniu, a raczej deklaracja, to właśnie od niej zaczynamy każdy nowoczesny dokument HTML. Informuje przeglądarkę, że ma do czynienia z HTML5. Jest to pierwszy krok do zapewnienia prawidłowej interpretacji całej reszty semantycznego kodu.

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moja Semantyczna Strona</title>
  </head>
  <body></body>
</html>
```

### `<header>`

Element `<header>` reprezentuje sekcję wprowadzającą lub grupę elementów nawigacyjnych. Zazwyczaj zawiera tytuł sekcji lub całej strony, logo, a także podstawową nawigację. Możesz mieć wiele elementów `<header>` na stronie, np. jeden dla całej strony, a drugi dla pojedynczego artykułu.

```html
<header>
  <img src="logo.png" alt="Logo firmy" />
  <h1>Witaj na mojej stronie!</h1>
  <nav>
    <ul>
      <li><a href="/">Strona główna</a></li>
      <li><a href="/o-nas">O nas</a></li>
    </ul>
  </nav>
</header>
```

_Pamiętaj, że `<header>` to nie to samo co nagłówki `<h1>` do `<h6>`! `<header>` to sekcja, w której nagłówki mogą się znajdować._

### `<nav>`

Element `<nav>` służy do grupowania głównych linków nawigacyjnych na stronie. To oznacza, że nie każdy zestaw linków powinien być w `<nav>`, ale tylko te, które są kluczowe dla nawigacji po serwisie.

```html
<nav>
  <ul>
    <li><a href="#produkty">Produkty</a></li>
    <li><a href="#uslugi">Usługi</a></li>
    <li><a href="#kontakt">Kontakt</a></li>
  </ul>
</nav>
```

_Zestawy małych linków, np. w stopce, zazwyczaj nie wymagają umieszczania w `<nav>`, chyba że stanowią główną nawigację stopki._

### `<main>`

Element `<main>` reprezentuje **główną treść** dokumentu. Jest to treść, która jest unikatowa dla danej strony, wyłączając powtarzalne bloki, takie jak nagłówki, stopki, sidebary czy nawigacje. Na stronie powinien znajdować się **tylko jeden** element `<main>`.

```html
<main>
  <h2>Nasza oferta</h2>
  <p>Zapoznaj się z szerokim asortymentem naszych produktów...</p>
  <img src="produkt.jpg" alt="Zdjęcie produktu" />
</main>
```

### `<article>`

Element `<article>` reprezentuje **niezależną, samodzielną jednostkę treści**, która ma sens nawet poza kontekstem całej strony. Myśl o nim jak o pełnym artykule, wpisie na blogu, komentarzu, poście na forum czy widgetcie.

```html
<article>
  <h2>Tytuł artykułu na blogu</h2>
  <p>Przedstawiamy dziś innowacyjne podejście do web developmentu...</p>
  <p>Autor: Jan Kowalski, <time datetime="2024-07-05">5 lipca 2024</time></p>
</article>
```

_Na jednej stronie możesz mieć wiele `<article>`._

### `<section>`

Element `<section>` służy do grupowania powiązanych tematycznie treści. Może być używany do dzielenia strony na logiczne sekcje, takie jak wprowadzenie, rozdziały, podsumowania, bloki tematyczne. Każda sekcja powinna mieć zazwyczaj swój własny nagłówek (np. `<h1>` do `<h6>`).

```html
<section>
  <h2>O nas</h2>
  <p>Nasza firma istnieje na rynku od 2000 roku...</p>
</section>

<section>
  <h2>Kontakt</h2>
  <p>Skontaktuj się z nami poprzez formularz lub dane poniżej.</p>
</section>
```

_Element `<section>` powinien grupować treści, które są ze sobą tematycznie powiązane. Jeśli blok treści nie ma logicznego nagłówka lub jest tylko kontenerem do stylizacji, lepiej użyć `<div>`._

### `<aside>`

Element `<aside>` służy do oznaczania treści, która jest powiązana z główną treścią dokumentu, ale jest od niej **niezależna i może być traktowana jako poboczna**. Często używa się go do sidebarów, boksów z cytatami, reklam, linków powiązanych lub dodatkowych informacji.

```html
<main>
  <p>Główna treść artykułu o historii motoryzacji.</p>
  <aside>
    <h3>Ciekawostki historyczne</h3>
    <ul>
      <li>Pierwszy samochód</li>
      <li>Znaczenie silnika parowego</li>
    </ul>
  </aside>
  <p>Dalsza część artykułu...</p>
</main>
```

### `<footer>`

Element `<footer>` reprezentuje stopkę dla jego najbliższego rodzica będącego elementem sekcjonującym (np. `<body>`, `<article>`, `<section>`). Zazwyczaj zawiera informacje o autorze, prawa autorskie, linki do polityki prywatności, dane kontaktowe czy linki do mediów społecznościowych.

```html
<footer>
  <p>&copy; 2024 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
  <address>
    Email: <a href="mailto:info@twojafirma.com">info@twojafirma.com</a>
  </address>
</footer>
```

_Możesz mieć wiele stopek na stronie: jedną dla całego dokumentu i po jednej dla każdego `<article>` czy `<section>`._

### `<figure>` i `<figcaption>`

Element `<figure>` służy do grupowania treści medialnych (takich jak obrazy, diagramy, kody, filmy) wraz z ich podpisami. `<figcaption>` to semantyczny podpis dla zawartości `<figure>`.

```html
<figure>
  <img src="wykres-sprzedazy.png" alt="Wykres rocznej sprzedaży" />
  <figcaption>Roczny wykres sprzedaży produktów A i B.</figcaption>
</figure>
```

_Dzięki nim czytniki ekranowe wiedzą, że obrazek i tekst są ze sobą powiązane, co poprawia kontekst dla użytkowników._

### `<time>`

Element `<time>` reprezentuje konkretny moment w czasie lub zakres dat. Kluczowy jest tutaj atrybut `datetime`, który pozwala podać datę/czas w formacie zrozumiałem dla maszyn, niezależnie od tego, jak jest sformatowany dla ludzi.

```html
<p>
  Wydarzenie miało miejsce
  <time datetime="2024-06-29T19:00">29 czerwca o 19:00</time>.
</p>
<p>Artykuł opublikowano: <time datetime="2024-07-05">5 lipca 2024</time>.</p>
```

### `<mark>`

Element `<mark>` służy do wyróżnienia (podświetlenia) fragmentu tekstu, który jest ważny w danym kontekście. Często używa się go do zaznaczania wyników wyszukiwania.

```html
<p>Znaleziono wyniki dla frazy: <mark>semantyczny HTML</mark>.</p>
```

### `<address>`

Element `<address>` reprezentuje dane kontaktowe dla najbliższego `<article>` lub `<body>`. Może zawierać imię i nazwisko autora/organizacji, adres fizyczny, numer telefonu, adres e-mail lub adres URL.

```html
<footer>
  <address>
    Napisane przez: <a href="mailto:jan@example.com">Jan Kowalski</a>.<br />
    Odwiedź nas na: ul. Prosta 123, 00-001 Warszawa.
  </address>
</footer>
```

## Pułapki i najlepsze praktyki

- **Nie używaj semantycznych tagów do stylizacji:** Elementy semantyczne mają znaczenie strukturalne i kontekstowe, a nie wizualne. Do stylizacji używaj CSS. Nie używaj `<section>` tylko dlatego, że chcesz grupować elementy do stylizacji – do tego służy `<div>`.
- **Nagłówki w `<section>` i `<article>`:** Każdy `<section>` i `<article>` powinien mieć swój własny nagłówek (np. `<h1>`, `<h2>` itd.), który opisuje zawartość tej sekcji/artykułu.
- **Tylko jeden `<main>`:** Pamiętaj, że na stronę może być tylko jeden element `<main>`.
- **Nie zmuszaj się:** Czasem `<div>` jest po prostu najlepszym wyborem. Nie próbuj na siłę stosować semantycznych tagów, jeśli nie pasują do znaczenia treści. Na przykład, do prostego grupowania elementów w celu zastosowania do nich stylów CSS, `<div>` jest idealny.
- **HTML to struktura, CSS to wygląd:** To kluczowa zasada. HTML powinien opisywać, czym jest treść, a CSS – jak wygląda.

## Podsumowanie

**Semantyczny HTML** to podstawa tworzenia nowoczesnych, dostępnych i wydajnych stron internetowych. Używając odpowiednich tagów, takich jak `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<time>`, `<mark>` i `<address>`, dostarczasz przeglądarkom i wyszukiwarkom cenne informacje o strukturze i znaczeniu Twojej treści. To nie tylko poprawia **SEO** i **dostępność**, ale także sprawia, że Twój kod jest bardziej **czytelny i łatwiejszy w utrzymaniu**. Inwestycja w semantykę to inwestycja w jakość Twoich projektów! 🌟

## Zadania praktyczne

Poniższe zadania pomogą Ci utrwalić wiedzę o semantycznych elementach HTML. Spróbuj napisać kod HTML samodzielnie, a następnie sprawdź swoje rozwiązanie!

### Zadanie 1: Podstawowa struktura

Stwórz prostą stronę HTML, która zawiera wszystkie kluczowe sekcje semantyczne, tworzące ogólny układ strony:

- nagłówek całej strony (`<header>`)
- główną treść strony (`<main>`)
- nawigację w nagłówku (`<nav>`)
- stopkę strony (`<footer>`)

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 1 - Podstawowa Struktura</title>
    <style>
      /* Proste style dla wizualizacji */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      header,
      nav,
      main,
      footer {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 10px;
        border-radius: 5px;
      }
      header {
        background-color: #f0f0f0;
        text-align: center;
      }
      nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
      }
      nav li {
        margin: 0 10px;
      }
      main {
        flex-grow: 1;
        background-color: #f9f9f9;
      }
      footer {
        background-color: #f0f0f0;
        text-align: center;
        font-size: 0.9em;
        color: #555;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Witamy na naszej semantycznej stronie!</h1>
      <nav>
        <ul>
          <li><a href="#home">Strona główna</a></li>
          <li><a href="#about">O nas</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <h2>Główna zawartość</h2>
      <p>Tutaj znajdzie się unikalna i najważniejsza treść tej strony.</p>
      <p>
        Jest to miejsce na artykuły, produkty, usługi lub inne kluczowe
        informacje.
      </p>
    </main>

    <footer>
      <p>&copy; 2024 Moja Semantyczna Strona. Wszystkie prawa zastrzeżone.</p>
      <address>
        Skontaktuj się z nami:
        <a href="mailto:info@mojastrona.pl">info@mojastrona.pl</a>
      </address>
    </footer>
  </body>
</html>
```

</details>

### Zadanie 2: Rozbudowa o treść i sidebar

Rozbuduj swoją stronę z Zadania 1. Wewnątrz elementu `<main>`, dodaj:

- Jedną sekcję (`<section>`) z nagłówkiem `<h2>` (np. "Najnowsze wpisy").
- Wewnątrz tej sekcji, umieść jeden artykuł (`<article>`) z nagłówkiem `<h3>` i kilkoma akapitami tekstu.
- Dodaj również blok poboczny (`<aside>`) obok artykułu (lub w tej samej sekcji), zawierający krótkie informacje lub linki powiązane (np. "Popularne tagi" lub "Powiązane artykuły").

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie 2 - Rozbudowana Struktura</title>
    <style>
        /* Proste style dla wizualizacji */
        body { font-family: Arial, sans-serif; margin: 0; display: flex; flex-direction: column; min-height: 100vh; }
        header, nav, main, footer { border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 5px; }
        header { background-color: #f0f0f0; text-align: center; }
        nav ul { list-style: none; padding: 0; display: flex; justify-content: center; }
        nav li { margin: 0 10px; }
        main { flex-grow: 1; background-color: #f9f9f9; display: flex; flex-wrap: wrap; }
        section { flex: 3; margin-right: 10px; } /* Sekcja zajmuje więcej miejsca */
        aside { flex: 1; background-color: #e9ecef; padding: 15px; border-radius: 5px; } /* Sidebar */
        article { border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; background-color: #fff; border-radius: 5px; }
        footer { background-color: #f0f0f0; text-align: center; font-size: 0.9em; color: #555; }
    </style>
</head>
<body>
    <header>
        <h1>Witamy na naszej semantycznej stronie!</h1>
        <nav>
            <ul>
                <li><a href="#home">Strona główna</a></li>
                <li><a href="#about">O nas</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Najnowsze wpisy</h2>
            <article>
                <h3>Wprowadzenie do Semantycznego HTML</h3>
                <p>Dzisiejszy wpis dotyczy znaczenia używania odpowiednich tagów w HTML dla lepszej struktury i dostępności. Dowiedz się, dlaczego `<article>` i `<section>` są tak ważne!</p>
                <p>Opublikowano: <time datetime="2024-07-05">5 lipca 2024</time></p>
            </article>
            <article>
                <h3>Korzyści z używania CSS Grid</h3>
                <p>Poznaj potężne narzędzie do tworzenia elastycznych układów stron. CSS Grid to przyszłość layoutów webowych!</p>
                <p>Opublikowano: <time datetime="2024-07-01">1 lipca 2024</time></p>
            </article>
        </section>

        <aside>
            <h3>Popularne tagi</h3>
            <ul>
                <li><a href="#html">#HTML</a></li>
                <li><a href="#css">#CSS</a></li>
                <li><a href="#javascript">#JavaScript</a></li>
                <li><a href="#seo">#SEO</a></li>
            </ul>
            <h3>Subskrybuj newsletter!</h3>
            <p>Bądź na bieżąco z nowościami w świecie web developmentu.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Moja Semantyczna Strona. Wszystkie prawa zastrzeżone.</p>
        <address>
            Skontaktuj się z nami: <a href="mailto:info@mojastrona.pl">info@mojastrona.pl</a>
        </address>
    </footer>
</body>
</html>
```

</details>

### Zadanie 3: Ilustracja z opisem

Do jednej z sekcji (np. do tej z najnowszymi wpisami z Zadania 2) dodaj ilustrację wraz z jej podpisem, używając semantycznych elementów:

- `<img>`
- `<figure>`
- `<figcaption>`

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie 3 - Ilustracja z Opisem</title>
    <style>
        /* Proste style dla wizualizacji */
        body { font-family: Arial, sans-serif; margin: 0; display: flex; flex-direction: column; min-height: 100vh; }
        header, nav, main, footer { border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 5px; }
        header { background-color: #f0f0f0; text-align: center; }
        nav ul { list-style: none; padding: 0; display: flex; justify-content: center; }
        nav li { margin: 0 10px; }
        main { flex-grow: 1; background-color: #f9f9f9; display: flex; flex-wrap: wrap; }
        section { flex: 3; margin-right: 10px; }
        aside { flex: 1; background-color: #e9ecef; padding: 15px; border-radius: 5px; }
        article { border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; background-color: #fff; border-radius: 5px; }
        footer { background-color: #f0f0f0; text-align: center; font-size: 0.9em; color: #555; }

        /* Style dla figure i figcaption */
        figure {
            border: 1px solid #eee;
            padding: 10px;
            margin: 15px 0;
            background-color: #fff;
            text-align: center;
        }
        figure img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 10px; /* Wyśrodkowanie i odstęp */
        }
        figcaption {
            font-style: italic;
            color: #777;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <header>
        <h1>Witamy na naszej semantycznej stronie!</h1>
        <nav>
            <ul>
                <li><a href="#home">Strona główna</a></li>
                <li><a href="#about">O nas</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Najnowsze wpisy</h2>
            <article>
                <h3>Wprowadzenie do Semantycznego HTML</h3>
                <p>Dzisiejszy wpis dotyczy znaczenia używania odpowiednich tagów w HTML dla lepszej struktury i dostępności. Dowiedz się, dlaczego `<article>` i `<section>` są tak ważne!</p>
                <p>Opublikowano: <time datetime="2024-07-05">5 lipca 2024</time></p>
            </article>

            <figure>
                <img src="https://via.placeholder.com/600x300/ADD8E6/000000?text=Semantyczny+Web" alt="Ilustracja przedstawiająca koncepcję Semantycznego Web">
                <figcaption>Rys. 1. Wizualizacja idei Semantycznego Web, gdzie dane są wzajemnie powiązane.</figcaption>
            </figure>

            <article>
                <h3>Korzyści z używania CSS Grid</h3>
                <p>Poznaj potężne narzędzie do tworzenia elastycznych układów stron. CSS Grid to przyszłość layoutów webowych!</p>
                <p>Opublikowano: <time datetime="2024-07-01">1 lipca 2024</time></p>
            </article>
        </section>

        <aside>
            <h3>Popularne tagi</h3>
            <ul>
                <li><a href="#html">#HTML</a></li>
                <li><a href="#css">#CSS</a></li>
                <li><a href="#javascript">#JavaScript</a></li>
                <li><a href="#seo">#SEO</a></li>
            </ul>
            <h3>Subskrybuj newsletter!</h3>
            <p>Bądź na bieżąco z nowościami w świecie web developmentu.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Moja Semantyczna Strona. Wszystkie prawa zastrzeżone.</p>
        <address>
            Skontaktuj się z nami: <a href="mailto:info@mojastrona.pl">info@mojastrona.pl</a>
        </address>
    </footer>
</body>
</html>
```

</details>

To tyle na temat podstaw Semantycznego HTML! Pamiętaj, że konsekwentne stosowanie tych zasad jest kluczem do tworzenia lepszych i bardziej dostępnych stron. Masz jakieś pytania dotyczące konkretnych zastosowań lub chcesz dowiedzieć się więcej o innych elementach semantycznych? Daj znać! 😊
