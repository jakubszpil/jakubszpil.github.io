---
title: Wprowadzenie do CSS
description: CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.
keywords: [css, html, kurs, wprowadzenie, przewodnik, web, frontend, learning]
categories: [css]
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy CSS"
  questions:
    - question: "Co oznacza skrót CSS?"
      options:
        - "Creative Style Syntax"
        - "Coded Style System"
        - "Cascading Style Sheets"
        - "Cascaded Sheet System"
      answer: 2
      explanation: "CSS to Cascading Style Sheets, czyli kaskadowe arkusze stylów."

    - question: "Który sposób załączania stylów CSS do strony jest najbardziej zalecany dla większych projektów?"
      options:
        - "Inline CSS"
        - "Internal CSS"
        - "JavaScript"
        - "External CSS (zewnętrzny plik .css)"
      answer: 3
      explanation: "External CSS pozwala na lepszą organizację i ponowne wykorzystanie stylów."

    - question: "Jak wygląda selektor klasy w CSS?"
      options:
        - ".nazwa-klasy"
        - "#nazwa-klasy"
        - "nazwa-klasy"
        - "*nazwa-klasy"
      answer: 0
      explanation: "Selektor klasy zapisujemy z kropką, np. .header."

    - question: "Jak ustawić kolor tła elementu na żółty?"
      options:
        - "color: yellow;"
        - "background: yellow-text;"
        - "background-color: yellow;"
        - "border-color: yellow;"
      answer: 2
      explanation: "Do ustawienia koloru tła służy background-color."

    - question: "Za co odpowiada właściwość 'border-radius'?"
      options:
        - "Zmiana koloru ramki"
        - "Zaokrąglenie rogów elementu"
        - "Zmiana rozmiaru czcionki"
        - "Ustawienie tła obrazkowego"
      answer: 1
      explanation: "border-radius pozwala na zaokrąglenie rogów elementu."
---

Witaj w świecie **CSS**\! 🎨 Jeśli HTML to szkielet Twojej strony, to CSS jest niczym jej garderoba - nadaje jej styl, kolory, układ i całą estetykę. Bez CSS strony internetowe byłyby po prostu nagim tekstem bez żadnej wizualnej atrakcyjności. Ten przewodnik wprowadzi Cię w podstawy CSS, pokazując, jak sprawić, by Twoje strony wyglądały profesjonalnie i były przyjemne dla oka. Gotowy/a, by nadać styl swoim kreacjom webowym? Zaczynamy\! 🖌️

## Spis treści

