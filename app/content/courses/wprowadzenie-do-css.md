---
title: Wprowadzenie do CSS
description: CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.
keywords: [css, html, kurs, wprowadzenie, przewodnik, web, frontend]
categories: [wprowadzenie, css]
createdAt: 2024-06-30
---

## Spis treści

1. [Czym jest CSS?](#czym-jest-css)
2. [Sposoby załączania CSS do HTML](#sposoby-załączania-css-do-html)
   - [Inline CSS](#inline-css)
   - [Internal CSS](#internal-css)
   - [External CSS](#external-css)
3. [Podstawowe selektory CSS](#podstawowe-selektory-css)
   - [Selektory elementów](#selektory-elementow)
   - [Selektory klas](#selektory-klas)
   - [Selektory identyfikatorów](#selektory-identyfikatorow)
4. [Podstawowe właściwości CSS](#podstawowe-wlasciwosci-css)
   - [Kolory](#kolory)
   - [Tło](#tlo)
   - [Marginesy i wypełnienia](#marginesy-i-wypelnienia)
   - [Ramki](#ramki)
5. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1](#zadanie-1)
   - [Zadanie 2](#zadanie-2)
   - [Zadanie 3](#zadanie-3)
   - [Zadanie 4](#zadanie-4)

---

## Czym jest CSS?

**CSS** (Cascading Style Sheets, Kaskadowe Arkusze Stylów) to język służący do opisywania wyglądu i formatu dokumentu HTML. Dzięki CSS możesz oddzielić strukturę strony (HTML) od jej prezentacji (wyglądu i stylu). Pozwala to tworzyć estetyczne, przejrzyste i łatwe do utrzymania strony internetowe. CSS umożliwia m.in. definiowanie kolorów, czcionek, układów, odstępów, ramek, tła czy efektów specjalnych.

---

## Sposoby załączania CSS do HTML

### Inline CSS

Stylowanie pojedynczych elementów bezpośrednio w atrybucie `style` w kodzie HTML.

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inline CSS</title>
  </head>
  <body>
    <h1 style="color: blue;">Witaj, świecie!</h1>
  </body>
</html>
```

_Stosuj wyłącznie do bardzo prostych i pojedynczych przypadków._

### Internal CSS

Umieszczanie stylów wewnątrz dokumentu HTML, w sekcji `<head>`, za pomocą tagu `<style>`.

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Internal CSS</title>
    <style>
      h1 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Witaj, świecie!</h1>
  </body>
</html>
```

_Dobre do małych stron lub prototypów._

### External CSS

Tworzenie osobnego pliku `.css` i dołączanie go do strony za pomocą tagu `<link>`. To najbardziej zalecana metoda.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Witaj, świecie!</h1>
  </body>
</html>
```

```css
/* style.css */
h1 {
  color: blue;
}
```

_Umożliwia łatwą aktualizację stylów i ponowne ich wykorzystanie na wielu stronach._

---

## Podstawowe selektory CSS

### Selektory elementów

Najprostszy selektor – wybiera wszystkie elementy danego typu (np. wszystkie nagłówki `<h1>`).

```css
h1 {
  color: blue;
}
```

### Selektory klas

Selektor, który styluje elementy z określoną klasą. Klas można używać wielokrotnie na różnych elementach.

```html
<h1 class="naglowek">Witaj, świecie!</h1>
```

```css
.naglowek {
  color: blue;
}
```

### Selektory identyfikatorów

Selektor, który styluje element z unikalnym identyfikatorem (`id`).

```html
<h1 id="naglowek-glowny">Witaj, świecie!</h1>
```

```css
#naglowek-glowny {
  color: blue;
}
```

_Identyfikator (`id`) powinien być unikalny na stronie._

---

## Podstawowe właściwości CSS

### Kolory

Definiowanie kolorów może odbywać się na kilka sposobów: nazwy, wartości szesnastkowe, RGB, czy HSL.

```css
h1 {
  color: red; /* Nazwa koloru */
  color: #ff0000; /* Wartość szesnastkowa */
  color: rgb(255, 0, 0); /* RGB */
  color: hsl(0, 100%, 50%); /* HSL */
}
```

### Tło

Możesz ustawić kolor tła, obrazek, powtarzanie, pozycję i rozmiar.

```css
body {
  background-color: lightgray; /* Kolor tła */
  background-image: url("tlo.jpg"); /* Obrazek tła */
  background-repeat: no-repeat; /* Brak powtarzania obrazka */
  background-position: center; /* Pozycja obrazka */
  background-size: cover; /* Rozmiar obrazka */
}
```

### Marginesy i wypełnienia

Marginesy (`margin`) określają odstęp na zewnątrz elementu, a wypełnienia (`padding`) – wewnątrz.

```css
p {
  margin: 20px; /* Odstęp na zewnątrz */
  padding: 10px; /* Odstęp wewnątrz */
}
```

### Ramki

Dzięki właściwościom ramek możesz dodać obramowanie oraz zaokrąglić jego rogi.

```css
div {
  border: 1px solid black; /* Obramowanie */
  border-radius: 10px; /* Zaokrąglone rogi */
}
```

---

## Zadania do wykonania

### Zadanie 1

Stwórz stronę HTML z elementem `<h1>`, który ma kolor czerwony przy użyciu External CSS.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 1</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="red">Witaj, świecie!</h1>
  </body>
</html>
```

```css
/* style.css */
.red {
  color: red;
}
```

</details>

---

### Zadanie 2

Utwórz paragraf (`<p>`), który ma zielone tło, 20 pikseli wypełnienia i zaokrąglone rogi o promieniu 10 pikseli.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 2</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p class="green-bg">To jest paragraf</p>
  </body>
</html>
```

```css
/* style.css */
.green-bg {
  background-color: green;
  padding: 20px;
  border-radius: 10px;
}
```

</details>

---

### Zadanie 3

Stwórz div, który ma niebieską ramkę o grubości 2 pikseli, a wewnątrz niego umieść tekst "To jest div".

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 3</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="blue-border">To jest div</div>
  </body>
</html>
```

```css
/* style.css */
.blue-border {
  border: 2px solid blue;
}
```

</details>

---

### Zadanie 4

Utwórz stronę HTML z trzema nagłówkami (`<h1>`, `<h2>`, `<h3>`) o różnych kolorach za pomocą selektorów klas.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zadanie 4</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="red">Nagłówek 1</h1>
    <h2 class="blue">Nagłówek 2</h2>
    <h3 class="green">Nagłówek 3</h3>
  </body>
</html>
```

```css
/* style.css */
.red {
  color: red;
}

.blue {
  color: blue;
}

.green {
  color: green;
}
```

</details>

---

To tyle na temat podstaw CSS! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć coraz bardziej zaawansowane i estetyczne strony internetowe.
