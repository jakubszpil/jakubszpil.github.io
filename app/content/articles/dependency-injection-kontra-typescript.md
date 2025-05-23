---
title: Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection
description: "Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za funkcji wstrzykujących, które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów."
keywords: [typescript, wzorce projektowe, javascript]
categories: [typescript, wzorce-projektowe]
createdAt: 2024-06-20
---

Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami.

W TypeScript, DI można zaimplementować na kilka sposobów, w tym za funkcji wstrzykujących, które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.

## Spis Treści

1. Podstawy Dependency Injection
2. Prosty przykład DI
3. Wstrzykiwanie zależności za pomocą funkcji wstrzykującej

## 1. Podstawy Dependency Injection

W Dependency Injection chodzi o przekazywanie zależności do obiektu zamiast tworzenia ich bezpośrednio wewnątrz obiektu. Dzięki temu można łatwo wymieniać zależności, co ułatwia testowanie i modyfikowanie kodu.

## 2. Prosty przykład DI

Rozważmy prosty przykład, w którym klasa `UserService` potrzebuje instancji `UserRepository`:

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

W powyższym przykładzie `UserRepository` jest wstrzykiwany do `UserService` przez konstruktor.

## 3. Wstrzykiwanie zależności za pomocą funkcji wstrzykującej

Aby lepiej zarządzać zależnościami, możemy użyć kontenera IoC. Przykład poniżej pokazuje, jak można to zrobić przy użyciu prostego kontenera DI:

```typescript
const dependencies: Map<string, any> = new Map();

function inject<T>(dependency: new () => T): T {
  if (dependencies.has(dependency.name)) {
    const dep = dependencies.get(dependency.name);
    if (dep) {
      return dep;
    }
  }

  const dep = new dependency();
  dependencies.set(dependency.name, dep);
  return dependencies.get(dependency.name);
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

W tym przykładzie używamy funkcji do rejestrowania i rozwiązywania zależności.
Funkcja inject przyjmuje, jako generyczny argument, zależność, którą na podstawie statycznej nazwy zapisuje i przechowuje, dzięki czemu potem mamy dostęp do wspólnej instancji tej zależności.
Takie podejście pozwala na łatwe rozszerzanie klas, nie potrzebujemy pamiętać o zależnościach w konstruktorze klasy

## Podsumowanie

Dependency Injection w TypeScript to potężna technika, która może znacznie ułatwić zarządzanie zależnościami i poprawić testowalność oraz modularność kodu. Przedstawione powyżej przykłady pokazują różne podejścia do implementacji DI, w tym bezpośrednie wstrzykiwanie przez konstruktor, korzystanie z funkcji wstrzykujących, używanie dekoratorów. Dzięki tym technikom można tworzyć bardziej elastyczne i łatwe w utrzymaniu aplikacje.
