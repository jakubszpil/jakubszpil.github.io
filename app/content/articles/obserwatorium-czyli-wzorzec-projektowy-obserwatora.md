---
title: "Obserwatorium, czyli wzorzec projektowy obserwatora"
description: "Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu."
keywords: [typescript, wzorce projektowe, programowanie, blog]
categories: [typescript, wzorce-projektowe]
createdAt: 2024-06-20
---

Wzorzec projektowy Obserwator (ang. Observer) to jeden z kluczowych wzorców, szczególnie przydatny w programowaniu reaktywnym oraz w aplikacjach wymagających reagowania na zmiany stanu. TypeScript pozwala na typowaną implementację tego wzorca, co zwiększa bezpieczeństwo i czytelność kodu.

## Spis treści

1. [Czym jest Wzorzec Obserwatora?](#czym-jest-wzorzec-obserwatora)
2. [Korzyści z używania Wzorca Obserwatora](#korzyści-z-używania-wzorca-obserwatora)
3. [Prosta implementacja wzorca Obserwatora](#prosta-implementacja-wzorca-obserwatora)
4. [Rozbudowana implementacja generics](#rozbudowana-implementacja-generics)
5. [Przykład praktyczny - monitorowanie temperatury](#przykład-praktyczny---monitorowanie-temperatury)
6. [Podsumowanie](#podsumowanie)

---

## Czym jest Wzorzec Obserwatora?

Wzorzec Obserwatora polega na tym, że obiekt zwany obserwowanym (Subject) zarządza listą swoich obserwatorów (Observers) i automatycznie powiadamia ich o zmianach swojego stanu. Mechanizm ten realizowany jest dzięki metodom do subskrybowania, odsubskrybowania i powiadamiania.

---

## Korzyści z używania Wzorca Obserwatora

- **Reaktywność** - automatyczne powiadamianie obserwatorów o zmianach.
- **Luźne powiązania** - obserwatorzy nie muszą znać szczegółów implementacji obiektu obserwowanego.
- **Elastyczność** - łatwość dodawania nowych obserwatorów bez modyfikacji istniejącego kodu.

---

## Prosta implementacja wzorca Obserwatora

Poniżej znajdziesz bazową implementację wzorca Obserwatora w TypeScript:

```typescript
// Interfejs obserwatora
interface Observer {
  update(message: string): void;
}

// Klasa obserwowana
class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Implementacja obserwatora
class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Użycie wzorca Obserwatora
const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello, Observers!");

// Output:
// Observer 1 received message: Hello, Observers!
// Observer 2 received message: Hello, Observers!
```

**Opis:**  
`Subject` zarządza listą obserwatorów i powiadamia ich o zmianach. Każdy obserwator implementuje interfejs `Observer` z metodą `update`.

---

## Rozbudowana implementacja generics

W bardziej zaawansowanych przypadkach warto użyć typów generycznych, co pozwala przekazywać różne typy danych:

```typescript
// Interfejs obserwatora z typem generycznym
interface Observer<T> {
  update(data: T): void;
}

// Klasa obserwowana z typem generycznym
class Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Implementacja obserwatora
class ConcreteObserver<T> implements Observer<T> {
  constructor(private name: string) {}

  update(data: T): void {
    console.log(`${this.name} received data:`, data);
  }
}

// Użycie z typem generycznym
interface User {
  name: string;
  age: number;
}

const userSubject = new Subject<User>();

const userObserver1 = new ConcreteObserver<User>("User Observer 1");
const userObserver2 = new ConcreteObserver<User>("User Observer 2");

userSubject.subscribe(userObserver1);
userSubject.subscribe(userObserver2);

userSubject.notify({ name: "Alice", age: 30 });

// Output:
// User Observer 1 received data: { name: 'Alice', age: 30 }
// User Observer 2 received data: { name: 'Alice', age: 30 }
```

**Opis:**  
Dzięki zastosowaniu typów generycznych, wzorzec staje się bardziej elastyczny i bezpieczny typowo. Możesz przekazywać dowolne typy danych bez utraty ich struktury.

---

## Przykład praktyczny - monitorowanie temperatury

Aby zobaczyć praktyczne zastosowanie, oto przykład aplikacji monitorującej zmiany temperatury:

```typescript
// Interfejs obserwatora
interface Observer<T> {
  update(data: T): void;
}

// Klasa obserwowana
class TemperatureSensor {
  private observers: Observer<number>[] = [];
  private temperature: number = 0;

  subscribe(observer: Observer<number>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<number>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setTemperature(temp: number): void {
    console.log(`Setting temperature to ${temp}`);
    this.temperature = temp;
    this.notify(temp);
  }

  private notify(temp: number): void {
    this.observers.forEach((observer) => observer.update(temp));
  }
}

// Implementacje obserwatorów
class TemperatureDisplay implements Observer<number> {
  update(temp: number): void {
    console.log(`Temperature Display: ${temp}°C`);
  }
}

class TemperatureLogger implements Observer<number> {
  update(temp: number): void {
    console.log(`Logging temperature: ${temp}°C`);
  }
}

// Użycie wzorca Obserwatora
const sensor = new TemperatureSensor();
const display = new TemperatureDisplay();
const logger = new TemperatureLogger();

sensor.subscribe(display);
sensor.subscribe(logger);

sensor.setTemperature(25); // Output: Setting temperature to 25
//         Temperature Display: 25°C
//         Logging temperature: 25°C

sensor.setTemperature(30); // Output: Setting temperature to 30
//         Temperature Display: 30°C
//         Logging temperature: 30°C
```

**Opis:**  
`TemperatureSensor` pełni rolę obserwowanego, powiadamiając obserwatorów (`TemperatureDisplay`, `TemperatureLogger`) o zmianach temperatury. Wzorzec ten świetnie nadaje się do aplikacji monitorujących różne parametry w czasie rzeczywistym.

---

## Podsumowanie

Wzorzec Obserwatora to potężne narzędzie, które pozwala reagować na zmiany stanu w sposób luźno powiązany i elastyczny. W TypeScript dzięki silnemu typowaniu implementacja staje się jeszcze bezpieczniejsza i bardziej czytelna. Pokazane powyżej przykłady prezentują zarówno podstawową, jak i zaawansowaną wersję, która wykorzystuje typy generyczne. Zachęcam do eksperymentowania z tym wzorcem w swoich projektach - pozwala on na znacząco lepsze zarządzanie zależnościami i reaktywnością aplikacji.
