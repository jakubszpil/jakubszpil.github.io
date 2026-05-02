---
title: Renesans w JS, czyli nowoczesny JavaScript
description: JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.
keywords: [javascript, kurs, wprowadzenie, przewodnik, web, frontend, learning]
category: javascript
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy nowoczesnego JavaScript"
  questions:
    - question: "Jaką główną różnicę między `let` a `var` podkreśla się w nowoczesnym JavaScript?"
      options:
        - "Obie są identyczne"
        - "`let` nie pozwala na przyjmowanie wartości domyślnej"
        - "Zakres blokowy (`block scope`) w `let`"
        - "`var` nie istnieje w nowoczesnym JS"
      answer: 2
      explanation: "`let` posiada zakres blokowy, podczas gdy `var` ma zakres funkcyjny."

    - question: "Co zwróci poniższy kod?\n\n```js\nconst arr = [1, 2, 3];\nconst [a, , b] = arr;\nconsole.log(a, b);\n```"
      options:
        - "1 2"
        - "2 3"
        - "undefined 3"
        - "1 3"
      answer: 3
      explanation: "Drugi element jest pomijany. Wynik to 1 i 3."

    - question: "Co robi operator spread (`...`)?"
      options:
        - "Tworzy nowy Promise"
        - "Rozwija elementy tablicy lub właściwości obiektu"
        - "Deklaruje zmienną stałą"
        - "Łączy Promise'y"
      answer: 1
      explanation: "Spread operator służy do rozwijania/skopiowania elementów tablicy lub obiektu."

    - question: "Czym różni się funkcja strzałkowa od zwykłej funkcji pod względem `this`?"
      options:
        - "Funkcja strzałkowa tworzy nowy kontekst `this`"
        - "Nie ma różnicy"
        - "Funkcje strzałkowe nie działają w JS"
        - "Funkcja strzałkowa nie ma własnego `this`"
      answer: 3
      explanation: "Funkcje strzałkowe nie posiadają własnego `this` - dziedziczą go z otoczenia."

    - question: "Jaką wartość zwróci poniższy kod?\n\n```js\nasync function test() { return 5; }\ntest().then(console.log);\n```"
      options:
        - "5"
        - "Promise {<fulfilled>: 5}"
        - "undefined"
        - "Błąd"
      answer: 0
      explanation: "Funkcja async zawsze zwraca Promise, ale `then` wypisze wartość 5."
---

Witaj w świecie **nowoczesnego JavaScriptu**! 🚀 Jeśli HTML to szkielet strony, a CSS to jej wygląd, to JavaScript jest sercem i mózgiem - sprawia, że strona ożywa, staje się interaktywna i dynamiczna. W ciągu ostatnich lat JavaScript przeszedł prawdziwy "renesans". Dzięki wprowadzeniu standardu **ES6** (ECMAScript 2015) i kolejnych aktualizacji, pisanie kodu w JS stało się znacznie przyjemniejsze, bezpieczniejsze i bardziej efektywne.

Ten przewodnik zabierze Cię w podróż po najważniejszych nowościach, które musisz znać, aby pisać **nowoczesny JavaScript**. Nie martw się, jeśli jesteś początkujący/a - wszystko wyjaśnimy krok po kroku, z przykładami i analogiami, byś mógł/mogła od razu zastosować nową wiedzę w praktyce. Czas unowocześnić swoje umiejętności! ✨

## Zmienne: `let`, `const` i zakresy blokowe - pożegnanie z `var`?

W starszych wersjach JavaScriptu zmienne deklarowaliśmy wyłącznie za pomocą słowa kluczowego `var`. Często prowadziło to do pomyłek i trudnych do wykrycia błędów. Nowoczesny JavaScript wprowadza dwa nowe sposoby deklarowania zmiennych: **`let`** i **`const`**, które znacznie poprawiają bezpieczeństwo i przewidywalność kodu.

### Zakres blokowy (`block scope`)

To kluczowa różnica! Zmienne zadeklarowane za pomocą `let` i `const` mają **zakres blokowy**. Co to znaczy? Oznaczają, że zmienna istnieje tylko w obrębie najbliższego **bloku kodu**, czyli wszystko, co znajduje się między klamrowymi nawiasami `{ ... }`.

Pomyśl o tym jak o specjalnej, prywatnej przestrzeni. Jeśli zmienna `x` jest zadeklarowana wewnątrz bloku `if`, będzie dostępna tylko w tym bloku. Próba użycia jej poza nim spowoduje błąd. To chroni Cię przed przypadkowym nadpisaniem zmiennych o tej samej nazwie w innej części kodu.

**Przykład:**

