---
title: "Wprowadzenie do TypeScript"
description: "Dowiedz się czym jest TypeScript, jak zacząć z niego korzystać i dlaczego warto go używać w swoich projektach. Przystępny przewodnik dla początkujących z przykładami i praktycznymi wskazówkami."
keywords: [typescript, javascript, programowanie, frontend, typowanie, learning]
categories: [wprowadzenie, typescript]
createdAt: 2025-06-23
quiz:
  title: "Quiz: Podstawy TypeScript"
  questions:
    - question: "Czym jest TypeScript?"
      options:
        - "Frameworkiem CSS"
        - "Rozszerzeniem JavaScriptu o typowanie statyczne"
        - "Językiem bazującym na Pythonie"
        - "Systemem szablonów HTML"
      answer: 1
      explanation: "TypeScript rozszerza JavaScript o typowanie statyczne i inne narzędzia dla programistów."

    - question: "Jakie rozszerzenie mają pliki natywne TypeScript?"
      options:
        - ".cts"
        - ".ts"
        - ".js"
        - ".json"
      answer: 1
      explanation: "Standardowe pliki TypeScript mają rozszerzenie `.ts`. Natomiast w React używamy też `.tsx`."

    - question: "Które z poniższych typowań zmiennej jest poprawne w TypeScript?"
      options:
        - "let liczba = number 10;"
        - "var liczba: num = 10;"
        - "let liczba: number = 10;"
        - "let liczba: 10 = number;"
      answer: 2
      explanation: "Poprawna składnia to let liczba: number = 10;"

    - question: "Czym różni się TypeScript od JavaScript?"
      options:
        - "TypeScript ma statyczne typowanie, JavaScript nie"
        - "TypeScript działa tylko w przeglądarce"
        - "TypeScript nie obsługuje klas"
        - "JavaScript nie pozwala na funkcje"
      answer: 0
      explanation: "Najważniejsza różnica to typowanie statyczne i kompilacja do JS."

    - question: "Jak zainstalować TypeScript globalnie przez npm?"
      options:
        - "npm install typescript"
        - "npm get typescript"
        - "npm add global typescript"
        - "npm install -g typescript"
      answer: 3
      explanation: "Polecenie npm install -g typescript instaluje TypeScript globalnie."
---

TypeScript to coraz popularniejszy język programowania, który rozszerza możliwości jakie daje JavaScript. Jeżeli pracowałeś już z JavaScript, na pewno docenisz dodatkowe bezpieczeństwo i wygodę, które oferuje TypeScript! 🚀

## Spis treści

