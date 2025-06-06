---
title: Czym jest DOM?
description: Czym jest DOM? DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.
keywords: [kurs, html, dom, struktura, wprowadzenie]
categories: [wprowadzenie, html]
createdAt: 2024-06-30
---

## Spis treści

1. [Wprowadzenie](#wprowadzenie)
2. [Struktura DOM](#struktura-dom)
3. [Podstawowe operacje na DOM](#podstawowe-operacje-na-dom)
   - [Wybieranie elementów](#wybieranie-elementow)
   - [Manipulacja elementami](#manipulacja-elementami)
4. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1](#zadanie-1)
   - [Zadanie 2](#zadanie-2)
   - [Zadanie 3](#zadanie-3)
   - [Zadanie 4](#zadanie-4)

---

## Wprowadzenie

**DOM** (Document Object Model) to interfejs programistyczny, który pozwala na dynamiczne manipulowanie strukturą, stylem i treścią dokumentów HTML oraz XML. DOM przedstawia dokument jako drzewo obiektów, gdzie każdy element, atrybut czy fragment tekstu jest węzłem. Dzięki temu możemy programistycznie odczytywać, modyfikować, dodawać i usuwać dowolne fragmenty dokumentu w czasie rzeczywistym za pomocą JavaScript.

---

## Struktura DOM

DOM reprezentuje dokument HTML jako strukturę drzewiastą, gdzie każdy element jest węzłem połączonym z innymi w hierarchii rodzic-dziecko.

Przykładowy dokument HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Przykład DOM</title>
  </head>
  <body>
    <h1>Witaj, świecie!</h1>
    <p>To jest akapit.</p>
  </body>
</html>
```

W DOM taki dokument zostanie odwzorowany jako:

```
#document
   |
   +-- html
        |
        +-- head
        |     |
        |     +-- title
        |            |
        |            +-- "Przykład DOM"
        |
        +-- body
              |
              +-- h1
              |     |
              |     +-- "Witaj, świecie!"
              |
              +-- p
                    |
                    +-- "To jest akapit."
```

---

## Podstawowe operacje na DOM

DOM udostępnia wiele metod do pobierania, modyfikowania i usuwania elementów. Oto najczęściej używane:

### Wybieranie elementów

#### `getElementById`

Pozwala pobrać element o konkretnym atrybucie `id`:

```html
<p id="myParagraph">To jest akapit.</p>

<script>
  const para = document.getElementById("myParagraph");
  console.log(para.textContent); // "To jest akapit."
</script>
```

#### `getElementsByClassName`

Zwraca kolekcję wszystkich elementów z określoną klasą:

```html
<p class="myClass">Akapit 1</p>
<p class="myClass">Akapit 2</p>

<script>
  const paras = document.getElementsByClassName("myClass");
  console.log(paras.length); // 2
</script>
```

#### `querySelector` i `querySelectorAll`

Umożliwiają wybieranie elementów za pomocą selektorów CSS:

```html
<p class="myClass">Akapit 1</p>
<p class="myClass">Akapit 2</p>

<script>
  const firstPara = document.querySelector(".myClass");
  console.log(firstPara.textContent); // "Akapit 1"

  const allParas = document.querySelectorAll(".myClass");
  console.log(allParas.length); // 2
</script>
```

---

### Manipulacja elementami

#### Zmiana tekstu

Zmiana tekstu wewnątrz elementu:

```html
<p id="myParagraph">To jest akapit.</p>

<script>
  const para = document.getElementById("myParagraph");
  para.textContent = "Zmieniony tekst akapitu.";
</script>
```

#### Zmiana atrybutów

Zmiana dowolnych atrybutów HTML (np. obrazka):

```html
<img id="myImage" src="image.jpg" alt="Obrazek" />

<script>
  const img = document.getElementById("myImage");
  img.src = "newImage.jpg";
  img.alt = "Nowy obrazek";
</script>
```

#### Dodawanie elementów

Tworzenie i dodawanie nowych elementów do strony:

```html
<ul id="myList">
  <li>Element 1</li>
</ul>

<script>
  const list = document.getElementById("myList");
  const newItem = document.createElement("li");
  newItem.textContent = "Element 2";
  list.appendChild(newItem);
</script>
```

#### Usuwanie elementów

Usuwanie elementu z drzewa DOM:

```html
<p id="myParagraph">To jest akapit.</p>

<script>
  const para = document.getElementById("myParagraph");
  para.remove();
</script>
```

---

## Zadania do wykonania

### Zadanie 1

Stwórz stronę HTML z listą (`ul`) i trzema elementami (`li`). Następnie za pomocą JavaScript dodaj czwarty element do listy.

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
    <title>Lista</title>
  </head>
  <body>
    <ul id="myList">
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ul>
    <script>
      const list = document.getElementById("myList");
      const newItem = document.createElement("li");
      newItem.textContent = "Element 4";
      list.appendChild(newItem);
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 2

Utwórz formularz z polem tekstowym i przyciskiem. Po kliknięciu przycisku zmień tekst przycisku na "Wysłano".

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
    <form id="myForm">
      <input type="text" id="myInput" />
      <button type="button" id="myButton">Wyślij</button>
    </form>
    <script>
      const button = document.getElementById("myButton");
      button.addEventListener("click", () => {
        button.textContent = "Wysłano";
      });
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 3

Napisz kod HTML z obrazkiem. Za pomocą JavaScript zmień źródło obrazka na nowe po kliknięciu na niego.

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
    <title>Obrazek</title>
  </head>
  <body>
    <img id="myImage" src="image.jpg" alt="Obrazek" />
    <script>
      const img = document.getElementById("myImage");
      img.addEventListener("click", () => {
        img.src = "newImage.jpg";
      });
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 4

Utwórz stronę HTML z trzema akapitami. Użyj JavaScript, aby zmienić kolor tekstu wszystkich akapitów na niebieski.

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
    <title>Kolor tekstu</title>
  </head>
  <body>
    <p>Akapit 1</p>
    <p>Akapit 2</p>
    <p>Akapit 3</p>
    <script>
      const paragraphs = document.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.style.color = "blue";
      });
    </script>
  </body>
</html>
```

</details>

---

To tyle na temat podstaw DOM! Zachęcam do dalszego eksperymentowania, praktycznego wykorzystywania JavaScript do manipulacji DOM oraz zgłębiania bardziej zaawansowanych możliwości tej technologii.