```js
if (true) {
  let x = 5; // x istnieje tylko wewnątrz tego bloku if
  const y = 10; // y również istnieje tylko wewnątrz tego bloku
  console.log(x); // Wyświetli: 5 (dostępne, bo jesteśmy w bloku)
}
// console.log(x); // WYWOŁA BŁĄD! ReferenceError: x is not defined
// console.log(y); // WYWOŁA BŁĄD! ReferenceError: y is not defined
```

Dla porównania, `var` ma **zakres funkcyjny** (function scope), co oznacza, że zmienna zadeklarowana w funkcji jest dostępna w całej funkcji, ale poza funkcją jest dostępna globalnie, co jest źródłem wielu problemów. Dlatego w nowoczesnym kodzie **zdecydowanie unikamy `var`**.

### Różnice między `let`, `const` i `var`

- **`let`**:
  - **Deklaruje zmienną**, której wartość może być **zmieniana** w dowolnym momencie.
  - Ma **zakres blokowy**.
  - Nie można jej ponownie zadeklarować w tym samym bloku (np. `let x = 5; let x = 10;` to błąd), ale można zmienić jej wartość (`x = 10;`).
  - Używaj `let`, gdy wiesz, że wartość zmiennej będzie się zmieniać (np. licznik w pętli).

- **`const`**:
  - Deklaruje **stałą**, której wartość musi być **przypisana od razu** i **nie może być zmieniana** później.
  - Ma **zakres blokowy**.
  - Jeśli przypiszesz do `const` obiekt lub tablicę, nie możesz przypisać do niej _nowego_ obiektu/tablicy, ale możesz **modyfikować zawartość** tego obiektu/tablicy (np. dodawać lub usuwać elementy). `const` gwarantuje, że referencja (wskaźnik) do obiektu pozostaje taka sama, ale nie "zamraża" samego obiektu.
  - Używaj `const`, gdy wartość zmiennej nie powinna się zmieniać. To jest domyślny wybór w nowoczesnym JS, chyba że potrzebujesz `let`.

- **`var`**:
  - **Ma zakres funkcyjny** (lub globalny, jeśli jest poza funkcją).
  - Jest podatny na **hoisting** (podnoszenie deklaracji), co oznacza, że deklaracja zmiennej jest "przenoszona" na początek zakresu, co może prowadzić do nieintuicyjnych zachowań.
  - Można go **wielokrotnie deklarować** w tym samym zakresie, co łatwo prowadzi do przypadkowych nadpisań.
  - **Unikaj używania `var` w nowym kodzie!**

**Przykład `const` z obiektem/tablicą:**

```js
const tablica = [1, 2, 3];
tablica.push(4); // DOZWOLONE! Zmieniamy zawartość tablicy, nie przypisujemy nowej tablicy.
console.log(tablica); // Wyświetli: [1, 2, 3, 4]

// tablica = [5, 6]; // WYWOŁA BŁĄD! TypeError: Assignment to constant variable.
// Próbujesz przypisać zupełnie nową tablicę do stałej referencji.

const osoba = { imie: "Anna", wiek: 28 };
osoba.wiek = 29; // DOZWOLONE! Zmieniamy właściwość obiektu, nie przypisujemy nowego obiektu.
console.log(osoba); // Wyświetli: { imie: "Anna", wiek: 29 }

// osoba = { nazwisko: "Nowak" }; // WYWOŁA BŁĄD!
```

---

## Funkcje strzałkowe (Arrow Functions) i ich zastosowania - krócej i czytelniej

Funkcje strzałkowe to zwięzła alternatywa dla tradycyjnych funkcji JavaScript, która została wprowadzona w ES6. Są nie tylko krótsze, ale także rozwiązują pewien problem z kontekstem `this`, który często mylił początkujących programistów.

### Składnia funkcji strzałkowej

Największą zaletą funkcji strzałkowych jest ich zwięzła składnia, zwłaszcza dla prostych funkcji.

- **Szybszy zapis (szczególnie dla funkcji jedno-liniowych):**
  Jeśli funkcja składa się tylko z jednej instrukcji, która zwraca wartość, możesz pominąć nawiasy klamrowe `{}` i słowo kluczowe `return`.

  ```js
  // Tradycyjna funkcja
  function dodajStara(a, b) {
    return a + b;
  }

  // Funkcja strzałkowa (krótszy zapis)
  const dodaj = (a, b) => a + b;
  console.log(dodaj(5, 3)); // Wyświetli: 8

  // Funkcja z jednym argumentem (można pominąć nawiasy wokół argumentu)
  const powitanie = (imie) => `Cześć, ${imie}!`;
  console.log(powitanie("Ola")); // Wyświetli: Cześć, Ola!

  // Funkcja bez argumentów (konieczne puste nawiasy)
  const powiedzHello = () => "Hello!";
  console.log(powiedzHello()); // Wyświetli: Hello!
  ```

