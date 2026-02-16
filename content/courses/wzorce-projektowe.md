---
title: "Wzorce projektowe w praktyce"
description: "Kompleksowy przewodnik po wzorcach projektowych - od podstaw po praktyczne przykłady w kontekście frontendu i backendu."
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
category: typescript
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
      explanation: "Singleton to wzorzec kreacyjny - dotyczy sposobu tworzenia obiektów."
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

Poznaj praktyczne zastosowania najważniejszych **wzorców projektowych** - prosto, przystępnie, z przykładami w **TypeScript** oraz z zadaniami do samodzielnego wykonania! 🏗️🚀

Ten przewodnik to nie tylko teoria, ale również konkretne przykłady, wskazówki i gotowe rozwiązania do typowych problemów programistycznych, zarówno po stronie frontendu, jak i backendu.

## Spis treści

1.  [Czym są wzorce projektowe?](#czym-są-wzorce-projektowe)
2.  [Jak je dzielimy?](#jak-je-dzielimy)
3.  [Wzorce kreacyjne](#wzorce-kreacyjne)
    - [Singleton](#singleton)
    - [Factory Method](#factory-method)
    - [Builder](#builder)
4.  [Wzorce strukturalne](#wzorce-strukturalne)
    - [Facade](#facade)
    - [Adapter](#adapter)
5.  [Wzorce behawioralne](#wzorce-behawioralne)
    - [Observer](#observer)
    - [Strategy](#strategy)
6.  [Zastosowania wzorców w praktyce](#zastosowania-wzorców-w-praktyce)
7.  [Przydatne narzędzia i materiały](#przydatne-narzędzia-i-materiały)
8.  [Zadania do wykonania](#zadania-do-wykonania)
    - [Zadanie 1: Singleton w praktyce](#zadanie-1-singleton-w-praktyce)
    - [Zadanie 2: Factory dla przycisków](#zadanie-2-factory-dla-przycisków)
    - [Zadanie 3: Builder do pizzy](#zadanie-3-builder-do-pizzy)
    - [Zadanie 4: Adapter - stare i nowe API](#zadanie-4-adapter---stare-i-nowe-api)
    - [Zadanie 5: Strategy - wybór algorytmu płatności](#zadanie-5-strategy---wybór-algorytmu-płatności)

---

## Czym są wzorce projektowe?

**Wzorce projektowe** (Design Patterns) to sprawdzone, uniwersalne rozwiązania dla często spotykanych problemów w programowaniu. Możesz potraktować je jak gotowe "przepisy" - zamiast wymyślać wszystko od nowa, korzystasz z doświadczenia i najlepszych praktyk innych inżynierów oprogramowania. Są to abstrakcyjne koncepcje, które należy zaadaptować do konkretnego kontekstu problemu.

### Dlaczego warto ich używać?

- 🤝 **Ułatwiają komunikację w zespole:** Kiedy używasz nazwy wzorca, wszyscy w zespole rozumieją intencje i strukturę danego rozwiązania.
- 🏗️ **Poprawiają strukturę, elastyczność i czytelność kodu:** Wzorce promują modułowość, separację odpowiedzialności i otwarte na rozbudowę, ale zamknięte na modyfikację rozwiązania.
- ⚡ **Przyspieszają projektowanie i rozwój systemów:** Nie musisz "wynajdować koła na nowo", możesz skupić się na unikalnych aspektach swojej aplikacji.
- 🐞 **Pozwalają unikać typowych błędów:** Wzorce projektowe to rozwiązania, które przetrwały próbę czasu i zostały zoptymalizowane pod kątem stabilności i efektywności.

---

## Jak je dzielimy?

Wzorce projektowe są klasyfikowane na podstawie ich celu i problemu, który rozwiązują. Najpopularniejszy podział pochodzi z książki "Design Patterns: Elements of Reusable Object-Oriented Software" (tzw. Gang of Four - GoF):

1.  **Kreacyjne (Creational Patterns)** - dotyczą sposobów tworzenia obiektów, zapewniając elastyczność i kontrolę nad procesem instancjonowania. Przykłady: Singleton, Factory Method, Builder.
2.  **Strukturalne (Structural Patterns)** - pokazują, jak łączyć obiekty i klasy w większe struktury, zachowując ich elastyczność i efektywność. Przykłady: Facade, Adapter.
3.  **Behawioralne (Behavioral Patterns)** - opisują interakcje i przepływ informacji między obiektami, ułatwiając komunikację i zarządzanie złożonym zachowaniem. Przykłady: Observer, Strategy.

Każda kategoria rozwiązuje inne typy problemów, dlatego tak ważne jest, by znać przynajmniej po jednym wzorcu z każdej grupy.

---

## Wzorce kreacyjne

Wzorce kreacyjne koncentrują się na procesie tworzenia obiektów. Pozwalają na dynamiczne i elastyczne tworzenie instancji, oddzielając logikę tworzenia od klienta, który ich używa.

### Singleton

Wzorzec **Singleton** zapewnia, że dana klasa posiada tylko jedną instancję w całej aplikacji i jednocześnie dostarcza globalny punkt dostępu do tej instancji. Jest to użyteczne w sytuacjach, gdy tylko jeden obiekt danego typu powinien istnieć.

```ts
class Logger {
  private static instance: Logger; // Statyczna zmienna przechowująca instancję

  private constructor() {
    // Prywatny konstruktor zapobiega tworzeniu nowych instancji z zewnątrz
    console.log("Logger instance created!");
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}

// Użycie:
const logger1 = Logger.getInstance();
logger1.log("First log message.");

const logger2 = Logger.getInstance();
logger2.log("Second log message.");

console.log(logger1 === logger2); // Output: true (obie referencje wskazują na tę samą instancję)
```

**Zastosowania:** Konfiguracja aplikacji, połączenie z bazą danych, menedżer sesji, system logowania, menedżery zasobów (np. bufor obrazów).

---

### Factory Method

Wzorzec **Factory Method** (Metoda Wytwórcza) definiuje interfejs do tworzenia obiektów, ale pozwala podklasom decydować, którą klasę instancjonować. Klient nie musi znać dokładnych klas konkretnych produktów, operuje na wspólnym interfejsie.

```ts
// Interfejs produktu
interface Button {
  render(): string;
  onClick(): void;
}

// Konkretne produkty
class WindowsButton implements Button {
  render() {
    return "<button style='background-color: blue;'>Windows Button</button>";
  }
  onClick() {
    console.log("Windows button clicked!");
  }
}

class MacButton implements Button {
  render() {
    return "<button style='background-color: gray;'>Mac Button</button>";
  }
  onClick() {
    console.log("Mac button clicked!");
  }
}

// Klasa kreatora (fabryki)
class ButtonFactory {
  static createButton(os: string): Button {
    if (os === "Windows") {
      return new WindowsButton();
    } else if (os === "Mac") {
      return new MacButton();
    } else {
      throw new Error("Unknown OS type.");
    }
  }
}

// Użycie:
const windowsBtn = ButtonFactory.createButton("Windows");
console.log(windowsBtn.render());
windowsBtn.onClick();

const macBtn = ButtonFactory.createButton("Mac");
console.log(macBtn.render());
macBtn.onClick();
```

**Zastosowania:** Dynamiczne tworzenie elementów UI (w zależności od platformy lub konfiguracji), obsługa wielu formatów danych (np. parsery JSON, XML), integracja z zewnętrznymi systemami, gdzie typ obiektu zależy od konfiguracji.

---

### Builder

Wzorzec **Builder** (Budowniczy) pozwala na tworzenie złożonych obiektów krok po kroku. Oddziela konstrukcję obiektu od jego reprezentacji, co pozwala na tworzenie różnych reprezentacji tego samego procesu budowania. Jest szczególnie przydatny, gdy obiekt ma wiele opcjonalnych parametrów.

```ts
// Produkt, który ma być budowany
class Pizza {
  constructor(
    public dough: string,
    public sauce: string,
    public toppings: string[],
    public cheese: boolean,
  ) {}

  describe(): string {
    return `Pizza with ${this.dough} dough, ${
      this.sauce
    } sauce, toppings: ${this.toppings.join(", ")} and ${
      this.cheese ? "with" : "without"
    } cheese.`;
  }
}

// Klasa Buildera
class PizzaBuilder {
  private _dough: string = "classic";
  private _sauce: string = "tomato";
  private _toppings: string[] = [];
  private _cheese: boolean = true;

  setDough(doughType: string): PizzaBuilder {
    this._dough = doughType;
    return this; // Zwracanie 'this' pozwala na łańcuchowanie metod
  }

  setSauce(sauceType: string): PizzaBuilder {
    this._sauce = sauceType;
    return this;
  }

  addTopping(topping: string): PizzaBuilder {
    this._toppings.push(topping);
    return this;
  }

  hasCheese(has: boolean): PizzaBuilder {
    this._cheese = has;
    return this;
  }

  build(): Pizza {
    return new Pizza(this._dough, this._sauce, this._toppings, this._cheese);
  }
}

// Użycie:
const margherita = new PizzaBuilder()
  .setSauce("pomodoro")
  .addTopping("basil")
  .build();
console.log(margherita.describe());

const customPizza = new PizzaBuilder()
  .setDough("thin crust")
  .setSauce("pesto")
  .addTopping("chicken")
  .addTopping("onions")
  .hasCheese(false)
  .build();
console.log(customPizza.describe());
```

**Zastosowania:** Konfiguratory, kreatory złożonych obiektów (np. raportów, dokumentów PDF), generatory formularzy, obiekty z wieloma opcjonalnymi parametrami, gdzie bezpośredni konstruktor byłby zbyt skomplikowany.

---

## Wzorce strukturalne

Wzorce strukturalne zajmują się kompozycją klas i obiektów. Pomagają w tworzeniu dużych struktur z mniejszych elementów, jednocześnie zachowując ich elastyczność i uporządkowanie.

### Facade

Wzorzec **Facade** (Fasada) dostarcza uproszczony interfejs do złożonego zestawu klas, biblioteki lub podsystemu. Ukrywa wewnętrzną złożoność, czyniąc system łatwiejszym w użyciu.

```ts
// Złożony podsystem audio
class AudioSystem {
  turnOn(): void {
    console.log("Audio system: On");
  }
  turnOff(): void {
    console.log("Audio system: Off");
  }
  setVolume(level: number): void {
    console.log(`Audio system: Volume set to ${level}`);
  }
  playMusic(): void {
    console.log("Audio system: Playing music");
  }
}

// Złożony podsystem wideo
class VideoSystem {
  turnOn(): void {
    console.log("Video system: On");
  }
  turnOff(): void {
    console.log("Video system: Off");
  }
  setResolution(resolution: string): void {
    console.log(`Video system: Resolution set to ${resolution}`);
  }
  showMovie(title: string): void {
    console.log(`Video system: Showing movie "${title}"`);
  }
}

// Fasada dla Home Theater
class HomeTheaterFacade {
  private audio: AudioSystem = new AudioSystem();
  private video: VideoSystem = new VideoSystem();

  startMovie(movieTitle: string): void {
    console.log("nStarting movie...");
    this.audio.turnOn();
    this.audio.setVolume(7);
    this.video.turnOn();
    this.video.setResolution("4K");
    this.video.showMovie(movieTitle);
  }

  endMovie(): void {
    console.log("nEnding movie...");
    this.video.turnOff();
    this.audio.turnOff();
  }
}

// Użycie:
const theater = new HomeTheaterFacade();
theater.startMovie("The Matrix");
theater.endMovie();
```

**Zastosowania:** Uproszczenie API dla skomplikowanych bibliotek, warstwy usług w architekturze (np. API gateway), integracja wielu zależności w jednym punkcie.

---

### Adapter

Wzorzec **Adapter** (Adapter) pozwala na współpracę obiektom o niekompatybilnych interfejsach. Działa jak "tłumacz", który konwertuje interfejs jednej klasy na interfejs, którego oczekuje inna klasa.

```ts
// Klasa ze starym, niekompatybilnym interfejsem
class OldLegacyPrinter {
  printText(text: string): void {
    console.log(`[Old Legacy Printer] Printing text: "${text}"`);
  }
}

// Nowy, oczekiwany interfejs
interface NewModernPrinter {
  print(content: string): void;
}

// Adapter, który dostosowuje stary interfejs do nowego
class PrinterAdapter implements NewModernPrinter {
  private oldPrinter: OldLegacyPrinter;

  constructor(printer: OldLegacyPrinter) {
    this.oldPrinter = printer;
  }

  print(content: string): void {
    // "Tłumaczymy" wywołanie z nowego interfejsu na stary
    this.oldPrinter.printText(content);
  }
}

// Klient używający nowego interfejsu
function printDocument(printer: NewModernPrinter, document: string): void {
  printer.print(document);
}

// Użycie:
const legacyPrinter = new OldLegacyPrinter();
// printDocument(legacyPrinter, "This will fail because interfaces don't match!"); // Compile-time error

const adapter = new PrinterAdapter(legacyPrinter);
printDocument(adapter, "Hello from the modern interface!"); // Działa!
```

**Zastosowania:** Integracja z zewnętrznymi bibliotekami o innym API, dostosowywanie starszego kodu do nowych standardów, migracje systemów, tworzenie warstw kompatybilności.

---

## Wzorce behawioralne

Wzorce behawioralne zajmują się algorytmami i przypisywaniem odpowiedzialności między obiektami. Opisują sposoby komunikacji i interakcji między obiektami.

### Observer

Wzorzec **Observer** (Obserwator) definiuje mechanizm subskrypcji, dzięki któremu obiekt (tzw. `Subject` lub `Publisher`) może powiadamiać wiele innych obiektów (tzw. `Observers` lub `Subscribers`) o wszelkich zmianach stanu, bez ścisłego powiązania między nimi. Jest to kluczowy wzorzec w programowaniu reaktywnym i sterowanym zdarzeniami.

```ts
// Interfejs Obserwatora
interface Observer {
  update(data: any): void;
}

// Klasa Podmiotu (Subject)
class EventPublisher {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
    console.log("Observer added.");
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer removed.");
  }

  notifyObservers(data: any): void {
    console.log("Notifying observers with data:", data);
    for (const obs of this.observers) {
      obs.update(data);
    }
  }
}

// Konkretne klasy Obserwatorów
class LoggerObserver implements Observer {
  update(data: any): void {
    console.log(`[Logger] Data received: ${JSON.stringify(data)}`);
  }
}

class EmailSenderObserver implements Observer {
  update(data: any): void {
    console.log(`[EmailSender] Sending email about: ${JSON.stringify(data)}`);
  }
}

// Użycie:
const publisher = new EventPublisher();
const logger = new LoggerObserver();
const emailSender = new EmailSenderObserver();

publisher.addObserver(logger);
publisher.addObserver(emailSender);

publisher.notifyObservers({ event: "userLoggedIn", userId: 123 });

publisher.removeObserver(emailSender);
publisher.notifyObservers({ event: "productAddedToCart", productId: 456 });
```

**Zastosowania:** Systemy notyfikacji (np. powiadomienia email, SMS), reactive programming (np. RxJS), architektury event-driven (mikroserwisy), widoki UI reagujące na zmiany modelu danych (np. w frameworkach MVVM).

---

### Strategy

Wzorzec **Strategy** (Strategia) pozwala definiować rodzinę algorytmów, umieszczać każdy z nich w osobnej klasie i sprawiać, że są one wymienne. Klient może wybrać algorytm w trakcie działania aplikacji, bez zmiany struktury kodu.

```ts
// Interfejs Strategii
interface PaymentStrategy {
  pay(amount: number): void;
}

// Konkretne Strategie
class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} PLN using PayPal.`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} PLN using Credit Card.`);
  }
}

class BankTransferStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} PLN using Bank Transfer.`);
  }
}

// Kontekst, który używa strategii
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): void {
    if (!this.paymentStrategy) {
      console.error("Payment strategy not set!");
      return;
    }
    console.log(`nProcessing payment for ${amount} PLN...`);
    this.paymentStrategy.pay(amount);
  }
}

// Użycie:
const cart = new ShoppingCart();

cart.setPaymentStrategy(new PayPalStrategy());
cart.checkout(150);

cart.setPaymentStrategy(new CreditCardStrategy());
cart.checkout(200);

cart.setPaymentStrategy(new BankTransferStrategy());
cart.checkout(50);
```

**Zastosowania:** Algorytmy płatności, różne strategie walidacji danych, sortowania, eksportu danych, dynamiczna logika decyzyjna (np. AI), różne algorytmy kompresji plików.

---

## Zastosowania wzorców w praktyce

Wzorce projektowe nie są tylko teorią, ale są wszechobecne w realnych aplikacjach i frameworkach:

- **Frontend (React, Angular, Vue):**
  - **Observer:** Wiele bibliotek do zarządzania stanem (np. Redux, NgRx, Vuex) opiera się na idei obserwatorów. React Hooks (`useState`, `useEffect`) również w pewnym sensie korzystają z mechanizmów reaktywności podobnych do Observera.
  - **Strategy:** Dynamiczny wybór komponentów do renderowania na podstawie stanu aplikacji, różne strategie parsowania danych wejściowych.
  - **Factory Method:** Tworzenie instancji komponentów lub widżetów w zależności od konfiguracji.
  - **Facade:** Warstwa usług, która upraszcza komunikację z API backendowym lub złożonymi bibliotekami JS.
- **Backend (Node.js, Java, .NET, Python):**
  - **Singleton:** Połączenia do bazy danych, menedżery konfiguracji, globalne instancje logowania.
  - **Builder:** Generowanie złożonych zapytań SQL, budowanie odpowiedzi HTTP, tworzenie obiektów z wieloma opcjonalnymi polami.
  - **Adapter:** Integracja z zewnętrznymi API (np. płatności, dostawcy SMS), dostosowywanie danych z legacy systemów.
  - **Strategy:** Różne algorytmy uwierzytelniania, polityki buforowania, procesy biznesowe.

---

## Przydatne narzędzia i materiały

Aby pogłębić swoją wiedzę i lepiej zrozumieć wzorce projektowe, polecam następujące zasoby:

- **[Refactoring.guru - wzorce projektowe po polsku i angielsku](https://refactoring.guru/pl/design-patterns)**: Prawdopodobnie najlepsze źródło online z klarownymi opisami i przykładami kodu w wielu językach.
- **[TypeScript Playground](https://www.typescriptlang.org/play)**: Idealne narzędzie do szybkiego testowania i eksperymentowania z przykładami kodu w TypeScript, bez potrzeby konfiguracji lokalnego środowiska.
- **[Wzorce projektowe - Wikipedia](https://pl.wikipedia.org/wiki/Wzorzec_projektowy)**: Dobre źródło do ogólnego przeglądu i definicji.
- **Książka "Wzorce projektowe. Elementy oprogramowania obiektowego" - Gamma, Helm, Johnson, Vlissides (tzw. Gang of Four)**: Klasyka, która zapoczątkowała całą dyskusję o wzorcach. Obowiązkowa lektura dla każdego, kto chce dogłębnie zrozumieć temat.

---

## Zadania do wykonania

Poniższe zadania pomogą Ci utrwalić wiedzę o wzorcach projektowych w praktyce. Spróbuj zaimplementować je w środowisku TypeScript, skupiając się na czystości kodu i poprawnym typowaniu.

### Zadanie 1: Singleton w praktyce

Zaimplementuj klasę `ConfigurationManager`, która realizuje wzorzec Singleton i umożliwia przechowywanie oraz pobieranie globalnych ustawień aplikacji. Upewnij się, że niezależnie od liczby wywołań `getInstance()`, zawsze używana jest ta sama instancja menedżera konfiguracji.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```ts
class ConfigurationManager {
  private static instance: ConfigurationManager;
  private settings: Map<string, string> = new Map();

  private constructor() {
    // Initialize default settings or load from a file
    this.settings.set("apiUrl", "https://api.example.com");
    this.settings.set("timeout", "5000");
  }

  static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  getSetting(key: string): string | undefined {
    return this.settings.get(key);
  }

  setSetting(key: string, value: string): void {
    this.settings.set(key, value);
  }
}

// Usage:
const config1 = ConfigurationManager.getInstance();
console.log(config1.getSetting("apiUrl")); // https://api.example.com

const config2 = ConfigurationManager.getInstance();
config2.setSetting("timeout", "10000"); // Change setting via second instance

console.log(config1.getSetting("timeout")); // 10000 (shows they are the same instance)
console.log(config1 === config2); // true
```

</details>

---

### Zadanie 2: Factory dla przycisków

Zaimplementuj prostą fabrykę (Factory Method), która w zależności od przekazanego typu (`"primary"` lub `"secondary"`) zwróci obiekt reprezentujący przycisk z różnymi stylami (np. kolor tła, kolor tekstu). Zdefiniuj wspólny interfejs `IButton` dla wszystkich typów przycisków.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```ts
interface IButton {
  render(): string;
  getStyle(): { backgroundColor: string; color: string };
}

class PrimaryButton implements IButton {
  render() {
    return "<button>Primary Button</button>";
  }
  getStyle() {
    return { backgroundColor: "blue", color: "white" };
  }
}

class SecondaryButton implements IButton {
  render() {
    return "<button>Secondary Button</button>";
  }
  getStyle() {
    return { backgroundColor: "gray", color: "black" };
  }
}

class ButtonFactory {
  static createButton(type: "primary" | "secondary"): IButton {
    if (type === "primary") {
      return new PrimaryButton();
    } else if (type === "secondary") {
      return new SecondaryButton();
    } else {
      throw new Error("Invalid button type");
    }
  }
}

// Usage:
const primaryBtn = ButtonFactory.createButton("primary");
console.log(primaryBtn.render(), primaryBtn.getStyle());

const secondaryBtn = ButtonFactory.createButton("secondary");
console.log(secondaryBtn.render(), secondaryBtn.getStyle());
```

</details>

---

### Zadanie 3: Builder do pizzy

Stwórz klasę `OrderBuilder`, umożliwiającą budowanie złożonych zamówień w restauracji. Zamówienie może składać się z pizzy (z różnymi składnikami), napojów i deserów. Zaimplementuj metody do dodawania każdego elementu i budowania finalnego obiektu `Order`.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```ts
class Order {
  constructor(
    public pizzaDetails: string[],
    public drinks: string[],
    public desserts: string[],
  ) {}

  getTotalSummary(): string {
    return `Order Summary: Pizzas: [${this.pizzaDetails.join(
      ", ",
    )}], Drinks: [${this.drinks.join(", ")}], Desserts: [${this.desserts.join(
      ", ",
    )}]`;
  }
}

class OrderBuilder {
  private pizzas: string[] = [];
  private drinks: string[] = [];
  private desserts: string[] = [];

  addPizza(pizzaDescription: string): OrderBuilder {
    this.pizzas.push(pizzaDescription);
    return this;
  }

  addDrink(drinkName: string): OrderBuilder {
    this.drinks.push(drinkName);
    return this;
  }

  addDessert(dessertName: string): OrderBuilder {
    this.desserts.push(dessertName);
    return this;
  }

  build(): Order {
    return new Order(this.pizzas, this.drinks, this.desserts);
  }
}

// Usage:
const customerOrder = new OrderBuilder()
  .addPizza("Pepperoni with extra cheese")
  .addPizza("Veggie pizza")
  .addDrink("Coca-Cola")
  .addDessert("Cheesecake")
  .build();

console.log(customerOrder.getTotalSummary());
```

</details>

---

### Zadanie 4: Adapter - stare i nowe API

Załóż, że masz starą klasę `LegacyUserService` z metodą `fetchUserById(id: string)`, która zwraca obiekt użytkownika w starym formacie (`{ uid: string; username: string }`). Chcesz korzystać z nowego interfejsu `NewUserApi` z metodą `getUser(id: string)` zwracającą nowy format (`{ id: string; name: string }`). Napisz `UserApiAdapter`.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```ts
// Old API format
interface LegacyUser {
  uid: string;
  username: string;
}

class LegacyUserService {
  fetchUserById(id: string): LegacyUser {
    console.log(`Fetching user ${id} from legacy service.`);
    return { uid: id, username: `user-${id}-legacy` };
  }
}

// New API format
interface NewUser {
  id: string;
  name: string;
}

interface NewUserApi {
  getUser(id: string): NewUser;
}

// Adapter
class UserApiAdapter implements NewUserApi {
  private legacyService: LegacyUserService;

  constructor(service: LegacyUserService) {
    this.legacyService = service;
  }

  getUser(id: string): NewUser {
    const legacyUser = this.legacyService.fetchUserById(id);
    // Adapt the old format to the new format
    return {
      id: legacyUser.uid,
      name: legacyUser.username,
    };
  }
}

// Usage:
const legacyService = new LegacyUserService();
const userAdapter = new UserApiAdapter(legacyService);

const newUser = userAdapter.getUser("abc-123");
console.log(newUser); // { id: "abc-123", name: "user-abc-123-legacy" }
```

</details>

---

### Zadanie 5: Strategy - wybór algorytmu płatności

Zaimplementuj trzy strategie płatności: `CreditCard`, `PayPal` i `CryptoPayment` (każda wypisuje w konsoli informację o metodzie płatności i kwocie). Stwórz klasę `PaymentProcessor` (kontekst), która umożliwi wybór i zmianę strategii w trakcie działania programu.

<details>
<summary>
<span>Pokaż rozwiązanie</span>
</summary>

```ts
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Payment via Credit Card: ${amount} units.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Payment via PayPal: ${amount} units.`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(
      `Payment via Cryptocurrency: ${amount} units (might fluctuate).`,
    );
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(initialStrategy: PaymentStrategy) {
    this.strategy = initialStrategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Usage:
const processor = new PaymentProcessor(new CreditCardPayment());
processor.processPayment(100.5);

processor.setStrategy(new PayPalPayment());
processor.processPayment(250.0);

processor.setStrategy(new CryptoPayment());
processor.processPayment(75.2);
```

</details>

---

To dopiero początek! Każdy z tych wzorców ma swoje warianty, rozbudowane zastosowania i pułapki, których warto unikać. Kontynuuj eksplorację i pamiętaj, że najlepszym sposobem na naukę wzorców jest ich aktywne stosowanie w swoich projektach. Jakie są Twoje ulubione wzorce projektowe?
