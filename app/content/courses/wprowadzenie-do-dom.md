---
title: Czym jest DOM?
description: Czym jest DOM? DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.
keywords: [kurs, html, dom, struktura, wprowadzenie, learning]
categories: [html]
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy DOM"
  questions:
    - question: "Co oznacza skrót DOM w kontekście stron internetowych?"
      options:
        - "Data Oriented Module"
        - "Document Option Method"
        - "Dynamic Output Mapper"
        - "Document Object Model"
      answer: 3
      explanation: "DOM to Document Object Model – model obiektowy dokumentu HTML lub XML."

    - question: "Jaką strukturę prezentuje DOM?"
      options:
        - "Drzewiastą (hierarchiczną)"
        - "Tablicową"
        - "Listową"
        - "Płaską"
      answer: 0
      explanation: "DOM przedstawia dokument jako drzewo obiektów (węzłów)."

    - question: "Która metoda pozwala pobrać element o określonym identyfikatorze?"
      options:
        - "document.getElementById"
        - "document.querySelectorAll"
        - "document.getElementsByClassName"
        - "document.createElement"
      answer: 0
      explanation: "document.getElementById pobiera element o podanym id."

    - question: "Jak za pomocą DOM dodać nowy element do listy `ul`?"
      options:
        - "Użyć innerHTML na ul"
        - "Zmienić atrybut src"
        - "Utworzyć element przez createElement i dołączyć przez appendChild"
        - "Użyć metody getElementsByTagName"
      answer: 2
      explanation: "Tworzymy element createElement i dołączamy przez appendChild."

    - question: "Co umożliwia metoda `querySelectorAll?`"
      options:
        - "Zmianę tekstu elementu"
        - "Wybór wielu elementów za pomocą selektora CSS"
        - "Usunięcie elementu"
        - "Zmianę atrybutu id"
      answer: 1
      explanation: "querySelectorAll wybiera wszystkie pasujące elementy zgodnie z selektorem CSS."
---

Witaj w świecie **DOM**! 🌐 Jeśli HTML to struktura Twojej strony, a CSS to jej styl, to **DOM** jest niczym most, który pozwala Ci komunikować się z nimi za pomocą JavaScriptu. Dzięki DOM Twoje statyczne strony internetowe mogą ożyć, reagować na interakcje użytkownika i dynamicznie zmieniać swoją zawartość. Gotowy/a, by dowiedzieć się, jak JavaScript "widzi" Twoją stronę i jak możesz ją programowo modyfikować? Zaczynamy! 💻

## Spis treści