- **Brak własnego obiektu `arguments`:** Funkcje strzałkowe nie mają własnego obiektu `arguments` (który zawiera wszystkie argumenty przekazane do funkcji). Jeśli go potrzebujesz, użyj **rest operatora** (`...`), o którym powiemy później.

- **Brak możliwości użycia jako konstruktor:** Nie możesz użyć funkcji strzałkowej do tworzenia nowych obiektów za pomocą słowa kluczowego `new`.

### Funkcje strzałkowe a kontekst `this`

To jest jeden z najważniejszych powodów, dla których wprowadzono funkcje strzałkowe. W tradycyjnych funkcjach, wartość `this` zależy od tego, jak funkcja jest wywoływana. To prowadziło do częstych błędów, zwłaszcza w callbackach (funkcjach wywoływanych przez inne funkcje, np. w `setTimeout` czy w obsłudze zdarzeń).

Funkcje strzałkowe rozwiązują ten problem: **nie mają własnego `this`**. Zamiast tego, **dziedziczą `this` z otoczenia, w którym zostały zadeklarowane** (tzw. leksykalny `this`).

**Przykład problemu ze `this` w tradycyjnych funkcjach:**

```js
// Tradycyjna funkcja, która "gubi" kontekst this
function TimerProblem() {
  this.sekundy = 0;
  setInterval(function () {
    // Tutaj 'this' nie odnosi się do obiektu TimerProblem,
    // ale do obiektu globalnego (np. window w przeglądarce) lub jest undefined w trybie 'strict mode'
    this.sekundy++; // To nie zadziała tak, jak byśmy chcieli!
    console.log(this.sekundy);
  }, 1000);
}
// new TimerProblem(); // W konsoli prawdopodobnie zobaczysz NaN lub błąd
```

**Rozwiązanie z funkcją strzałkową:**

```js
function TimerPoprawny() {
  this.sekundy = 0;
  // Funkcja strzałkowa dziedziczy 'this' z TimerPoprawny (czyli z obiektu TimerPoprawny)
  setInterval(() => {
    this.sekundy++;
    console.log(`Sekundy: ${this.sekundy}`);
  }, 1000);
}
new TimerPoprawny(); // Będzie poprawnie liczyć sekundy: Sekundy: 1, Sekundy: 2, itd.
```

Dzięki temu funkcje strzałkowe są idealne do użycia w callbackach, metodach obiektów (choć nie jako metody obiektów najwyższego poziomu, bo wtedy `this` wskazałoby na `window`), czy w sytuacjach, gdzie chcesz, aby `this` zachowało kontekst nadrzędny.

---

## Szablony stringów (Template Literals) - łatwiejsza praca z tekstem

Szablony stringów, wprowadzone w ES6, to potężne narzędzie do tworzenia ciągów znaków (stringów). Zastępują tradycyjne łączenie stringów za pomocą operatora `+` i oferują znacznie większą elastyczność i czytelność. Używamy ich, otaczając tekst **backtickami** (apostrofami wstecznymi) ` ` zamiast pojedynczych lub podwójnych cudzysłowów.

### Interpolacja i wielolinijkowość

- **Interpolacja zmiennych i wyrażeń:**
  Możesz łatwo osadzać zmienne lub dowolne wyrażenia JavaScript bezpośrednio w stringu, używając składni `${...}`. To znacznie ułatwia budowanie dynamicznych komunikatów.

  ```js
  const imie = "Alicja";
  const wiek = 30;

  // Stary sposób: męczące łączenie stringów
  const infoStare = "Mam na imię " + imie + " i mam " + wiek + " lat.";
  console.log(infoStare); // Wyświetli: Mam na imię Alicja i mam 30 lat.

  // Nowy sposób z szablonami stringów: czytelniej i prościej!
  const infoNowe = `Mam na imię ${imie} i mam ${wiek} lat.`;
  console.log(infoNowe); // Wyświetli: Mam na imię Alicja i mam 30 lat.

  // Możesz umieszczać dowolne wyrażenia JavaScript:
  const cena = 10.5;
  const ilosc = 2;
  const rachunek = `Koszt zakupu: ${cena * ilosc} zł.`;
  console.log(rachunek); // Wyświetli: Koszt zakupu: 21 zł.
  ```

- **Łatwe tworzenie tekstów wielolinijkowych:**
  Koniec z dodawaniem `n` do każdej linii! W szablonach stringów możesz po prostu nacisnąć Enter, a tekst zachowa formatowanie z nowymi liniami. Jest to szczególnie przydatne przy generowaniu fragmentów HTML bezpośrednio w JavaScript.

  ```js
  // Stary sposób: brzydkie i niewygodne
  const htmlStare =
    "<div>\n  <h1>Witaj!</h1>\n  <p>To jest wielolinijkowy tekst.</p>\n</div>";

  // Nowy sposób: super czytelne!
  const htmlNowe = `
    <div>
      <h1>Witaj!</h1>
      <p>To jest wielolinijkowy tekst. I kolejna linia w tym samym akapicie.</p>
    </div>
  `;

  console.log(htmlNowe);
  ```

