---
title: "Wzorce projektowe w praktyce"
description: "Kompleksowy przewodnik po wzorcach projektowych — od podstaw po praktyczne przykłady w kontekście frontendu i backendu."
keywords:
  [
    wzorce projektowe,
    programowanie,
    typescript,
    javascript,
    frontend,
    backend,
    kurs,
    learning,
  ]
categories: [wzorce-projektowe, typescript]
createdAt: 2025-06-22
quiz:
  title: "Quiz: Wzorce projektowe"
  questions:
    - question: "Do której grupy należy wzorzec Singleton?"
      options:
        - "Strukturalne"
        - "Behawioralne"
        - "Kreacyjne"
        - "Funkcyjne"
      answer: 2
      explanation: "Singleton to wzorzec kreacyjny – dotyczy sposobu tworzenia obiektów."

    - question: "Który wzorzec umożliwia zamianę jednego interfejsu na inny, by umożliwić współpracę niekompatybilnych klas?"
      options:
        - "Observer"
        - "Adapter"
        - "Facade"
        - "Builder"
      answer: 1
      explanation: "Adapter tłumaczy jeden interfejs na inny."

    - question: "Który wzorzec pozwala powiadamiać wiele obiektów o zmianie stanu bez ścisłego powiązania?"
      options:
        - "Strategy"
        - "Factory"
        - "Facade"
        - "Observer"
      answer: 3
      explanation: "Observer służy do powiadamiania wielu obiektów o zmianie stanu."

    - question: "Co umożliwia wzorzec Strategy?"
      options:
        - "Dynamiczną zmianę algorytmu działania programu"
        - "Tworzenie jednej instancji klasy"
        - "Uproszczenie złożonego interfejsu"
        - "Budowanie złożonych obiektów krok po kroku"
      answer: 0
      explanation: "Strategy pozwala dynamicznie zmieniać algorytm działania programu."

    - question: "Który wzorzec stosujesz, by uprościć korzystanie z kilku skomplikowanych systemów przez jeden prosty interfejs?"
      options:
        - "Adapter"
        - "Facade"
        - "Builder"
        - "Singleton"
      answer: 1
      explanation: "Facade upraszcza złożone systemy przez prosty interfejs."
---

Poznaj praktyczne zastosowania najważniejszych wzorców projektowych — prosto, przystępnie, z przykładami w TypeScript oraz z zadaniami do samodzielnego wykonania! 🏗️🚀

Ten przewodnik to nie tylko teoria, ale również konkretne przykłady, wskazówki i gotowe rozwiązania do typowych problemów programistycznych, zarówno po stronie frontendu jak i backendu.

## Spis treści