1.  [Czym jest CSS i dlaczego jest tak ważny?](#czym-jest-css-i-dlaczego-jest-tak-ważny)
2.  [Jak działa CSS? Deklaracje i reguły](#jak-działa-css-deklaracje-i-reguły)
3.  [Sposoby załączania CSS do HTML - gdzie umieścić style?](#sposoby-załączania-css-do-html---gdzie-umieścić-style)
    - [Inline CSS (style w linii)](#inline-css-style-w-linii)
    - [Internal CSS (style wewnętrzne)](#internal-css-style-wewnętrzne)
    - [External CSS (zewnętrzny arkusz stylów)](#external-css-zewnętrzny-arkusz-stylów)
4.  [Podstawowe selektory CSS - jak wybierać elementy do stylowania?](#podstawowe-selektory-css---jak-wybierać-elementy-do-stylowania)
    - [Selektory elementów (Type Selectors)](#selektory-elementów-type-selectors)
    - [Selektory klas (Class Selectors)](#selektory-klas-class-selectors)
    - [Selektory identyfikatorów (ID Selectors)](#selektory-identyfikatorów-id-selectors)
5.  [Podstawowe właściwości CSS - Twój zestaw narzędzi do stylizacji](#podstawowe-właściwości-css---twój-zestaw-narzędzi-do-stylizacji)
    - [Kolory (Colors) - nadaj barwę tekstowi](#kolory-colors---nadaj-barwę-tekstowi)
    - [Tło (Background) - pokoloruj przestrzeń](#tło-background---pokoloruj-przestrzeń)
    - [Marginesy i wypełnienia (Margin & Padding) - kontroluj odstępy](#marginesy-i-wypełnienia-margin---padding--kontroluj-odstępy)
    - [Ramki (Borders) - obramuj i zaokrąglaj](#ramki-borders---obramuj-i-zaokrąglaj)
6.  [Zadania do wykonania: Sprawdź swoje umiejętności\!](#zadania-do-wykonania-sprawdź-swoje-umiejętności)
    - [Zadanie 1: Czerwony nagłówek](#zadanie-1-czerwony-nagłówek)
    - [Zadanie 2: Kolorowy akapit](#zadanie-2-kolorowy-akapit)
    - [Zadanie 3: Stylowy `div`](#zadanie-3-stylowy-div)
    - [Zadanie 4: Różnokolorowe nagłówki](#zadanie-4-różnokolorowe-nagłówki)

---

## Czym jest CSS i dlaczego jest tak ważny?

**CSS** to skrót od **Cascading Style Sheets**, co po polsku oznacza **Kaskadowe Arkusze Stylów**. Jest to język, który daje Ci pełną kontrolę nad **wyglądem i formatowaniem** dokumentów HTML. Pomyśl o tym w ten sposób:

- **HTML** (HyperText Markup Language) to **struktura** i **treść** strony. Określa, co jest nagłówkiem, co akapitem, gdzie jest obrazek. To jak plan architektoniczny domu z opisem, gdzie są ściany i okna.
- **CSS** to **styl i dekoracja**. To on decyduje o kolorze ścian, rodzaju mebli, zasłonach, a nawet o tym, jak przestrzeń jest zagospodarowana.

Główna idea CSS to **oddzielenie treści od prezentacji**. Zamiast umieszczać informacje o kolorze tekstu czy rozmiarze czcionki bezpośrednio w kodzie HTML (co jest nieefektywne i utrudnia zmiany), umieszczasz je w osobnym pliku CSS. Dzięki temu:

- **Łatwość zmian:** Chcesz zmienić kolor wszystkich nagłówków `<h1>` na swojej stronie? Wystarczy jedna zmiana w pliku CSS, zamiast przeszukiwania każdego `<h1>` w HTML.
- **Spójność:** Wszystkie elementy o tym samym stylu wyglądają identycznie, zapewniając profesjonalny i ujednolicony wygląd.
- **Szybsze ładowanie:** Przeglądarka może raz pobrać plik CSS i używać go na wielu podstronach, co przyspiesza ładowanie witryny.
- **Responsywność:** CSS jest kluczowy do tworzenia stron, które wyglądają dobrze na różnych urządzeniach (komputery, tablety, smartfony).

Podsumowując, CSS jest niezbędny, jeśli chcesz, aby Twoja strona internetowa była nie tylko funkcjonalna, ale też estetyczna i przyjemna w odbiorze.

---

## Jak działa CSS? Deklaracje i reguły

CSS działa na zasadzie **reguł stylowania**, które składają się z dwóch głównych części:

1.  **Selektor**: Wskazuje, który element (lub elementy) HTML ma zostać ostylowany. To jak "adres", pod który wysyłasz instrukcje.
2.  **Blok deklaracji**: Zawiera jedną lub więcej **deklaracji**, które określają, jak element ma wyglądać. Każda deklaracja składa się z **właściwości** i jej **wartości**, oddzielonych dwukropkiem, a zakończona średnikiem.

**Przykład reguły CSS:**

```css
p {
  /* Selektor - wybiera wszystkie elementy <p> */
  color: blue; /* Deklaracja: właściwość 'color', wartość 'blue' */
  font-size: 16px; /* Deklaracja: właściwość 'font-size', wartość '16px' */
}
```

W tym przykładzie:

- `p` to **selektor**, który wybierze wszystkie akapity (`<p>`) w Twoim dokumencie HTML.
- `{ ... }` to **blok deklaracji**.
- `color: blue;` to jedna **deklaracja**. `color` to **właściwość** (określa kolor tekstu), a `blue` to jej **wartość**.
- `font-size: 16px;` to kolejna **deklaracja**. `font-size` to właściwość (rozmiar czcionki), a `16px` to jej wartość.

Kiedy przeglądarka napotka taką regułę, zastosuje podane style do wszystkich pasujących elementów HTML.

---

## Sposoby załączania CSS do HTML - gdzie umieścić style?

Istnieją trzy główne sposoby na połączenie stylów CSS z dokumentem HTML. Każdy z nich ma swoje zastosowanie i zalety.

### Inline CSS (style w linii)

To najprostszy, ale **najmniej zalecany** sposób. Polega na umieszczeniu stylów bezpośrednio w atrybucie `style` konkretnego elementu HTML.

**Kiedy używać?**

- Do **bardzo prostych, pojedynczych** zmian, które dotyczą tylko jednego elementu i nigdy się nie powtórzą.
- Do szybkiego testowania.
- **Unikaj w większości przypadków**, ponieważ miesza HTML z CSS, utrudnia zarządzanie stylami i sprawia, że kod jest nieczytelny.

**Przykład:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inline CSS</title>
  </head>
  <body>
    <h1 style="color: blue; font-family: Arial;">Witaj, świecie!</h1>
    <p style="background-color: lightgray;">
      To jest akapit ze stylami inline.
    </p>
  </body>
</html>
```

### Internal CSS (style wewnętrzne)

Polega na umieszczeniu wszystkich reguł CSS w sekcji `<head>` dokumentu HTML, wewnątrz tagu `<style>`.

**Kiedy używać?**

- Dla **małych stron internetowych** lub pojedynczych plików HTML, które nie będą rozwijane.
- Dla prototypów lub demo, gdzie wszystkie style są potrzebne tylko w jednym miejscu.
- **Unikaj w dużych projektach**, bo jeśli masz wiele stron, musisz kopiować i utrzymywać te same style w każdym pliku HTML.

**Przykład:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Internal CSS</title>
    <style>
      /* Tutaj umieszczamy reguły CSS */
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
      }

      h1 {
        color: darkorange;
        text-align: center;
      }

      p {
        color: #333;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <h1>Moja strona z Internal CSS</h1>
    <p>
      Ten akapit jest ostylowany za pomocą wewnętrznych stylów. Cała strona ma
      też ustawioną czcionkę i tło.
    </p>
  </body>
</html>
```

### External CSS (zewnętrzny arkusz stylów)

To **najbardziej zalecany i profesjonalny sposób**. Tworzysz osobny plik z rozszerzeniem `.css` (np. `style.css`), a następnie dołączasz go do swojego dokumentu HTML za pomocą tagu `<link>` umieszczonego w sekcji `<head>`.

**Kiedy używać?**

- **Zawsze w większych projektach** i tam, gdzie planujesz rozwijać stronę.
- Gdy style mają być używane na wielu stronach w witrynie.
- Gdy chcesz zachować **czysty i zorganizowany kod**.

**Jak to działa?**

1.  Tworzysz plik CSS, np. `style.css`, w tym samym folderze co Twój plik HTML (lub w podfolderze, np. `css/style.css`).
2.  W pliku `style.css` piszesz tylko czyste reguły CSS.
3.  W pliku HTML, w sekcji `<head>`, dodajesz znacznik `<link>`:

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Moja strona z External CSS</h1>
    <p>Ten akapit również jest ostylowany. Style są w osobnym pliku!</p>
    <button>Kliknij mnie</button>
  </body>
</html>
```

**`style.css` (tworzysz osobny plik):**

```css
/* To jest plik style.css */
body {
  background-color: #e0f2f7; /* Jasnoniebieskie tło dla całej strony */
  font-family: Georgia, serif;
}

h1 {
  color: #0056b3; /* Ciemnoniebieski nagłówek */
  text-decoration: underline; /* Podkreślony tekst */
}

p {
  color: #333;
  margin-bottom: 15px; /* Odstęp pod akapitem */
}

button {
  background-color: #28a745; /* Zielony przycisk */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

**Zalety External CSS:**

- **Łatwość zarządzania:** Wszystkie style są w jednym miejscu.
- **Ponowne użycie:** Ten sam plik CSS może być używany przez wiele stron HTML, zapewniając spójny wygląd całej witryny.
- **Szybsze ładowanie:** Przeglądarka buforuje plik CSS, więc nie musi go pobierać ponownie przy każdej wizycie na nowej podstronie.

---

## Podstawowe selektory CSS - jak wybierać elementy do stylowania?

Selektory to najważniejsza część reguł CSS. Mówią przeglądarce, **które elementy HTML** mają otrzymać konkretne style. Bez selektorów nie wiedziałbyś/wiedziałabyś, do czego przypisać dany kolor czy rozmiar czcionki.

### Selektory elementów (Type Selectors)

To najprostszy typ selektora. Wybiera **wszystkie wystąpienia danego typu elementu HTML** (np. wszystkie `<p>`, wszystkie `<h1>`, wszystkie `<div>`).

**Składnia:** po prostu nazwa elementu.

```css
/* Ostyluje wszystkie nagłówki h1 na stronie */
h1 {
  color: darkred;
  font-family: sans-serif;
}

/* Ostyluje wszystkie akapity p na stronie */
p {
  line-height: 1.5; /* Wysokość linii tekstu */
  text-align: justify; /* Wyrównanie tekstu */
}

/* Ostyluje wszystkie przyciski button na stronie */
button {
  background-color: #f0f0f0;
  border: 1px solid gray;
}
```

### Selektory klas (Class Selectors)

To bardzo często używane selektory. Pozwalają na stylowanie elementów, które mają przypisaną określoną **klasę**. Klasy są definiowane w HTML za pomocą atrybutu `class="nazwa-klasy"`. Jedna klasa może być użyta **wielokrotnie** na różnych elementach, a jeden element może mieć **wiele klas**.

**Składnia w CSS:** kropka `.` przed nazwą klasy.

**HTML:**

```html
<h1 class="tytul-strony">Witaj, na mojej stronie!</h1>
<p class="tekst-wazny">Ten tekst jest szczególnie istotny.</p>
<p class="tekst-wazny">To jest inny ważny akapit.</p>
<button class="przycisk-glowny">Naciśnij mnie!</button>
<div class="karta produkt">
  <h3>Produkt A</h3>
  <p>Opis produktu A.</p>
</div>
```

**CSS:**

```css
.tytul-strony {
  font-size: 48px;
  color: #4caf50; /* Zielony */
}

.tekst-wazny {
  font-weight: bold; /* Pogrubiony tekst */
  color: purple;
}

.przycisk-glowny {
  padding: 12px 25px;
  background-color: #007bff; /* Niebieski */
  color: white;
  border-radius: 8px;
}

/* Możesz też łączyć klasy w selektorze: styluj element, który ma OBYDWIE klasy */
.karta.produkt {
  /* Ostyluje tylko div, który ma klasy "karta" ORAZ "produkt" */
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 10px;
}
```

### Selektory identyfikatorów (ID Selectors)

Selektory ID pozwalają na stylowanie elementu z unikalnym identyfikatorem (`id`). W przeciwieństwie do klas, każdy **`id` musi być unikalny** na całej stronie HTML\! Oznacza to, że nie możesz mieć dwóch elementów o tym samym `id`. ID jest często używane do stylowania bardzo specyficznych, pojedynczych elementów lub jako "kotwica" dla JavaScript.

**Składnia w CSS:** hash `#` przed nazwą ID.

**HTML:**

```html
<header id="naglowek-glowny">
  <h1>Moja Super Strona</h1>
</header>

<footer id="stopka-strony">
  <p>&copy; 2024 Wszystkie prawa zastrzeżone.</p>
</footer>
```

**CSS:**

```css
#naglowek-glowny {
  background-color: #333; /* Ciemne tło */
  color: white;
  padding: 20px;
  text-align: center;
}

#stopka-strony {
  background-color: #eee;
  color: #555;
  padding: 10px;
  text-align: center;
  font-size: 0.9em;
}
```

**Wskazówka:** W większości przypadków do stylowania elementów używaj **klas**. ID rezerwuj dla bardzo unikalnych elementów, które będą wymagały bezpośredniego odwoływania się przez JavaScript lub jako kotwice nawigacyjne.

---

## Podstawowe właściwości CSS - Twój zestaw narzędzi do stylizacji

Poznałeś/aś, jak wybrać elementy (selektory) i gdzie umieścić style. Teraz czas na naukę **właściwości CSS**, które faktycznie zmieniają wygląd Twoich elementów. Poniżej przedstawiamy kilka najważniejszych i najczęściej używanych.

### Kolory (Colors) - nadaj barwę tekstowi

Właściwość `color` służy do ustawiania **koloru tekstu** w elemencie.
Możesz definiować kolory na kilka sposobów:

- **Nazwy kolorów:** `red`, `blue`, `green`, `yellow`, `orange`, `black`, `white`, `lightgray`, `darkblue` itp. (istnieje wiele predefiniowanych nazw).
- **Wartości szesnastkowe (Hexadecimal)**: Zaczynają się od `#`, po których następuje 6 cyfr/liter (0-9, A-F). Każde dwie cyfry reprezentują natężenie koloru czerwonego, zielonego i niebieskiego (RGB). Np. `#FF0000` to czysty czerwony, `#000000` to czarny, `#FFFFFF` to biały.
- **RGB (Red, Green, Blue)**: `rgb(czerwony, zielony, niebieski)`. Wartości od 0 do 255. Np. `rgb(255, 0, 0)` to czerwony. Możesz też dodać kanał alfa dla przezroczystości: `rgba(czerwony, zielony, niebieski, alfa)`. `alfa` to wartość od 0 (całkowicie przezroczysty) do 1 (całkowicie nieprzezroczysty). Np. `rgba(0, 0, 0, 0.5)` to półprzezroczysty czarny.
- **HSL (Hue, Saturation, Lightness)**: `hsl(odcień, nasycenie, jasność)`. Odcień (Hue) to kąt na kole barw (0-360 stopni), nasycenie (Saturation) i jasność (Lightness) to procenty (0-100%). Np. `hsl(0, 100%, 50%)` to czerwony. Możesz też dodać kanał alfa: `hsla(odcień, nasycenie, jasność, alfa)`.

<!-- end list -->

```css
/* Różne sposoby definiowania koloru tekstu */
h1 {
  color: red; /* Nazwa koloru */
}

p.info {
  color: #008080; /* Ciemny turkus (szesnastkowo) */
}

a {
  color: rgb(75, 0, 130); /* Indygo (RGB) */
}

span.highlight {
  color: hsl(120, 100%, 25%); /* Ciemnozielony (HSL) */
}

div.overlay {
  background-color: rgba(0, 0, 0, 0.7); /* Półprzezroczysty czarny (RGBA) */
  color: white;
}
```

### Tło (Background) - pokoloruj przestrzeń

Właściwości z prefiksem `background-` służą do stylowania tła elementów.

- **`background-color`**: Ustawia kolor tła elementu. Możesz użyć dowolnego formatu koloru (nazwa, hex, RGB, HSL).
- **`background-image`**: Ustawia obrazek jako tło elementu. Podaj ścieżkę do pliku obrazu za pomocą `url()`.
- **`background-repeat`**: Określa, czy i jak obrazek tła ma się powtarzać.
  - `no-repeat`: Obrazek nie powtarza się.
  - `repeat`: Obrazek powtarza się wzdłuż osi X i Y.
  - `repeat-x`: Powtarza się tylko poziomo.
  - `repeat-y`: Powtarza się tylko pionowo.
- **`background-position`**: Określa początkową pozycję obrazka tła. Możesz użyć słów kluczowych (`top`, `bottom`, `left`, `right`, `center`) lub wartości procentowych/pikselowych.
- **`background-size`**: Określa rozmiar obrazka tła.
  - `auto`: Domyślny rozmiar.
  - `cover`: Skaluje obrazek tak, aby pokrył całą powierzchnię elementu, przycinając go w razie potrzeby.
  - `contain`: Skaluje obrazek tak, aby był w pełni widoczny wewnątrz elementu, bez przycinania (mogą pojawić się puste przestrzenie).
  - Wartości pikselowe/procentowe (np. `100px 200px`, `50% 100%`).

<!-- end list -->

```css
body {
  background-color: #f8f8f8; /* Bardzo jasnoszare tło dla całej strony */
}

header {
  background-image: url("header-bg.jpg"); /* Obrazek tła w nagłówku */
  background-repeat: no-repeat; /* Bez powtarzania */
  background-position: center top; /* Na środku, u góry */
  background-size: cover; /* Pokryj całą powierzchnię */
  padding: 50px;
  color: white;
  text-align: center;
}

.card {
  background-color: white;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Delikatny cień */
}
```

### Marginesy i wypełnienia (Margin & Padding) - kontroluj odstępy

Właściwości `margin` i `padding` są kluczowe do kontrolowania odstępów między elementami i wewnątrz nich. Aby to dobrze zrozumieć, wyobraź sobie każdy element HTML jako pudełko. 📦

- **`padding` (wypełnienie)**: To przestrzeń **wewnątrz** pudełka, między jego zawartością (tekstem, obrazem) a krawędzią ramki. Powiększa rozmiar wizualny elementu, ale nie dodaje odstępu od innych elementów.
- **`margin` (margines)**: To przestrzeń **na zewnątrz** pudełka, między krawędzią ramki a innymi elementami. Tworzy odstęp między jednym elementem a drugim.

Obie właściwości można ustawić dla wszystkich czterech stron elementu (góra, prawo, dół, lewo) jednocześnie lub indywidualnie.

**Składnia:**

- **Jedna wartość:** `padding: 20px;` (20px ze wszystkich stron).
- **Dwie wartości:** `padding: 10px 20px;` (10px góra/dół, 20px lewo/prawo).
- **Cztery wartości:** `padding: 10px 20px 30px 40px;` (góra, prawo, dół, lewo - zgodnie z ruchem wskazówek zegara).
- **Indywidualne właściwości:** `padding-top`, `padding-right`, `padding-bottom`, `padding-left` (analogicznie dla `margin`).

<!-- end list -->

```css
.box {
  background-color: #cfe2f3; /* Jasnoniebieski */
  border: 1px solid #a9d0ed;
}

.content-box {
  padding: 20px; /* 20px wypełnienia z każdej strony */
}

.spaced-element {
  margin: 15px 0; /* 15px marginesu góra/dół, 0px lewo/prawo */
}

.specific-margins {
  margin-top: 50px;
  margin-left: 25px;
}
```

### Ramki (Borders) - obramuj i zaokrąglaj

Właściwości z prefiksem `border-` pozwalają na dodanie obramowania wokół elementu.

- **`border`**: Skrócona właściwość do ustawienia szerokości, stylu i koloru ramki.
  - **`border: 1px solid black;`**
    - `1px`: szerokość ramki.
    - `solid`: styl ramki (inne to np. `dashed`, `dotted`, `double`).
    - `black`: kolor ramki.
- **`border-width`**: Szerokość ramki (np. `2px`, `medium`, `thick`).
- **`border-style`**: Styl ramki (np. `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, `hidden`).
- **`border-color`**: Kolor ramki.
- **`border-radius`**: **Zaokrągla rogi** elementu. Podajesz wartość promienia zaokrąglenia (np. `5px`, `1em`, `50%` dla idealnego koła/elipsy).

<!-- end list -->

```css
.card {
  border: 2px solid #5cb85c; /* Zielona, ciągła ramka o grubości 2px */
  border-radius: 8px; /* Zaokrąglone rogi na 8 pikseli */
  padding: 15px;
  margin: 10px;
}

.profile-picture {
  border: 3px dotted purple; /* Fioletowa, kropkowana ramka */
  border-radius: 50%; /* Idealne koło (dla kwadratowego obrazka) */
  width: 100px;
  height: 100px;
  object-fit: cover; /* Dopasuj obrazek do kształtu */
}

.notification {
  border: none; /* Brak ramki */
  border-left: 5px solid #ffc107; /* Tylko lewa ramka */
  background-color: #fff3cd;
  padding: 10px;
}
```

Powyższe właściwości to absolutna podstawa. CSS oferuje setki właściwości do kontrolowania typografii (czcionki, rozmiar, waga), układu (Flexbox, Grid), animacji i wielu innych. To świetny początek\!

---

## Zadania do wykonania: Sprawdź swoje umiejętności\!

Czas na praktykę\! Rozwiąż te zadania, aby utrwalić to, czego się nauczyłeś/aś. Utwórz dla każdego zadania plik HTML i osobny plik `style.css`, a następnie połącz je za pomocą `<link rel="stylesheet" href="style.css" />`. Po każdym zadaniu możesz rozwinąć sekcję `Pokaż rozwiązanie`, aby sprawdzić swój kod. Powodzenia\! 💪

### Zadanie 1: Czerwony nagłówek

Stwórz stronę HTML z nagłówkiem `<h1>`. Nadaj mu kolor **czerwony** za pomocą **External CSS**, używając selektora klasy.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 1 - Czerwony Nagłówek</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="czerwony-tekst">Witaj, świecie!</h1>
  </body>
</html>
```

**`style.css`:**

```css
/* style.css */
.czerwony-tekst {
  color: red; /* Ustawienie koloru tekstu na czerwony */
}
```

</details>

---

### Zadanie 2: Kolorowy akapit

Utwórz na nowej stronie HTML akapit (`<p>`). Nadaj mu **zielone tło**, **20 pikseli wypełnienia** (`padding`) ze wszystkich stron oraz **zaokrąglone rogi** o promieniu **10 pikseli**. Użyj selektora klasy w External CSS.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 2 - Kolorowy Akapit</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p class="zielony-akapit">
      Ten akapit ma zielone tło, wypełnienie i zaokrąglone rogi. Wygląda super!
    </p>
  </body>
</html>
```

**`style.css`:**

```css
/* style.css */
.zielony-akapit {
  background-color: lightgreen; /* Kolor tła */
  padding: 20px; /* Wypełnienie wewnątrz elementu */
  border-radius: 10px; /* Zaokrąglenie rogów */
  color: #333; /* Kolor tekstu, żeby był czytelny */
}
```

</details>

---

### Zadanie 3: Stylowy `div`

Stwórz na nowej stronie HTML element `<div>`. Wewnątrz niego umieść tekst "To jest div z ramką.". Nadaj mu **niebieską ramkę** o grubości **2 pikseli** i stylu `solid` (ciągła linia). Użyj selektora elementu dla `div` w External CSS.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 3 - Div z Ramką</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div>To jest div z ramką.</div>
  </body>
</html>
```

**`style.css`:**

```css
/* style.css */
div {
  border: 2px solid blue; /* Niebieska, ciągła ramka o grubości 2 pikseli */
  padding: 10px; /* Dodajemy trochę wypełnienia, żeby tekst nie stykał się z ramką */
  margin: 20px; /* Dodajemy trochę marginesu, żeby div nie był przyklejony do krawędzi */
}
```

</details>

---

### Zadanie 4: Różnokolorowe nagłówki

Utwórz stronę HTML z trzema nagłówkami: `<h1>`, `<h2>` i `<h3>`. Każdemu nagłówkowi nadaj inną klasę (np. `pierwszy-kolor`, `drugi-kolor`, `trzeci-kolor`) i za pomocą External CSS ustaw dla nich odpowiednio kolory: **zielony**, **pomarańczowy** i **fioletowy**.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 4 - Różne Nagłówki</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="zielony-naglowek">Pierwszy Nagłówek (H1)</h1>
    <h2 class="pomaranczowy-naglowek">Drugi Nagłówek (H2)</h2>
    <h3 class="fioletowy-naglowek">Trzeci Nagłówek (H3)</h3>
  </body>
</html>
```

**`style.css`:**

```css
/* style.css */
.zielony-naglowek {
  color: green;
}

.pomaranczowy-naglowek {
  color: orange;
}

.fioletowy-naglowek {
  color: purple;
}
```

</details>

---

Brawo\! 🎉 Ukończyłeś/aś kurs podstaw CSS. Masz już solidne fundamenty, by zacząć stylować swoje strony internetowe. Pamiętaj, że praktyka jest kluczem do mistrzostwa. Eksperymentuj z różnymi właściwościami i selektorami, a zobaczysz, jak wiele możesz zdziałać z CSS\!

Co dalej? Może zainteresuje Cię:

- **Flexbox i Grid** - nowoczesne techniki układania elementów na stronie.
- **Responsywny design** - jak sprawić, by strona wyglądała dobrze na każdym urządzeniu.
- **Animacje i transformacje CSS** - dodawanie efektów wizualnych.

Daj znać, co Cię interesuje\! 😊
