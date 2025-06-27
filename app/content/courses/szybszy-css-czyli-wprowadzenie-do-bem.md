---
title: Wprowadzenie do metodyki BEM
description: Czym jest BEM? BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.
keywords: [kurs, css, bem, metodyka, metodyki, stylowanie, html, learning]
categories: [wprowadzenie, css, html]
createdAt: 2024-06-30
quiz:
  title: "Quiz: Podstawy metodyki BEM"
  questions:
    - question: "Co oznaczają skróty BEM w kontekście CSS?"
      options:
        - "Basic, Element, Main"
        - "Block, Example, Method"
        - "Block, Element, Modifier"
        - "Base, Extension, Model"
      answer: 2
      explanation: "BEM to skrót od Block, Element, Modifier."

    - question: "Jaką klasę powinien mieć element będący częścią bloku 'menu' według BEM?"
      options:
        - "menu__item"
        - "menu-item"
        - "item__menu"
        - "menu--item"
      answer: 0
      explanation: "Element w BEM zapisujemy jako blok__element, np. ```menu__item```."

    - question: "W jaki sposób w BEM zapisuje się modyfikator bloku 'button'?"
      options:
        - "button__primary"
        - "button--primary"
        - "button-primary"
        - "button:primary"
      answer: 1
      explanation: "Modyfikator zapisujemy jako blok--modyfikator, np. button--primary."

    - question: "Które z poniższych NIE jest zgodne z zasadami BEM?"
      options:
        - "form__input--active"
        - "form__group"
        - "form--login"
        - "form__input__label"
      answer: 3
      explanation: "form__input__label łamie zasadę: nie zagnieżdżamy elementów w elementach."

    - question: "Dlaczego warto stosować BEM?"
      options:
        - "Bo wymusza używanie tylko jednego pliku CSS"
        - "Bo jest wymagane przez wszystkie przeglądarki"
        - "Bo ułatwia modularność i unikanie konfliktów nazw klas"
        - "Bo pozwala pisać CSS wyłącznie w JavaScript"
      answer: 2
      explanation: "BEM zwiększa modularność, czytelność i pomaga unikać konfliktów w nazwach klas."
---

## Spis treści

