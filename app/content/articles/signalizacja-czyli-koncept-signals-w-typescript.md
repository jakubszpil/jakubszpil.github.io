---
title: "Signalizacja, czyli koncept Signals w Typescript"
description: "Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny."
keywords: [typescript, wzorce projektowe, signals, blog]
categories: [typescript, wzorce-projektowe]
createdAt: 2024-06-20
---

Signal to koncepcja znana z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzanie stanem aplikacji. Dzięki silnemu typowaniu TypeScript, sygnały można zaimplementować w sposób bezpieczny, czytelny i efektywny.

---

## Spis treści

1. [Czym jest Signal?](#czym-jest-signal)
2. [Korzyści z używania Signal](#korzyści-z-używania-signal)
3. [Prosta implementacja Signal w TypeScript](#prosta-implementacja-signal-w-typescript)
4. [Zaawansowana implementacja Signal z typowaniem](#zaawansowana-implementacja-signal-z-typowaniem)
5. [Praktyczne zastosowania sygnałów](#praktyczne-zastosowania-sygnałów)
6. [Podsumowanie](#podsumowanie)

---

## Czym jest Signal?

**Signal** (sygnał) to obiekt reprezentujący strumień danych, który może być obserwowany i reagować na ich zmiany. Sygnały świetnie sprawdzają się w aplikacjach frontendowych, gdzie mogą służyć do reagowania na:

- zdarzenia użytkownika,
- zmiany stanu aplikacji,
- asynchroniczne operacje (np. żądania sieciowe).

---

## Korzyści z używania Signal

- **Reaktywność:** Automatyczne reagowanie na zmiany danych w aplikacji.
- **Czytelność:** Eliminacja złożonych zależności i ręcznego zarządzania stanem.
- **Modularność:** Oddzielenie logiki zarządzania stanem od komponentów, co ułatwia rozwój i utrzymanie kodu.

---

## Prosta implementacja Signal w TypeScript

Poniższy przykład przedstawia bazową implementację sygnału:

```typescript
type Listener<T> = (value: T) => void;

class Signal<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: Listener<T>): void {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener<T>): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  emit(value: T): void {
    this.listeners.forEach((listener) => listener(value));
  }
}

// Użycie sygnału
const numberSignal = new Signal<number>();

numberSignal.subscribe((value) => {
  console.log(`Received value: ${value}`);
});

numberSignal.emit(42); // Output: Received value: 42
```

**Opis:**  
Klasa `Signal` pozwala na subskrybowanie funkcji-odbiorców, ich usuwanie oraz emitowanie wartości do wszystkich subskrybentów.

---

## Zaawansowana implementacja Signal z typowaniem

W większych aplikacjach warto zastosować typy generyczne i kolekcje, które zapobiegają wielokrotnemu dodawaniu tego samego subskrybenta:

```typescript
type Listener<T> = (value: T) => void;

class Signal<T> {
  private listeners: Set<Listener<T>> = new Set();

  subscribe(listener: Listener<T>): void {
    this.listeners.add(listener);
  }

  unsubscribe(listener: Listener<T>): void {
    this.listeners.delete(listener);
  }

  emit(value: T): void {
    for (const listener of this.listeners) {
      listener(value);
    }
  }
}

// Użycie sygnału z typem generycznym
interface User {
  name: string;
  age: number;
}

const userSignal = new Signal<User>();

userSignal.subscribe((user) => {
  console.log(`User: ${user.name}, Age: ${user.age}`);
});

userSignal.emit({ name: "John Doe", age: 30 }); // Output: User: John Doe, Age: 30
```

**Opis:**  
Dzięki użyciu `Set`, każdy subskrybent pojawia się tylko raz. Typy generyczne umożliwiają tworzenie sygnałów dla różnych typów danych.

---

## Praktyczne zastosowania sygnałów

Sygnały są szeroko stosowane m.in. w:

- zarządzaniu stanem komponentów w frameworkach frontendowych (np. Angular Signals, SolidJS Signals),
- reagowaniu na zmiany danych w czasie rzeczywistym (np. WebSocket, API),
- obsłudze zdarzeń pomiędzy niezależnymi modułami (np. event bus).

**Przykład:**

```typescript
// Sygnał do powiadamiania o zmianie zalogowanego użytkownika
const authSignal = new Signal<User | null>();

authSignal.subscribe((user) => {
  if (user) {
    console.log("Zalogowano użytkownika:", user.name);
  } else {
    console.log("Wylogowano użytkownika");
  }
});

// Logowanie użytkownika
authSignal.emit({ name: "Anna", age: 25 });
// Wylogowanie użytkownika
authSignal.emit(null);
```

---

## Podsumowanie

Signal w TypeScript to skuteczny sposób na budowę reaktywnych aplikacji i automatyczne reagowanie na zmiany stanu. Silne typowanie pozwala uniknąć wielu błędów i sprawia, że kod jest zrozumiały oraz łatwy w utrzymaniu. Implementując sygnały, możesz znacząco uprościć zarządzanie stanem i poprawić architekturę swoich aplikacji.