### Dodatkowe możliwości

Szablony stringów wspierają także tzw. **tagowane szablony** (`tagged templates`), które pozwalają na zaawansowaną manipulację tekstem przed jego finalnym utworzeniem. Możesz zdefiniować funkcję ("tag"), która będzie przetwarzać części stringu i wartości zmiennych. Jest to bardziej zaawansowana funkcja, używana np. do tłumaczeń, walidacji, bezpiecznego generowania HTML (zapobieganie XSS) czy formatowania danych.

```js
// Przykład funkcji "tagującej"
function upper(strings, ...values) {
  // 'strings' to tablica tekstów, 'values' to tablica zmiennych
  let wynik = strings[0];
  for (let i = 0; i < values.length; i++) {
    wynik += values[i].toUpperCase() + strings[i + 1]; // Zamienia zmienne na duże litery
  }
  return wynik;
}

const imie = "Kasia";
const wiek = 20;
console.log(upper`Cześć, ${imie}! Masz ${wiek} lat?`); // Wyświetli: Cześć, KASIA! Masz 20 lat?
```

W tym przykładzie funkcja `upper` została "przypięta" do szablonu stringu i zmodyfikowała zmienną `imie` na wielkie litery.

---

## Destrukturyzacja tablic i obiektów - wyciągnij to, czego potrzebujesz

Destrukturyzacja to potężna i bardzo często używana funkcja w nowoczesnym JavaScript. Pozwala na "rozpakowanie" wartości z tablic lub właściwości z obiektów do oddzielnych zmiennych w bardzo zwięzły i czytelny sposób. Upraszcza kod i czyni go bardziej deklaratywnym.

### Destrukturyzacja tablic

Pozwala na szybkie przypisanie wartości z tablicy do zmiennych, bazując na ich pozycji.

```js
const kolory = ["czerwony", "zielony", "niebieski"];

// Stary sposób:
// const kolor1 = kolory[0];
// const kolor2 = kolory[1];

// Nowy sposób z destrukturyzacją tablic:
const [pierwszyKolor, drugiKolor, trzeciKolor] = kolory;
console.log(pierwszyKolor); // Wyświetli: czerwony
console.log(drugiKolor); // Wyświetli: zielony

// Można pomijać niektóre elementy (używając przecinków):
const [a, , b] = [1, 2, 3]; // Pomijamy drugi element (2)
console.log(a, b); // Wyświetli: 1 3

// Można przypisać wartości domyślne, jeśli element nie istnieje:
const [x, y, z = "domyślny"] = ["A", "B"];
console.log(x, y, z); // Wyświetli: A B domyślny

// Można zbierać pozostałe elementy do nowej tablicy (rest operator - patrz dalej):
const [pierwszy, ...resztaKolorow] = kolory;
console.log(pierwszy); // Wyświetli: czerwony
console.log(resztaKolorow); // Wyświetli: ["zielony", "niebieski"]
```

### Destrukturyzacja obiektów

Pozwala na przypisanie wartości z obiektu do zmiennych na podstawie nazw ich **kluczy (właściwości)**. Kolejność nie ma znaczenia, liczy się nazwa klucza.

```js
const samochod = { marka: "Ford", model: "Focus", rok: 2018 };

// Stary sposób:
// const markaSamochodu = samochod.marka;
// const modelSamochodu = samochod.model;

// Nowy sposób z destrukturyzacją obiektów:
const { marka, model } = samochod;
console.log(marka); // Wyświetli: Ford
console.log(model); // Wyświetli: Focus

// Można przypisać wartości domyślne, jeśli właściwość nie istnieje:
const { marka: m, kolor = "czarny" } = samochod; // 'kolor' nie istnieje w obiekcie 'samochod'
console.log(m, kolor); // Wyświetli: Ford czarny

// Można zmienić nazwę zmiennej, do której przypisujemy wartość:
const { marka: nazwaMarki, model: typModelu } = samochod;
console.log(nazwaMarki, typModelu); // Wyświetli: Ford Focus

// Można też zbierać pozostałe właściwości do nowego obiektu (rest operator - patrz dalej):
const { rok, ...resztaSamochodu } = samochod;
console.log(rok); // Wyświetli: 2018
console.log(resztaSamochodu); // Wyświetli: { marka: "Ford", model: "Focus" }
```

Destrukturyzacja jest szczególnie przydatna w funkcjach, gdy chcesz łatwo wyciągnąć konkretne dane z obiektów konfiguracyjnych lub z wyników API.

---

## Spread i Rest Operator (`...`) - elastyczność w manipulacji danymi

