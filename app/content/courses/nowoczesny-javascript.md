---
title: Renesans w JS, czyli nowoczesny JavaScript
description: JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.
keywords: [javascript, kurs, wprowadzenie, przewodnik, web, frontend, learning]
categories: [wprowadzenie, javascript]
createdAt: 2024-06-30
---

JavaScript to wszechstronny język programowania, kluczowy dla współczesnych aplikacji webowych i nie tylko. Wraz z pojawieniem się standardu ES6 (ECMAScript 2015) oraz kolejnych aktualizacji, JS stał się bardziej ekspresyjny, bezpieczny i wygodny w użyciu. W tym przewodniku poznasz najważniejsze zagadnienia nowoczesnego JavaScriptu, które pozwolą Ci pisać czytelny, skuteczny i łatwo rozwijalny kod.

## Spis treści

1. [Zmienne: `let`, `const` i zakresy blokowe](#zmienne-let-const-i-zakresy-blokowe)
2. [Funkcje strzałkowe i ich zastosowania](#funkcje-strzałkowe-i-ich-zastosowania)
3. [Szablony stringów (Template Literals)](#szablony-stringów-template-literals)
4. [Destrukturyzacja tablic i obiektów](#destrukturyzacja-tablic-i-obiektów)
5. [Spread i rest operator (`...`)](#spread-i-rest-operator-)
6. [Promise API i obsługa asynchroniczności](#promise-api-i-obsługa-asynchroniczności)
7. [Async/await – nowoczesna obsługa kodu asynchronicznego](#asyncawait--nowoczesna-obsługa-kodu-asynchronicznego)
8. [Zadania do wykonania](#zadania-do-wykonania)

---

## Zmienne: `let`, `const` i zakresy blokowe

### Zakres blokowy (`block scope`)

W przeciwieństwie do starszego `var`, deklaracje `let` i `const` są ograniczone do bloku, w którym zostały zadeklarowane (czyli do najbliższych `{ ... }`). Dzięki temu unikasz tzw. „przecieków zmiennych” (variable hoisting) i niezamierzonych nadpisań.

```javascript
if (true) {
  let x = 5;
  const y = 10;
  console.log(x); // 5
}
// console.log(x); // ReferenceError
```

### Różnice między `let`, `const` i `var`

- `let` – pozwala na modyfikację wartości, ale nie na ponowną deklarację w tym samym bloku.
- `const` – wymaga przypisania wartości przy deklaracji i nie pozwala na jej zmianę (dotyczy to referencji, niekoniecznie zawartości – patrz poniżej).
- `var` – ma zakres funkcyjny (function scope), podlega hoistingowi, co może prowadzić do nieprzewidzianych rezultatów.

```javascript
const tablica = [1, 2, 3];
tablica.push(4); // Dozwolone! Zmieniamy zawartość, nie referencję.
// tablica = [1, 2]; // Błąd! Przypisanie nowej referencji jest niedozwolone.
```

---

## Funkcje strzałkowe i ich zastosowania

### Składnia funkcji strzałkowej

- Szybszy zapis (szczególnie dla funkcji jedno-liniowych).
- Automatyczne wiązanie `this` do kontekstu, w którym funkcja została zadeklarowana.
- Brak własnego obiektu `arguments` oraz brak możliwości użycia jako konstruktor.

```javascript
const dodaj = (a, b) => a + b;
const powitanie = (imie) => `Cześć, ${imie}!`;
```

### Funkcje strzałkowe a kontekst `this`

Funkcje strzałkowe nie mają własnego `this`, przez co bardzo dobrze sprawdzają się w metodach, callbackach czy w obsłudze zdarzeń, gdzie chcemy korzystać z kontekstu obiektu nadrzędnego.

```javascript
function Timer() {
  this.sekundy = 0;
  setInterval(() => {
    this.sekundy++;
    console.log(this.sekundy);
  }, 1000);
}
new Timer(); // this.sekundy będzie poprawnie zwiększane
```

---

## Szablony stringów (Template Literals)

### Interpolacja i wielolinijkowość

Szablony stringów pozwalają na interpolację zmiennych i wyrażeń oraz łatwe tworzenie tekstów wielolinijkowych, co jest szczególnie przydatne np. przy generowaniu HTML-a lub komunikatów:

```javascript
const imie = "Ola";
const wiek = 25;
const info = `Mam na imię ${imie} i mam ${wiek} lat.`;
console.log(info);

const html = `
<div>
  <h1>${imie}</h1>
  <p>Wiek: ${wiek}</p>
</div>
`;
```

### Dodatkowe możliwości

Szablony stringów wspierają także tzw. tagowane szablony (`tagged templates`), które pozwalają na zaawansowaną manipulację tekstem (np. do tłumaczeń, walidacji, formatowania).

```javascript
function upper(strings, ...values) {
  return strings[0] + values.map((v) => v.toUpperCase()).join("");
}
const imie = "Ania";
console.log(upper`Cześć, ${imie}!`); // Cześć, ANIA!
```

---

## Destrukturyzacja tablic i obiektów

### Destrukturyzacja tablic

Pozwala na szybkie przypisanie wartości z tablicy do zmiennych:

```javascript
const [pierwszy, drugi, trzeci = 0] = [10, 20];
console.log(pierwszy, drugi, trzeci); // 10 20 0 (wartość domyślna)
```

Można pomijać niektóre elementy lub korzystać z reszty:

```javascript
const [a, , b, ...reszta] = [1, 2, 3, 4, 5];
console.log(a, b, reszta); // 1 3 [4, 5]
```

### Destrukturyzacja obiektów

Do zmiennych przypisywane są wartości na podstawie nazw kluczy:

```javascript
const osoba = { imie: "Jan", wiek: 30, kraj: "PL" };
const { wiek, imie, miasto = "nieznane" } = osoba;
console.log(imie, wiek, miasto); // Jan 30 nieznane
```

Można zmieniać nazwy zmiennych:

```javascript
const { imie: name, wiek: age } = osoba;
console.log(name, age); // Jan 30
```

---

## Spread i rest operator (`...`)

### Spread operator

Pozwala na rozwinięcie (skopiowanie) elementów tablicy lub właściwości obiektu:

```javascript
const tablica = [1, 2, 3];
const nowaTablica = [...tablica, 4, 5]; // [1, 2, 3, 4, 5]

const obiekt = { a: 1, b: 2 };
const nowyObiekt = { ...obiekt, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest operator

Pozwala na zbieranie wielu wartości w jedną tablicę (lub obiekt):

```javascript
function suma(...liczby) {
  return liczby.reduce((a, b) => a + b, 0);
}
console.log(suma(1, 2, 3, 4)); // 10

const { a, ...reszta } = { a: 1, b: 2, c: 3 };
console.log(reszta); // { b: 2, c: 3 }
```

---

## Promise API i obsługa asynchroniczności

### Czym jest Promise?

Promise reprezentuje operację asynchroniczną, która może zakończyć się sukcesem (`resolve`) lub błędem (`reject`). Stany: _pending_ → _fulfilled_ lub _rejected_.

```javascript
const obietnica = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sukces = Math.random() > 0.5;
    if (sukces) resolve("Sukces!");
    else reject("Błąd!");
  }, 1000);
});

obietnica
  .then((wynik) => console.log(wynik))
  .catch((błąd) => console.error(błąd))
  .finally(() => console.log("Gotowe!"));
```

### Łańcuchy Promise

Możesz łączyć wiele operacji asynchronicznych w łańcuch:

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => console.log(user))
  .catch((error) => console.log(error));
```

---

## Async/await – nowoczesna obsługa kodu asynchronicznego

### Uproszczenie pracy z Promise

Słowa kluczowe `async` i `await` pozwalają pisać kod asynchroniczny w stylu synchronicznym, co znacząco poprawia czytelność i obsługę błędów.

```javascript
async function pobierzDane() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.error("Błąd:", error);
  }
}
pobierzDane();
```

### Zwracanie wartości i obsługa błędów

Wartość zwrócona przez funkcję oznaczoną `async` jest automatycznie opakowana w Promise.

```javascript
async function zwrocLiczbe() {
  return 42;
}
zwrocLiczbe().then((val) => console.log(val)); // 42
```

Obsługa błędów działa z użyciem standardowego `try...catch`.

---

## Zadania do wykonania

### Zadanie 1

Napisz funkcję strzałkową, która przyjmuje dowolną liczbę argumentów i zwraca ich sumę.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
const suma = (...args) => args.reduce((a, b) => a + b, 0);
console.log(suma(1, 2, 3)); // 6
```

</details>

---

### Zadanie 2

Utwórz obiekt reprezentujący użytkownika z kluczami: `imie`, `email`, `aktywny`. Następnie użyj destrukturyzacji, by wyodrębnić te wartości i wyświetlić je w konsoli.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
const user = { imie: "Ewa", email: "ewa@example.com", aktywny: true };
const { imie, email, aktywny } = user;
console.log(imie, email, aktywny); // Ewa ewa@example.com true
```

</details>

---

### Zadanie 3

Stwórz tablicę imion, a następnie utwórz nową tablicę ze wszystkimi tymi imionami plus dodatkowym imieniem na końcu (wykorzystaj spread).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
const imiona = ["Anna", "Bartek"];
const wiecejImion = [...imiona, "Celina"];
console.log(wiecejImion); // ["Anna", "Bartek", "Celina"]
```

</details>

---

### Zadanie 4

Napisz funkcję asynchroniczną, która symuluje pobieranie danych z serwera (z użyciem `setTimeout` i Promise) i po 2 sekundach wyświetla wynik.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
const pobierzDane = () =>
  new Promise((resolve) => setTimeout(() => resolve("Dane pobrane!"), 2000));

const asyncFunction = async () => {
  console.log("Pobieram dane...");
  const dane = await pobierzDane();
  console.log(dane);
};

asyncFunction();
```

</details>

---

To tylko początek przygody z nowoczesnym JavaScriptem! Zachęcam do dalszego zgłębiania m.in. takich zagadnień jak: klasy ES6, moduły, funkcje wyższego rzędu, obsługa błędów, praca z API, a także frameworków opartych na JS (React, Vue, Svelte).
