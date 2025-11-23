---
title: Wprowadzenie do HTML
description: Co to jest HTML? HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.
keywords: [kurs, html, dom, struktura, wprowadzenie, learning]
categories: [html]
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy HTML"
  questions:
    - question: "Co oznacza skrót HTML?"
      options:
        - "Home Tool Markup Language"
        - "Hyperlink Text Management Language"
        - "HyperText Markup Language"
        - "HyperTool Marked Language"
      answer: 2
      explanation: "HTML to HyperText Markup Language - język znaczników hipertekstowych."

    - question: "Który znacznik służy do tworzenia akapitu?"
      options:
        - "<h1>"
        - "<p>"
        - "<a>"
        - "<li>"
      answer: 1
      explanation: "<p> służy do oznaczania akapitów tekstu."

    - question: "Jak poprawnie dodać obrazek do strony?"
      options:
        - '<img src="obrazek.jpg" alt="Opis" />'
        - '<image src="obrazek.jpg">'
        - '<picture href="obrazek.jpg">'
        - '<src img="obrazek.jpg">'
      answer: 0
      explanation: 'Poprawny sposób to <img src="adres" alt="opis" />.'

    - question: "Który element tworzy nieuporządkowaną listę?"
      options:
        - "<ol>"
        - "<li>"
        - "<dl>"
        - "<ul>"
      answer: 3
      explanation: "<ul> to lista nieuporządkowana, <ol> - uporządkowana."

    - question: "Za co odpowiada atrybut 'action' w tagu `<form>`?"
      options:
        - "Włącza walidację formularza"
        - "Określa adres, pod który zostaną przesłane dane formularza"
        - "Definiuje typ przesyłanych danych"
        - "Dodaje pole tekstowe"
      answer: 1
      explanation: "Atrybut action określa adres, pod który zostaną wysłane dane formularza."
---

Witaj w świecie tworzenia stron internetowych! 👋 Jeśli kiedykolwiek zastanawiałeś/aś się, jak powstają strony, które codziennie przeglądasz, ten kurs jest dla Ciebie. Nauczysz się podstaw **HTML**, języka, który jest fundamentem każdej witryny. Nie musisz mieć żadnego wcześniejszego doświadczenia - wszystko wytłumaczymy krok po kroku! Gotowy/a, aby zacząć tworzyć swoje pierwsze strony? Zaczynamy! 🚀

## Spis treści

