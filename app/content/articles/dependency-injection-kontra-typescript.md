---
title: Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection
description: "Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za funkcji wstrzykujących, które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów."
keywords: [typescript, wzorce projektowe, javascript, blog]
categories: [typescript, wzorce-projektowe]
createdAt: 2024-06-20
---

Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Pozwala on na oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności oraz ułatwia zarządzanie zależnościami w projekcie. 🔗

W TypeScript DI można zaimplementować na różne sposoby, m.in. za pomocą funkcji wstrzykujących, kontenerów IoC oraz dekoratorów. Poniżej znajdziesz szczegółowe omówienie praktycznych sposobów implementacji DI w TypeScript wraz z przykładami i wskazówkami.

---

## Spis treści

1. [Czym jest Dependency Injection?](#czym-jest-dependency-injection)
2. [Zalety stosowania DI](#zalety-stosowania-di)
3. [Podstawowy przykład Dependency Injection](#podstawowy-przykład-dependency-injection)
4. [Wstrzykiwanie zależności przy pomocy funkcji](#wstrzykiwanie-zależności-przy-pomocy-funkcji)
5. [Kontener IoC i automatyzacja DI](#kontener-ioc-i-automatyzacja-di)
6. [Testowanie z wykorzystaniem DI](#testowanie-z-wykorzystaniem-di)
7. [Podsumowanie](#podsumowanie)

---

## Czym jest Dependency Injection?

**Dependency Injection** polega na przekazywaniu obiektów zależnych (tzw. zależności) do obiektu zamiast tworzenia ich bezpośrednio w jego wnętrzu. Dzięki temu możemy łatwo podmieniać zależności – np. na ich mocki podczas testowania – bez zmian w logice biznesowej.

DI zwiększa elastyczność kodu, ułatwia jego testowanie oraz pozwala na lepszą separację odpowiedzialności. Dzięki temu Twój kod staje się bardziej modularny, przejrzysty i łatwy w utrzymaniu. 💡

---

## Zalety stosowania DI

- **Łatwiejsze testowanie** – zależności można zamieniać na mocki lub stuby w testach jednostkowych.
- **Lepsza modularność** – klasy nie są silnie powiązane z konkretnymi implementacjami.
- **Łatwiejsze zarządzanie zależnościami** – zmiany w zależnościach nie wymagają modyfikacji całego kodu.
- **Wspieranie zasad SOLID** – zwłaszcza zasady odwrócenia zależności (Dependency Inversion Principle).
- **Zwiększona elastyczność** – łatwo rozszerzać i modyfikować funkcjonalność bez naruszania istniejących klas.

---

## Podstawowy przykład Dependency Injection

Rozważmy prosty scenariusz, w którym klasa `UserService` korzysta z `UserRepository`:

```typescript
class UserRepository {
  getUser(userId: number): string {
    return `User ${userId}`;
  }
}

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getUserName(userId: number): string {
    return this.userRepository.getUser(userId);
  }
}

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

console.log(userService.getUserName(1)); // User 1
```

**Wyjaśnienie:**  
W tym przykładzie `UserRepository` jest wstrzykiwany do `UserService` poprzez konstruktor. Dzięki temu możemy łatwo podmienić repozytorium np. w testach jednostkowych lub zamienić na inną implementację.

---

## Wstrzykiwanie zależności przy pomocy funkcji

W większych aplikacjach zarządzanie zależnościami ręcznie może być uciążliwe. Możemy zastosować funkcję `inject`, która będzie przechowywać i dostarczać instancje klas (prosta wersja kontenera IoC):

```typescript
const dependencies: Map<string, any> = new Map();

function inject<T>(dependency: new () => T): T {
  if (dependencies.has(dependency.name)) {
    return dependencies.get(dependency.name);
  }
  const dep = new dependency();
  dependencies.set(dependency.name, dep);
  return dep;
}

class UserRepository {
  getUser(userId: number): string {
    return `User ${userId}`;
  }
}

class UserService {
  protected userRepository = inject(UserRepository);

  getUserName(userId: number): string {
    return this.userRepository.getUser(userId);
  }
}

class ExtendedUserService extends UserService {}

const extendedUserService = inject(ExtendedUserService);

console.log(extendedUserService.getUserName(1)); // User 1
```

**Wyjaśnienie:**

- Funkcja `inject` rejestruje i przechowuje instancje klas, zapewniając singleton dla każdej z nich.
- Nie musisz przekazywać zależności przez konstruktor – są pobierane automatycznie.
- Klasy można łatwo rozszerzać, a zależności są zarządzane centralnie – to duże ułatwienie w dużych projektach. 🛠️

---

## Kontener IoC i automatyzacja DI

W rozbudowanych projektach warto rozważyć użycie gotowych rozwiązań, np. [InversifyJS](https://inversify.io/), które pozwalają korzystać z dekoratorów i automatycznie rozwiązywać zależności.

Przykład z użyciem InversifyJS:

```typescript
import "reflect-metadata";
import { injectable, inject, Container } from "inversify";

@injectable()
class UserRepository {
  getUser(userId: number): string {
    return `User ${userId}`;
  }
}

@injectable()
class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  getUserName(userId: number): string {
    return this.userRepository.getUser(userId);
  }
}

const container = new Container();
container.bind(UserRepository).toSelf();
container.bind(UserService).toSelf();

const userService = container.get(UserService);
console.log(userService.getUserName(1)); // User 1
```

**Zalety takiego podejścia:**

- Automatyczna rejestracja i rozwiązywanie zależności.
- Wsparcie dla różnych zakresów życia obiektu (singleton, transient).
- Możliwość wstrzykiwania zależności przez dekoratory.
- Łatwiejsze zarządzanie rozbudowaną strukturą aplikacji.

---

## Testowanie z wykorzystaniem DI

Dzięki zastosowaniu DI możemy łatwo podmieniać implementacje zależności, np. na mocki lub stuby podczas testów jednostkowych:

```typescript
class MockUserRepository {
  getUser(userId: number): string {
    return "Mock User";
  }
}

const mockRepo = new MockUserRepository();
const userService = new UserService(mockRepo);

console.log(userService.getUserName(1)); // Mock User
```

**Korzyści:**

- Testy są niezależne od rzeczywistej implementacji zależności.
- Można łatwo symulować różne scenariusze i przypadki brzegowe.
- Utrzymanie i rozwijanie testów staje się prostsze.

---

## Podsumowanie

Dependency Injection w TypeScript to potężny sposób na zwiększenie elastyczności, testowalności i modularności kodu. Najprostsze podejście to ręczne wstrzykiwanie zależności przez konstruktor, jednak w miarę wzrostu projektu warto pomyśleć o własnym kontenerze IoC lub sięgnąć po gotowe biblioteki jak InversifyJS. DI pozwala na lepszą separację odpowiedzialności i sprawia, że kod jest łatwiejszy w utrzymaniu i testowaniu.

---

**Dalsza lektura:** 📚

- [InversifyJS Documentation](https://github.com/inversify/InversifyJS)
- [Dependency Injection w TypeScript – Angular](https://angular.dev/guide/di)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
