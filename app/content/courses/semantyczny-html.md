---
title: Wprowadzenie do Semantycznego HTML
description: Semantyczny HTML polega na używaniu elementów HTML, które jednoznacznie opisują swoje znaczenie i cel. Elementy semantyczne nie tylko definiują strukturę dokumentu, ale również pomagają w interpretacji jego zawartości zarówno przez przeglądarki, jak i przez wyszukiwarki internetowe oraz technologie wspomagające (np. czytniki ekranowe).
keywords: [html, semantyka, seo, dostępność, learning]
categories: [html, seo]
createdAt: 2024-07-05
---

## Spis treści

1. [Czym jest semantyczny HTML?](#czym-jest-semantyczny-html)
2. [Zalety używania semantycznego HTML](#zalety-używania-semantycznego-html)
3. [Semantyczne elementy HTML](#semantyczne-elementy-html)
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
4. [Ograniczenia i wyzwania](#ograniczenia-i-wyzwania)
5. [Podsumowanie](#podsumowanie)
6. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1](#zadanie-1)
   - [Zadanie 2](#zadanie-2)
   - [Zadanie 3](#zadanie-3)

---

## Czym jest semantyczny HTML?

Semantyczny HTML oznacza stosowanie takich elementów HTML, które jednoznacznie wskazują na swoje przeznaczenie i znaczenie w kontekście strony. Elementy semantyczne nie służą jedynie do budowania struktury dokumentu – ułatwiają one także przeglądarkom, wyszukiwarkom internetowym oraz technologiom wspomagającym (np. czytnikom ekranowym) prawidłową interpretację treści. Dzięki temu strony są bardziej dostępne, lepiej pozycjonowane i czytelniejsze zarówno dla ludzi, jak i maszyn.

## Zalety używania semantycznego HTML

1. **Lepsza czytelność kodu:** Kod oparty na semantycznych elementach jest bardziej zrozumiały i klarowny zarówno dla programistów, jak i dla narzędzi przetwarzających strony internetowe.
2. **SEO:** Wyszukiwarki skuteczniej rozpoznają strukturę i znaczenie treści, co może poprawić pozycję strony w wynikach wyszukiwania.
3. **Dostępność:** Semantyczny HTML sprawia, że technologie wspomagające (np. czytniki ekranowe) mogą lepiej przekazywać treść osobom z niepełnosprawnościami.
4. **Łatwiejsza konserwacja:** Strony zbudowane w oparciu o semantyczny HTML są bardziej uporządkowane i łatwiejsze w utrzymaniu oraz rozbudowie.

## Semantyczne elementy HTML

### `<!DOCTYPE html>`

Deklaracja typu dokumentu HTML5. Informuje przeglądarkę o używanej wersji HTML – od tego rozpoczyna się każdy nowoczesny dokument HTML.

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantyczny HTML</title>
  </head>
  <body>
    <!-- Zawartość strony -->
  </body>
</html>
```

### `<header>`

Sekcja nagłówkowa strony lub danej sekcji. Zawiera zwykle tytuł, logo, wprowadzenie lub podstawową nawigację.

```html
<header>
  <h1>Tytuł strony</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

_Stosuj `<header>` na początku strony lub jako nagłówek sekcji._

### `<nav>`

Wyodrębniony blok nawigacyjny. Zawiera zestaw linków prowadzących do różnych części serwisu lub do innych stron.

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

_Element `<nav>` powinien obejmować tylko główną nawigację witryny._

### `<main>`

Główna, unikatowa treść dokumentu. Może zawierać artykuły, sekcje, multimedia i inne elementy powiązane z tematem strony.

```html
<main>
  <article>
    <h2>Artykuł</h2>
    <p>Treść artykułu...</p>
  </article>
</main>
```

_Tylko jeden element `<main>` na stronę!_

### `<article>`

Samodzielna jednostka treści, która ma sens także poza kontekstem strony (np. artykuł, wpis na blogu, post na forum).

```html
<article>
  <h2>Artykuł</h2>
  <p>Treść artykułu...</p>
</article>
```

_Możesz mieć wiele `<article>` na jednej stronie._

### `<section>`

Logiczna sekcja dokumentu grupująca powiązane tematycznie treści, np. rozdziały, bloki tematyczne.

```html
<section>
  <h2>Sekcja</h2>
  <p>Treść sekcji...</p>
</section>
```

_Używaj `<section>` do organizowania treści w logiczne grupy._

### `<aside>`

Blok z treściami pobocznymi lub dodatkowymi – np. panele boczne, cytaty, reklamy, linki powiązane.

```html
<aside>
  <h2>Sidebar</h2>
  <p>Informacje poboczne...</p>
</aside>
```

_Elementy `<aside>` powinny zawierać treści niezwiązane bezpośrednio z główną osią tematyczną._

### `<footer>`

Stopka strony lub sekcji. Zawiera informacje o autorze, prawa autorskie, dane kontaktowe, odnośniki do polityk i inne podobne treści.

```html
<footer>
  <p>&copy; 2023 Moja Strona. Wszelkie prawa zastrzeżone.</p>
</footer>
```

_Możesz mieć `<footer>` zarówno dla całej strony, jak i dla poszczególnych sekcji czy artykułów._

### `<figure>` i `<figcaption>`

Blok do zamieszczania ilustracji, zdjęć, diagramów, wykresów wraz z podpisem.

```html
<figure>
  <img src="obrazek.jpg" alt="Opis obrazka" />
  <figcaption>Opis obrazka</figcaption>
</figure>
```

_Element `<figcaption>` zawsze powinien być związany z `<figure>`._

### `<time>`

Element reprezentujący określony moment w czasie lub zakres dat.

```html
<time datetime="2023-06-29">29 czerwca 2023</time>
```

_Używaj atrybutu `datetime` dla maszynowej czytelności._

### `<mark>`

Służy do wyróżnienia fragmentu tekstu, na który należy zwrócić szczególną uwagę.

```html
<p>To jest <mark>ważne</mark> słowo.</p>
```

_Pomaga w podkreśleniu słów kluczowych lub wyników wyszukiwania._

### `<address>`

Reprezentuje dane kontaktowe autora strony, firmy lub działu.

```html
<address>
  <p>Jan Kowalski</p>
  <p>ul. Przykładowa 1</p>
  <p>00-000 Warszawa</p>
</address>
```

_Nie używaj do oznaczania lokalizacji geograficznych lub kontaktowych innych niż autor/organizacja strony._

## Ograniczenia i wyzwania

- **Niewłaściwe użycie elementów:** Błędne stosowanie elementów semantycznych może prowadzić do dezorientacji użytkowników oraz problemów z dostępnością.
- **Brak wsparcia w starszych przeglądarkach:** Niektóre starsze przeglądarki mogą nie interpretować poprawnie wszystkich elementów HTML5. Warto wtedy stosować odpowiednie polyfill'e lub style CSS resetujące.
- **Wymagana większa precyzja:** Tworzenie semantycznego HTML wymaga dokładnego zrozumienia przeznaczenia każdego elementu i stosowania ich zgodnie z dokumentacją.

## Podsumowanie

Semantyczny HTML to fundament nowoczesnych stron. Umożliwia lepszą strukturę, czytelność kodu, wyższą dostępność oraz skuteczniejsze pozycjonowanie w wyszukiwarkach. Stosowanie odpowiednich elementów semantycznych pozwala tworzyć strony bardziej zrozumiałe zarówno dla użytkowników, jak i maszyn. To inwestycja w przyszłość i jakość Twoich projektów internetowych.

## Zadania do wykonania

### Zadanie 1

Stwórz prostą stronę HTML, w której znajdą się:

- nagłówek (`<header>`)
- główna treść (`<main>`)
- nawigacja (`<nav>`)
- stopka (`<footer>`)

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
    <title>Zadanie 1</title>
  </head>
  <body>
    <header>
      <h1>Moja Strona</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <p>Główna treść strony...</p>
    </main>
    <footer>
      <p>&copy; 2023 Moja Strona. Wszelkie prawa zastrzeżone.</p>
    </footer>
  </body>
</html>
```

</details>

### Zadanie 2

Rozbuduj stronę z Zadania 1 o:

- sekcję (`<section>`) w głównej części,
- artykuł (`<article>`) w sekcji,
- blok poboczny (`<aside>`) również w sekcji.

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
    <title>Zadanie 2</title>
  </head>
  <body>
    <header>
      <h1>Moja Strona</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <section>
        <article>
          <h2>Artykuł</h2>
          <p>Treść artykułu...</p>
        </article>
        <aside>
          <h2>Blok poboczny</h2>
          <p>Informacje poboczne...</p>
        </aside>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Moja Strona. Wszelkie prawa zastrzeżone.</p>
    </footer>
  </body>
</html>
```

</details>

### Zadanie 3

Dodaj do swojej strony ilustrację z podpisem, korzystając z elementów `<figure>` i `<figcaption>`, umieszczając je wewnątrz sekcji.

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
    <title>Zadanie 3</title>
  </head>
  <body>
    <header>
      <h1>Moja Strona</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <section>
        <article>
          <h2>Artykuł</h2>
          <p>Treść artykułu...</p>
        </article>
        <aside>
          <h2>Blok poboczny</h2>
          <p>Informacje poboczne...</p>
        </aside>
        <figure>
          <img src="obrazek.jpg" alt="Opis obrazka" />
          <figcaption>Opis obrazka</figcaption>
        </figure>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Moja Strona. Wszelkie prawa zastrzeżone.</p>
    </footer>
  </body>
</html>
```

</details>

---

To wszystko w temacie semantycznego HTML! Zachęcam do eksperymentowania, praktycznego stosowania elementów semantycznych oraz dalszego pogłębiania wiedzy na ten temat.
