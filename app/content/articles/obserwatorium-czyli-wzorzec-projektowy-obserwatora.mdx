---
title: "Obserwatorium, czyli wzorzec projektowy obserwatora"
description: "Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu."
keywords: [typescript, wzorce, programowanie]
categories: [typescript, wzorce]
createdAt: 2024-06-20
---

Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.

## Czym jest Wzorzec Obserwatora?

Wzorzec Obserwatora polega na tym, że obiekt (obserwowany) zarządza listą zależnych obiektów (obserwatorów) i automatycznie powiadamia ich o zmianach swojego stanu. Jest to realizowane za pomocą metod do subskrybowania, odsubskrybowania oraz powiadamiania obserwatorów.

## Korzyści z używania Wzorca Obserwatora

1. **Reaktywność:** Automatyczne powiadamianie obserwatorów o zmianach stanu.
2. **Luźne Powiązania:** Obserwatorzy nie muszą znać szczegółów implementacji obiektu, który obserwują.
3. **Elastyczność:** Łatwość dodawania nowych obserwatorów bez zmiany istniejącego kodu.

## Implementacja Wzorca Obserwatora w TypeScript

### Przykład 1: Prosta Implementacja

Poniżej znajduje się prosta implementacja wzorca Obserwatora w TypeScript:

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

W tym przykładzie `Subject` zarządza listą obserwatorów i powiadamia ich za pomocą metody `notify`. Obserwatorzy implementują interfejs `Observer`, który definiuje metodę `update`.

### Przykład 2: Rozbudowana Implementacja z Typowaniem

W bardziej zaawansowanej wersji możemy użyć typów generycznych do zarządzania różnymi typami danych:

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

// Użycie wzorca Obserwatora z typem generycznym
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

W tej wersji `Subject` i `Observer` są typowane generycznie, co pozwala na bardziej elastyczne i bezpieczne przekazywanie danych.

## Zakończenie

Wzorzec Obserwatora w TypeScript jest potężnym narzędziem, które pozwala na łatwe zarządzanie zmianami stanu i reaktywnością aplikacji. Dzięki silnemu typowaniu w TypeScript, implementacja tego wzorca jest jeszcze bardziej bezpieczna i czytelna. Implementując ten wzorzec, można znacząco poprawić strukturę i elastyczność kodu, co jest szczególnie ważne w dużych i złożonych aplikacjach. Dzięki temu wzorcowi, komponenty mogą komunikować się ze sobą w sposób luźno powiązany, co ułatwia ich testowanie, modyfikowanie i rozbudowę.

Wzorzec Obserwatora w TypeScript można łatwo zaimplementować na różne sposoby, dostosowując go do specyficznych potrzeb projektu. W powyższych przykładach pokazaliśmy zarówno podstawową implementację, jak i bardziej zaawansowaną wersję z typami generycznymi. Zachęcam do eksperymentowania z tym wzorcem w swoich projektach, aby lepiej zrozumieć jego potencjał i korzyści.

### Przykładowy Projekt z Wykorzystaniem Wzorca Obserwatora

Aby zobaczyć, jak wzorzec Obserwatora może być użyty w bardziej realistycznym scenariuszu, rozważmy prostą aplikację monitorującą zmiany temperatury:

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

// Implementacja obserwatora
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

W tym przykładzie `TemperatureSensor` pełni rolę obiektu obserwowanego, który powiadamia swoich obserwatorów (`TemperatureDisplay` i `TemperatureLogger`) o zmianach temperatury. W praktycznym scenariuszu można by zastosować ten wzorzec do monitorowania różnych parametrów i reagowania na zmiany w czasie rzeczywistym.
