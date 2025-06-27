---
title: "Pierwsze kroki z TypeScript w React – praktyczne podstawy"
description: "Zrozum podstawy TypeScript w środowisku React – prostym językiem i na praktycznych przykładach."
keywords:
  [typescript, react, frontend, nauka, komponenty, props, state, kurs, learning]
categories: [typescript, react]
createdAt: 2025-06-22
quiz:
  title: "Quiz: TypeScript w React – podstawy"
  questions:
    - question: "Które zdanie najlepiej opisuje główną zaletę TypeScript w projektach React?"
      options:
        - "Pozwala na typowanie propsów i stanu, zwiększając bezpieczeństwo kodu."
        - "Generuje automatycznie dokumentację komponentów."
        - "Zamienia kod na czysty CSS."
        - "Eliminuje konieczność używania npm."
      answer: 0
      explanation: "Największą zaletą jest wprowadzenie typów w propsach, stanie i API komponentów."

    - question: "Jak poprawnie zadeklarować stan liczbowy w komponencie funkcyjnym z użyciem useState?"
      options:
        - "const [count, setCount] = useState(0: number);"
        - "let count = useState(0);"
        - "const [count, setCount] = useState<string>(0);"
        - "const [count, setCount] = useState<number>(0);"
      answer: 3
      explanation: "Poprawna składnia to useState<number>(0)."

    - question: "Jak opisać typ propsów w komponencie funkcyjnym?"
      options:
        - "Nie trzeba typować propsów w TS."
        - "Przez interface lub type i przekazać go do propsów funkcji."
        - "Tylko poprzez klasę."
        - "Wyłącznie przez any."
      answer: 1
      explanation: "Propsy typujemy przez interface lub type i używamy ich w definicji funkcji."

    - question: "Który kod prawidłowo typuje referencję do przycisku?"
      options:
        - "const ref = useRef(null);"
        - "const ref = useRef<Button>(null);"
        - "const ref = useRef<HTMLDivElement>(null);"
        - "const ref = useRef<HTMLButtonElement>(null);"
      answer: 3
      explanation: "Poprawny typ dla referencji do buttona to HTMLButtonElement."

    - question: "Co wyświetli poniższy komponent?\n\n```tsx\ntype WelcomeProps = { name: string };\nconst Welcome = ({ name }: WelcomeProps) => <p>Cześć, {name}!</p>;\n```\nJeśli wywołasz `<Welcome name=\"Ala\" />`"
      options:
        - "Witaj, Ala!"
        - "undefined"
        - "Cześć, Ala!"
        - "Błąd kompilacji"
      answer: 2
      explanation: "Komponent wyświetli 'Cześć, Ala!'."
---

Chcesz pisać nowoczesne aplikacje i mieć pewność, że Twój kod jest czysty, bezpieczny i przyszłościowy? 🚀 TypeScript w połączeniu z React to duet, który pokochasz od pierwszego projektu! Ten przewodnik przeprowadzi Cię krok po kroku przez najważniejsze podstawy – bez zbędnych teorii, za to z praktycznymi przykładami i zadaniami, które pomogą Ci naprawdę zrozumieć temat.

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
9. [Podsumowanie](#podsumowanie)

---

## Dlaczego warto używać TypeScript w React?

TypeScript to nie tylko “lepszy JavaScript” – to Twoja tajna broń na błędy w kodzie! Dzięki niemu:

- 🛡️ Kod jest bardziej przewidywalny i bezpieczniejszy – typy wykrywają literówki i błędy logiczne już podczas pisania.
- ⚡ Praca w zespole staje się łatwiejsza – czytelny kod, lepsze podpowiedzi w edytorze (IntelliSense), szybkie ogarnianie cudzych projektów.
- 🔄 Refaktoryzacje nie są już straszne – zmiany w typach wymuszają poprawki w całym projekcie, więc nic Ci nie umknie.
- 📖 Typy to żywa dokumentacja – od razu wiesz, co i gdzie przekazujesz do komponentów oraz funkcji.

W React TypeScript to must-have, jeśli chcesz:

- jasno typować propsy i stan (`useState`, `useReducer`),
- wygodnie pracować z referencjami (`useRef`),
- bez obaw korzystać z zewnętrznych bibliotek i API.

---

## Podstawowe typy w TypeScript

Najczęściej spotkasz się z:

```ts
let name: string = "Ala";
let age: number = 25;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let person: { name: string; age: number } = { name: "Jan", age: 30 };
```

Chcesz być PRO? Twórz własne typy i interfejsy – kod będzie czytelniejszy i łatwiejszy do rozbudowy:

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

> 💡 **TIP:** Korzystaj z własnych typów zawsze, gdy masz złożone obiekty lub korzystasz z API!

---

## Tworzenie komponentów funkcyjnych z typami

Najprostszy komponent funkcyjny w TypeScript:

```tsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```

Nie używasz propsów? Nie musisz nic typować!  
Ale gdy przekazujesz dane do komponentu – patrz niżej.

---

## Props i typowanie propsów

Propsy to podstawa pracy z Reactem! W TypeScript opisujesz je przez interfejs lub typ:

```tsx
interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  return <p>Witaj, {props.name}!</p>;
}
```

**Co zyskujesz?**

- Edytor podpowiada, co możesz przekazać,
- Błyskawicznie wykrywasz literówki i brakujące dane,
- Tworzysz samodokumentujące się komponenty!

---

## Typowanie stanu (useState)

Chcesz jasno określić, co przechowujesz w stanie? Z TypeScriptem to proste:

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

> ⭐ **Pro tip:** Przy bardziej złożonych stanach (np. obiekty, tablice) – zawsze wpisuj typ ręcznie, nawet jeśli TypeScript czasem sam się domyśli!

---

## Typowanie referencji (useRef)

Referencje to Twój most do DOM-u i wartości poza renderem:

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

Dzięki typowaniu masz pewność, do jakiego elementu się odwołujesz (`HTMLButtonElement`).

---

## Przydatne narzędzia i wskazówki

- **TSX** – pliki `.tsx` pozwalają pisać JSX z typami!
- **TypeScript Playground** – testuj kod online: https://www.typescriptlang.org/play
- **Oficjalna dokumentacja React + TypeScript:** https://react.dev/learn/typescript
- **Chcesz szybko wystartować?**
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

---

## Podsumowanie

Gratulacje! 🎉 Zrobiłeś właśnie pierwszy krok w świat TypeScript + React – połączenia, które sprawia, że kod staje się bardziej przewidywalny, czytelny i po prostu przyjemniejszy w pracy. Dzięki typowaniu szybciej łapiesz błędy, a Twoje komponenty są super czytelne nie tylko dla Ciebie, ale też dla całego zespołu.

Nie bój się eksperymentować, zadawać pytań i sprawdzać rzeczy w praktyce. Każdy kod napisany z TypeScriptem to inwestycja w Twój rozwój jako programisty! 🚀