1. [Czym są wzorce projektowe?](#czym-są-wzorce-projektowe)
2. [Jak je dzielimy?](#jak-je-dzielimy)
3. [Wzorce kreacyjne](#wzorce-kreacyjne)
   - [Singleton](#singleton)
   - [Factory](#factory)
   - [Builder](#builder)
4. [Wzorce strukturalne](#wzorce-strukturalne)
   - [Facade](#facade)
   - [Adapter](#adapter)
5. [Wzorce behawioralne](#wzorce-behawioralne)
   - [Observer](#observer)
   - [Strategy](#strategy)
6. [Zastosowania wzorców w praktyce](#zastosowania-wzorców-w-praktyce)
7. [Przydatne narzędzia i materiały](#przydatne-narzędzia-i-materiały)
8. [Zadania do wykonania](#zadania-do-wykonania)
   - [Zadanie 1: Singleton w praktyce](#zadanie-1-singleton-w-praktyce)
   - [Zadanie 2: Factory dla przycisków](#zadanie-2-factory-dla-przycisków)
   - [Zadanie 3: Builder do pizzy](#zadanie-3-builder-do-pizzy)
   - [Zadanie 4: Adapter — stare i nowe API](#zadanie-4-adapter--stare-i-nowe-api)
   - [Zadanie 5: Strategy — wybór algorytmu płatności](#zadanie-5-strategy--wybór-algorytmu-płatności)

---

## Czym są wzorce projektowe?

**Wzorce projektowe** to sprawdzone, uniwersalne rozwiązania dla często spotykanych problemów w programowaniu. Możesz potraktować je jak gotowe "przepisy" — nie musisz wymyślać wszystkiego od nowa, tylko korzystasz z doświadczenia innych.

### Dlaczego warto ich używać?

- 🤝 Ułatwiają komunikację w zespole (wszyscy rozumieją, o czym mowa)
- 🏗️ Poprawiają strukturę, elastyczność i czytelność kodu
- ⚡ Przyspieszają projektowanie i rozwój systemów
- 🐞 Pozwalają unikać typowych błędów

---

## Jak je dzielimy?

Wzorce projektowe dzielimy na trzy główne kategorie:

1. **Kreacyjne** — dotyczą sposobów tworzenia obiektów (np. Singleton, Factory, Builder)
2. **Strukturalne** — pokazują jak łączyć obiekty i klasy (np. Facade, Adapter)
3. **Behawioralne** — opisują interakcje i przepływ informacji (np. Observer, Strategy)

Każda kategoria rozwiązuje inne typy problemów, dlatego tak ważne jest, by znać przynajmniej po jednym wzorcu z każdej grupy.

---

## Wzorce kreacyjne

### Singleton

Zapewnia, że dana klasa posiada tylko jedną instancję i zapewnia do niej globalny dostęp.

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
```

**Zastosowania:** konfiguracja aplikacji, połączenie z bazą danych, logger.

---

### Factory

Pozwala tworzyć obiekty bez określania ich dokładnych klas — klient nie musi znać szczegółów implementacji.

```ts
interface Button {
  render(): void;
}

class WindowsButton implements Button {
  render() {
    console.log("Render Windows Button");
  }
}

class MacButton implements Button {
  render() {
    console.log("Render Mac Button");
  }
}

class ButtonFactory {
  static createButton(os: string): Button {
    if (os === "Windows") return new WindowsButton();
    return new MacButton();
  }
}

const button = ButtonFactory.createButton("Windows");
button.render();
```

**Zastosowania:** dynamiczne UI, obsługa wielu platform.

---

### Builder

Ułatwia tworzenie złożonych obiektów krok po kroku — szczególnie przy wielu opcjonalnych parametrach.

```ts
class Burger {
  constructor(
    public bun: string,
    public meat: string,
    public extras?: string[]
  ) {}
}

class BurgerBuilder {
  private bun = "classic";
  private meat = "beef";
  private extras: string[] = [];

  setBun(bun: string) {
    this.bun = bun;
    return this;
  }

  setMeat(meat: string) {
    this.meat = meat;
    return this;
  }

  addExtra(extra: string) {
    this.extras.push(extra);
    return this;
  }

  build(): Burger {
    return new Burger(this.bun, this.meat, this.extras);
  }
}

const burger = new BurgerBuilder()
  .setMeat("chicken")
  .addExtra("cheese")
  .build();
```

**Zastosowania:** konfiguratory, kreatory złożonych obiektów, generatory formularzy.

---

## Wzorce strukturalne

### Facade

Upraszcza korzystanie ze złożonych systemów, oferując prosty interfejs do wielu operacji.

```ts
class AudioSystem {
  turnOn() {}
  setVolume(level: number) {}
}

class VideoSystem {
  turnOn() {}
  setResolution(res: string) {}
}

class HomeTheaterFacade {
  private audio = new AudioSystem();
  private video = new VideoSystem();

  startMovie() {
    this.audio.turnOn();
    this.audio.setVolume(5);
    this.video.turnOn();
    this.video.setResolution("1080p");
  }
}

const theater = new HomeTheaterFacade();
theater.startMovie();
```

**Zastosowania:** uproszczone API, integracja wielu zależności.

---

### Adapter

Pozwala współpracować obiektom z niekompatybilnymi interfejsami — "tłumaczy" jeden interfejs na inny.

```ts
class OldPrinter {
  printText(text: string) {
    console.log("Old Printer: " + text);
  }
}

interface NewPrinter {
  print(content: string): void;
}

class PrinterAdapter implements NewPrinter {
  constructor(private oldPrinter: OldPrinter) {}

  print(content: string) {
    this.oldPrinter.printText(content);
  }
}

const adapter = new PrinterAdapter(new OldPrinter());
adapter.print("Hello");
```

**Zastosowania:** integracja z zewnętrznymi bibliotekami, starszym kodem, migracje.

---

## Wzorce behawioralne

### Observer

Obiekt "subject" powiadamia inne obiekty (obserwatorów) o zmianach stanu — bez ścisłego powiązania.

```ts
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  add(observer: Observer) {
    this.observers.push(observer);
  }

  notify(data: any) {
    for (const obs of this.observers) {
      obs.update(data);
    }
  }
}

class Logger implements Observer {
  update(data: any) {
    console.log("Log:", data);
  }
}

const subject = new Subject();
subject.add(new Logger());
subject.notify("Dane się zmieniły");
```

**Zastosowania:** systemy notyfikacji, reactive programming, event-driven.

---

### Strategy

Pozwala zamieniać algorytmy w trakcie działania aplikacji, bez zmiany jej kodu.

```ts
interface PaymentStrategy {
  pay(amount: number): void;
}

class PayPal implements PaymentStrategy {
  pay(amount: number) {
    console.log(`PayPal: Paid ${amount}`);
  }
}

class CreditCard implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Card: Paid ${amount}`);
  }
}

class Checkout {
  constructor(private strategy: PaymentStrategy) {}

  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}

const checkout = new Checkout(new PayPal());
checkout.processPayment(100);
```

**Zastosowania:** płatności, logika decyzyjna, AI.

---

## Zastosowania wzorców w praktyce

- **Frontend:** React, Angular czy Vue często korzystają z Observera (np. Redux, RxJS), Strategy (dynamiczny wybór komponentów), Factory (tworzenie widgetów), Facade (warstwa usług API).
- **Backend:** Singleton dla połączeń do bazy danych, Builder przy generowaniu zapytań, Adapter do integracji z zewnętrznymi serwisami.

---

## Przydatne narzędzia i materiały

- [Refactoring.guru – wzorce projektowe po polsku i angielsku](https://refactoring.guru/pl/design-patterns)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Wzorce projektowe – Wikipedia](https://pl.wikipedia.org/wiki/Wzorzec_projektowy)
- [Książka „Wzorce projektowe. Elementy oprogramowania obiektowego” – Gamma, Helm, Johnson, Vlissides]

---

## Zadania do wykonania

### Zadanie 1: Singleton w praktyce

Zaimplementuj klasę Logger, która realizuje wzorzec Singleton i umożliwia logowanie wiadomości do konsoli. Upewnij się, że niezależnie od liczby wywołań zawsze używana jest ta sama instancja loggera.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```ts
class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(message);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2); // true
logger1.log("Wiadomość testowa");
```

</details>

---

### Zadanie 2: Factory dla przycisków

Zaimplementuj prostą fabrykę (Factory), która w zależności od przekazanego typu zwróci przycisk HTML (`<button>`) lub SVG (`<svg>`). Dodaj odpowiednie klasy ButtonHtml i ButtonSvg.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```ts
interface Button {
  render(): string;
}

class ButtonHtml implements Button {
  render() {
    return "<button>Przycisk HTML</button>";
  }
}

class ButtonSvg implements Button {
  render() {
    return "<svg><rect width='100' height='30'/></svg>";
  }
}

class ButtonFactory {
  static createButton(type: string): Button {
    if (type === "html") return new ButtonHtml();
    return new ButtonSvg();
  }
}

const btn = ButtonFactory.createButton("svg");
console.log(btn.render());
```

</details>

---

### Zadanie 3: Builder do pizzy

Stwórz klasę PizzaBuilder, umożliwiającą tworzenie pizzy z różnymi składnikami (np. ser, szynka, pieczarki) oraz rodzajem ciasta.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```ts
class Pizza {
  constructor(public dough: string, public ingredients: string[]) {}
}

class PizzaBuilder {
  private dough = "classic";
  private ingredients: string[] = [];

  setDough(type: string) {
    this.dough = type;
    return this;
  }

  addIngredient(ingredient: string) {
    this.ingredients.push(ingredient);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.dough, this.ingredients);
  }
}

const pizza = new PizzaBuilder()
  .setDough("thin")
  .addIngredient("cheese")
  .addIngredient("ham")
  .build();

console.log(pizza);
```

</details>

---

### Zadanie 4: Adapter — stare i nowe API

Załóż, że masz starą klasę ApiV1 z metodą getUserData(), a chcesz korzystać z nowego interfejsu NewApi z metodą fetchUser(). Napisz adapter.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```ts
class ApiV1 {
  getUserData() {
    return { name: "Jan", age: 30 };
  }
}

interface NewApi {
  fetchUser(): object;
}

class ApiAdapter implements NewApi {
  constructor(private oldApi: ApiV1) {}

  fetchUser() {
    return this.oldApi.getUserData();
  }
}

const adapter = new ApiAdapter(new ApiV1());
console.log(adapter.fetchUser());
```

</details>

---

### Zadanie 5: Strategy — wybór algorytmu płatności

Zaimplementuj dwie strategie płatności: przelew i BLIK (obie wypisują kwotę w konsoli). Stwórz klasę, która umożliwi wybór strategii w trakcie działania programu.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```ts
interface PaymentStrategy {
  pay(amount: number): void;
}

class Transfer implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Płatność przelewem: ${amount} zł`);
  }
}

class Blik implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Płatność BLIK: ${amount} zł`);
  }
}

class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  process(amount: number) {
    this.strategy.pay(amount);
  }
}

const processor = new PaymentProcessor(new Transfer());
processor.process(50);
processor.setStrategy(new Blik());
processor.process(75);
```

</details>

---

To dopiero początek! Każdy z tych wzorców ma swoje warianty, rozbudowane zastosowania i pułapki, których warto unikać.
