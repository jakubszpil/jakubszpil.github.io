---
title: "Pierwsze kroki z TypeScript w React - praktyczne podstawy"
description: "Zrozum podstawy TypeScript w środowisku React - prostym językiem i na praktycznych przykładach."
keywords:
  [typescript, react, frontend, nauka, komponenty, props, state, kurs, learning]
category: react
createdAt: 2025-06-22
quiz:
  title: "Quiz: TypeScript w React - podstawy"
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

    - question: "Co wyświetli poniższy komponent?nn```tsxntype WelcomeProps = { name: string };nconst Welcome = ({ name }: WelcomeProps) => <p>Cześć, {name}!</p>;n```nJeśli wywołasz `<Welcome name='Ala' />`"
      options:
        - "Witaj, Ala!"
        - "undefined"
        - "Cześć, Ala!"
        - "Błąd kompilacji"
      answer: 2
      explanation: "Komponent wyświetli 'Cześć, Ala!'."
---

Witaj w świecie **Reacta** połączonego z **TypeScriptem**! 🚀 Jeśli chcesz pisać nowoczesne aplikacje i mieć pewność, że Twój kod jest czysty, bezpieczny i przyszłościowy, to właśnie znalazłeś/aś odpowiednie narzędzie. TypeScript w połączeniu z React to duet, który pokochasz od pierwszego projektu! Ten przewodnik przeprowadzi Cię krok po kroku przez najważniejsze podstawy - bez zbędnych teorii, za to z praktycznymi przykładami i zadaniami, które pomogą Ci naprawdę zrozumieć temat. ✨

## Dlaczego warto używać TypeScript w React?

TypeScript to nie tylko “lepszy JavaScript" - to Twoja tajna broń na błędy w kodzie! Dzięki niemu:

- 🛡️ **Kod jest bardziej przewidywalny i bezpieczniejszy** - typy wykrywają literówki i błędy logiczne już podczas pisania. To jak posiadanie prywatnego asystenta, który sprawdza Twój kod na bieżąco!
- ⚡ **Praca w zespole staje się łatwiejsza** - czytelny kod, lepsze podpowiedzi w edytorze (IntelliSense), szybkie ogarnianie cudzych projektów. Koniec z "zgadywaniem" jakie dane funkcja przyjmuje!
- 🔄 **Refaktoryzacje nie są już straszne** - zmiany w typach wymuszają poprawki w całym projekcie, więc nic Ci nie umknie. TypeScript prowadzi Cię za rękę przez proces zmian.
- 📖 **Typy to żywa dokumentacja** - od razu wiesz, co i gdzie przekazujesz do komponentów oraz funkcji. Twój kod staje się samoopisujący.

W React TypeScript to must-have, jeśli chcesz:

- jasno typować **propsy** i **stan** (`useState`, `useReducer`),
- wygodnie pracować z **referencjami** (`useRef`),
- bez obaw korzystać z zewnętrznych bibliotek i API.

---

## Podstawowe typy w TypeScript

Najczęściej spotkasz się z podstawowymi typami, które pomogą Ci kontrolować dane w Twojej aplikacji:

```ts
let userName: string = "Alice"; // Tekst
let userAge: number = 25; // Liczba
let isActive: boolean = true; // Wartość logiczna (prawda/fałsz)
let primes: number[] = [2, 3, 5, 7]; // Tablica liczb
let userProfile: { name: string; age: number } = { name: "John", age: 30 }; // Obiekt
let anyValue: any = "Can be anything!"; // Typ 'any' - używaj z ostrożnością! Wyłącza sprawdzanie typów.
let unknownValue: unknown = 123; // Typ 'unknown' - bezpieczniejsza alternatywa dla 'any', wymaga sprawdzenia typu.
let userStatus: "active" | "inactive" = "active"; // Literał (union type) - tylko te dwie wartości są dozwolone.
```

Chcesz być PRO? Twórz własne **typy** i **interfejsy** - kod będzie czytelniejszy i łatwiejszy do rozbudowy:

