---
title: Wprowadzenie do JavaScript
description: JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.
keywords: [javascript, kurs, wprowadzenie, przewodnik, web, frontend, learning]
categories: [javascript]
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy JavaScript"
  questions:
    - question: "Które słowo kluczowe powinieneś użyć do zadeklarowania stałej wartości w JavaScript?"
      options:
        - "let"
        - "var"
        - "const"
        - "static"
      answer: 2
      explanation: "Stałe deklarujemy za pomocą const."

    - question: "Jakie typy danych NIE występują w JavaScript?"
      options:
        - "Number"
        - "String"
        - "Character"
        - "Boolean"
      answer: 2
      explanation: "Typ 'Character' nie istnieje w JavaScript."

    - question: "Jak wygląda przykładowa funkcja strzałkowa, która zwraca sumę dwóch liczb?"
      options:
        - "const suma = (a, b) => a + b;"
        - "function suma(a, b) { return a + b; }"
        - "let suma = add(a, b);"
        - "sum(a, b) => a + b;"
      answer: 0
      explanation: "Funkcja strzałkowa: const suma = (a, b) => a + b;"

    - question: "Jak uzyskać długość tablicy w JavaScript?"
      options:
        - "array.length"
        - "length(array)"
        - "array.size()"
        - "array.count"
      answer: 0
      explanation: "array.length zwraca długość tablicy."

    - question: "Co wypisze poniższy kod?\n\n```javascript\nlet x = 10;\nif (x > 5) { console.log('OK'); } else { console.log('NIE'); }\n```"
      options:
        - "NIE"
        - "undefined"
        - "5"
        - "OK"
      answer: 3
      explanation: "Ponieważ 10 > 5, warunek jest prawdziwy i wypisze 'OK'."
---

## Spis treści

