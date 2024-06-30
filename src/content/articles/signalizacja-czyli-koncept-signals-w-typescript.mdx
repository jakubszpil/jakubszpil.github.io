---
title: "Signalizacja, czyli koncept Signals w Typescript"
description: "Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny."
keywords: [typescript, wzorce, signals]
categories: [typescript, wzorce]
createdAt: 2024-06-20
updatedAt: 2024-06-20
---

Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.

## Czym jest Signal?

Signal (sygnał) jest obiektem, który reprezentuje strumień danych, który może być obserwowany i reagować na zmiany tych danych. W kontekście frontendu, sygnały mogą być używane do reagowania na zdarzenia użytkownika, zmiany stanu aplikacji, czy asynchroniczne operacje, takie jak żądania sieciowe.

## Korzyści z używania Signal

1. **Reaktywność:** Umożliwiają budowanie aplikacji, które automatycznie reagują na zmiany danych.
2. **Czytelność:** Poprawiają czytelność kodu poprzez eliminację złożonych zależności i ręcznego zarządzania stanem.
3. **Modularność:** Ułatwiają zarządzanie stanem w skomplikowanych aplikacjach poprzez oddzielenie logiki zarządzania stanem od komponentów.

## Implementacja Signal w TypeScript

### Przykład 1: Prosty Signal

Poniżej przedstawiono prostą implementację sygnału w TypeScript:

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

W tym przykładzie zdefiniowano klasę `Signal`, która umożliwia subskrybowanie, usuwanie subskrypcji oraz emitowanie wartości do wszystkich subskrybentów.

### Przykład 2: Zaawansowany Signal z Typowaniem

Poniższy przykład przedstawia bardziej zaawansowaną implementację sygnału z wykorzystaniem typów generycznych:

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

W tym przykładzie `Signal` używa `Set` do przechowywania subskrybentów, co zapobiega wielokrotnemu dodawaniu tego samego subskrybenta. Zastosowanie typów generycznych pozwala na tworzenie sygnałów obsługujących dowolne typy danych.

## Zakończenie

Signal w TypeScript to potężne narzędzie do budowania reaktywnych aplikacji, które mogą automatycznie reagować na zmiany stanu. Dzięki silnemu typowaniu TypeScript, implementacja sygnałów jest bezpieczna i efektywna, co przyczynia się do tworzenia bardziej zrozumiałych i łatwiejszych w utrzymaniu kodów. Implementując sygnały, możemy znacząco uprościć zarządzanie stanem w naszych aplikacjach i poprawić ich architekturę.