```ts
// Przykład użycia 'type'
type User = {
  id: number;
  name: string;
  email?: string; // Opcjonalne pole
};

// Przykład użycia 'interface'
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Opcjonalne pole
  onSale: boolean;
}
```

**`type` vs `interface`**
Choć często używane zamiennie, istnieją pewne różnice. `interface` może być rozszerzany i implementowany przez klasy, `type` jest bardziej elastyczny do tworzenia aliasów typów złożonych (np. unii). W prostych przypadkach, takich jak definicja propsów, wybór między `type` a `interface` często sprowadza się do preferencji.

> 💡 **TIP:** Korzystaj z własnych typów (`type` lub `interface`) zawsze, gdy masz złożone obiekty, struktury danych lub korzystasz z API! Ułatwi to debugowanie i utrzymanie kodu.

---

## Tworzenie komponentów funkcyjnych z typami

Najprostszy komponent funkcyjny w TypeScript, który nie przyjmuje żadnych propsów, nie wymaga jawnego typowania:

```tsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```

Jeśli komponent nie przyjmuje żadnych propsów, TypeScript sam to zrozumie. Jeśli jednak chcesz być super precyzyjny (i czasami jest to wymagane przez lintery lub pewne schematy projektowe), możesz użyć typu `React.FC` (Functional Component) lub `React.FunctionComponent`.

```tsx
import { FC } from "react";

const SimpleComponent: FC = () => {
  return <p>This is a simple component.</p>;
};

// lub bardziej zwięźle
const AnotherSimpleComponent = () => {
  return <p>Another simple component.</p>;
};
```

Zauważ, że importujemy `FC` bezpośrednio z pakietu `react`, a nie cały obiekt `React`.

---

## Props i typowanie propsów

Propsy to podstawa przekazywania danych do komponentów w React! W TypeScript opisujesz je przez **interfejs** lub **typ**, a następnie wskazujesz ten typ jako argument komponentu.

```tsx
interface WelcomeProps {
  userName: string;
  age?: number; // Opcjonalny prop
}

function Welcome({ userName, age }: WelcomeProps) {
  return (
    <p>
      Hello, {userName}! {age && `You are ${age} years old.`} 👋
    </p>
  );
}

// Użycie komponentu:
// <Welcome userName="Alice" />
// <Welcome userName="Bob" age={30} />
```

**Co zyskujesz?**

- **IntelliSense:** Edytor podpowiada, jakie propsy są dostępne i jakiego są typu, gdy piszesz `<Welcome ...`.
- **Wykrywanie błędów na etapie kompilacji:** Jeśli zapomnisz przekazać wymagany prop, lub przekazujesz go z niewłaściwym typem, TypeScript od razu Cię o tym poinformuje.
- **Samodokumentujący się kod:** Definicja interfejsu propsów służy jako jasna dokumentacja dla każdego, kto używa Twojego komponentu.

---

## Typowanie stanu (useState)

Hook `useState` pozwala komponentom funkcyjnym zarządzać ich wewnętrznym stanem. Z TypeScriptem możesz jasno określić, co przechowujesz w stanie, zwiększając tym samym bezpieczeństwo i czytelność kodu.

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0); // Jawnie typujemy stan jako 'number'
  const [message, setMessage] = useState<string>("Hello"); // Jawnie typujemy stan jako 'string'
  const [isActive, setIsActive] = useState<boolean>(false); // Jawnie typujemy stan jako 'boolean'

  // Przykład złożonego stanu: obiekt
  interface UserProfile {
    name: string;
    email: string;
    isLoggedIn: boolean;
  }
  const [user, setUser] = useState<UserProfile>({
    name: "John Doe",
    email: "john@example.com",
    isLoggedIn: false,
  });

  return (
    <div>
      <h3>Counter:</h3>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      <h3>Message:</h3>
      <p>{message}</p>
      <button onClick={() => setMessage("Updated message!")}>
        Update Message
      </button>

      <h3>User Profile:</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Logged In: {user.isLoggedIn ? "Yes" : "No"}</p>
      <button
        onClick={() => setUser({ ...user, isLoggedIn: !user.isLoggedIn })}
      >
        Toggle Login Status
      </button>
    </div>
  );
}
```

> ⭐ **Pro tip:** Przy bardziej złożonych stanach (np. obiekty, tablice) - zawsze jawnie wpisuj typ. Nawet jeśli TypeScript czasem sam się domyśli (tzw. inferencja typów), jawne typowanie jest bardziej czytelne i odporne na błędy, zwłaszcza gdy stan może być początkowo `null` lub pustą tablicą.

---

## Typowanie referencji (useRef)

Hook `useRef` służy do tworzenia referencji do elementów DOM lub do przechowywania wartości, które mają przetrwać ponowne renderowanie komponentu, ale nie wywołują go. Z TypeScriptem musisz jawnie określić, do jakiego typu elementu lub wartości odwołuje się referencja.

```tsx
import { useRef, useCallback } from "react";

