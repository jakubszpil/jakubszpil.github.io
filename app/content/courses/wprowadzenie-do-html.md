---
title: Wprowadzenie do HTML
description: Co to jest HTML? HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.
keywords: [kurs, html, dom, struktura, wprowadzenie, learning]
categories: [wprowadzenie, html]
createdAt: 2024-06-30
---

## Spis treści

1. [Co to jest HTML?](#co-to-jest-html)
2. [Podstawowa struktura dokumentu HTML](#podstawowa-struktura-dokumentu-html)
   - [Wyjaśnienie struktury](#wyjasnienie-struktury)
3. [Podstawowe elementy HTML](#podstawowe-elementy-html)
   - [Nagłówki](#naglowki)
   - [Akapity](#akapity)
   - [Linki](#linki)
   - [Obrazy](#obrazy)
   - [Listy](#listy)
4. [Formularze](#formulare)
5. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1](#zadanie-1)
   - [Zadanie 2](#zadanie-2)
   - [Zadanie 3](#zadanie-3)
   - [Zadanie 4](#zadanie-4)

---

## Co to jest HTML?

**HTML** (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. Pozwala oznaczać nagłówki, akapity, listy, obrazy, linki i wiele innych elementów. Dzięki niemu przeglądarka wie, jak wyświetlić i zinterpretować treść strony.

---

## Podstawowa struktura dokumentu HTML

Każdy dokument HTML posiada określoną strukturę i kilka kluczowych sekcji:

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tytuł strony</title>
  </head>
  <body>
    <h1>Witaj, świecie!</h1>
    <p>To jest przykładowa strona HTML.</p>
  </body>
</html>
```

### Wyjaśnienie struktury

- `<!DOCTYPE html>` – Deklaracja typu dokumentu, sygnalizuje przeglądarce użycie HTML5.
- `<html>` – Korzeń dokumentu HTML, obejmuje całą zawartość strony.
- `<head>` – Sekcja z informacjami o stronie (meta dane, tytuł, ustawienia kodowania).
- `<meta charset="UTF-8">` – Określa kodowanie znaków na UTF-8 (umożliwia użycie polskich znaków).
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` – Umożliwia responsywność na urządzeniach mobilnych.
- `<title>` – Tytuł strony wyświetlany na karcie przeglądarki.
- `<body>` – Zawiera właściwą treść strony widoczną dla użytkownika.

---

## Podstawowe elementy HTML

### Nagłówki

Sześć poziomów nagłówków – od najważniejszego `<h1>`, do najmniej ważnego `<h6>`. Używaj ich do hierarchizacji treści.

```html
<h1>Najważniejszy nagłówek</h1>
<h2>Drugi poziom nagłówka</h2>
<h3>Trzeci poziom nagłówka</h3>
```

### Akapity

Akapity tekstu oznacza się elementem `<p>`:

```html
<p>To jest akapit tekstu.</p>
```

### Linki

Tworzenie odnośników do innych stron lub zasobów za pomocą `<a href="...">`:

```html
<a href="https://www.example.com">Kliknij tutaj, aby przejść do Example</a>
```

### Obrazy

Wstawianie obrazów za pomocą `<img>`, z atrybutami `src` (adres obrazka) i `alt` (opis alternatywny):

```html
<img src="obrazek.jpg" alt="Opis obrazka" />
```

### Listy

Tworzenie list nieuporządkowanych `<ul>` i uporządkowanych `<ol>`, z elementami `<li>`:

```html
<ul>
  <li>Element listy 1</li>
  <li>Element listy 2</li>
  <li>Element listy 3</li>
</ul>

<ol>
  <li>Element listy 1</li>
  <li>Element listy 2</li>
  <li>Element listy 3</li>
</ol>
```

---

## Formularze

Formularze umożliwiają zbieranie danych od użytkowników. Składają się z różnych pól wejściowych (input), przycisków i etykiet.

```html
<form action="/submit-form" method="post">
  <label for="name">Nazwa:</label>
  <input type="text" id="name" name="name" />
  <input type="submit" value="Wyślij" />
</form>
```

- `action` – adres, pod który zostaną wysłane dane formularza.
- `method` – metoda wysyłki (zazwyczaj `post` lub `get`).
- `<label>` – etykieta powiązana z polem formularza.
- `<input type="text">` – pole tekstowe.
- `<input type="submit">` – przycisk wysyłający dane.

---

## Zadania do wykonania

### Zadanie 1

Utwórz stronę HTML, która zawiera:

- Nagłówek `<h1>` z tytułem "Moja pierwsza strona".
- Akapit z krótkim opisem.
- Link do dowolnej strony internetowej.

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
    <title>Moja pierwsza strona</title>
  </head>
  <body>
    <h1>Moja pierwsza strona</h1>
    <p>To jest krótki opis mojej pierwszej strony internetowej.</p>
    <a href="https://www.example.com">Kliknij tutaj, aby przejść do Example</a>
  </body>
</html>
```

</details>

---

### Zadanie 2

Utwórz stronę HTML, która zawiera:

- Obrazek z atrybutem `src` wskazującym na dowolny obrazek z internetu.
- Alternatywny tekst opisujący obrazek.

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
    <title>Strona z obrazkiem</title>
  </head>
  <body>
    <img src="https://via.placeholder.com/150" alt="Przykładowy obrazek" />
  </body>
</html>
```

</details>

---

### Zadanie 3

Utwórz stronę HTML, która zawiera:

- Listę nieuporządkowaną z trzema ulubionymi potrawami.
- Listę uporządkowaną z trzema krokami do ugotowania jednego z tych potraw.

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
    <title>Lista potraw</title>
  </head>
  <body>
    <h1>Moje ulubione potrawy</h1>
    <ul>
      <li>Pizza</li>
      <li>Sushi</li>
      <li>Spaghetti</li>
    </ul>
    <h2>Jak ugotować spaghetti</h2>
    <ol>
      <li>Ugotuj makaron.</li>
      <li>Przygotuj sos pomidorowy.</li>
      <li>Wymieszaj makaron z sosem.</li>
    </ol>
  </body>
</html>
```

</details>

---

### Zadanie 4

Utwórz formularz HTML, który zawiera:

- Pole tekstowe do wprowadzenia imienia.
- Pole typu radio do wyboru płci.
- Pole typu checkbox do zaznaczenia zgody na przetwarzanie danych.
- Przycisk do wysłania formularza.

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
    <title>Formularz</title>
  </head>
  <body>
    <form action="/submit-form" method="post">
      <label for="name">Imię:</label>
      <input type="text" id="name" name="name" /><br /><br />

      <label>Płeć:</label>
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Mężczyzna</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Kobieta</label><br /><br />

      <input type="checkbox" id="consent" name="consent" />
      <label for="consent">Zgadzam się na przetwarzanie danych osobowych</label
      ><br /><br />

      <input type="submit" value="Wyślij" />
    </form>
  </body>
</html>
```

</details>

---

To wszystko na temat podstaw HTML! Zachęcam do dalszego eksperymentowania, poznawania nowych elementów i tworzenia coraz bardziej złożonych oraz interaktywnych stron internetowych.