1. [Czym jest BEM?](#czym-jest-bem)
2. [Struktura BEM](#struktura-bem)
   - [Blok](#blok)
   - [Element](#element)
   - [Modyfikator](#modyfikator)
3. [Przykład kodu w BEM](#przykład)
4. [Zasady BEM](#zasady-bem)
5. [Przykłady](#przykłady)
   - [Formularz logowania](#formularz-logowania)
6. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1 – Karta produktu](#zadanie-1)
   - [Zadanie 2 – Nawigacja](#zadanie-2)
   - [Zadanie 3 – Artykuł](#zadanie-3)

---

## Czym jest BEM?

**BEM** (ang. _Block, Element, Modifier_) to popularna metodyka nazewnictwa klas CSS, która ułatwia tworzenie modularnych, powtarzalnych i łatwych do utrzymania komponentów interfejsu użytkownika. Dzięki wyraźnemu podziałowi na bloki, elementy i modyfikatory, kod CSS staje się bardziej przewidywalny, przejrzysty oraz mniej podatny na konflikty stylów.

Główne założenia BEM:

- Każdy komponent traktujemy jako niezależny blok (np. `button`, `form`).
- Blok może zawierać elementy, które nie mają sensu poza jego kontekstem (np. `button__icon`).
- Blok i element mogą przyjmować różne warianty dzięki modyfikatorom (np. `button--primary`, `button__icon--small`).

---

## Struktura BEM

### Blok

Blok to główny, niezależny komponent interfejsu (np. przycisk, formularz, menu). Otrzymuje unikalną klasę bez dodatkowych znaków.

```html
<div class="block">Treść bloku</div>
```

### Element

Element to część bloku, która nie istnieje samodzielnie. W nazwie klasy po nazwie bloku dodajemy podwójny podkreślnik `__` i nazwę elementu.

```html
<div class="block">
  <div class="block__element">Treść elementu</div>
</div>
```

### Modyfikator

Modyfikator określa wariant lub stan bloku albo elementu, np. kolor, rozmiar, aktywność. W nazwie klasy po bloku lub elemencie dodajemy podwójny myślnik `--` i nazwę modyfikatora.

```html
<div class="block block--modifier">Treść zmodyfikowanego bloku</div>
<div class="block__element block__element--modifier">
  Treść zmodyfikowanego elementu
</div>
```

---

## Przykład

Komponent przycisku z elementem tekstowym i modyfikatorem:

**HTML:**

```html
<div class="button button--primary">
  <span class="button__text">Kliknij mnie</span>
</div>
```

**CSS:**

```css
.button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.button--primary {
  background-color: blue;
  color: white;
}

.button__text {
  font-size: 16px;
}
```

---

## Zasady BEM

1. **Nazwa bloku:** Powinna być krótka, jednoznaczna i opisywać funkcję komponentu (np. `form`, `menu`, `header`).
2. **Nazwa elementu:** Opisuje część bloku w kontekście tego bloku (np. `form__input`, `menu__item`).
3. **Nazwa modyfikatora:** Informuje o dodatkowym stanie lub wariancie (np. `form--login`, `button--disabled`, `menu__item--active`).
4. **Unikaj zagnieżdżania:** Każdy element odnosi się zawsze do swojego bloku, nie do innych elementów.
5. **Jasna struktura:** Każdy komponent i jego warianty są łatwe do odnalezienia i przetestowania.

---

## Przykłady

### Formularz logowania

**HTML:**

```html
<form class="form form--login">
  <div class="form__group">
    <label class="form__label" for="username">Nazwa użytkownika</label>
    <input class="form__input" type="text" id="username" name="username" />
  </div>
  <div class="form__group">
    <label class="form__label" for="password">Hasło</label>
    <input class="form__input" type="password" id="password" name="password" />
  </div>
  <button class="form__button form__button--submit">Zaloguj się</button>
</form>
```

**CSS:**

```css
.form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form--login {
  background-color: #f9f9f9;
}

.form__group {
  margin-bottom: 15px;
}

.form__label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form__input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form__button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.form__button--submit {
  background-color: blue;
  color: white;
}
```

---

## Zadania do wykonania

### Zadanie 1 – Karta produktu

Utwórz komponent karty produktu (`product-card`) z elementami dla tytułu (`product-card__title`), opisu (`product-card__description`) i ceny (`product-card__price`). Dodaj modyfikator dla karty wyróżnionej (`product-card--featured`).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

**HTML:**

```html
<div class="product-card product-card--featured">
  <h2 class="product-card__title">Nazwa produktu</h2>
  <p class="product-card__description">Opis produktu</p>
  <span class="product-card__price">99,99 zł</span>
</div>
```

**CSS:**

```css
.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
}

.product-card--featured {
  border-color: gold;
  background-color: #fffbf0;
}

.product-card__title {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-card__description {
  font-size: 14px;
  margin-bottom: 15px;
}

.product-card__price {
  font-size: 16px;
  font-weight: bold;
}
```

</details>

---

### Zadanie 2 – Nawigacja

Stwórz nawigację (`nav`) z elementami dla pozycji nawigacji (`nav__item`) i linków (`nav__link`). Dodaj modyfikator dla aktywnego linku (`nav__link--active`).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

**HTML:**

```html
<nav class="nav">
  <ul>
    <li class="nav__item">
      <a href="#" class="nav__link nav__link--active">Home</a>
    </li>
    <li class="nav__item"><a href="#" class="nav__link">O nas</a></li>
    <li class="nav__item"><a href="#" class="nav__link">Kontakt</a></li>
  </ul>
</nav>
```

**CSS:**

```css
.nav {
  background-color: #333;
  padding: 10px;
}

.nav__item {
  display: inline;
  margin-right: 15px;
}

.nav__link {
  color: white;
  text-decoration: none;
}

.nav__link--active {
  font-weight: bold;
  text-decoration: underline;
}
```

</details>

---

### Zadanie 3 – Artykuł

Utwórz sekcję artykułu (`article`) z elementami dla nagłówka (`article__header`), treści (`article__content`) i stopki (`article__footer`). Dodaj modyfikator dla nagłówka z obrazkiem (`article__header--with-image`).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

**HTML:**

```html
<article class="article">
  <header class="article__header article__header--with-image">
    <h1>Tytuł artykułu</h1>
    <img src="image.jpg" alt="Obrazek w nagłówku" />
  </header>
  <section class="article__content">
    <p>Treść artykułu...</p>
  </section>
  <footer class="article__footer">
    <p>Stopka artykułu</p>
  </footer>
</article>
```

**CSS:**

```css
.article {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}

.article__header {
  margin-bottom: 15px;
}

.article__header--with-image img {
  display: block;
  max-width: 100%;
  height: auto;
}

.article__content {
  margin-bottom: 15px;
}

.article__footer {
  font-size: 14px;
  color: #777;
}
```

</details>

---

To wszystko na temat podstaw metodyki BEM! Zachęcam do dalszego eksperymentowania, stosowania BEM w praktyce i pogłębiania wiedzy, aby tworzyć modularne, skalowalne i łatwe do utrzymania arkusze stylów CSS.