Operator `...` (trzy kropki) jest jednym z najbardziej uniwersalnych i potężnych narzędzi w nowoczesnym JavaScript. Nazywany jest **operatorem spread** lub **operatorem rest**, w zależności od kontekstu, w jakim jest używany.

### Spread Operator (operator rozproszenia)

Gdy używasz `...` do **rozbicia** elementów tablicy lub właściwości obiektu na pojedyncze elementy, mówimy o **operatorze spread**. Jest to jak "rozłożenie" zawartości kolekcji. 🌐

**Zastosowania Spread Operatora:**

- **Kopiowanie i łączenie tablic:** Tworzenie płytkich kopii tablic lub łączenie ich bez modyfikowania oryginalnych.

  ```js
  const cyfry = [1, 2, 3];
  const noweCyfry = [...cyfry, 4, 5]; // Rozwija [1, 2, 3] do 1, 2, 3, a potem dodaje 4, 5
  console.log(noweCyfry); // Wyświetli: [1, 2, 3, 4, 5]

  const tablica1 = ["a", "b"];
  const tablica2 = ["c", "d"];
  const polaczoneTablice = [...tablica1, ...tablica2];
  console.log(polaczoneTablice); // Wyświetli: ["a", "b", "c", "d"]
  ```

- **Kopiowanie i łączenie obiektów:** Podobnie jak z tablicami, możesz tworzyć kopie obiektów i łączyć ich właściwości.

  ```js
  const osoba = { imie: "Anna", wiek: 28 };
  const osobaZZawodem = { ...osoba, zawod: "Programista" };
  console.log(osobaZZawodem); // Wyświetli: { imie: "Anna", wiek: 28, zawod: "Programista" }

  const daneKontaktowe = { email: "a@example.com", telefon: "123-456-789" };
  const pelneDane = { ...osoba, ...daneKontaktowe };
  console.log(pelneDane); // Wyświetli: { imie: "Anna", wiek: 28, email: "a@example.com", telefon: "123-456-789" }
  ```

  Jeśli klucze się powtarzają, ostatnia wartość nadpisuje poprzednią.

- **Przekazywanie argumentów funkcji:** Możesz rozwijać tablicę jako argumenty funkcji.

  ```js
  function sumuj(a, b, c) {
    return a + b + c;
  }
  const liczby = [10, 20, 30];
  console.log(sumuj(...liczby)); // Rozwija [10, 20, 30] do sumuj(10, 20, 30), wyświetli: 60
  ```

### Rest Operator (operator reszty)

Gdy używasz `...` do **zbierania** wielu elementów w jedną tablicę (lub właściwości w obiekt), mówimy o **operatorze rest**. Jest to jak "zbieranie" luźnych elementów w jedną kolekcję. 🧺

**Zastosowania Rest Operatora:**

- **Zbieranie argumentów funkcji:** Pozwala funkcji przyjmować nieokreśloną liczbę argumentów i traktować je jako tablicę.

  ```js
  function suma(...liczby) {
    // 'liczby' zbiera wszystkie przekazane argumenty w tablicę
    return liczby.reduce(
      (akumulator, aktualnaLiczba) => akumulator + aktualnaLiczba,
      0,
    );
  }
  console.log(suma(1, 2, 3)); // Wyświetli: 6
  console.log(suma(10, 20, 30, 40)); // Wyświetli: 100
  ```

- **W destrukturyzacji (jak widzieliśmy wcześniej):** Zbieranie pozostałych elementów do nowej tablicy lub obiektu.

  ```js
  const [pierwszy, drugi, ...resztaTablicy] = [10, 20, 30, 40, 50];
  console.log(pierwszy); // Wyświetli: 10
  console.log(drugi); // Wyświetli: 20
  console.log(resztaTablicy); // Wyświetli: [30, 40, 50]

  const { imie, ...resztaOsoby } = {
    imie: "Ola",
    wiek: 25,
    miasto: "Warszawa",
  };
  console.log(imie); // Wyświetli: Ola
  console.log(resztaOsoby); // Wyświetli: { wiek: 25, miasto: "Warszawa" }
  ```

Zarówno spread, jak i rest operator są niezwykle przydatne i sprawiają, że kod jest znacznie bardziej zwięzły i czytelny, szczególnie podczas pracy z tablicami i obiektami.

---

## Promise API i obsługa asynchroniczności - opowiadaj historie o przyszłości

JavaScript jest językiem **jednowątkowym**, co oznacza, że może wykonywać tylko jedną operację w danym momencie. Jednak wiele operacji, takich jak pobieranie danych z internetu, odczyt plików, czy operacje na bazie danych, trwa pewien czas. Gdyby JavaScript musiał czekać na ich zakończenie, strona internetowa by się "zawiesiła" (nie reagowałaby na kliknięcia, przewijanie itp.).