1. [Co to jest TypeScript?](#co-to-jest-typescript)
2. [Czym różni się TypeScript od JavaScript?](#czym-różni-się-typescript-od-javascript)
3. [Dlaczego warto korzystać z TypeScript?](#dlaczego-warto-korzystać-z-typescript)
4. [Jak zacząć z TypeScript?](#jak-zacząć-z-typescript)
   - [Instalacja](#instalacja)
   - [Kompilacja plików `.ts` do `.js`](#kompilacja-plików-ts-do-js)
   - [Konfiguracja projektu i tsconfig.json](#konfiguracja-projektu-i-tsconfigjson)
   - [Twój pierwszy projekt TypeScript](#twój-pierwszy-projekt-typescript)
5. [Podstawy składni TypeScript](#podstawy-składni-typescript)
   - [Typowanie zmiennych](#typowanie-zmiennych)
   - [Typowanie funkcji](#typowanie-funkcji)
   - [Interfejsy](#interfejsy)
   - [Typy złożone](#typy-złożone)
   - [Klasy i dziedziczenie](#klasy-i-dziedziczenie)
   - [Enumy](#enumy)
   - [Alias typów](#alias-typów)
6. [Jak używać typów w praktyce?](#jak-używać-typów-w-praktyce)
7. [Narzędzia i integracje](#narzędzia-i-integracje)
8. [Częste pułapki i wskazówki](#częste-pułapki-i-wskazówki)
   - [Najczęstsze błędy i jak je naprawić](#najczęstsze-błędy-i-jak-je-naprawić)
9. [TypeScript w projektach open-source i pracy zespołowej](#typescript-w-projektach-open-source-i-pracy-zespołowej)
10. [Gdzie znaleźć deklaracje typów do bibliotek JS?](#gdzie-znaleźć-deklaracje-typów-do-bibliotek-js)
11. [Gdzie szukać pomocy?](#gdzie-szukać-pomocy)
12. [Zadania praktyczne](#zadania-praktyczne)
13. [Podsumowanie](#podsumowanie)

---

## Co to jest TypeScript?

TypeScript to nadzbiór JavaScriptu stworzony przez Microsoft. Oznacza to, że każdy poprawny kod JavaScript jest też poprawnym kodem TypeScript. TypeScript wprowadza jednak **statyczne typowanie**, co pozwala na wcześniejsze wykrywanie błędów w kodzie i daje wiele narzędzi do pisania lepiej zorganizowanych aplikacji.

- **JavaScript + Typy = TypeScript**
- Pliki TypeScript mają rozszerzenie `.ts` (zamiast `.js`).
- TypeScript kompiluje się do „czystego” JavaScriptu, który działa w każdej przeglądarce lub środowisku Node.js.

---

## Czym różni się TypeScript od JavaScript?

TypeScript to JavaScript z dodatkowymi możliwościami typowania i narzędziami dla programistów.

- **Kompilacja**: Kod TypeScript musi zostać przetłumaczony (skompliowany) do JavaScriptu, zanim zostanie uruchomiony w przeglądarce lub Node.js.
- **Typowanie**: TypeScript pozwala wykryć błędy typów już podczas pisania kodu, zanim uruchomisz aplikację. JavaScript wykrywa większość błędów dopiero w czasie działania.
- **Lepsze wsparcie dla narzędzi**: Edytory kodu mogą lepiej podpowiadać i wykrywać błędy w kodzie TypeScript dzięki znajomości typów.

---

## Dlaczego warto korzystać z TypeScript?

- **Bezpieczeństwo** – statyczne typowanie pomaga uniknąć wielu błędów, które normalnie wykryłbyś dopiero w trakcie działania aplikacji.
- **Lepsza czytelność** – typy są jak dokumentacja, która podpowiada co dana funkcja przyjmuje i zwraca, ułatwiając pracę w zespole.
- **Wsparcie dla nowoczesnych narzędzi** – edytory kodu mogą lepiej podpowiadać, autouzupełniać i wykrywać błędy.
- **Skalowalność** – kod staje się łatwiejszy do utrzymania, szczególnie w dużych projektach.
- **Łatwa integracja z istniejącym kodem JS** – możesz stopniowo migrować projekt z JavaScriptu na TypeScript.
- **Popularność** – TypeScript jest szeroko używany w dużych projektach open-source (np. Angular, VSCode, Deno).
- **Wspiera nowoczesne funkcje JS** – pozwala korzystać z najnowszych funkcji JavaScript, nawet jeśli nie są jeszcze wspierane przez wszystkie przeglądarki.

---

## Jak zacząć z TypeScript?

### Instalacja

Najprostszym sposobem na rozpoczęcie pracy z TypeScript jest instalacja globalna kompilatora:

```bash
npm install -g typescript
```

Sprawdź wersję poleceniem:

```bash
tsc --version
```

Możesz też dodać TypeScript jako zależność do swojego projektu:

```bash
npm install --save-dev typescript
```

### Kompilacja plików `.ts` do `.js`

TypeScript nie jest rozumiany bezpośrednio przez przeglądarki. Musisz najpierw **skompilować** (`transpilować`) swój kod do JavaScriptu:

```bash
tsc nazwa-pliku.ts
```

To wygeneruje plik `nazwa-pliku.js` gotowy do użycia w przeglądarce lub Node.js.

### Konfiguracja projektu i tsconfig.json

W większych projektach warto utworzyć plik `tsconfig.json`, aby skonfigurować ustawienia kompilatora:

```bash
tsc --init
```

Przykładowy plik `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

- `target` – do jakiej wersji JS kompilować kod,
- `module` – jakiego systemu modułów używać,
- `strict` – włącza rygorystyczne sprawdzanie typów,
- `outDir` – gdzie mają trafić pliki `.js` po kompilacji,
- `include` – które pliki mają być kompilowane.

### Twój pierwszy projekt TypeScript

1. Utwórz folder projektu i zainicjuj npm:

   ```bash
   mkdir moj-projekt-ts
   cd moj-projekt-ts
   npm init -y
   npm install typescript --save-dev
   npx tsc --init
   ```

2. Dodaj plik `src/index.ts` z dowolnym kodem, np.:

   ```typescript
   console.log("Hello TypeScript!");
   ```

3. Skompiluj i uruchom:

   ```bash
   npx tsc
   node dist/index.js
   ```

---

## Podstawy składni TypeScript

### Typowanie zmiennych

```typescript
let liczba: number = 42;
let tekst: string = "Cześć TypeScript!";
let isActive: boolean = true;
```

### Typowanie funkcji

```typescript
function dodaj(a: number, b: number): number {
  return a + b;
}
```

Możesz też typować parametry domyślne, opcjonalne i funkcje strzałkowe:

```typescript
const powiedzHej = (imie: string = "Gość"): string => `Hej, ${imie}!`;
```

### Interfejsy

Interfejsy pozwalają opisać strukturę obiektów:

```typescript
interface Osoba {
  imie: string;
  wiek: number;
  email?: string; // pole opcjonalne
}

const user: Osoba = {
  imie: "Jan",
  wiek: 30,
};
```

### Typy złożone

Możesz używać tablic, unii typów oraz typów własnych:

```typescript
let liczby: number[] = [1, 2, 3];
let tekstLubNumer: string | number = "hej";
type Punkt = { x: number; y: number };
const p: Punkt = { x: 3, y: 7 };
```

### Klasy i dziedziczenie

TypeScript wspiera klasy i dziedziczenie (OOP):

```typescript
class Zwierze {
  constructor(public nazwa: string) {}
  wydajDzwiek() {
    console.log("Dźwięk!");
  }
}

class Pies extends Zwierze {
  wydajDzwiek() {
    console.log("Hau hau!");
  }
}

const burek = new Pies("Burek");
burek.wydajDzwiek(); // Hau hau!
```

### Enumy

Enumy pozwalają na definiowanie własnych typów wyliczeniowych:

```typescript
enum Kolor {
  Czerwony,
  Zielony,
  Niebieski,
}

const ulubionyKolor: Kolor = Kolor.Zielony;
```

### Alias typów

Alias pozwala nazwać typ złożony:

```typescript
type ID = string | number;
let userId: ID = 123;
```

---

## Jak używać typów w praktyce?

- **Funkcje z typami zwracanymi i parametrami opcjonalnymi:**
  ```typescript
  function powiedz(imie?: string): string {
    return `Cześć, ${imie ?? "nieznajomy"}!`;
  }
  ```
- **Łączenie kilku typów:**
  ```typescript
  type Admin = { rola: "admin"; poziom: number };
  type Uzytkownik = { rola: "user"; nick: string };
  type Osoba = Admin | Uzytkownik;
  ```
- **Tablice obiektów o określonym typie:**
  ```typescript
  const osoby: Osoba[] = [
    { rola: "admin", poziom: 1 },
    { rola: "user", nick: "kuba" },
  ];
  ```

---

## Narzędzia i integracje

TypeScript świetnie współpracuje z popularnymi frameworkami frontendowymi jak React, Angular czy Vue. Wiele projektów open-source już teraz korzysta z TypeScriptu, więc znajomość tego języka to duży plus na rynku pracy!

- **VSCode** – edytor Microsoftu ma doskonałe wsparcie dla TypeScript (podpowiedzi, refaktoryzacje, szybkie przechodzenie po kodzie).
- **tsconfig.json** – plik konfiguracyjny pozwalający dostosować kompilację do potrzeb projektu.
- **Integracja z narzędziami budującymi** – TypeScript można łatwo połączyć z Webpackiem, Babel, ESLint i innymi.
- **Systemy CI/CD** – TypeScript jest łatwy do zintegrowania z pipeline’ami (np. GitHub Actions, GitLab CI).

---

## Częste pułapki i wskazówki

- **Nie musisz typować wszystkiego!** – na początek możesz typować tylko kluczowe fragmenty kodu, stopniowo rozszerzając typowanie.
- **Stopniowa migracja** – możesz przerabiać swój projekt z JavaScriptu na TypeScript krok po kroku, np. zmieniając rozszerzenia plików na `.ts` i naprawiając błędy kompilatora.
- **Współpraca z bibliotekami JS** – TypeScript obsługuje pliki deklaracji typów (`@types/`), które pozwalają korzystać z popularnych bibliotek JavaScript z pełnym wsparciem typów. Wystarczy zainstalować odpowiedni pakiet, np.:
  ```bash
  npm install --save-dev @types/lodash
  ```
- **Wyłączaj sprawdzanie niektórych plików** – możesz pominąć sprawdzanie typów dla wybranych plików przez dodanie `// @ts-nocheck` na górze pliku.
- **Czytaj błędy kompilatora** – komunikaty TypeScript są najczęściej bardzo pomocne i dokładnie tłumaczą, co należy poprawić.

### Najczęstsze błędy i jak je naprawić

- **Błąd typowania:**

  ```typescript
  let wiek: number = "25"; // Błąd: Type 'string' is not assignable to type 'number'
  ```

  **Popraw:**

  ```typescript
  let wiek: number = 25;
  ```

- **Brak typu dla zwracanej wartości funkcji:**
  ```typescript
  function zwrocTekst() {
    return 42;
  }
  ```
  **Popraw:**
  ```typescript
  function zwrocTekst(): string {
    return "Tekst";
  }
  ```

---

## TypeScript w projektach open-source i pracy zespołowej

- TypeScript pomaga w pracy zespołowej, bo kod jest bardziej czytelny i przewidywalny.
- Wiele popularnych bibliotek (np. React, Angular, Express) ma swoje typy lub nawet są napisane w TypeScript.
- W dużych projektach firmowych i open-source praktycznie zawsze warto używać TypeScriptu, by uniknąć błędów i zwiększyć produktywność zespołu.

---

## Gdzie znaleźć deklaracje typów do bibliotek JS?

Nie każda biblioteka JavaScript ma wbudowane typy. Możesz jednak łatwo doinstalować oficjalne deklaracje typów.

- Szukaj paczek `@types/` w npm, np. dla Lodash:
  ```bash
  npm install --save-dev @types/lodash
  ```
- Dzięki temu możesz korzystać z bibliotek JS z pełną obsługą typów w TypeScript.

---

## Gdzie szukać pomocy?

- Oficjalna dokumentacja: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- Playground online: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)
- Społeczność: Stack Overflow, Discord, GitHub, fora tematyczne

Dodatkowo na GitHubie znajdziesz mnóstwo przykładowych projektów opartych o TypeScript, które mogą posłużyć za inspirację.

---

## Zadania praktyczne

Oto zadania, dzięki którym lepiej zrozumiesz podstawy TypeScript. Sprawdź się i rozwijaj swoje umiejętności!

---

### Zadanie 1: Typowanie zmiennych

Zadeklaruj trzy zmienne: liczbę, tekst oraz wartość logiczną – każda powinna być odpowiednio otagowana typem.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```typescript
let liczba: number = 10;
let tekst: string = "Witaj TypeScript!";
let aktywny: boolean = true;
```

</details>

---

### Zadanie 2: Funkcja z typowanymi argumentami

Napisz funkcję `dodaj`, która przyjmuje dwa argumenty typu `number` i zwraca ich sumę. Nie zapomnij o typach!

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```typescript
function dodaj(a: number, b: number): number {
  return a + b;
}
```

</details>

---

### Zadanie 3: Interfejs i obiekt

Zdefiniuj interfejs `Samochod` z polami `marka` (string) oraz `rok` (number). Następnie utwórz obiekt typu `Samochod`.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```typescript
interface Samochod {
  marka: string;
  rok: number;
}

const auto: Samochod = {
  marka: "Toyota",
  rok: 2020,
};
```

</details>

---

### Zadanie 4: Alias typu i unia typów

Zdefiniuj alias typu `ID` jako `string` lub `number`. Następnie zadeklaruj zmienną `userId` i przypisz jej liczbę.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```typescript
type ID = string | number;
let userId: ID = 123;
```

</details>

---

### Zadanie 5: Klasa i dziedziczenie

Stwórz klasę `Zwierze` z polem `nazwa` (string) oraz metodą `wydajDzwiek`. Następnie utwórz klasę `Kot` dziedziczącą po `Zwierze` i nadpisz metodę, aby wypisywała "Miau!".

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```typescript
class Zwierze {
  constructor(public nazwa: string) {}
  wydajDzwiek() {
    console.log("Dźwięk!");
  }
}

class Kot extends Zwierze {
  wydajDzwiek() {
    console.log("Miau!");
  }
}

const mruczek = new Kot("Mruczek");
mruczek.wydajDzwiek(); // Miau!
```

</details>

---

## Podsumowanie

TypeScript to świetne narzędzie dla każdego, kto chce pisać nowoczesny, bezpieczny i skalowalny kod JavaScript. Dzięki statycznemu typowaniu, lepszej czytelności i wsparciu dla narzędzi deweloperskich praca z nim staje się łatwiejsza i przyjemniejsza. Jeśli jeszcze nie próbowałeś – spróbuj! 👨🏻‍💻👩🏼‍💻