1.  [Co to jest HTML?](#co-to-jest-html)
2.  [Jak działa HTML? Znaczniki i elementy](#jak-działa-html-znaczniki-i-elementy)
3.  [Podstawowa struktura dokumentu HTML](#podstawowa-struktura-dokumentu-html)
    - [Wyjaśnienie struktury krok po kroku](#wyjaśnienie-struktury-krok-po-kroku)
4.  [Podstawowe elementy HTML - Twój zestaw narzędzi](#podstawowe-elementy-html---twój-zestaw-narzędzi)
    - [Nagłówki: Od najważniejszych do najmniej ważnych](#nagłówki-od-najważniejszych-do-najmniej-ważnych)
    - [Akapity: Tworzenie bloków tekstu](#akapity-tworzenie-bloków-tekstu)
    - [Linki: Łączenie stron ze sobą](#linki-łączenie-stron-ze-sobą)
    - [Obrazy: Dodawanie grafiki do strony](#obrazy-dodawanie-grafiki-do-strony)
    - [Listy: Uporządkowanie informacji](#listy-uporządkowanie-informacji)
5.  [Formularze: Zbieranie danych od użytkowników](#formularze-zbieranie-danych-od-użytkowników)
    - [Elementy formularza: Pola tekstowe, przyciski i inne](#elementy-formularza-pola-tekstowe-przyciski-i-inne)
6.  [Zadania do wykonania: Sprawdź swoją wiedzę!](#zadania-do-wykonania-sprawdź-swoją-wiedzę)
    - [Zadanie 1: Twoja pierwsza strona](#zadanie-1-twoja-pierwsza-strona)
    - [Zadanie 2: Strona z obrazkiem](#zadanie-2-strona-z-obrazkiem)
    - [Zadanie 3: Listy smaków i kroków](#zadanie-3-listy-smaków-i-kroków)
    - [Zadanie 4: Prosty formularz](#zadanie-4-prosty-formularz)

---

## Co to jest HTML?

**HTML** to skrót od **HyperText Markup Language**, czyli **Hypertekstowy Język Znaczników**. Co to oznacza w praktyce? To język, który służy do tworzenia szkieletu i struktury każdej strony internetowej. Pomyśl o nim jak o planie architektonicznym domu - określa, gdzie będą ściany, okna, drzwi i podłogi, zanim jeszcze zajmiesz się dekoracją. 🏠

HTML nie jest językiem programowania (nie wykonuje skomplikowanych operacji ani obliczeń), ale językiem znaczników. Oznacza to, że używa specjalnych kodów, zwanych **znacznikami** (ang. _tags_), aby opisać różne części dokumentu. Dzięki nim przeglądarka internetowa (taka jak Chrome, Firefox czy Safari) wie, co jest nagłówkiem, co akapitem, gdzie znajduje się obrazek, a gdzie link. Bez HTML-a strony internetowe byłyby po prostu blokiem niezrozumiałego tekstu.

---

## Jak działa HTML? Znaczniki i elementy

HTML działa na zasadzie **elementów**, które są tworzone za pomocą **znaczników**.

Najprościej mówiąc, znacznik to słowo kluczowe ujęte w nawiasy kątowe, np. `<p>` lub `<h1>`.

Większość znaczników występuje w parach:

- **Znacznik otwierający:** np. `<p>`
- **Znacznik zamykający:** np. `</p>` (z ukośnikiem!)

Pomiędzy tymi dwoma znacznikami umieszczamy zawartość, którą chcemy oznaczyć. Całość - znacznik otwierający, zawartość i znacznik zamykający - tworzy **element HTML**.

**Przykład:**

```html
<p>To jest mój pierwszy akapit!</p>
```

Tutaj:

- `<p>` to znacznik otwierający,
- `</p>` to znacznik zamykający,
- "To jest mój pierwszy akapit!" to zawartość,
- Całość to **element akapitu**.

Są też znaczniki, które nie potrzebują znacznika zamykającego, ponieważ nie zawierają żadnej zawartości między znacznikami. Nazywamy je **znacznikami pustymi** lub **samozamykającymi się**. Przykładem jest znacznik obrazka `<img>` lub przejścia do nowej linii `<br>`.

---

## Podstawowa struktura dokumentu HTML

Każdy plik HTML powinien mieć podstawową, określoną strukturę, która informuje przeglądarkę, jak ma interpretować i wyświetlać zawartość. To jak szkielet, na którym zbudujemy całą resztę. 💀

Oto standardowy szablon, który zawsze będzie punktem wyjścia:

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tytuł mojej wspaniałej strony</title>
  </head>
  <body>
    <h1>Witaj, świecie HTML!</h1>
    <p>
      To jest moja pierwsza prawdziwa strona internetowa. Jestem
      podekscytowany/a!
    </p>
  </body>
</html>
```

### Wyjaśnienie struktury krok po kroku

Rozbierzmy ten kod na części, aby dokładnie zrozumieć, co oznacza każdy element:

- **`<!DOCTYPE html>`**
  - To pierwsza linia w każdym dokumencie HTML. Mówi przeglądarce, że używasz **HTML5**, najnowszej wersji HTML. To ważne, bo pomaga przeglądarce prawidłowo renderować stronę.

- **`<html lang="pl">...</html>`**
  - To jest **korzeń** całego dokumentu HTML. Wszystkie inne elementy strony muszą znajdować się wewnątrz tego znacznika. Atrybut `lang="pl"` informuje przeglądarkę i wyszukiwarki, że język treści na stronie to **polski**. To jest ważne dla dostępności i SEO (pozycjonowania w wyszukiwarkach).

- **`<head>...</head>`**
  - Sekcja `<head>` zawiera **meta dane** - informacje o stronie, które nie są widoczne bezpośrednio dla użytkownika na stronie, ale są kluczowe dla przeglądarki, wyszukiwarek i mediów społecznościowych. To tak, jakbyś przygotowywał/a brief dla kogoś, kto ma zobaczyć Twoją pracę. 📋

  - **`<meta charset="UTF-8" />`**
    - Ten znacznik ustawia **kodowanie znaków** na **UTF-8**. UTF-8 to standardowe kodowanie, które obsługuje wszystkie języki świata, w tym polskie znaki (ą, ę, ć, ł, itd.). Bez tego znacznika polskie litery mogłyby wyświetlać się jako "krzaczki". 🐛

  - **`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`**
    - Ten meta tag jest niezwykle ważny dla **responsywności** strony. Mówi przeglądarce na urządzeniach mobilnych (smartfonach, tabletach), aby strona była wyświetlana z odpowiednią szerokością (`width=device-width`) i początkowym skalowaniem (`initial-scale=1.0`). Dzięki temu Twoja strona będzie wyglądać dobrze zarówno na dużym ekranie komputera, jak i na małym ekranie telefonu. 📱🖥️

  - **`<title>Tytuł mojej wspaniałej strony</title>`**
    - Tekst wewnątrz znacznika `<title>` to **tytuł strony**, który pojawia się na karcie przeglądarki lub w zakładkach. Jest to również to, co widzą użytkownicy w wynikach wyszukiwania Google. Wybierz chwytliwy i opisowy tytuł! 🔖

- **`<body>...</body>`**
  - Sekcja `<body>` zawiera całą **widoczną treść strony** - to, co użytkownik faktycznie zobaczy w oknie przeglądarki. Wszystkie Twoje nagłówki, akapity, obrazy, linki, listy i formularze znajdą się tutaj. Pomyśl o tym jako o głównym "ciele" Twojej strony. 🖼️

---

## Podstawowe elementy HTML - Twój zestaw narzędzi

Teraz, gdy znasz podstawową strukturę, przejdźmy do konkretnych elementów, których będziesz używać najczęściej do tworzenia treści. To jak Twoje klocki LEGO do budowania strony! 🧱

### Nagłówki: Od najważniejszych do najmniej ważnych

Nagłówki (`<h1>` do `<h6>`) służą do definiowania tytułów i podtytułów na stronie. Są kluczowe dla struktury treści i pomagają użytkownikom (i wyszukiwarkom) zrozumieć hierarchię informacji. `<h1>` to najważniejszy nagłówek, a `<h6>` najmniej ważny. Używaj ich logicznie, jak w książce: `<h1>` dla tytułu rozdziału, `<h2>` dla podrozdziału itd. 📚

```html
<h1>To jest główny tytuł strony (najważniejszy)</h1>
<h2>To jest podtytuł drugiego poziomu</h2>
<h3>To jest podtytuł trzeciego poziomu</h3>
<h4>Podtytuł czwartego poziomu</h4>
<h5>Podtytuł piątego poziomu</h5>
<h6>Podtytuł szóstego poziomu (najmniej ważny)</h6>
```

### Akapity: Tworzenie bloków tekstu

Akapity tekstu oznacza się elementem `<p>`. Służą one do grupowania zwykłego tekstu. Każdy akapit zaczyna się w nowej linii i ma pewne marginesy, które oddzielają go od innych elementów.

```html
<p>
  To jest pierwszy akapit mojej strony. Tutaj mogę pisać o czym tylko zechcę.
</p>
<p>
  A to jest drugi akapit. Widzisz, jak przeglądarka automatycznie dodaje odstęp
  między nimi?
</p>
```

### Linki: Łączenie stron ze sobą

Linki (`<a>`, od ang. _anchor_) to serce internetu! Pozwalają użytkownikom nawigować między stronami internetowymi. Aby stworzyć link, użyj znacznika `<a>` i atrybutu **`href`** (Hypertext Reference), który wskazuje adres docelowy.

```html
<a href="https://www.example.com"
  >Kliknij tutaj, aby przejść do strony Example.com</a
>
<p>
  Odwiedź również <a href="https://www.google.com" target="_blank">Google</a>,
  aby szukać informacji (otworzy się w nowej karcie).
</p>
```

- **`href`**: Ten atrybut jest najważniejszy - określa adres URL, na który link prowadzi.
- **`target="_blank"`**: Jeśli dodasz ten atrybut, link otworzy się w nowej karcie przeglądarki, co jest często przydatne, gdy nie chcesz, by użytkownik opuścił Twoją stronę.

### Obrazy: Dodawanie grafiki do strony

Element `<img>` służy do wstawiania obrazów na stronę. Jest to **znacznik pusty**, co oznacza, że nie ma znacznika zamykającego, ponieważ obrazek "nie zawiera" tekstu między znacznikami, a jedynie odwołuje się do pliku graficznego.

Wymaga dwóch kluczowych atrybutów:

- **`src`** (source): Określa ścieżkę do pliku obrazu (adres URL lub ścieżka do pliku na Twoim komputerze/serwerze).
- **`alt`** (alternative text): Jest to **niezwykle ważny** tekst alternatywny, który wyświetla się, jeśli obrazek się nie załaduje, lub jest odczytywany przez czytniki ekranowe dla osób niewidomych. Zawsze dodawaj sensowny `alt`!

<!-- end list -->

```html
<img
  src="https://via.placeholder.com/300x200"
  alt="Przykładowy obrazek prostokątny o wymiarach 300x200 pikseli"
/>
<img
  src="moj-pies.jpg"
  alt="Zdjęcie mojego psa rasy golden retriever leżącego na trawie"
/>
```

### Listy: Uporządkowanie informacji

Listy to świetny sposób na uporządkowanie informacji na stronie. HTML oferuje dwa główne typy list:

1.  **Listy nieuporządkowane (`<ul>` - unordered list)**: Elementy listy są oznaczane punktami (kropkami, kwadratami itp.). Idealne do wyliczania rzeczy, gdzie kolejność nie ma znaczenia.

    ```html
    <h3>Moje ulubione owoce:</h3>
    <ul>
      <li>Jabłka</li>
      <li>Banany</li>
      <li>Pomarańcze</li>
    </ul>
    ```

2.  **Listy uporządkowane (`<ol>` - ordered list)**: Elementy listy są numerowane (1, 2, 3...). Idealne do kroków, instrukcji, czy rankingu, gdzie kolejność jest ważna.

    ```html
    <h3>Kroki do ugotowania kawy:</h3>
    <ol>
      <li>Zagotuj wodę.</li>
      <li>Wsyp kawę do kubka.</li>
      <li>Zalej kawę gorącą wodą.</li>
      <li>Dodaj cukier i mleko (opcjonalnie).</li>
    </ol>
    ```

W obu przypadkach, każdy pojedynczy element listy jest umieszczany w znaczniku **`<li>`** (list item).

---

## Formularze: Zbieranie danych od użytkowników

Formularze to interaktywne elementy, które pozwalają użytkownikom wprowadzać dane, takie jak imię, adres e-mail, hasło, czy wybierać opcje. Są podstawą każdego interaktywnego serwisu internetowego - od logowania, przez kontakt, po koszyki zakupowe. 🛒

Głównym elementem jest znacznik **`<form>`**, który zawiera wszystkie pola formularza.

```html
<form action="/submit-data" method="post">
  <label for="username">Nazwa użytkownika:</label><br />
  <input
    type="text"
    id="username"
    name="username"
    placeholder="Wpisz swoje imię"
  /><br /><br />

  <label for="email">Adres e-mail:</label><br />
  <input type="email" id="email" name="email" required /><br /><br />

  <p>Wybierz swój ulubiony kolor:</p>
  <input type="radio" id="red" name="fav_color" value="red" />
  <label for="red">Czerwony</label><br />
  <input type="radio" id="blue" name="fav_color" value="blue" />
  <label for="blue">Niebieski</label><br /><br />

  <input type="checkbox" id="newsletter" name="newsletter" value="yes" />
  <label for="newsletter">Zapisz się do newslettera</label><br /><br />

  <input type="submit" value="Wyślij formularz" />
</form>
```

### Elementy formularza: Pola tekstowe, przyciski i inne

- **`action`**: Ten atrybut w tagu `<form>` określa **adres URL**, na który zostaną wysłane dane z formularza po jego zatwierdzeniu. Zazwyczaj jest to adres skryptu na serwerze, który przetworzy te dane.

- **`method`**: Określa **metodę HTTP**, jaką dane zostaną wysłane. Najczęściej używa się:
  - **`"post"`**: Dane są wysyłane "za kulisami" i nie są widoczne w adresie URL. Używane do przesyłania wrażliwych danych (np. haseł) lub dużych ilości danych.
  - **`"get"`**: Dane są dodawane do adresu URL. Dobre dla prostych zapytań (np. wyszukiwanie).

- **`<label for="id_pola">Etykieta:</label>`**: Element `<label>` tworzy etykietę (opis) dla pola formularza. Atrybut `for` powinien mieć tę samą wartość co atrybut `id` w powiązanym polu `<input>`. Dzięki temu kliknięcie etykiety aktywuje pole, co poprawia dostępność.

- **`<input type="...">`**: To najbardziej wszechstronny element formularza. Atrybut `type` definiuje rodzaj pola:
  - **`type="text"`**: Standardowe pole do wprowadzania krótkiego tekstu (np. imię, nazwisko).
    - `placeholder`: Tekst podpowiedzi widoczny w polu, zanim użytkownik zacznie pisać.
  - **`type="email"`**: Pole do wprowadzania adresu e-mail. Przeglądarka może sprawdzić, czy format adresu jest poprawny.
    - `required`: Atrybut, który sprawia, że pole jest obowiązkowe do wypełnienia przed wysłaniem formularza.
  - **`type="password"`**: Pole do wprowadzania hasła. Wpisywany tekst jest maskowany (np. kropkami).
  - **`type="radio"`**: Przyciski wyboru. Pozwalają wybrać **tylko jedną** opcję z grupy. Opcje w tej samej grupie muszą mieć tę samą wartość atrybutu `name`.
  - **`type="checkbox"`**: Pola wyboru. Pozwalają wybrać **jedną lub więcej** opcji z listy.
  - **`type="submit"`**: Przycisk służący do wysłania danych formularza. Atrybut `value` określa tekst wyświetlany na przycisku.

- **`id="nazwa_id"`**: Unikalny identyfikator dla każdego elementu HTML na stronie. Jest używany do łączenia etykiet z polami formularza oraz do stylizacji (CSS) i interakcji (JavaScript).

- **`name="nazwa_pola"`**: To kluczowy atrybut dla formularzy! Określa nazwę pola, pod którą jego wartość zostanie wysłana na serwer. Bez `name` dane z pola nie zostaną przesłane.

---

## Zadania do wykonania: Sprawdź swoją wiedzę!

Czas na praktykę! Wykonaj poniższe zadania, aby utrwalić zdobytą wiedzę. Po każdym zadaniu możesz rozwinąć sekcję `Pokaż rozwiązanie`, aby sprawdzić swój kod. Pamiętaj, że nauka przez działanie jest najskuteczniejsza! 💪

### Zadanie 1: Twoja pierwsza strona

Utwórz nowy plik HTML (np. `moja_strona.html`) i dodaj do niego:

- Deklarację `<!DOCTYPE html>`.
- Podstawową strukturę `<html>`, `<head>` i `<body>`.
- W sekcji `<head>` dodaj tytuł strony: "Moja wspaniała strona o HTML".
- W sekcji `<body>` dodaj:
  - Nagłówek `<h1>` z tytułem "Witaj w świecie HTML!".
  - Akapit z krótkim opisem o tym, co właśnie się uczysz.
  - Link do strony głównej Google ( `https://www.google.com` ), który otworzy się w nowej karcie.

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
    <title>Moja wspaniała strona o HTML</title>
  </head>
  <body>
    <h1>Witaj w świecie HTML!</h1>
    <p>
      Właśnie uczę się podstaw języka HTML, który jest fundamentem każdej strony
      internetowej. Jest to naprawdę fascynujące!
    </p>
    <p>
      Możesz
      <a href="https://www.google.com" target="_blank">odwiedzić Google</a>, aby
      znaleźć więcej informacji.
    </p>
  </body>
</html>
```

</details>

---

### Zadanie 2: Strona z obrazkiem

Stwórz nową stronę HTML o nazwie `obrazki.html`, która zawiera:

- Nagłówek `<h2>` o treści "Galeria obrazków".
- Obrazek z internetu (możesz użyć dowolnego publicznego adresu URL obrazka, np. `https://picsum.photos/400/300`).
- Upewnij się, że obrazek ma sensowny tekst alternatywny (`alt`).

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
    <title>Galeria obrazków</title>
  </head>
  <body>
    <h2>Galeria obrazków</h2>
    <img
      src="https://picsum.photos/400/300"
      alt="Losowy obrazek przedstawiający krajobraz lub architekturę"
    />
    <p>To jest przykładowy obrazek pobrany z serwisu Picsum Photos.</p>
  </body>
</html>
```

</details>

---

### Zadanie 3: Listy smaków i kroków

Utwórz plik `listy.html`, w którym znajdą się:

- Nagłówek `<h1>` o treści "Moje ulubione rzeczy".
- **Lista nieuporządkowana** z trzema ulubionymi kolorami.
- **Lista uporządkowana** z trzema krokami, jak zrobić kanapkę.

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
    <title>Listy w HTML</title>
  </head>
  <body>
    <h1>Moje ulubione rzeczy</h1>
    <h2>Ulubione kolory:</h2>
    <ul>
      <li>Niebieski</li>
      <li>Zielony</li>
      <li>Czerwony</li>
    </ul>
    <h2>Jak zrobić kanapkę:</h2>
    <ol>
      <li>Weź dwie kromki chleba.</li>
      <li>Posmaruj jedną kromkę masłem lub innym smarowidłem.</li>
      <li>Dodaj ulubione składniki (ser, szynka, warzywa).</li>
      <li>Przykryj drugą kromką chleba.</li>
    </ol>
  </body>
</html>
```

</details>

---

### Zadanie 4: Prosty formularz

Stwórz plik `formularz.html`, w którym umieścisz prosty formularz kontaktowy. Formularz powinien zawierać:

- Nagłówek `<h2>` o treści "Formularz kontaktowy".
- Pole tekstowe na **imię i nazwisko** (`type="text"`).
- Pole tekstowe na **adres e-mail** (`type="email"`, obowiązkowe do wypełnienia).
- Pole typu **checkbox** z napisem "Zgadzam się na otrzymywanie newslettera".
- Przycisk do **wysłania formularza** z napisem "Wyślij wiadomość".

Pamiętaj o użyciu etykiet `<label>` dla każdego pola i nadaniu odpowiednich `id` oraz `name`.

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
    <title>Mój formularz</title>
  </head>
  <body>
    <h2>Formularz kontaktowy</h2>
    <form action="/submit-contact" method="post">
      <label for="full_name">Imię i nazwisko:</label><br />
      <input
        type="text"
        id="full_name"
        name="full_name"
        placeholder="Jan Kowalski"
      /><br /><br />

      <label for="email_contact">Adres e-mail:</label><br />
      <input
        type="email"
        id="email_contact"
        name="email_contact"
        required
        placeholder="twoj.email@example.com"
      /><br /><br />

      <input
        type="checkbox"
        id="newsletter_consent"
        name="newsletter_consent"
        value="yes"
      />
      <label for="newsletter_consent"
        >Zgadzam się na otrzymywanie newslettera</label
      ><br /><br />

      <input type="submit" value="Wyślij wiadomość" />
    </form>
  </body>
</html>
```

</details>

---

To koniec Twojej pierwszej lekcji HTML! 🎉 Masz teraz solidne podstawy, aby zacząć budować swoje własne strony internetowe. Pamiętaj, że praktyka czyni mistrza - im więcej będziesz kodować, tym lepiej zrozumiesz ten język.

Co chciałbyś/chciałabyś poznać dalej? Może stylowanie stron za pomocą CSS, albo interaktywność dzięki JavaScript? Daj znać! 😊