Tutaj wkracza **asynchroniczność**. Pozwala ona na rozpoczęcie operacji, a następnie przejście do kolejnych zadań, nie czekając na zakończenie tej pierwszej. Kiedy asynchroniczna operacja się zakończy, JavaScript wróci do niej i wykona dalsze kroki.

Starszym sposobem obsługi asynchroniczności były **callbacki** (funkcje zwrotne), które jednak często prowadziły do tzw. "callback hell" (piekła callbacków) - zagnieżdżonego, trudnego do czytania i utrzymania kodu.

### Czym jest Promise?

**Promise (Obietnica)** to obiekt w JavaScript, który reprezentuje ostateczne zakończenie (lub niepowodzenie) operacji asynchronicznej. Możesz myśleć o Promise jako o "przyszłej wartości". Składasz obietnicę, że w przyszłości otrzymasz wynik - albo sukces, albo błąd. 📦

Promise może znajdować się w jednym z trzech stanów:

1.  **`pending` (oczekujący)**: Początkowy stan; ani spełniony, ani odrzucony. Operacja asynchroniczna nadal trwa.
2.  **`fulfilled` (spełniony)**: Operacja asynchroniczna zakończyła się sukcesem i zwróciła wartość.
3.  **`rejected` (odrzucony)**: Operacja asynchroniczna zakończyła się błędem.

Możesz "podpiąć" funkcje, które zostaną wywołane, gdy Promise zmieni swój stan:

- **`.then()`**: Wywoływany, gdy Promise zostanie `fulfilled` (operacja zakończy się sukcesem). Otrzymuje wartość zwróconą przez Promise.
- **`.catch()`**: Wywoływany, gdy Promise zostanie `rejected` (wystąpi błąd). Otrzymuje obiekt błędu.
- **`.finally()`**: Wywoływany zawsze, niezależnie od tego, czy Promise zakończył się sukcesem, czy błędem. Idealny do czyszczenia zasobów.

**Przykład tworzenia i używania Promise:**

```js
const obietnica = new Promise((resolve, reject) => {
  // Symulujemy operację asynchroniczną (np. pobieranie danych)
  setTimeout(() => {
    const sukces = Math.random() > 0.5; // Losowo decydujemy o sukcesie lub błędzie

    if (sukces) {
      resolve("Dane pobrane pomyślnie!"); // Jeśli sukces, wywołujemy resolve z wynikiem
    } else {
      reject(new Error("Nie udało się pobrać danych.")); // Jeśli błąd, wywołujemy reject z błędem
    }
  }, 2000); // Operacja trwa 2 sekundy
});

console.log("Rozpoczęto operację...");

obietnica
  .then((wiadomosc) => {
    console.log("SUKCES:", wiadomosc); // Wykona się, jeśli obietnica się spełni
  })
  .catch((blad) => {
    console.error("BŁĄD:", blad.message); // Wykona się, jeśli obietnica zostanie odrzucona
  })
  .finally(() => {
    console.log("Operacja zakończona (niezależnie od wyniku)."); // Wykona się zawsze
  });

console.log("Kod po obietnicy nadal się wykonuje..."); // Pokazuje asynchroniczność
```

### Łańcuchy Promise (`Promise Chaining`)

Jedną z największych zalet Promise jest możliwość łączenia wielu operacji asynchronicznych w jeden czytelny "łańcuch". Każdy `.then()` zwraca nowy Promise, co pozwala na kolejne `.then()` wywołane po sobie. Jest to idealne, gdy jedna operacja asynchroniczna zależy od wyniku poprzedniej.

**Przykład łańcucha Promise (pobieranie danych z API):**

```js
// fetch() to wbudowana funkcja JS, która zwraca Promise
fetch("https://jsonplaceholder.typicode.com/users/1") // Pobierz dane użytkownika o ID 1
  .then((response) => {
    // Pierwsze .then: sprawdź, czy odpowiedź jest OK i sparsuj ją jako JSON
    if (!response.ok) {
      throw new Error(`Błąd HTTP! Status: ${response.status}`);
    }
    return response.json(); // Zwróć kolejny Promise z danymi JSON
  })
  .then((user) => {
    // Drugie .then: otrzymaj sparsowane dane użytkownika
    console.log("Pobrany użytkownik:", user.name, user.email);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    ); // Pobierz posty tego użytkownika
  })
  .then((response) => {
    // Trzecie .then: sprawdź odpowiedź i sparsuj posty
    if (!response.ok) {
      throw new Error(`Błąd HTTP! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    // Czwarte .then: otrzymaj posty
    console.log("Liczba postów użytkownika:", posts.length);
  })
  .catch((error) => {
    // .catch: Obsłuż każdy błąd, który wystąpił na dowolnym etapie łańcucha
    console.error("Wystąpił błąd w łańcuchu Promise:", error);
  })
  .finally(() => {
    console.log("Pobieranie danych zakończone.");
  });