1. [Czym jest JavaScript?](#czym-jest-javascript)
2. [Zmienne](#zmienne)
3. [Typy danych](#typy-danych)
4. [Operatory](#operatory)
5. [Struktury kontrolne](#struktury-kontrolne)
   - [Instrukcja if](#instrukcja-if)
   - [Pętla for](#petla-for)
   - [Pętla while](#petla-while)
6. [Funkcje](#funkcje)
   - [Deklaracja funkcji](#deklaracja-funkcji)
   - [Funkcje strzałkowe](#funkcje-strzalkowe)
7. [Obiekty](#obiekty)
8. [Tablice](#tablice)
9. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1](#zadanie-1)
   - [Zadanie 2](#zadanie-2)
   - [Zadanie 3](#zadanie-3)
   - [Zadanie 4](#zadanie-4)

---

## Czym jest JavaScript?

**JavaScript** to język programowania, który umożliwia tworzenie dynamicznych i interaktywnych stron internetowych. Jest wykorzystywany zarówno po stronie klienta (w przeglądarce), jak i na serwerze (np. z użyciem Node.js). JavaScript pozwala na reagowanie na akcje użytkownika, manipulowanie elementami HTML, obsługę zdarzeń, walidację formularzy i wiele innych operacji.

---

## Zmienne

Zmienne służą do przechowywania danych w programie. W JavaScript zmienne można deklarować za pomocą `var`, `let` lub `const`:

- `var` – starsza forma, o zasięgu funkcyjnym.
- `let` – zalecana do zmiennych, których wartość się zmienia (zasięg blokowy).
- `const` – do stałych, których wartość nie ulega zmianie.

```javascript
var x = 5; // Zmienna var
let y = 10; // Zmienna let
const z = 15; // Stała const
```

---

## Typy danych

JavaScript obsługuje różne typy danych:

- **Number** (liczby): całkowite i zmiennoprzecinkowe
- **String** (łańcuchy znaków)
- **Boolean** (wartości logiczne: true/false)
- **Object** (obiekty)
- **Array** (tablice)
- **Undefined**, **Null**

```javascript
let liczba = 42; // Number
let tekst = "Hello, World!"; // String
let prawda = true; // Boolean
let obiekt = { imie: "Jan", wiek: 30 }; // Object
let tablica = [1, 2, 3, 4, 5]; // Array
```

---

## Operatory

Operatory służą do wykonywania działań na danych.

```javascript
// Arytmetyczne
let suma = 10 + 5;
let roznica = 10 - 5;
let iloczyn = 10 * 5;
let iloraz = 10 / 5;

// Porównania
let rowne = 10 == 10; // Porównanie wartości
let identyczne = 10 === 10; // Porównanie wartości i typu
let nierowne = 10 != 5; // Nierówność

// Logiczne
let iOperator = true && false; // AND
let lubOperator = true || false; // OR
let nieOperator = !true; // NOT

// Przypisania
let a = 10;
a += 5; // Dodanie i przypisanie
a -= 5; // Odejmowanie i przypisanie
```

---

## Struktury kontrolne

### Instrukcja if

Pozwala wykonywać kod warunkowo.

```javascript
let wiek = 18;

if (wiek >= 18) {
  console.log("Jesteś pełnoletni");
} else {
  console.log("Jesteś niepełnoletni");
}
```

### Pętla for

Wielokrotne wykonywanie fragmentu kodu.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Pętla while

Wykonuje kod dopóki warunek jest prawdziwy.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

## Funkcje

Funkcje umożliwiają grupowanie kodu do wielokrotnego użycia.

### Deklaracja funkcji

```javascript
function dodaj(a, b) {
  return a + b;
}

let wynik = dodaj(5, 10);
console.log(wynik); // 15
```

### Funkcje strzałkowe

Skrócony zapis funkcji.

```javascript
const dodaj = (a, b) => a + b;
let wynik = dodaj(5, 10);
console.log(wynik); // 15
```

---

## Obiekty

Obiekty służą do grupowania powiązanych danych i funkcji.

```javascript
let osoba = {
  imie: "Jan",
  wiek: 30,
  przedstawSie: function () {
    return `Cześć, mam na imię ${this.imie} i mam ${this.wiek} lat.`;
  },
};

console.log(osoba.przedstawSie()); // Cześć, mam na imię Jan i mam 30 lat.
```

---

## Tablice

Tablice przechowują listę wartości.

```javascript
let liczby = [1, 2, 3, 4, 5];
console.log(liczby[0]); // 1

liczby.push(6); // Dodanie elementu na końcu
console.log(liczby); // [1, 2, 3, 4, 5, 6]

liczby.pop(); // Usunięcie ostatniego elementu
console.log(liczby); // [1, 2, 3, 4, 5]
```

---

## Zadania do wykonania

### Zadanie 1

Napisz funkcję, która przyjmuje dwie liczby jako argumenty i zwraca ich iloczyn.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
function iloczyn(a, b) {
  return a * b;
}

let wynik = iloczyn(5, 10);
console.log(wynik); // 50
```

</details>

---

### Zadanie 2

Utwórz obiekt reprezentujący książkę z atrybutami `tytul`, `autor` i `rok`. Dodaj metodę, która zwraca opis książki.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
let ksiazka = {
  tytul: "W pustyni i w puszczy",
  autor: "Henryk Sienkiewicz",
  rok: 1911,
  opis: function () {
    return `${this.tytul} to książka napisana przez ${this.autor} w roku ${this.rok}.`;
  },
};

console.log(ksiazka.opis()); // W pustyni i w puszczy to książka napisana przez Henryk Sienkiewicz w roku 1911.
```

</details>

---

### Zadanie 3

Napisz funkcję, która przyjmuje tablicę liczb i zwraca największą liczbę z tej tablicy.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
function znajdzNajwieksza(tablica) {
  let najwieksza = tablica[0];
  for (let i = 1; i < tablica.length; i++) {
    if (tablica[i] > najwieksza) {
      najwieksza = tablica[i];
    }
  }
  return najwieksza;
}

let liczby = [1, 2, 3, 4, 5];
console.log(znajdzNajwieksza(liczby)); // 5
```

</details>

---

### Zadanie 4

Utwórz tablicę z kilkoma imionami. Następnie za pomocą pętli `for` wyświetl każde imię w konsoli.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
let imiona = ["Jan", "Anna", "Krzysztof", "Maria"];

for (let i = 0; i < imiona.length; i++) {
  console.log(imiona[i]);
}
// Jan
// Anna
// Krzysztof
// Maria
```

</details>

---

To wszystko na temat podstaw JavaScript! Zachęcam do dalszego eksperymentowania, tworzenia własnych funkcji, obiektów i aplikacji oraz zgłębiania bardziej zaawansowanych tematów języka JavaScript.