function FocusButton() {
  // Typujemy ref jako referencję do elementu HTMLButtonElement,
  // która może być null, zanim ref zostanie przypisany do elementu DOM.
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    // Używamy operatora łańcuchowania opcjonalnego (?.) aby upewnić się,
    // że buttonRef.current nie jest null przed wywołaniem focus().
    buttonRef.current?.focus();
  }, []); // useCallback bez zależności, ponieważ buttonRef jest stały.

  // Przykład referencji do przechowywania wartości, która nie jest elementem DOM
  const counterRef = useRef<number>(0);
  console.log("Current value in counterRef:", counterRef.current);

  const incrementCounter = () => {
    counterRef.current += 1;
    console.log("New value in counterRef:", counterRef.current);
    // Zauważ, że zmiana counterRef.current nie spowoduje ponownego renderowania!
  };

  return (
    <div>
      <h3>Focus Button Example:</h3>
      <button onClick={handleClick}>Click to focus the other button</button>
      <button ref={buttonRef}>Another Button</button>

      <h3>Ref for value storage:</h3>
      <p>Check console for counterRef value. It won't update UI directly.</p>
      <button onClick={incrementCounter}>Increment Counter in Ref</button>
    </div>
  );
}
```

Dzięki typowaniu masz pewność, do jakiego elementu się odwołujesz (`HTMLButtonElement`) i jakie ma on właściwości/metody. Typy `HTMLElement`, `HTMLDivElement`, `HTMLInputElement` itp. są wbudowane w bibliotekę DOM.

---

## Przydatne narzędzia i wskazówki

- **TSX (lub JSX z TypeScriptem)** - Twoje pliki React powinny mieć rozszerzenie `.tsx` (lub `.jsx` jeśli używasz React w trybie TypeScript, ale `.tsx` jest standardem). Pozwalają one na mieszanie składni JSX z typami TypeScript!
- **TypeScript Playground** - idealne narzędzie do szybkiego testowania kodu TypeScript online bez konfiguracji środowiska:
  `https://www.typescriptlang.org/play`
- **Oficjalna dokumentacja React + TypeScript:** Zawsze warto zajrzeć do źródła - dokumentacja Reacta ma dedykowaną sekcję o TypeScript:
  `https://react.dev/learn/typescript`
- **Chcesz szybko wystartować z nowym projektem?** Użyj Vite z szablonem React + TypeScript:
  ```bash
  npm create vite@latest my-react-ts-app -- --template react-ts
  ```
  To polecenie automatycznie skonfiguruje projekt z Vite, Reactem i TypeScriptem, gotowy do pracy od razu.

---

## Zadania do wykonania

Poniższe zadania pomogą Ci utrwalić wiedzę o podstawach typowania w React z TypeScriptem. Stwórz nowy projekt React z Vite (jeśli jeszcze tego nie zrobiłeś/aś za pomocą polecenia `npm create vite@latest my-react-ts-app -- --template react-ts`), a następnie wykonaj w nim poniższe zadania, tworząc osobne komponenty w katalogu `src/components`. Pamiętaj, aby importować tylko te Hooki i funkcje, których potrzebujesz!

### Zadanie 1: Prosty komponent powitalny