```

Promise to podstawa nowoczesnego JS w obsłudze asynchroniczności, a kolejny rozdział pokaże Ci, jak jeszcze bardziej uprościć ich użycie.

---

## Async/await - nowoczesna obsługa kodu asynchronicznego - pisz asynchronicznie, myśl synchronicznie

Mimo że Promise są ogromnym krokiem naprzód w porównaniu do callbacków, kod z długimi łańcuchami `.then().then().catch()` może wciąż być trudny do czytania. Standard ES2017 wprowadził słowa kluczowe **`async`** i **`await`**, które pozwalają pisać kod asynchroniczny w sposób, który wygląda i zachowuje się niemal identycznie jak kod synchroniczny, jednocześnie zachowując asynchroniczną naturę. To game changer! 🎮

### Uproszczenie pracy z Promise

- **`async`**: Musisz oznaczyć funkcję słowem kluczowym `async`, aby móc używać w niej `await`. Funkcja `async` **zawsze zwraca Promise**, nawet jeśli zwrócisz w niej zwykłą wartość - JavaScript automatycznie opakuje ją w Promise.
- **`await`**: Słowo kluczowe `await` może być użyte **tylko wewnątrz funkcji `async`**. Powoduje ono, że wykonanie funkcji `async` zostaje **wstrzymane**, dopóki Promise, na który czeka `await`, nie zostanie **spełniony (fulfilled)**. Kiedy Promise się spełni, `await` "rozpakowuje" jego wartość i przypisuje ją do zmiennej. Jeśli Promise zostanie odrzucony (rejected), `await` "wyrzuci" błąd, który możesz obsłużyć za pomocą `try...catch`.

**Przykład użycia `async/await` (porównaj z przykładem z Promise Chaining):**

```js
async function pobierzDaneUzytkownikaIPosty() {
  try {
    console.log("Rozpoczynam pobieranie danych...");

    // Krok 1: Pobierz dane użytkownika
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!userResponse.ok) {
      throw new Error(
        `Błąd HTTP przy pobieraniu użytkownika! Status: ${userResponse.status}`,
      );
    }
    const user = await userResponse.json(); // Poczekaj na parsowanie JSON
    console.log("Pobrany użytkownik:", user.name, user.email);

    // Krok 2: Pobierz posty tego użytkownika
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
    if (!postsResponse.ok) {
      throw new Error(
        `Błąd HTTP przy pobieraniu postów! Status: ${postsResponse.status}`,
      );
    }
    const posts = await postsResponse.json(); // Poczekaj na parsowanie JSON
    console.log("Liczba postów użytkownika:", posts.length);

    console.log("Wszystkie dane zostały pobrane pomyślnie.");
  } catch (error) {
    // Obsługa każdego błędu, który wystąpił na dowolnym etapie
    console.error("Wystąpił błąd w funkcji async:", error.message);
  } finally {
    console.log("Operacja pobierania danych zakończona.");
  }
}

// Wywołanie funkcji async
pobierzDaneUzytkownikaIPosty();
console.log("Kod poza funkcją async nadal się wykonuje..."); // Pokazuje asynchroniczność
```

Widzisz, jak kod stał się znacznie bardziej liniowy i czytelny? Wygląda to prawie jak tradycyjny kod synchroniczny, mimo że w tle nadal działają Promise i cała magia asynchroniczności.

### Zwracanie wartości i obsługa błędów

- **Zwracanie wartości z funkcji `async`**:
  Jeśli funkcja `async` zwraca jakąś wartość, ta wartość jest automatycznie opakowywana w Promise, który zostanie spełniony z tą wartością.

  ```js
  async function zwrocLiczbe() {
    // Możesz też użyć await, np. await Promise.resolve(42);
    return 42;
  }
  zwrocLiczbe().then((val) => console.log(val)); // Wyświetli: 42
  ```

- **Obsługa błędów z `try...catch`**:
  Największą zaletą `async/await` jest to, że pozwala na używanie standardowych bloków `try...catch` do obsługi błędów w kodzie asynchronicznym. Jeśli Promise, na który czeka `await`, zostanie odrzucony (rejected), `await` "rzuci" błąd, który zostanie przechwycony przez blok `catch`.

  ```js
  async function symulujBlad() {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Coś poszło nie tak!")), 1000);
      });
      console.log(result); // To się nie wykona
    } catch (error) {
      console.error("Złapano błąd:", error.message); // Wyświetli: Złapano błąd: Coś poszło nie tak!
    }
  }
  symulujBlad();
  ```

`async/await` to obecnie **najczęściej rekomendowany** sposób pracy z asynchronicznością w JavaScript, ponieważ znacząco poprawia czytelność i łatwość utrzymania kodu, sprawiając, że złożone operacje asynchroniczne stają się bardziej przejrzyste.

---

## Zadania do wykonania: Sprawdź swoją wiedzę!

Czas na praktykę! Rozwiąż te zadania, aby utrwalić to, czego się nauczyłeś/aś. Po każdym zadaniu możesz rozwinąć sekcję `Pokaż rozwiązanie`, aby sprawdzić swój kod. Powodzenia! 💪

### Zadanie 1

Napisz **funkcję strzałkową**, która przyjmuje dowolną liczbę argumentów numerycznych i zwraca ich sumę. Użyj **rest operatora** do zebrania argumentów.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```js
const sumaWszystkichLiczb = (...liczby) => {
  return liczby.reduce(
    (akumulator, aktualnaLiczba) => akumulator + aktualnaLiczba,
    0,
  );
};

