---
title: "Pierwsze kroki z TypeScript w React – praktyczne podstawy"
description: "Zrozum podstawy TypeScript w środowisku React – prostym językiem i na praktycznych przykładach."
keywords:
  [typescript, react, frontend, nauka, komponenty, props, state, kurs, learning]
categories: [typescript, react]
createdAt: 2025-06-22
---

Poznaj, czym jest TypeScript i jak zacząć używać go w projektach React. Prosto, na przykładach, z zadaniami do samodzielnego wykonania! 🚀

Ten przewodnik przeprowadzi Cię przez najważniejsze zagadnienia, pokazując nie tylko kod, ale też wyjaśniając pojęcia, praktyczne zastosowania i dobre praktyki. Na końcu znajdziesz ćwiczenia z rozwiązaniami.

---

## Spis treści

1. [Dlaczego warto używać TypeScript w React?](#dlaczego-warto-używać-typescript-w-react)
2. [Podstawowe typy w TypeScript](#podstawowe-typy-w-typescript)
3. [Tworzenie komponentów funkcyjnych z typami](#tworzenie-komponentów-funkcyjnych-z-typami)
4. [Props i typowanie propsów](#props-i-typowanie-propsów)
5. [Typowanie stanu (useState)](#typowanie-stanu-usestate)
6. [Typowanie referencji (useRef)](#typowanie-referencji-useref)
7. [Przydatne narzędzia i wskazówki](#przydatne-narzędzia-i-wskazówki)
8. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1: Prosty komponent powitalny](#zadanie-1-prosty-komponent-powitalny)
   - [Zadanie 2: Typowanie tablicy liczb](#zadanie-2-typowanie-tablicy-liczb)
   - [Zadanie 3: Komponent z typowanymi propsami i zdarzeniem](#zadanie-3-komponent-z-typowanymi-propsami-i-zdarzeniem)
   - [Zadanie 4: Typowanie obiektu w stanie](#zadanie-4-typowanie-obiektu-w-stanie)
   - [Zadanie 5: Lista komponentów na podstawie tablicy obiektów](#zadanie-5-lista-komponentów-na-podstawie-tablicy-obiektów)

---

## Dlaczego warto używać TypeScript w React?

TypeScript to nadzbiór JavaScriptu, który dodaje typowanie statyczne. Oznacza to, że już podczas pisania kodu wykryjesz wiele potencjalnych błędów, zanim uruchomisz aplikację.

**Korzyści z używania TypeScript w React:**

- 🛡️ Większe bezpieczeństwo i przewidywalność kodu – typy pozwalają szybciej wyłapywać literówki i błędy logiczne.
- 👩‍💻 Intuicyjna praca w zespole – kod jest czytelniejszy, a podpowiedzi edytora (IntelliSense) pomagają szybciej pisać i rozumieć cudzy kod.
- 🔄 Łatwiejsze refaktoryzacje – zmiany w typach wymuszają aktualizację powiązanych miejsc w aplikacji.
- ✅ Lepsze dokumentowanie kodu – typy jasno określają, jakie dane są przekazywane do komponentów i funkcji.

**W React TypeScript szczególnie pomaga:**

- w typowaniu propsów przekazywanych do komponentów,
- w typowaniu stanu (useState, useReducer),
- przy pracy z refami (useRef),
- podczas pracy z zewnętrznymi bibliotekami i API.

---

## Podstawowe typy w TypeScript

Najczęściej używane typy to:

```ts
let name: string = "Ala";
let age: number = 25;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let person: { name: string; age: number } = { name: "Jan", age: 30 };
```

Możesz też definiować własne typy i interfejsy, co ułatwia wielokrotne użycie i czytelność kodu:

```ts
type User = {
  id: number;
  name: string;
};

interface Product {
  id: number;
  price: number;
}
```

**Praktyczna wskazówka:**  
Jeśli korzystasz z API lub masz złożone obiekty, zawsze warto dodać własny typ lub interfejs!

---

## Tworzenie komponentów funkcyjnych z typami

Najprostszy komponent funkcyjny w TypeScript:

```tsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```

Jeśli nie korzystasz z propsów, nie musisz nic dodatkowego typować.  
W przypadku komponentów z propsami – zobacz niżej.

---

## Props i typowanie propsów

Propsy to dane przekazywane do komponentów. W TypeScript opisujesz je za pomocą interfejsu lub typu:

```tsx
interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  return <p>Witaj, {props.name}!</p>;
}
```

**Zalety typowania propsów:**

- Edytor podpowiada, jakie dane można przekazać,
- Szybko znajdziesz literówki lub brakujące właściwości,
- Czytelna dokumentacja komponentu.

---

## Typowanie stanu (useState)

Możesz jasno określić, jaki typ danych przechowuje Twój stan:

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>Zmniejsz</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Zwiększ</button>
    </div>
  );
}
```

**Wskazówka:**  
Przy bardziej złożonych stanach (np. obiekty, tablice) – zawsze warto podać typ, nawet jeśli TypeScript potrafi go wywnioskować!

---

## Typowanie referencji (useRef)

Referencje pozwalają odwoływać się bezpośrednio do elementów DOM lub innych wartości:

```tsx
import { useRef, useCallback } from "react";

function Counter() {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    ref.current?.focus();
  }, [ref]);

  return (
    <div>
      <button onClick={handleClick}>
        Kliknij aby sfokusować drugi przycisk
      </button>
      <button ref={ref}>Drugi przycisk</button>
    </div>
  );
}
```

**Dzięki typowaniu** masz pewność, do jakiego typu elementu się odwołujesz (np. `HTMLButtonElement`).

---

## Przydatne narzędzia i wskazówki

- **TSX** – pliki z rozszerzeniem `.tsx` pozwalają używać JSX z TypeScriptem.
- **TypeScript Playground** – https://www.typescriptlang.org/play – świetny do testowania kodu na żywo.
- **Oficjalna dokumentacja React + TypeScript**: https://react.dev/learn/typescript
- **Polecenie tworzące nowy projekt React + TS:**
  ```bash
  npm init vite@latest my-app -- --template react-ts
  ```

---

## Zadania do wykonania

### Zadanie 1: Prosty komponent powitalny

Stwórz komponent powitalny, który przyjmuje przez props imię użytkownika (typ string) i wyświetla komunikat "Cześć, [imię]!".

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```tsx
type WelcomeProps = {
  name: string;
};

const Welcome = ({ name }: WelcomeProps) => <p>Cześć, {name}!</p>;
```

</details>

---

### Zadanie 2: Typowanie tablicy liczb

Zadeklaruj w komponencie tablicę liczb jako stan przy użyciu useState oraz odpowiedniego typu.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```tsx
import { useState } from "react";

const NumbersComponent = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3]);
  return <div>{numbers.join(", ")}</div>;
};
```

</details>

---

### Zadanie 3: Komponent z typowanymi propsami i zdarzeniem

Stwórz przycisk, który przyjmuje przez props funkcję onClick oraz tekst do wyświetlenia. Oba propsy odpowiednio wytypuj.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);
```

</details>

---

### Zadanie 4: Typowanie obiektu w stanie

Zadeklaruj stan użytkownika jako obiekt z polami name (string) i age (number).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```tsx
import { useState } from "react";

type User = {
  name: string;
  age: number;
};

const UserComponent = () => {
  const [user, setUser] = useState<User>({ name: "Anna", age: 28 });

  return (
    <div>
      {user.name}, wiek: {user.age}
    </div>
  );
};
```

</details>

---

### Zadanie 5: Lista komponentów na podstawie tablicy obiektów

Zadeklaruj tablicę użytkowników (name: string, id: number) i wyświetl imiona w liście.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```tsx
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Kasia" },
  { id: 2, name: "Marek" },
];

const UserTile = (props: { user: User }) => <li>{props.user.name}</li>;

const UserList = () => (
  <ul>
    {users.map((user) => (
      <UserTile key={user.id} user={user} />
    ))}
  </ul>
);
```

</details>