Stwórz komponent funkcyjny `Greeting`, który przyjmuje przez props imię użytkownika (`userName` typu `string`) i wyświetla komunikat "Hello, [userName]!".

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```tsx
// src/components/Greeting.tsx
interface GreetingProps {
  userName: string;
}

const Greeting = ({ userName }: GreetingProps) => {
  return <p>Hello, {userName}!</p>;
};

export default Greeting;

// src/App.tsx (przykładowe użycie)
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting userName="Alice" />
      <Greeting userName="Bob" />
    </div>
  );
}

export default App;
```

</details>

---

### Zadanie 2: Typowanie tablicy liczb

Zadeklaruj w komponencie `NumberList` tablicę liczb jako stan przy użyciu `useState` oraz odpowiedniego typu. Wyświetl te liczby.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```tsx
// src/components/NumberList.tsx
import { useState } from "react";

const NumberList = () => {
  const [numbers, setNumbers] = useState<number[]>([10, 20, 30, 40]);

  return (
    <div>
      <h3>Numbers:</h3>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;

// src/App.tsx (przykładowe użycie)
import NumberList from "./components/NumberList";

function App() {
  return (
    <div>
      <NumberList />
    </div>
  );
}

export default App;
```

</details>

---

### Zadanie 3: Komponent z typowanymi propsami i zdarzeniem

Stwórz komponent `ClickableButton`, który przyjmuje przez props `label` (tekst do wyświetlenia na przycisku, `string`) oraz `onClick` (funkcję, która ma być wywołana po kliknięciu). Oba propsy odpowiednio wytypuj.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```tsx
// src/components/ClickableButton.tsx
interface ClickableButtonProps {
  label: string;
  onClick: () => void; // Funkcja, która nic nie przyjmuje i nic nie zwraca
}

const ClickableButton = ({ label, onClick }: ClickableButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ClickableButton;

// src/App.tsx (przykładowe użycie)
import ClickableButton from "./components/ClickableButton";

function App() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <ClickableButton label="Click Me" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
```

</details>

---

### Zadanie 4: Typowanie obiektu w stanie

Zadeklaruj stan użytkownika w komponencie `UserProfile` jako obiekt z polami `firstName` (string), `lastName` (string) i `age` (number). Wyświetl te informacje.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```tsx
// src/components/UserProfile.tsx
import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
  });

  return (
    <div>
      <h3>User Profile:</h3>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment Age
      </button>
    </div>
  );
};

export default UserProfile;

// src/App.tsx (przykładowe użycie)
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default App;
```

</details>

---

### Zadanie 5: Lista komponentów na podstawie tablicy obiektów

Zadeklaruj tablicę obiektów `Product` (z polami `id`: `number`, `name`: `string`, `price`: `number`) i wyświetl każdy produkt jako osobny element listy (`<li>`), korzystając z komponentu `ProductItem`. Pamiętaj o kluczu `key`!

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```tsx
// src/components/ProductItem.tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => (
  <li>
    {product.name} - ${product.price.toFixed(2)}
  </li>
);

export default ProductItem;

// src/components/ProductList.tsx
import { useState } from "react";
import ProductItem from "./ProductItem"; // Importuj komponent ProductItem

interface Product {
  // Ponownie definiujemy interfejs, lub importujemy go z pliku typów, jeśli jest globalny
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
  ]);

  return (
    <div>
      <h3>Our Products:</h3>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

// src/App.tsx (przykładowe użycie)
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
```

</details>

---

## Podsumowanie

Gratulacje! 🎉 Zrobiłeś właśnie pierwszy krok w świat TypeScript + React - połączenia, które sprawia, że kod staje się bardziej przewidywalny, czytelny i po prostu przyjemniejszy w pracy. Dzięki typowaniu szybciej łapiesz błędy, a Twoje komponenty są super czytelne nie tylko dla Ciebie, ale też dla całego zespołu.

Nie bój się eksperymentować, zadawać pytań i sprawdzać rzeczy w praktyce. Każdy kod napisany z TypeScriptem to inwestycja w Twój rozwój jako programisty! 🚀
