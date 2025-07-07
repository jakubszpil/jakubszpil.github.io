---
title: Wprowadzenie do metodyki BEM
description: Czym jest BEM? BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.
keywords: [kurs, css, bem, metodyka, metodyki, stylowanie, html, learning]
categories: [css, html]
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

Witaj w świecie **BEM**! 🚀 Jeśli pracujesz nad coraz większymi i bardziej złożonymi projektami webowymi, z pewnością zauważasz, jak łatwo kod CSS może stać się chaotyczny i trudny do zarządzania. Właśnie tutaj z pomocą przychodzi **BEM** – metodyka, która wprowadza porządek i logikę do Twoich stylów, sprawiając, że są one **modułowe, skalowalne i łatwe do utrzymania**. Gotowy/a na rewolucję w sposobie pisania CSS? Zaczynamy! 💡

## Spis treści

1.  [Czym jest BEM i dlaczego warto go stosować?](#czym-jest-bem-i-dlaczego-warto-go-stosować)
2.  [Trzy filary BEM: Blok, Element, Modyfikator](#trzy-filary-bem-blok-element-modyfikator)
    - [Blok (Block)](#blok-block)
    - [Element (Element)](#element-element)
    - [Modyfikator (Modifier)](#modyfikator-modifier)
3.  [Konwencje nazewnictwa w BEM](#konwencje-nazewnictwa-w-bem)
4.  [Praktyczny przykład kodu z BEM](#praktyczny-przykład-kodu-z-bem)
5.  [Zasady i najlepsze praktyki BEM](#zasady-i-najlepsze-praktyki-bem)
6.  [Zaawansowane przykłady zastosowania BEM](#zaawansowane-przykłady-zastosowania-bem)
    - [Formularz logowania](#formularz-logowania)
7.  [Zadania do wykonania: Sprawdź swoje umiejętności!](#zadania-do-wykonania-sprawdź-swoje-umiejętności)
    - [Zadanie 1: Karta produktu](#zadanie-1-karta-produktu)
    - [Zadanie 2: Nawigacja](#zadanie-2-nawigacja)
    - [Zadanie 3: Artykuł na blogu](#zadanie-3-artykuł-na-blogu)

---

## Czym jest BEM i dlaczego warto go stosować?

**BEM** to skrót od **Block, Element, Modifier** (Blok, Element, Modyfikator). To nie jest język programowania ani framework CSS, lecz **metodyka nazewnictwa klas CSS**. Jej głównym celem jest uporządkowanie i ustandaryzowanie sposobu, w jaki nadajesz nazwy swoim klasom w HTML i CSS, co prowadzi do:

- **Modularności:** Każdy komponent jest niezależny i może być ponownie użyty w różnych miejscach projektu bez obawy o konflikty stylów.
- **Łatwości utrzymania:** Dzięki jasnym i przewidywalnym nazwom klas, Ty (lub inni deweloperzy) możecie szybko zrozumieć strukturę i przeznaczenie każdego elementu, co ułatwia debugowanie i wprowadzanie zmian.
- **Skalowalności:** Metodyka BEM świetnie sprawdza się w dużych projektach z wieloma deweloperami, zapewniając spójność i minimalizując ryzyko regresji.
- **Unikania konfliktów:** Unikalne nazwy klas dla bloków, elementów i modyfikatorów znacznie zmniejszają szansę na niepożądane nadpisywanie stylów.
- **Jasności kodu:** Nazwa klasy od razu mówi, co dany element reprezentuje i jaką ma rolę w kontekście bloku.

Wyobraź sobie budowanie domu z klocków LEGO. HTML to Twoje klocki, a CSS to farby i dekoracje. Bez BEM, każdy deweloper mógłby nazwać czerwony klocek "czerwony", "blok-kolor", "rzecz-czerwona", co szybko prowadziłoby do bałaganu. BEM zapewnia, że wszyscy nazywają ten klocek "budynek\_\_ściana--czerwona", od razu wiedząc, że to ściana należąca do budynku, w wariancie czerwonym.

---

## Trzy filary BEM: Blok, Element, Modyfikator

Podstawą metodyki BEM są trzy kluczowe koncepty, które określają sposób organizacji i nazewnictwa klas CSS.

### Blok (Block)

**Blok** to niezależny, samodzielny komponent interfejsu użytkownika. Możesz go myśleć jako o „funkcjonalnej” i „wizualnej” całości, którą można przenieść i użyć w dowolnym miejscu strony. Blok może zawierać w sobie inne bloki lub elementy.

**Cechy bloku:**

- Jest niezależny i może być umieszczony w dowolnym miejscu.
- Ma unikalną nazwę, która opisuje jego przeznaczenie (np. `header`, `menu`, `button`, `form`, `card`).
- Nie powinien mieć marginesów zewnętrznych (margin) ani pozycji (position), które mogłyby wpłynąć na jego umiejscowienie w innym kontekście. Te style powinny być zarządzane przez jego rodzica lub inny blok.

**Przykłady nazw bloków:**

- `.header`
- `.button`
- `.search`
- `.product-card`

**Przykład HTML:**

```html
<header class="header">...</header>
<button class="button">...</button>
<form class="search">...</form>
```

### Element (Element)

**Element** to część bloku, która **nie ma samodzielnego znaczenia** poza kontekstem swojego bloku. Jest funkcjonalnie zależny od bloku, do którego należy.

**Cechy elementu:**

- Nie można go używać samodzielnie poza blokiem.
- Nazwa elementu jest związana z nazwą bloku za pomocą **dwóch podkreślników (`__`)**.
- Nazwa opisuje jego przeznaczenie w kontekście bloku (np. `menu__item`, `button__icon`, `form__input`).
- Element może zawierać w sobie inne elementy, ale w nazewnictwie BEM zawsze odwołujemy się do **bloku rodzica**, a nie do elementu, który jest jego bezpośrednim rodzicem. Dzięki temu struktura nazewnictwa jest "płaska" i czytelna.

**Przykłady nazw elementów:**

- `.menu__item` (element `item` bloku `menu`)
- `.button__icon` (element `icon` bloku `button`)
- `.search__field` (element `field` bloku `search`)

**Przykład HTML:**

```html
<div class="menu">
  <a class="menu__item" href="#">Strona główna</a>
  <a class="menu__item" href="#">O nas</a>
</div>

<button class="button">
  <span class="button__icon"></span>
  <span class="button__text">Wyślij</span>
</button>
```

### Modyfikator (Modifier)

**Modyfikator** to flaga lub atrybut, który definiuje **wygląd, stan lub zachowanie** bloku lub elementu. Modyfikatory służą do tworzenia wariantów komponentów bez konieczności duplikowania kodu CSS.

**Cechy modyfikatora:**

- Zawsze występuje obok nazwy bloku lub elementu, do którego się odnosi.
- Nazwa modyfikatora jest związana z nazwą bloku lub elementu za pomocą **dwóch myślników (`--`)**.
- Opisuje cechę lub stan (np. `button--primary`, `button--disabled`, `menu__item--active`).
- Element może mieć wiele modyfikatorów.

**Przykłady nazw modyfikatorów:**

- `.button--primary` (blok `button` w wariancie `primary`)
- `.button--disabled` (blok `button` w stanie `disabled`)
- `.menu__item--active` (element `item` bloku `menu` w stanie `active`)

**Przykład HTML:**

```html
<button class="button button--primary">Główny przycisk</button>
<button class="button button--disabled">Wyłączony przycisk</button>

<div class="menu">
  <a class="menu__item menu__item--active" href="#">Aktywna pozycja menu</a>
  <a class="menu__item" href="#">Inna pozycja menu</a>
</div>
```

**Ważne:** Zauważ, że modyfikator **zawsze jest dodawany jako dodatkowa klasa** do istniejącej klasy bloku lub elementu, a nie zastępuje jej.

---

## Konwencje nazewnictwa w BEM

Konwencje nazewnictwa w BEM są rygorystyczne, co pomaga utrzymać spójność i czytelność:

- **Nazwy klas powinny być pisane małymi literami.**
- **Słowa w nazwach oddzielamy pojedynczym myślnikiem `-`.** (np. `product-card`, `search-field`)
- **Blok**
  - Samo nazwa, np. `.`**`block`**
  - Przykład: `.button`, `.header`, `.form`
- **Element**
  - Nazwa bloku, po której następują dwa podkreślniki `__`, a następnie nazwa elementu, np. `.`**`block__element`**
  - Przykład: `.button__icon`, `.header__logo`, `.form__input`
- **Modyfikator**
  - Nazwa bloku lub elementu, po której następują dwa myślniki `--`, a następnie nazwa modyfikatora, np. `.`**`block--modifier`** lub `.`**`block__element--modifier`**
  - Przykład: `.button--primary`, `.button--disabled`, `.form__input--error`

**Poprawne vs. Niepoprawne:**

| Kategoria         | Poprawne użycie BEM                                     | Niepoprawne użycie BEM                                   | Dlaczego?                                                                             |
| :---------------- | :------------------------------------------------------ | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Blok**          | `.card`, `.profile`, `.button`                          | `.my_card`, `.profile-widget`                            | Używaj myślników dla rozdzielenia słów, nie podkreślników. Nazwa powinna być zwięzła. |
| **Element**       | `.card__title`, `.profile__avatar`                      | `.card-title`, `.profile_avatar`, `.card__header__title` | Zawsze `__`. Nie zagnieżdżaj elementów w nazwach (np. `__header__title` jest błędem). |
| **Modyfikator**   | `.button--primary`, `.card--disabled`                   | `.button-primary`, `.card_disabled`                      | Zawsze `--`.                                                                          |
| **Zagnieżdżanie** | `<div class="card"><h2 class="card__title"></h2></div>` | `<div class="card"><h2 class="card-title"></h2></div>`   | `card-title` nie jest zgodnie z konwencją BEM.                                        |

---

## Praktyczny przykład kodu z BEM

Spójrzmy na prosty przykład komponentu **Przycisku** w podejściu BEM.

**HTML (plik `index.html`):**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Przykład BEM - Przycisk</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Przyciski BEM</h1>

    <div class="button">
      <span class="button__text">Zwykły przycisk</span>
    </div>

    <div class="button button--primary">
      <span class="button__text">Główny przycisk</span>
      <span class="button__icon">🚀</span>
    </div>

    <div class="button button--danger">
      <span class="button__text">Usuń</span>
    </div>

    <div class="button button--primary button--disabled">
      <span class="button__text">Wyłączony</span>
    </div>
  </body>
</html>
```

**CSS (plik `style.css`):**

```css
/* style.css */

/* --- BLOK: button --- */
.button {
  display: inline-flex; /* Ułatwia wyrównanie tekstu i ikony */
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s ease; /* Płynne przejście */
  margin: 10px; /* Tylko do celów demonstracyjnych, bloki nie powinny mieć marginu domyślnie */
}

.button:hover {
  background-color: #e0e0e0;
}

/* --- ELEMENTY: button__text, button__icon --- */
.button__text {
  margin-right: 5px; /* Odstęp między tekstem a ikoną */
}

.button__icon {
  font-size: 1.2em;
}

/* --- MODYFIKATORY BLOKU: button--primary, button--danger, button--disabled --- */
.button--primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.button--primary:hover {
  background-color: #0056b3;
}

.button--danger {
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
}

.button--danger:hover {
  background-color: #c82333;
}

.button--disabled {
  opacity: 0.6; /* Lekka przezroczystość */
  cursor: not-allowed; /* Kursor "zakaz" */
  pointer-events: none; /* Blokuje interakcje z myszą */
}
```

W tym przykładzie widać, jak BEM pomaga w jasny sposób zdefiniować:

- **`.button`**: Podstawowy styl dla każdego przycisku.
- **`.button__text`**, **`.button__icon`**: Style dla wewnętrznych części przycisku.
- **`.button--primary`**, **`.button--danger`**, **`.button--disabled`**: Specyficzne warianty lub stany przycisku, które nadpisują lub dodają style do podstawowego bloku `.button`.

---

## Zasady i najlepsze praktyki BEM

Aby w pełni wykorzystać potencjał BEM, warto przestrzegać kilku kluczowych zasad:

1.  **Struktura klas jest płaska:** Każdy element odnosi się bezpośrednio do swojego bloku (np. `block__element`), a nie do zagnieżdżonego elementu (`block__element__nested-element` jest błędem). To zapobiega zbyt długim i nieczytelnym nazwom.
2.  **Unikaj selektorów tagów i ID w CSS:** Style powinny być przypisywane tylko do klas BEM. Użycie selektorów tagów (np. `div {}`) lub ID (np. `#my-id {}`) sprawia, że style są mniej modularne i trudniejsze do ponownego użycia.
3.  **Modyfikatory nie zmieniają struktury:** Modyfikatory powinny zmieniać wygląd lub zachowanie, a nie strukturę bloku czy elementu. Jeśli potrzebujesz fundamentalnie innej struktury, rozważ stworzenie nowego bloku.
4.  **Nazwy są opisowe:** Nazwy powinny jasno wskazywać, co dany blok, element lub modyfikator robi lub reprezentuje.
5.  **Modularność ponad wszystko:** Myśl o każdym bloku jako o samodzielnym, przenośnym komponencie.
6.  **Używaj preprocesorów CSS:** Takie narzędzia jak Sass/Less mogą znacznie ułatwić pisanie CSS w oparciu o BEM dzięki możliwościom zagnieżdżania i zmiennych.

**Kiedy NIE stosować BEM?**

- W bardzo małych projektach (jedna, dwie strony), gdzie narzut na nazewnictwo może być większy niż korzyści.
- Gdy preferujesz inne metodyki (np. CSS Modules, styled-components w React, Utility-First CSS jak Tailwind).

---

## Zaawansowane przykłady zastosowania BEM

### Formularz logowania

Zobaczmy, jak BEM pomaga zorganizować bardziej złożony komponent, taki jak formularz logowania.

**HTML:**

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formularz Logowania BEM</title>
    <link rel="stylesheet" href="form-styles.css" />
  </head>
  <body>
    <div class="login-form">
      <h2 class="login-form__title">Logowanie</h2>

      <div class="login-form__group">
        <label for="username" class="login-form__label"
          >Nazwa użytkownika:</label
        >
        <input
          type="text"
          id="username"
          class="login-form__input"
          placeholder="Wpisz nazwę użytkownika"
        />
      </div>

      <div class="login-form__group">
        <label for="password" class="login-form__label">Hasło:</label>
        <input
          type="password"
          id="password"
          class="login-form__input"
          placeholder="Wpisz hasło"
        />
        <p class="login-form__error login-form__error--visible">
          Błędne dane logowania!
        </p>
      </div>

      <button class="login-form__button login-form__button--primary">
        Zaloguj się
      </button>
      <button class="login-form__button login-form__button--secondary">
        Zarejestruj
      </button>
    </div>
  </body>
</html>
```

**CSS (`form-styles.css`):**

```css
/* form-styles.css */

/* --- BLOK: login-form --- */
.login-form {
  max-width: 380px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.login-form__title {
  text-align: center;
  color: #333;
  margin-bottom: 25px;
  font-size: 24px;
}

/* --- ELEMENTY: login-form__group, login-form__label, login-form__input, login-form__button, login-form__error --- */
.login-form__group {
  margin-bottom: 20px;
}

.login-form__label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: bold;
}

.login-form__input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Upewnia się, że padding nie zwiększa szerokości */
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.login-form__input:focus {
  border-color: #007bff;
  outline: none; /* Usuwa domyślne obramowanie focusu */
}

.login-form__button {
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

.login-form__error {
  color: #dc3545; /* Czerwony kolor dla błędów */
  font-size: 13px;
  margin-top: 5px;
  display: none; /* Domyślnie ukryty */
}

/* --- MODYFIKATORY: login-form__button--primary, login-form__button--secondary, login-form__error--visible --- */
.login-form__button--primary {
  background-color: #007bff;
  color: white;
}

.login-form__button--primary:hover {
  background-color: #0056b3;
}

.login-form__button--secondary {
  background-color: #6c757d;
  color: white;
}

.login-form__button--secondary:hover {
  background-color: #5a6268;
}

.login-form__error--visible {
  display: block; /* Pokazuje komunikat błędu */
}
```

---

## Zadania do wykonania: Sprawdź swoje umiejętności!

Pora na praktykę! Użyj wiedzy o BEM, aby stworzyć poniższe komponenty. Pamiętaj o użyciu osobnego pliku CSS i połączeniu go z HTML.

### Zadanie 1: Karta produktu

Utwórz komponent karty produktu (`product-card`). Powinien zawierać:

- Element dla tytułu produktu (`product-card__title`).
- Element dla opisu produktu (`product-card__description`).
- Element dla ceny produktu (`product-card__price`).
- Modyfikator `product-card--featured` dla karty wyróżnionej (np. z inną ramką lub tłem).

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
    <title>Zadanie 1 - Karta Produktu BEM</title>
    <link rel="stylesheet" href="product-card.css" />
  </head>
  <body>
    <div class="product-card">
      <h2 class="product-card__title">Stylowy T-shirt</h2>
      <p class="product-card__description">
        Wygodny bawełniany T-shirt w kolorze morskim, idealny na lato.
      </p>
      <span class="product-card__price">59.99 zł</span>
    </div>

    <div class="product-card product-card--featured">
      <h2 class="product-card__title">Super Promocja! Laptop X500</h2>
      <p class="product-card__description">
        Wydajny laptop do pracy i rozrywki. Ograniczona oferta!
      </p>
      <span class="product-card__price">2999.00 zł</span>
    </div>
  </body>
</html>
```

**`product-card.css`:**

```css
/* product-card.css */

/* --- BLOK: product-card --- */
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  max-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  display: inline-block; /* Aby karty były obok siebie */
  vertical-align: top;
}

/* --- ELEMENTY: product-card__title, product-card__description, product-card__price --- */
.product-card__title {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.product-card__description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.product-card__price {
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
}

/* --- MODYFIKATOR BLOKU: product-card--featured --- */
.product-card--featured {
  border-color: gold;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  background-color: #fffaf0;
}

.product-card--featured .product-card__title {
  color: #d4af37; /* Złoty kolor dla tytułu wyróżnionej karty */
}
```

</details>

---

### Zadanie 2: Nawigacja

Stwórz komponent nawigacji (`site-nav`). Powinien zawierać:

- Elementy pozycji nawigacji (`site-nav__item`).
- Elementy linków w nawigacji (`site-nav__link`).
- Modyfikator `site-nav__link--active` dla aktywnego linku.

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
    <title>Zadanie 2 - Nawigacja BEM</title>
    <link rel="stylesheet" href="nav-styles.css" />
  </head>
  <body>
    <nav class="site-nav">
      <ul class="site-nav__list">
        <li class="site-nav__item">
          <a href="#" class="site-nav__link site-nav__link--active"
            >Strona główna</a
          >
        </li>
        <li class="site-nav__item">
          <a href="#" class="site-nav__link">O nas</a>
        </li>
        <li class="site-nav__item">
          <a href="#" class="site-nav__link">Usługi</a>
        </li>
        <li class="site-nav__item">
          <a href="#" class="site-nav__link">Kontakt</a>
        </li>
      </ul>
    </nav>
  </body>
</html>
```

**`nav-styles.css`:**

```css
/* nav-styles.css */

/* --- BLOK: site-nav --- */
.site-nav {
  background-color: #343a40; /* Ciemne tło nawigacji */
  padding: 15px 20px;
  font-family: Arial, sans-serif;
  border-bottom: 3px solid #007bff;
}

/* --- ELEMENTY: site-nav__list, site-nav__item, site-nav__link --- */
.site-nav__list {
  list-style: none; /* Usuwa domyślne punktorzy */
  margin: 0;
  padding: 0;
  display: flex; /* Elementy obok siebie */
  justify-content: center; /* Wyśrodkowanie */
}

.site-nav__item {
  margin: 0 15px; /* Odstęp między elementami menu */
}

.site-nav__link {
  color: white;
  text-decoration: none; /* Usuwa podkreślenie linków */
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.site-nav__link:hover {
  background-color: #495057;
}

/* --- MODYFIKATOR ELEMENTU: site-nav__link--active --- */
.site-nav__link--active {
  background-color: #007bff; /* Niebieskie tło dla aktywnego linku */
  font-weight: bold;
  color: white; /* Upewniamy się, że tekst jest biały */
}

.site-nav__link--active:hover {
  background-color: #0056b3; /* Ciemniejszy niebieski na hover */
}
```

</details>

---

### Zadanie 3: Artykuł na blogu

Utwórz sekcję artykułu (`blog-article`). Powinna zawierać:

- Element dla nagłówka artykułu (`blog-article__header`).
- Element dla treści artykułu (`blog-article__content`).
- Element dla stopki artykułu (`blog-article__footer`).
- Modyfikator `blog-article__header--with-image` dla nagłówka, który zawiera obrazek.

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
    <title>Zadanie 3 - Artykuł BEM</title>
    <link rel="stylesheet" href="article-styles.css" />
  </head>
  <body>
    <article class="blog-article">
      <header class="blog-article__header">
        <h1 class="blog-article__title">Pierwszy wpis na blogu</h1>
        <p class="blog-article__meta">Opublikowano: 07.07.2025</p>
      </header>
      <section class="blog-article__content">
        <p>
          To jest treść mojego pierwszego artykułu na blogu. Skupia się na
          podstawach CSS i metodyce BEM. Mam nadzieję, że jest pomocny dla
          wszystkich początkujących!
        </p>
        <p>
          Dzięki zastosowaniu BEM, kod CSS jest czystszy i łatwiejszy do
          zarządzania, nawet przy rosnącej liczbie komponentów.
        </p>
      </section>
      <footer class="blog-article__footer">
        <p>Kategoria: Web Development</p>
        <a href="#" class="blog-article__read-more">Czytaj więcej &raquo;</a>
      </footer>
    </article>

    <article class="blog-article">
      <header class="blog-article__header blog-article__header--with-image">
        <h1 class="blog-article__title">Piękne widoki z podróży</h1>
        <img
          src="https://via.placeholder.com/600x200"
          alt="Krajobraz"
          class="blog-article__image"
        />
        <p class="blog-article__meta">Opublikowano: 01.07.2025</p>
      </header>
      <section class="blog-article__content">
        <p>
          Ostatnio wybrałem się w podróż do Norwegii. Widoki były niesamowite!
          Gorąco polecam każdemu.
        </p>
      </section>
      <footer class="blog-article__footer">
        <p>Kategoria: Podróże</p>
        <a href="#" class="blog-article__read-more">Czytaj więcej &raquo;</a>
      </footer>
    </article>
  </body>
</html>
```

**`article-styles.css`:**

```css
/* article-styles.css */

/* --- BLOK: blog-article --- */
.blog-article {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 25px;
  margin: 30px auto;
  max-width: 700px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  font-family: Georgia, serif;
}

/* --- ELEMENTY: blog-article__header, blog-article__title, blog-article__meta, blog-article__content, blog-article__footer, blog-article__read-more, blog-article__image --- */
.blog-article__header {
  margin-bottom: 20px;
  text-align: center;
}

.blog-article__title {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 8px;
}

.blog-article__meta {
  font-size: 14px;
  color: #7f8c8d;
}

.blog-article__content {
  line-height: 1.7;
  color: #34495e;
  margin-bottom: 25px;
}

.blog-article__content p {
  margin-bottom: 15px; /* Odstęp między akapitami w treści */
}

.blog-article__footer {
  text-align: right;
  font-size: 13px;
  color: #95a5a6;
  border-top: 1px dashed #ecf0f1;
  padding-top: 15px;
}

.blog-article__read-more {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.blog-article__read-more:hover {
  text-decoration: underline;
}

.blog-article__image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 15px; /* Odstęp od tytułu */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* --- MODYFIKATOR: blog-article__header--with-image --- */
.blog-article__header--with-image {
  background-color: #f8f8f8; /* Lekkie tło dla nagłówka z obrazkiem */
  padding-bottom: 15px; /* Dodatkowy padding na dole */
}

.blog-article__header--with-image .blog-article__title {
  color: #007bff; /* Inny kolor dla tytułu w nagłówku z obrazkiem */
}
```

</details>

---

To wszystko na temat podstaw metodyki BEM! Gratulacje, że poświęciłeś/aś czas na naukę tego wartościowego narzędzia. BEM znacząco poprawi czytelność, modularność i utrzymanie Twojego kodu CSS. Pamiętaj, że kluczem jest konsekwencja w stosowaniu tych zasad.

Masz pytania dotyczące zastosowania BEM w konkretnym przypadku, a może chcesz porównać ją z innymi metodykami? Daj znać!