1.  [Wprowadzenie: Czym jest DOM?](#wprowadzenie-czym-jest-dom)
2.  [Struktura DOM: Drzewo węzłów](#struktura-dom-drzewo-węzłów)
3.  [Podstawowe operacje na DOM za pomocą JavaScriptu](#podstawowe-operacje-na-dom-za-pomocą-javascriptu)
    - [Wybieranie elementów](#wybieranie-elementów)
      - `getElementById()`
      - `getElementsByClassName()`
      - `querySelector()` i `querySelectorAll()`
    - [Manipulowanie elementami](#manipulowanie-elementami)
      - Zmiana tekstu: `textContent` i `innerHTML`
      - Zmiana atrybutów: `setAttribute()`, `removeAttribute()`, `getAttribute()`
      - Zmiana stylów CSS: `style`
      - Dodawanie i usuwanie klas CSS: `classList`
    - [Tworzenie i dodawanie nowych elementów](#tworzenie-i-dodawanie-nowych-elementów)
      - `createElement()`
      - `appendChild()` i `prepend()`
      - `insertBefore()`
    - [Usuwanie elementów](#usuwanie-elementów)
      - `remove()`
      - `removeChild()`
4.  [Zadania do wykonania: Sprawdź swoje umiejętności!](#zadania-do-wykonania-sprawdź-swoje-umiejętności)
    - [Zadanie 1: Dynamiczna lista](#zadanie-1-dynamiczna-lista)
    - [Zadanie 2: Interaktywny przycisk](#zadanie-2-interaktywny-przycisk)
    - [Zadanie 3: Zmieniający się obrazek](#zadanie-3-zmieniający-się-obrazek)
    - [Zadanie 4: Masowa zmiana stylu](#zadanie-4-masowa-zmiana-stylu)

---

## Wprowadzenie: Czym jest DOM?

**DOM** (ang. **Document Object Model**, czyli Model Obiektowy Dokumentu) to **interfejs programistyczny (API)**, który pozwala na interakcję z dokumentami HTML i XML za pomocą języków skryptowych, takich jak **JavaScript**.

Wyobraź sobie przeglądarkę internetową, która ładuje stronę HTML. Kiedy to się dzieje, przeglądarka nie widzi tylko surowego tekstu kodu. Zamiast tego, tworzy w pamięci **obiektową reprezentację** tego dokumentu – właśnie to jest DOM.

DOM przedstawia cały dokument jako **strukturę drzewiastą**, gdzie każdy element HTML (jak `<p>`, `<h1>`, `<div>`), każdy atrybut (jak `href`, `src`, `id`, `class`) i każdy fragment tekstu (nawet komentarze) jest oddzielnym **węzłem (node)**. Te węzły są ze sobą powiązane relacjami rodzic-dziecko-rodzeństwo, tworząc hierarchiczne "drzewo".

**Dlaczego to takie ważne?**
Bez DOM, strony internetowe byłyby statyczne. Nie moglibyśmy:

- Zmieniać tekstu na stronie po jej załadowaniu.
- Dodawać lub usuwać nowych elementów (np. pozycji na liście zakupów).
- Modyfikować stylów CSS dynamicznie (np. zmienić kolor tła po kliknięciu przycisku).
- Reagować na akcje użytkownika (kliknięcia, ruchy myszy, wprowadzanie danych).

Dzięki DOM, JavaScript może "widzieć" i "dotykać" każdy element na stronie, umożliwiając tworzenie dynamicznych i interaktywnych aplikacji webowych. To most między Twoim kodem HTML/CSS a logiką po stronie klienta, którą piszesz w JavaScripcie.

---

## Struktura DOM: Drzewo węzłów

Jak wspomniano, DOM reprezentuje dokument HTML jako **hierarchiczne drzewo węzłów**. Na samym szczycie znajduje się obiekt `document`, który jest punktem wejścia do całego drzewa. Każdy element HTML, tekst wewnątrz niego, a nawet atrybuty, stają się odrębnymi węzłami.

**Przykładowy dokument HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Moja Strona</title>
  </head>
  <body>
    <h1 id="main-title">Witaj na stronie!</h1>
    <p class="intro-text">To jest pierwszy akapit.</p>
    <a href="https://example.com" class="intro-text">Link</a>
  </body>
</html>
```

**Reprezentacja tego dokumentu w DOM (uproszczony widok drzewa):**

```
document (cały dokument)
└── html (element HTML)
    ├── head (element HTML)
    │   └── title (element HTML)
    │       └── "Moja Strona" (węzeł tekstowy)
    └── body (element HTML)
        ├── h1 (element HTML)
        │   ├── id="main-title" (węzeł atrybutu)
        │   └── "Witaj na stronie!" (węzeł tekstowy)
        ├── p (element HTML)
        │   ├── class="intro-text" (węzeł atrybutu)
        │   └── "To jest pierwszy akapit." (węzeł tekstowy)
        └── a (element HTML)
            ├── href="https://example.com" (węzeł atrybutu)
            ├── class="intro-text" (węzeł atrybutu)
            └── "Link" (węzeł tekstowy)
```

W tym drzewie:

- `document` jest **korzeniem** drzewa.
- `html` jest **dzieckiem** `document`.
- `head` i `body` to **dzieci** `html` i jednocześnie **rodzeństwo** względem siebie.
- `title` jest **dzieckiem** `head`.
- Tekst ("Moja Strona") jest **dzieckiem** `title`.
- `h1`, `p`, `a` są **dziećmi** `body`.
- Każdy węzeł może mieć swoje własne dzieci.
- Atrybuty są również traktowane jako węzły.

Zrozumienie tej struktury jest kluczowe, ponieważ wszystkie operacje DOM polegają na nawigowaniu po tym drzewie (np. znajdowanie rodziców, dzieci, rodzeństwa) i manipulowaniu jego węzłami.

---

## Podstawowe operacje na DOM za pomocą JavaScriptu

Aby manipulować DOM, JavaScript oferuje szereg wbudowanych metod dostępnych poprzez globalny obiekt `document`. Oto najważniejsze z nich:

### Wybieranie elementów

Zanim zmienisz cokolwiek na stronie, musisz najpierw **wybrać** element(y), które chcesz zmodyfikować.

#### `getElementById()`

Ta metoda pozwala pobrać **pojedynczy element** o konkretnym atrybucie `id`. Ponieważ `id` powinno być unikalne na stronie, zawsze zwróci tylko jeden element lub `null`, jeśli nie znajdzie pasującego ID.

```html
<p id="mojAkapit">Cześć, jestem akapit!</p>
<button id="zmienPrzycisk">Zmień ten tekst</button>

<script>
  const akapit = document.getElementById("mojAkapit");
  console.log(akapit.textContent); // "Cześć, jestem akapit!"

  const przycisk = document.getElementById("zmienPrzycisk");
  console.log(przycisk.tagName); // "BUTTON"
</script>
```

#### `getElementsByClassName()`

Ta metoda zwraca **HTMLCollection** (podobną do tablicy) wszystkich elementów, które mają określoną klasę CSS.

```html
<ul>
  <li class="item">Jabłko</li>
  <li class="item">Gruszka</li>
  <li class="item active">Banan</li>
</ul>

<script>
  const elementyListy = document.getElementsByClassName("item");
  console.log(elementyListy.length); // 3

  // Możesz iterować po kolekcji:
  for (let i = 0; i < elementyListy.length; i++) {
    console.log(elementyListy[i].textContent);
  }
  // Wynik: "Jabłko", "Gruszka", "Banan"
</script>
```

#### `querySelector()` i `querySelectorAll()`

To są nowoczesne i bardzo elastyczne metody. Pozwalają wybierać elementy za pomocą **dowolnego selektora CSS**, tak jakbyś pisał/a reguły w pliku `.css`.

- **`querySelector()`**: Zwraca **pierwszy element**, który pasuje do podanego selektora.
- **`querySelectorAll()`**: Zwraca **NodeList** (również podobną do tablicy) wszystkich elementów, które pasują do podanego selektora.

<!-- end list -->

```html
<div class="container">
  <p class="text">Pierwszy akapit w kontenerze.</p>
  <p class="text highlight">Drugi akapit w kontenerze.</p>
</div>
<span id="test-span">Test Span</span>

<script>
  // Wybierz pierwszy akapit z klasą "text"
  const pierwszyTekst = document.querySelector(".text");
  console.log(pierwszyTekst.textContent); // "Pierwszy akapit w kontenerze."

  // Wybierz element o ID "test-span"
  const mojSpan = document.querySelector("#test-span");
  console.log(mojSpan.tagName); // "SPAN"

  // Wybierz wszystkie akapity wewnątrz diva z klasą "container"
  const wszystkieTekstyWKontenerze = document.querySelectorAll(".container p");
  console.log(wszystkieTekstyWKontenerze.length); // 2

  // Możesz użyć forEach na NodeList (czego nie zrobisz bezpośrednio na HTMLCollection)
  wszystkieTekstyWKontenerze.forEach((p) => {
    console.log(p.textContent);
  });
  // Wynik: "Pierwszy akapit w kontenerze.", "Drugi akapit w kontenerze."
</script>
```

**Wskazówka:** `querySelector` i `querySelectorAll` są najbardziej uniwersalne i często preferowane ze względu na ich elastyczność w użyciu selektorów CSS.

---

### Manipulowanie elementami

Po wybraniu elementu możesz zmieniać jego zawartość, atrybuty i styl.

#### Zmiana tekstu: `textContent` i `innerHTML`

- **`textContent`**: Zmienia lub pobiera tylko **tekstową zawartość** elementu, ignorując wszelkie tagi HTML wewnątrz niego. Jest bezpieczniejszy, ponieważ nie interpretuje HTML.
- **`innerHTML`**: Zmienia lub pobiera **całą zawartość HTML** wewnątrz elementu. Pozwala na wstawienie pełnego kodu HTML, ale jest mniej bezpieczny (ryzyko XSS), jeśli używasz danych od użytkownika.

<!-- end list -->

```html
<div id="mojDiv">
  <p>Stary akapit</p>
</div>

<script>
  const mojDiv = document.getElementById("mojDiv");

  // Zmiana tekstu (bezpiecznie)
  mojDiv.textContent = "Tylko tekst";

  // Zmiana zawartości HTML (mniej bezpiecznie, ale elastycznie)
  mojDiv.innerHTML = "<h2>Nowy nagłówek</h2><p>Z nowym akapitem.</p>";
</script>
```

#### Zmiana atrybutów: `setAttribute()`, `removeAttribute()`, `getAttribute()`

- **`setAttribute(nazwaAtrybutu, wartosc)`**: Ustawia nową wartość dla atrybutu.
- **`removeAttribute(nazwaAtrybutu)`**: Usuwa atrybut.
- **`getAttribute(nazwaAtrybutu)`**: Pobiera aktualną wartość atrybutu.

<!-- end list -->

```html
<img id="logo" src="stare-logo.png" alt="Stare logo firmy" />

<script>
  const logo = document.getElementById("logo");

  // Zmień src i alt
  logo.setAttribute("src", "nowe-logo.png");
  logo.setAttribute("alt", "Nowe logo firmy");

  // Pobierz src
  console.log(logo.getAttribute("src")); // "nowe-logo.png"

  // Usuń atrybut alt
  logo.removeAttribute("alt");
</script>
```

#### Zmiana stylów CSS: `style`

Bezpośrednio manipuluje stylami inline elementu.

```html
<button id="przyciskStyl">Kliknij mnie</button>

<script>
  const przyciskStyl = document.getElementById("przyciskStyl");

  przyciskStyl.style.backgroundColor = "blue";
  przyciskStyl.style.color = "white";
  przyciskStyl.style.padding = "10px 20px";
  przyciskStyl.style.borderRadius = "5px"; // Właściwości z myślnikami w CSS są w CamelCase w JS
</script>
```

**Wskazówka:** Często lepszym podejściem niż bezpośrednia manipulacja `style` jest dodawanie/usuwanie klas CSS, ponieważ to oddziela style od logiki JS.

#### Dodawanie i usuwanie klas CSS: `classList`

Właściwość `classList` obiektu elementu pozwala na łatwe zarządzanie klasami CSS.

- **`classList.add('nazwa-klasy')`**: Dodaje jedną lub więcej klas.
- **`classList.remove('nazwa-klasy')`**: Usuwa jedną lub więcej klas.
- **`classList.toggle('nazwa-klasy')`**: Dodaje klasę, jeśli jej nie ma, lub usuwa, jeśli jest (przełącza).
- **`classList.contains('nazwa-klasy')`**: Sprawdza, czy element ma daną klasę.

<!-- end list -->

```html
<div id="komunikat" class="message">To jest komunikat.</div>

<style>
  .message {
    padding: 10px;
    border: 1px solid gray;
  }
  .error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
  }
  .hidden {
    display: none;
  }
</style>

<script>
  const komunikat = document.getElementById("komunikat");

  komunikat.classList.add("error"); // Dodaj klasę "error"
  // Teraz div ma klasy "message error"

  console.log(komunikat.classList.contains("message")); // true

  komunikat.classList.remove("message"); // Usuń klasę "message"
  // Teraz div ma tylko klasę "error"

  komunikat.classList.toggle("hidden"); // Dodaj klasę "hidden" (div zniknie)
  // Teraz div ma klasy "error hidden"

  komunikat.classList.toggle("hidden"); // Usuń klasę "hidden" (div ponownie się pojawi)
  // Teraz div ma tylko klasę "error"
</script>
```

---

### Tworzenie i dodawanie nowych elementów

Możesz dynamicznie budować całe fragmenty HTML za pomocą JavaScriptu.

#### `createElement()`

Tworzy nowy węzeł elementu o podanej nazwie tagu. Nie dodaje go automatycznie do DOM; musisz to zrobić ręcznie.

```javascript
const nowyDiv = document.createElement("div");
const nowyAkapit = document.createElement("p");
const nowyObrazek = document.createElement("img");
```

#### `appendChild()` i `prepend()`

- **`elementRodzic.appendChild(elementDziecko)`**: Dodaje `elementDziecko` na **koniec** listy dzieci `elementRodzic`.
- **`elementRodzic.prepend(elementDziecko)`**: Dodaje `elementDziecko` na **początek** listy dzieci `elementRodzic`.

<!-- end list -->

```html
<ul id="listaZakupow">
  <li>Mleko</li>
  <li>Chleb</li>
</ul>

<script>
  const lista = document.getElementById("listaZakupow");

  // Dodaj na koniec
  const platki = document.createElement("li");
  platki.textContent = "Płatki";
  lista.appendChild(platki); // HTML: ... <li>Chleb</li> <li>Płatki</li></ul>

  // Dodaj na początek
  const jajka = document.createElement("li");
  jajka.textContent = "Jajka";
  lista.prepend(jajka); // HTML: ... <li>Jajka</li> <li>Mleko</li> ...
</script>
```

#### `insertBefore()`

Umożliwia wstawienie nowego elementu **przed** istniejącym elementem referencyjnym.

`elementRodzic.insertBefore(nowyElement, referencyjnyElement)`

```html
<ul id="listaZakupow2">
  <li>Mleko</li>
  <li id="chleb">Chleb</li>
  <li>Płatki</li>
</ul>

<script>
  const lista2 = document.getElementById("listaZakupow2");
  const chleb = document.getElementById("chleb");

  const maslo = document.createElement("li");
  maslo.textContent = "Masło";

  // Wstaw "Masło" przed "Chleb"
  lista2.insertBefore(maslo, chleb);
  // HTML: ... <li>Mleko</li> <li>Masło</li> <li>Chleb</li> <li>Płatki</li></ul>
</script>
```

---

### Usuwanie elementów

#### `remove()`

Nowoczesna i prosta metoda do usuwania elementu bezpośrednio z DOM.

```html
<div id="doUsuniecia">
  <p>Ten div zostanie usunięty.</p>
</div>

<script>
  const divDoUsuniecia = document.getElementById("doUsuniecia");
  divDoUsuniecia.remove(); // Element znika z DOM
</script>
```

#### `removeChild()`

Starsza metoda, która usuwa określone dziecko z rodzica. Musisz mieć referencję do rodzica i do dziecka.

`elementRodzic.removeChild(elementDziecko)`

```html
<ul id="listaDoModyfikacji">
  <li>Item 1</li>
  <li id="item2">Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const listaModyfikacji = document.getElementById("listaDoModyfikacji");
  const item2 = document.getElementById("item2");

  listaModyfikacji.removeChild(item2); // Usuwa "Item 2"
</script>
```

---

## Zadania do wykonania: Sprawdź swoje umiejętności!

Czas na praktykę! Użyj JavaScriptu do manipulacji DOM w poniższych zadaniach. Pamiętaj, aby cały kod JavaScript umieścić wewnątrz tagu `<script>` najlepiej na końcu `<body>` (przed `</body>`), aby mieć pewność, że HTML jest już załadowany, zanim skrypt spróbuje nim manipulować.

### Zadanie 1: Dynamiczna lista

Stwórz stronę HTML z nagłówkiem `<h1>` i pustą listą nieuporządkowaną (`<ul>`) z atrybutem `id="mojaLista"`. Następnie, za pomocą JavaScriptu:

1.  Dodaj trzy nowe elementy listy (`<li>`) do tej listy. Każdy element powinien zawierać inny tekst (np. "Pierwszy element", "Drugi element", "Trzeci element").

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
    <title>Zadanie 1 - Dynamiczna Lista</title>
  </head>
  <body>
    <h1>Moja lista zakupów</h1>
    <ul id="mojaLista"></ul>

    <script>
      // 1. Pobierz referencję do listy
      const lista = document.getElementById("mojaLista");

      // 2. Utwórz i dodaj trzy nowe elementy listy
      const element1 = document.createElement("li");
      element1.textContent = "Mleko";
      lista.appendChild(element1);

      const element2 = document.createElement("li");
      element2.textContent = "Chleb";
      lista.appendChild(element2);

      const element3 = document.createElement("li");
      element3.textContent = "Jajka";
      lista.appendChild(element3);

      // Opcjonalnie: możesz dodać do listy z tablicy
      /*
        const itemsToAdd = ["Kawa", "Cukier", "Mąka"];
        itemsToAdd.forEach(itemText => {
            const newItem = document.createElement("li");
            newItem.textContent = itemText;
            lista.appendChild(newItem);
        });
        */
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 2: Interaktywny przycisk

Utwórz formularz HTML z jednym polem tekstowym (`<input type="text">`) i jednym przyciskiem (`<button id="przyciskAkcji">Kliknij mnie</button>`). Za pomocą JavaScriptu:

1.  Dodaj **nasłuchiwanie zdarzenia kliknięcia** na przycisk.
2.  Po kliknięciu, **zmień tekst przycisku** na "Wysłano!"
3.  Dodatkowo, **zmień kolor tła** pola tekstowego na jasnoszary (`#f0f0f0`).

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
    <title>Zadanie 2 - Interaktywny Przycisk</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 20px;
      }
      form {
        margin-top: 20px;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 8px;
        max-width: 300px;
      }
      input[type="text"] {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: calc(100% - 22px);
      }
      button {
        padding: 10px 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1>Formularz</h1>
    <form>
      <input type="text" id="mojePoleTekstowe" placeholder="Wpisz coś..." />
      <button type="button" id="przyciskAkcji">Wyślij</button>
    </form>

    <script>
      // 1. Pobierz referencje do elementów
      const przycisk = document.getElementById("przyciskAkcji");
      const poleTekstowe = document.getElementById("mojePoleTekstowe");

      // 2. Dodaj nasłuchiwanie zdarzenia "click"
      przycisk.addEventListener("click", function () {
        // 3. Zmień tekst przycisku
        przycisk.textContent = "Wysłano!";

        // 4. Zmień kolor tła pola tekstowego
        poleTekstowe.style.backgroundColor = "#f0f0f0";
        // Możesz też opcjonalnie wyłączyć pole tekstowe po wysłaniu
        poleTekstowe.disabled = true;
        przycisk.disabled = true; // Wyłącz przycisk, żeby nie klikać ponownie
      });
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 3: Zmieniający się obrazek

Napisz kod HTML z jednym obrazkiem (`<img>`) z atrybutem `id="mojObrazek"` i początkowym `src` (może to być dowolny obrazek z internetu lub lokalny plik). Za pomocą JavaScriptu:

1.  Dodaj **nasłuchiwanie zdarzenia kliknięcia** na obrazek.
2.  Po kliknięciu, **zmień atrybut `src` obrazka** na inny URL (inną grafikę).

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
    <title>Zadanie 3 - Zmieniający się Obrazek</title>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
      img {
        max-width: 400px;
        height: auto;
        border: 2px solid #ccc;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      img:hover {
        transform: scale(1.02);
      }
    </style>
  </head>
  <body>
    <h1>Kliknij na obrazek!</h1>
    <img
      id="mojObrazek"
      src="https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Obrazek+1"
      alt="Pierwszy obrazek"
    />

    <script>
      // 1. Pobierz referencję do obrazka
      const obrazek = document.getElementById("mojObrazek");

      // Lista URL-i obrazków do przełączania
      const obrazki = [
        "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Obrazek+1",
        "https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Obrazek+2",
        "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Obrazek+3",
      ];
      let currentIndex = 0; // Aktualny indeks obrazka

      // 2. Dodaj nasłuchiwanie zdarzenia "click"
      obrazek.addEventListener("click", function () {
        // Zwiększ indeks, a jeśli przekroczysz długość tablicy, wróć na początek
        currentIndex = (currentIndex + 1) % obrazki.length;

        // Zmień atrybut src na nowy obrazek
        obrazek.src = obrazki[currentIndex];
        obrazek.alt = `Obrazek ${currentIndex + 1}`; // Zmień też tekst alternatywny
      });
    </script>
  </body>
</html>
```

</details>

---

### Zadanie 4: Masowa zmiana stylu

Utwórz stronę HTML z pięcioma akapitami (`<p>`). Nadaj im wszystkim tę samą klasę, np. `tekst-do-zmiany`. Za pomocą JavaScriptu:

1.  Pobierz **wszystkie** akapity o tej klasie.
2.  Używając pętli (np. `forEach`), **zmień kolor tekstu** każdego z nich na niebieski (`blue`) i **rozmiar czcionki** na `18px`.

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
    <title>Zadanie 4 - Masowa Zmiana Stylu</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 20px;
      }
      .tekst-do-zmiany {
        border: 1px solid #eee;
        padding: 10px;
        margin-bottom: 8px;
        background-color: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <h1>Akapity do ostylowania</h1>
    <p class="tekst-do-zmiany">To jest pierwszy akapit. Zmienimy jego styl!</p>
    <p class="tekst-do-zmiany">Drugi akapit, również do modyfikacji.</p>
    <p class="tekst-do-zmiany">Trzeci akapit. Poćwicz DOM!</p>
    <p class="tekst-do-zmiany">Czwarty akapit. Świetnie sobie radzisz!</p>
    <p class="tekst-do-zmiany">Piąty akapit. Ostatni do zmiany.</p>

    <script>
      // 1. Pobierz wszystkie akapity o klasie "tekst-do-zmiany"
      const akapityDoZmiany = document.querySelectorAll(".tekst-do-zmiany");

      // 2. Iteruj po kolekcji i zmień styl każdego akapitu
      akapityDoZmiany.forEach(function (p) {
        p.style.color = "blue";
        p.style.fontSize = "18px";
        p.style.fontWeight = "bold"; // Dodajmy też pogrubienie dla efektu
      });
    </script>
  </body>
</html>
```

</details>

---

Gratulacje! 🎉 Ukończyłeś/aś kurs podstaw DOM. Masz teraz narzędzia, by sprawić, że Twoje strony będą dynamiczne i interaktywne. Pamiętaj, że manipulowanie DOM to serce wielu operacji frontendowych w JavaScripcie.

Co dalej? Możesz zgłębić temat:

- **Obsługa zdarzeń (Event Handling)** w DOM (np. `click`, `mouseover`, `submit`).
- **Delegowanie zdarzeń (Event Delegation)** dla optymalizacji.
- Interakcje z **formularzami** i walidacja danych wejściowych.
- Wykorzystanie DOM w połączeniu z **bibliotekami/frameworkami JavaScript** (np. React, Vue, Angular), które często abstrakcyjnie podchodzą do bezpośredniej manipulacji DOM.

Masz pytania dotyczące konkretnych scenariuszy z DOM? Chcesz dowiedzieć się więcej o interakcjach użytkownika? Daj znać! 😊