console.log(sumaWszystkichLiczb(1, 2, 3)); // Oczekiwany wynik: 6
console.log(sumaWszystkichLiczb(10, 20, 30, 40)); // Oczekiwany wynik: 100
console.log(sumaWszystkichLiczb()); // Oczekiwany wynik: 0
```

</details>

---

### Zadanie 2

Utwórz obiekt reprezentujący produkt z kluczami: `nazwa`, `cena`, `dostepny`. Następnie użyj **destrukturyzacji obiektu**, aby wyodrębnić te wartości do osobnych zmiennych i wyświetlić je w konsoli. Dodaj również zmienną `producent` z wartością domyślną "Nieznany", na wypadek gdyby nie było jej w obiekcie.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```js
const produkt = { nazwa: "Książka JS", cena: 49.99, dostepny: true };

const { nazwa, cena, dostepny, producent = "Nieznany" } = produkt;

console.log(`Nazwa: ${nazwa}`); // Oczekiwany wynik: Nazwa: Książka JS
console.log(`Cena: ${cena} zł`); // Oczekiwany wynik: Cena: 49.99 zł
console.log(`Dostępny: ${dostepny}`); // Oczekiwany wynik: Dostępny: true
console.log(`Producent: ${producent}`); // Oczekiwany wynik: Producent: Nieznany
```

</details>

---

### Zadanie 3

Stwórz tablicę ulubionych filmów. Następnie użyj **operatora spread** do utworzenia nowej tablicy, która będzie zawierać wszystkie te filmy plus dwa dodatkowe filmy na końcu. Wyświetl nową tablicę w konsoli.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```js
const ulubioneFilmy = ["Incepcja", "Matrix", "Interstellar"];

const nowaListaFilmow = [...ulubioneFilmy, "Pulp Fiction", "Forrest Gump"];

console.log(nowaListaFilmow);
// Oczekiwany wynik: ["Incepcja", "Matrix", "Interstellar", "Pulp Fiction", "Forrest Gump"]
```

</details>

---

### Zadanie 4

Napisz **funkcję asynchroniczną** o nazwie `pobierzWiadomosc`, która symuluje pobieranie wiadomości z serwera. Funkcja powinna używać `setTimeout`, aby po 3 sekundach zwrócić tekst "Wiadomość pobrana!". Użyj `async/await` do wywołania tej funkcji i wyświetlenia jej wyniku w konsoli. Dodaj również blok `try...catch` do obsługi potencjalnych błędów.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```js
// Funkcja symulująca pobieranie danych (zwraca Promise)
const pobierzWiadomoscAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Możesz zmienić to na reject, aby przetestować obsługę błędów
      if (Math.random() > 0.1) {
        // 90% szans na sukces, 10% na błąd
        resolve("Wiadomość pobrana pomyślnie!");
      } else {
        reject(new Error("Błąd podczas pobierania wiadomości!"));
      }
    }, 3000); // Symulujemy 3 sekundy oczekiwania
  });
};

// Funkcja asynchroniczna używająca async/await
async function pobierzWiadomosc() {
  console.log("Rozpoczynam pobieranie wiadomości...");
  try {
    const wiadomosc = await pobierzWiadomoscAPI(); // Czekaj, aż Promise się spełni
    console.log("Sukces:", wiadomosc);
  } catch (error) {
    console.error("Wystąpił błąd:", error.message); // Złap i wyświetl błąd
  } finally {
    console.log("Zakończono próbę pobierania wiadomości.");
  }
}

// Wywołaj funkcję asynchroniczną
pobierzWiadomosc();
console.log(
  "Ten tekst wyświetli się natychmiast po uruchomieniu programu, zanim wiadomość zostanie pobrana.",
);
```

</details>

---

Gratulacje! 🎉 Dotarłeś/aś do końca kursu wprowadzającego w nowoczesny JavaScript. Masz teraz solidne podstawy do dalszego rozwoju. Pamiętaj, że kluczem jest praktyka - im więcej będziesz kodować, tym lepiej zrozumiesz te koncepcje.
