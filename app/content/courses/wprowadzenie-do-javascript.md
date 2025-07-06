---
title: "Wprowadzenie do JavaScript"
description: "JavaScript to potężny i wszechstronny język programowania, który stanowi serce interaktywnych stron internetowych. W tym kompleksowym kursie krok po kroku odkryjemy jego podstawy, od zrozumienia czym jest JavaScript, przez kluczowe elementy takie jak zmienne, typy danych, operatory, struktury kontrolne i funkcje, aż po bardziej złożone koncepcje, takie jak obiekty i tablice. Przygotuj się na fascynującą podróż do świata programowania!"
keywords:
  [
    javascript,
    kurs dla początkujących,
    programowanie webowe,
    frontend,
    nauka javascript,
    interaktywne strony,
    zmienne,
    typy danych,
    funkcje,
    obiekty,
    tablice,
  ]
categories: [javascript]
createdAt: 2025-07-06
quiz:
  title: "Quiz: Wprowadzenie do JavaScript"
  questions:
    - question: "Które słowo kluczowe powinieneś użyć do zadeklarowania stałej wartości w JavaScript, której nie można później zmienić?"
      options:
        - "let"
        - "var"
        - "const"
        - "static"
      answer: 2
      explanation: "Stałe, czyli wartości, które mają pozostać niezmienne przez cały czas trwania programu, deklarujemy za pomocą słowa kluczowego `const`. To dobra praktyka, aby zapobiegać przypadkowym zmianom."

    - question: "Które z wymienionych typów danych **NIE** występują natywnie (domyślnie) w JavaScript jako osobny, podstawowy typ?"
      options:
        - "Number"
        - "String"
        - "Character"
        - "Boolean"
      answer: 2
      explanation: "W JavaScript nie ma osobnego typu danych 'Character' dla pojedynczych znaków. Pojedyncze znaki są traktowane jako krótkie łańcuchy znaków (String). Pozostałe typy są podstawowymi typami w JS."

    - question: "Jak wygląda poprawna składnia funkcji strzałkowej w JavaScript, która zwraca sumę dwóch liczb `a` i `b`?"
      options:
        - "const suma = (a, b) => a + b;"
        - "function suma(a, b) { return a + b; }"
        - "let suma = add(a, b);"
        - "sum(a, b) => a + b;"
      answer: 0
      explanation: "Poprawna składnia funkcji strzałkowej to `const suma = (a, b) => a + b;`. Jest to zwięzła forma deklaracji funkcji, często używana w nowoczesnym JavaScript. Opcja 1 to tradycyjna deklaracja funkcji, a pozostałe są niepoprawne składniowo."

    - question: "W jaki sposób można uzyskać liczbę elementów (długość) tablicy w JavaScript?"
      options:
        - "array.length"
        - "length(array)"
        - "array.size()"
        - "array.count"
      answer: 0
      explanation: "Aby uzyskać długość tablicy w JavaScript, używamy właściwości `.length`, np. `mojaTablica.length`. Jest to standardowy sposób."

    - question: "Co zostanie wypisane w konsoli po wykonaniu poniższego kodu?\n\n```javascript\nlet x = 10;\nif (x > 5) { console.log('OK'); } else { console.log('NIE'); }\n```"
      options:
        - "NIE"
        - "undefined"
        - "5"
        - "OK"
      answer: 3
      explanation: "Wartość `x` wynosi 10. Warunek `x > 5` (czyli `10 > 5`) jest prawdziwy, dlatego wykonany zostanie blok kodu wewnątrz `if`, który wypisze w konsoli tekst 'OK'."
---

## Spis treści

1.  [Czym jest JavaScript i dlaczego jest tak ważny?](#czym-jest-javascript-i-dlaczego-jest-tak-ważny)
2.  [Zmienne: Szafki na Twoje Dane](#zmienne-szafki-na-twoje-dane)
3.  [Typy Danych: Co JavaScript potrafi przechowywać?](#typy-danych-co-javascript-potrafi-przechowywać)
4.  [Operatory: Matematyka i Logika w Kodzie](#operatory-matematyka-i-logika-w-kodzie)
5.  [Struktury Kontrolne: Podejmowanie Decyzji i Powtarzanie Zadań](#struktury-kontrolne-podejmowanie-decyzji-i-powtarzanie-zadań)
    - [Instrukcja `if`/`else`: Rozgałęzianie Kodu](#instrukcja-ifelse-rozgałęzianie-kodu)
    - [Pętla `for`: Powtarzaj od Liczby do Liczby](#pętla-for-powtarzaj-od-liczby-do-liczby)
    - [Pętla `while`: Powtarzaj, Dopóki Prawda](#pętla-while-powtarzaj-dopóki-prawda)
6.  [Funkcje: Bloki Kodu do Wielokrotnego Użycia](#funkcje-bloki-kodu-do-wielokrotnego-użycia)
    - [Deklaracja Funkcji: Klasyczny Sposób](#deklaracja-funkcji-klasyczny-sposób)
    - [Funkcje Strzałkowe (Arrow Functions): Nowoczesny Skrót](#funkcje-strzałkowe-arrow-functions-nowoczesny-skrót)
7.  [Obiekty: Skarbnice Powiązanych Informacji](#obiekty-skarbnice-powiązanych-informacji)
8.  [Tablice: Uporządkowane Listy Danych](#tablice-uporządkowane-listy-danych)
9.  [Zadania do Wykonania: Sprawdź Swoje Umiejętności!](#zadania-do-wykonania-sprawdź-swoje-umiejętności)
    - [Zadanie 1: Iloczyn Dwóch Liczb](#zadanie-1-iloczyn-dwóch-liczb)
    - [Zadanie 2: Obiekt Książka](#zadanie-2-obiekt-książka)
    - [Zadanie 3: Największa Liczba w Tablicy](#zadanie-3-największa-liczba-w-tablicy)
    - [Zadanie 4: Wyświetlanie Imion](#zadanie-4-wyświetlanie-imion)
10. [Podsumowanie](#podsumowanie)

---

## Czym jest JavaScript i dlaczego jest tak ważny?

Witaj w fascynującym świecie **JavaScript (JS)**! To język programowania, który jest niezwykle popularny i stanowi fundament większości dynamicznych i interaktywnych stron internetowych, które odwiedzasz każdego dnia. Wyobraź sobie stronę internetową, która nie tylko wyświetla tekst i obrazy, ale także reaguje na Twoje kliknięcia, przewijanie czy wprowadzanie danych w formularzach – to właśnie zasługa JavaScriptu!

### Gdzie spotkasz JavaScript?

- **W przeglądarce (po stronie klienta):** To jego główne zastosowanie. JavaScript pozwala na:
  - **Animacje:** Sprawia, że elementy na stronie poruszają się, zanikają lub pojawiają.
  - **Interaktywne formularze:** Sprawdza, czy dane wpisane w formularzu są poprawne, zanim zostaną wysłane.
  - **Galerie zdjęć:** Umożliwia płynne przechodzenie między zdjęciami.
  - **Mapy interaktywne:** Pozwala na przybliżanie, oddalanie i przesuwanie map.
  - **Gry przeglądarkowe:** Wiele prostych gier jest w całości napisanych w JS.
- **Na serwerze (po stronie serwera):** Dzięki technologiom takim jak **Node.js**, JavaScript może być używany do budowania potężnych aplikacji serwerowych, które obsługują logikę biznesową, bazy danych i komunikację z klientem. Oznacza to, że możesz używać tego samego języka do tworzenia zarówno frontendu (tego, co widzisz w przeglądarce), jak i backendu (logiki działającej na serwerze) aplikacji!
- **Aplikacje mobilne i desktopowe:** Istnieją również frameworki (zestawy narzędzi), takie jak React Native czy Electron, które pozwalają pisać aplikacje mobilne i desktopowe przy użyciu JavaScriptu.

W tym kursie skupimy się głównie na podstawach JavaScriptu w kontekście przeglądarek internetowych, ponieważ to doskonały punkt wyjścia dla każdego początkującego. Przygotuj się na to, że nauka JavaScriptu otworzy Ci drzwi do tworzenia niesamowitych rzeczy w internecie!

---

## Zmienne: Szafki na Twoje Dane

Wyobraź sobie, że piszesz list, w którym musisz wiele razy powtórzyć swoje imię. Zamiast za każdym razem pisać "Jan", możesz użyć zmiennej "MojeImię" i włożyć do niej wartość "Jan". Później, jeśli zechcesz zmienić imię na "Krzysztof", zmienisz je tylko w jednym miejscu – w zmiennej!

W programowaniu **zmienne** to takie "pudełka" lub "szafki", w których możemy przechowywać różne dane (liczby, tekst, prawda/fałsz itp.). Te dane mogą się zmieniać w trakcie działania programu.

W JavaScript zmienne deklarujemy, czyli tworzymy, za pomocą trzech słów kluczowych: `var`, `let` lub `const`. Każde z nich ma nieco inne zastosowanie i zasady:

- `var`: To najstarszy sposób deklarowania zmiennych w JavaScript. Zmienne zadeklarowane za pomocą `var` mają zasięg **funkcyjny**, co oznacza, że są dostępne w całej funkcji, w której zostały zadeklarowane. Obecnie rzadziej używany w nowym kodzie ze względu na pewne potencjalne problemy (np. możliwość redeklaracji tej samej zmiennej).
- `let`: To nowocześniejszy sposób deklarowania zmiennych, wprowadzony w standardzie ES6 (ECMAScript 2015). Zmienne zadeklarowane za pomocą `let` mają zasięg **blokowy**. Oznacza to, że są dostępne tylko w bloku kodu (np. wewnątrz `if`, `for`, `{}`) w którym zostały zadeklarowane. Jest to **zalecany** sposób deklarowania zmiennych, których wartość **będzie się zmieniać**.
- `const`: Również wprowadzony w ES6, podobnie jak `let`, ma zasięg **blokowy**. Kluczowa różnica polega na tym, że `const` służy do deklarowania **stałych**, czyli wartości, które **nie powinny się zmieniać** po ich pierwszym przypisaniu. Jeśli spróbujesz zmienić wartość stałej, JavaScript zwróci błąd. Jest to świetne do danych, które mają być niezmienne w całym programie.

<!-- end list -->

```javascript
// Przykład użycia zmiennych:

// Deklaracja zmiennej 'var' (starszy sposób)
var liczbaSamochodow = 3;
console.log(liczbaSamochodow); // Wypisze: 3

// Możesz zmienić jej wartość
liczbaSamochodow = 5;
console.log(liczbaSamochodow); // Wypisze: 5

// Deklaracja zmiennej 'let' (zalecany dla zmiennych, które się zmieniają)
let imieUzytkownika = "Anna";
console.log(imieUzytkownika); // Wypisze: Anna

// Możesz zmienić jej wartość
imieUzytkownika = "Katarzyna";
console.log(imieUzytkownika); // Wypisze: Katarzyna

// Deklaracja stałej 'const' (dla wartości, które się nie zmieniają)
const PI = 3.14159;
console.log(PI); // Wypisze: 3.14159

// PRÓBA ZMIANY Wartości const - spowoduje błąd!
// PI = 3.14; // To spowodowałoby błąd w konsoli: "TypeError: Assignment to constant variable."
```

**Wskazówka dla początkujących:** Na początku staraj się używać `const` zawsze, gdy tylko możesz. Jeśli wiesz, że wartość danej zmiennej będzie się zmieniać, wtedy użyj `let`. Unikaj `var` w nowym kodzie, chyba że musisz pracować ze starszymi systemami.

---

## Typy Danych: Co JavaScript potrafi przechowywać?

Zmienne mogą przechowywać różne rodzaje informacji. W programowaniu te rodzaje informacji nazywamy **typami danych**. JavaScript, podobnie jak inne języki, ma kilka podstawowych typów danych, które pozwalają mu rozumieć i przetwarzać różne rodzaje wartości:

- **Number (Liczby):** Ten typ służy do przechowywania zarówno liczb całkowitych (np. `5`, `-100`), jak i liczb zmiennoprzecinkowych (ułamkowych, np. `3.14`, `0.5`). W JavaScript nie ma rozróżnienia na liczby całkowite i zmiennoprzecinkowe – wszystkie są typu `Number`.
  ```javascript
  let calkowita = 123; // Liczba całkowita
  let zmiennoprzecinkowa = 3.14; // Liczba zmiennoprzecinkowa
  ```
- **String (Łańcuchy Znaków / Tekst):** Służy do przechowywania tekstu. Tekst w JavaScript zawsze musi być ujęty w cudzysłowy pojedyncze (`'`) lub podwójne (`"`).
  ```javascript
  let imie = "Ala"; // Łańcuch znaków w podwójnych cudzysłowach
  let wiadomosc = "Cześć, świecie!"; // Łańcuch znaków w pojedynczych cudzysłowach
  ```
- **Boolean (Wartości Logiczne):** Ten typ może przyjmować tylko dwie wartości: `true` (prawda) lub `false` (fałsz). Jest to niezwykle przydatne do podejmowania decyzji w kodzie (np. "jeśli jest `true`, zrób to, w przeciwnym razie zrób coś innego").
  ```javascript
  let czyPadaDeszcz = true; // Wartość logiczna: prawda
  let czyJestWieczor = false; // Wartość logiczna: fałsz
  ```
- **Object (Obiekty):** Obiekty to bardziej złożone struktury, które pozwalają grupować ze sobą powiązane dane. Możesz myśleć o nich jak o "encyklopedii", gdzie każda strona ma swoją nazwę (klucz) i treść (wartość). Obiekty będziemy omawiać szerzej w dalszej części kursu.
  ```javascript
  let osoba = {
    imie: "Jan",
    wiek: 30,
    miasto: "Warszawa",
  }; // Obiekt reprezentujący osobę
  ```
- **Array (Tablice):** Tablice to specjalny rodzaj obiektu, który służy do przechowywania uporządkowanej listy wartości. Możesz myśleć o nich jak o "liście zakupów" lub "szeregu szuflad", gdzie każda szuflada ma swój numer (indeks) i przechowuje jedną wartość. Tablice również omówimy szczegółowo później.
  ```javascript
  let kolory = ["czerwony", "niebieski", "zielony"]; // Tablica kolorów
  ```
- **Undefined:** Ten typ oznacza, że zmienna została zadeklarowana, ale **nie przypisano jej jeszcze żadnej wartości**. JavaScript domyślnie przypisuje `undefined` nowym zmiennym.
  ```javascript
  let zmiennaBezWartosci;
  console.log(zmiennaBezWartosci); // Wypisze: undefined
  ```
- **Null:** Ten typ oznacza celowy **brak wartości**. Programista sam przypisuje `null`, aby wskazać, że dana zmienna (lub obiekt) nie przechowuje obecnie żadnej wartości.
  ```javascript
  let brakDanych = null;
  console.log(brakDanych); // Wypisze: null
  ```

Zrozumienie tych podstawowych typów danych jest kluczowe, ponieważ będą one fundamentem wszystkich operacji, które będziesz wykonywać w JavaScript.

---

## Operatory: Matematyka i Logika w Kodzie

Operatory w JavaScript to specjalne symbole, które pozwalają nam wykonywać różne działania na danych. Możesz myśleć o nich jak o znakach matematycznych (`+`, `-`, `*`, `/`) lub symbolach logicznych, które pomagają porównywać wartości i podejmować decyzje.

Podzielmy je na kilka głównych kategorii:

### Operatory Arytmetyczne

Służą do wykonywania podstawowych operacji matematycznych:

- `+` (dodawanie)
- `-` (odejmowanie)
- `*` (mnożenie)
- `/` (dzielenie)
- `%` (reszta z dzielenia, czyli modulo – np. `10 % 3` da `1`, bo `10` podzielone przez `3` to `3` reszty `1`)
- `**` (potęgowanie - np. `2 ** 3` to `8`)
- `++` (inkrementacja - zwiększa wartość o 1, np. `x++` to `x = x + 1`)
- `--` (dekrementacja - zmniejsza wartość o 1, np. `x--` to `x = x - 1`)

<!-- end list -->

```javascript
let a = 10;
let b = 5;

let suma = a + b; // 15
let roznica = a - b; // 5
let iloczyn = a * b; // 50
let iloraz = a / b; // 2
let reszta = a % b; // 0 (bo 10 dzieli się przez 5 bez reszty)
let potega = a ** 2; // 100 (10 do potęgi 2)

console.log(suma, roznica, iloczyn, iloraz, reszta, potega);
```

### Operatory Porównania

Służą do porównywania dwóch wartości i zawsze zwracają wartość logiczną: `true` (prawda) lub `false` (fałsz).

- `==` (równe wartości) - **porównuje tylko wartości**, ignorując typy danych.
- `===` (ściśle równe) - **porównuje zarówno wartości, jak i typy danych**. **Zalecane do używania!**
- `!=` (różne wartości) - **sprawdza, czy wartości są różne**, ignorując typy danych.
- `!==` (ściśle różne) - **sprawdza, czy wartości lub typy danych są różne**. **Zalecane do używania!**
- `>` (większe niż)
- `<` (mniejsze niż)
- `>=` (większe lub równe)
- `<=` (mniejsze lub równe)

<!-- end list -->

```javascript
let x = 10;
let y = "10"; // To jest tekst (String), a nie liczba (Number)

console.log(x == y); // true (bo wartość 10 jest taka sama, typ ignorowany)
console.log(x === y); // false (bo wartości są takie same, ale typy są różne: Number vs String)

console.log(x != 5); // true
console.log(x !== "10"); // true (bo mimo że wartości są takie same, typy są różne)

console.log(x > 5); // true
console.log(x <= 10); // true
```

### Operatory Logiczne

Służą do łączenia lub negowania warunków logicznych.

- `&&` (AND / I) - Zwraca `true`, jeśli **oba** warunki są prawdziwe.
- `||` (OR / LUB) - Zwraca `true`, jeśli **przynajmniej jeden** warunek jest prawdziwy.
- `!` (NOT / NIE) - Odwraca wartość logiczną (z `true` na `false` i z `false` na `true`).

<!-- end list -->

```javascript
let jestPelnoletni = true;
let maPrawoJazdy = false;

console.log(jestPelnoletni && maPrawoJazdy); // false (bo nie ma prawa jazdy)
console.log(jestPelnoletni || maPrawoJazdy); // true (bo jest pełnoletni)
console.log(!jestPelnoletni); // false (bo jest pełnoletni, a '!' to zaneguje)
```

### Operatory Przypisania

Służą do przypisywania wartości do zmiennych.

- `=` (przypisanie wartości)
- `+=` (dodaj i przypisz, np. `a += 5` to to samo co `a = a + 5`)
- `-=` (odejmij i przypisz)
- `*=` (pomnóż i przypisz)
- `/=` (podziel i przypisz)
- `%=` (reszta z dzielenia i przypisz)

<!-- end list -->

```javascript
let punkty = 100;
punkty += 50; // punkty = punkty + 50;  teraz punkty to 150
console.log(punkty); // 150

punkty -= 20; // punkty = punkty - 20;  teraz punkty to 130
console.log(punkty); // 130
```

Zrozumienie operatorów jest fundamentalne, ponieważ będziesz ich używać niemal w każdym programie do wykonywania obliczeń, porównywania danych i sterowania logiką działania Twojej aplikacji.

---

## Struktury Kontrolne: Podejmowanie Decyzji i Powtarzanie Zadań

Struktury kontrolne to jak "drogowskazy" w Twoim kodzie. Pozwalają one na podejmowanie decyzji (czy coś zrobić, czy nie) oraz na wielokrotne powtarzanie pewnych czynności. Bez nich programy byłyby bardzo liniowe i nudne.

### Instrukcja `if`/`else`: Rozgałęzianie Kodu

Instrukcja `if` (jeśli) pozwala na wykonanie określonego bloku kodu **tylko wtedy, gdy spełniony jest pewien warunek**. Jeśli warunek jest fałszywy, ten blok kodu jest pomijany.
Możesz również dodać instrukcję `else` (w przeciwnym razie), aby określić, co ma się stać, gdy warunek w `if` nie jest spełniony.

- `if (warunek)`: Wykonaj kod, jeśli `warunek` jest prawdziwy.
- `else`: Wykonaj ten kod, jeśli żaden z poprzedzających warunków `if` lub `else if` nie był prawdziwy.
- `else if (innyWarunek)`: Sprawdź kolejny warunek, jeśli poprzedni `if` (lub `else if`) był fałszywy.

<!-- end list -->

```javascript
let temperatura = 25;

// Przykład prostego IF
if (temperatura > 20) {
  console.log("Jest ciepło!"); // Ten kod zostanie wykonany
}

// Przykład IF-ELSE
if (temperatura < 10) {
  console.log("Jest zimno.");
} else {
  console.log("Nie jest zimno."); // Ten kod zostanie wykonany
}

// Przykład IF-ELSE IF-ELSE (wiele warunków)
let godzina = 14;

if (godzina < 12) {
  console.log("Dzień dobry!");
} else if (godzina < 18) {
  // Jeśli godzina NIE jest mniejsza niż 12, sprawdź, czy jest mniejsza niż 18
  console.log("Dzień dobry po południu!"); // Ten kod zostanie wykonany
} else {
  // Jeśli żaden z powyższych warunków nie był spełniony
  console.log("Dobry wieczór!");
}
```

Instrukcje `if` są podstawą logicznych operacji w każdym programie.

### Pętla `for`: Powtarzaj od Liczby do Liczby

Pętla `for` jest idealna, gdy wiesz, **ile razy** chcesz powtórzyć jakąś czynność. Możesz jej użyć do iteracji (przechodzenia) przez elementy listy, wykonywania akcji określoną liczbę razy, itp.

Struktura pętli `for` składa się z trzech części w nawiasach:

1.  **Inicjalizacja:** Działa tylko raz na początku. Zazwyczaj deklarujesz tutaj zmienną licznika (np. `let i = 0;`).
2.  **Warunek:** Sprawdzany przed każdym wykonaniem pętli. Jeśli warunek jest `true`, pętla się wykonuje. Jeśli `false`, pętla się kończy. (np. `i < 5;`)
3.  **Krok (Iteracja):** Wykonywany po każdym przejściu pętli. Zazwyczaj zwiększasz lub zmniejszasz licznik (np. `i++;`).

<!-- end list -->

```javascript
// Przykład: Wypisz liczby od 0 do 4
for (let i = 0; i < 5; i++) {
  console.log(i); // Wypisze kolejno: 0, 1, 2, 3, 4
}
/*
Jak to działa?
1. i = 0 (inicjalizacja)
2. 0 < 5? Tak, więc wykonaj kod w nawiasach. Wypisz 0.
3. i++ (i staje się 1)
4. 1 < 5? Tak, wykonaj. Wypisz 1.
5. i++ (i staje się 2)
6. 2 < 5? Tak, wykonaj. Wypisz 2.
7. i++ (i staje się 3)
8. 3 < 5? Tak, wykonaj. Wypisz 3.
9. i++ (i staje się 4)
10. 4 < 5? Tak, wykonaj. Wypisz 4.
11. i++ (i staje się 5)
12. 5 < 5? Nie (fałsz), pętla się kończy.
*/
```

### Pętla `while`: Powtarzaj, Dopóki Prawda

Pętla `while` (dopóki) jest używana, gdy nie wiesz dokładnie, **ile razy** pętla ma się wykonać, ale chcesz, aby wykonywała się tak długo, **jak długo dany warunek jest prawdziwy**.

```javascript
// Przykład: Wypisz liczby dopóki i jest mniejsze niż 5
let j = 0; // Pamiętaj o inicjalizacji zmiennej licznika PRZED pętlą!

while (j < 5) {
  // Warunek jest sprawdzany na początku każdej iteracji
  console.log(j);
  j++; // Ważne: musisz ręcznie zmienić wartość zmiennej, inaczej pętla będzie nieskończona!
}
/*
Jak to działa?
1. j = 0
2. 0 < 5? Tak, wykonaj. Wypisz 0. j staje się 1.
3. 1 < 5? Tak, wykonaj. Wypisz 1. j staje się 2.
4. 2 < 5? Tak, wykonaj. Wypisz 2. j staje się 3.
5. 3 < 5? Tak, wykonaj. Wypisz 3. j staje się 4.
6. 4 < 5? Tak, wykonaj. Wypisz 4. j staje się 5.
7. 5 < 5? Nie (fałsz), pętla się kończy.
*/
```

**Ważne:** Zawsze upewnij się, że w pętli `while` masz mechanizm, który ostatecznie sprawi, że warunek stanie się fałszywy, inaczej pętla będzie działać w nieskończoność (tzw. "nieskończona pętla"), co zablokuje Twój program!

---

## Funkcje: Bloki Kodu do Wielokrotnego Użycia

Funkcje to jeden z najważniejszych elementów w programowaniu. Możesz myśleć o nich jak o małych, niezależnych "maszynkach" lub "przepisach", które wykonują konkretne zadanie. Zamiast powielać ten sam kod wiele razy, możesz zamknąć go w funkcji i po prostu "wywoływać" tę funkcję, gdy jej potrzebujesz.

### Po co nam funkcje?

- **Wielokrotne użycie kodu (reusability):** Napisz raz, używaj wiele razy.
- **Organizacja kodu:** Dzielenie dużego programu na mniejsze, zarządzalne fragmenty.
- **Czytelność:** Nazwy funkcji pomagają zrozumieć, co dany fragment kodu robi.
- **Łatwość debugowania i modyfikacji:** Jeśli zmienisz coś w funkcji, zmiany te będą obowiązywać wszędzie tam, gdzie funkcja jest używana.

### Deklaracja Funkcji: Klasyczny Sposób

Najpopularniejszy i najstarszy sposób deklarowania funkcji używa słowa kluczowego `function`.

```javascript
// Deklaracja funkcji o nazwie 'powitaj'
function powitaj() {
  // Kod wewnątrz funkcji, który zostanie wykonany, gdy funkcja zostanie wywołana
  console.log("Witaj w świecie JavaScript!");
}

// Wywołanie funkcji (sprawienie, aby się wykonała)
powitaj(); // Wypisze: "Witaj w świecie JavaScript!"

// Funkcja z argumentami (parametrami)
// Argumenty to wartości, które przekazujemy do funkcji, aby mogła na nich pracować.
function dodajDwieLiczby(liczba1, liczba2) {
  let suma = liczba1 + liczba2;
  console.log("Suma wynosi: " + suma);
}

dodajDwieLiczby(5, 7); // Wypisze: "Suma wynosi: 12"
dodajDwieLiczby(10, 20); // Wypisze: "Suma wynosi: 30"

// Funkcja zwracająca wartość (return)
// Słowo kluczowe 'return' pozwala funkcji "oddać" wynik swojej pracy.
// Dzięki temu możesz użyć wyniku funkcji w innych częściach kodu.
function pomnoz(a, b) {
  return a * b; // Funkcja zwraca iloczyn 'a' i 'b'
}

let wynikMnozenia = pomnoz(4, 6); // Wynik funkcji (24) jest przypisywany do zmiennej
console.log(wynikMnozenia); // Wypisze: 24

let koncowyWynik = pomnoz(wynikMnozenia, 2); // Możesz użyć wyniku funkcji jako argumentu dla innej
console.log(koncowyWynik); // Wypisze: 48
```

### Funkcje Strzałkowe (Arrow Functions): Nowoczesny Skrót

Funkcje strzałkowe to nowszy, bardziej zwięzły sposób pisania funkcji w JavaScript, wprowadzony w ES6. Są szczególnie przydatne do krótkich, jednowierszowych funkcji.

Ich składnia to: `(parametry) => { ciało funkcji }`

```javascript
// Przykład prostej funkcji strzałkowej
const przywitajSie = () => {
  console.log("Cześć!");
};
przywitajSie(); // Wypisze: "Cześć!"

// Funkcja strzałkowa z parametrami
const odejmij = (a, b) => {
  return a - b;
};
let roznica = odejmij(15, 8);
console.log(roznica); // Wypisze: 7

// Skrócona wersja funkcji strzałkowej (jeśli funkcja zwraca tylko jedną wartość)
// Gdy funkcja strzałkowa ma tylko jedną instrukcję, która jest instrukcją 'return',
// możesz pominąć nawiasy klamrowe `{}` i słowo kluczowe `return`.
const dodajSkrocona = (a, b) => a + b;
let sumaSkrocona = dodajSkrocona(2, 3);
console.log(sumaSkrocona); // Wypisze: 5

// Funkcja strzałkowa z jednym parametrem (nawiasy wokół parametru są opcjonalne)
const podwoj = (liczba) => liczba * 2;
let podwojonaLiczba = podwoj(7);
console.log(podwojonaLiczba); // Wypisze: 14
```

Funkcje strzałkowe są bardzo popularne w nowoczesnym JavaScript i będziesz je często widzieć w przykładach kodu. Ważne jest, aby zrozumieć oba sposoby deklarowania funkcji, ponieważ spotkasz się z nimi w różnych projektach.

---

## Obiekty: Skarbnice Powiązanych Informacji

Obiekty w JavaScript to potężne narzędzie do grupowania powiązanych ze sobą danych i funkcji. Pomyśl o obiekcie jak o **rzeczywistym przedmiocie lub koncepcji**, która ma swoje **właściwości** (cechy) i **zachowania** (co potrafi robić, czyli metody).

Na przykład, jeśli masz obiekt `samochod`, jego właściwościami mogą być `marka`, `model`, `rokProdukcji`, `kolor`, a zachowaniami (metodami) mogą być `uruchomSilnik()`, `zatrzymaj()`, `jedz()`.

W JavaScript obiekty tworzymy za pomocą nawiasów klamrowych `{}`. Wewnątrz nich definiujemy **pary klucz-wartość**, gdzie:

- **Klucz (lub nazwa właściwości):** Jest to unikalna nazwa, która opisuje daną informację (np. `imie`, `wiek`). Zazwyczaj jest to tekst (String).
- **Wartość:** Jest to rzeczywista dana przypisana do klucza (np. `"Jan"`, `30`). Może to być dowolny typ danych: liczba, tekst, wartość logiczna, inna tablica, inny obiekt, a nawet funkcja!

Jeśli wartość powiązana z kluczem jest funkcją, nazywamy ją **metodą** obiektu.

```javascript
// Tworzenie obiektu 'osoba'
let osoba = {
  // Właściwości (klucz: wartość)
  imie: "Anna",
  nazwisko: "Kowalska",
  wiek: 28,
  czyStudent: true,
  zainteresowania: ["czytanie", "sport", "gotowanie"], // Wartością może być tablica!

  // Metoda (klucz: funkcja) - opisująca zachowanie obiektu
  przedstawSie: function () {
    // Używamy `this.imie` i `this.nazwisko`, aby odwołać się do właściwości TEGO obiektu
    return `Cześć, nazywam się ${this.imie} ${this.nazwisko} i mam ${this.wiek} lat.`;
  },

  // Inna metoda, używająca funkcji strzałkowej
  opiszZainteresowania: () => {
    // Ważna uwaga: funkcje strzałkowe inaczej traktują 'this' w kontekście obiektów,
    // dlatego często do odwoływania się do właściwości obiektu w nich
    // używa się tradycyjnych funkcji lub bardziej zaawansowanych technik.
    // Na tym etapie, dla prostoty, użyjemy bezpośredniego odwołania,
    // lub tradycyjnej funkcji jak w 'przedstawSie'.
    // Dla klarowności na początku lepiej używać 'function() {}' jako metod.
    return `Moje zainteresowania to: ${osoba.zainteresowania.join(", ")}.`;
  },
};

// Dostęp do właściwości obiektu (dwa sposoby)
console.log(osoba.imie); // Notacja kropkowa (najczęściej używana) - Wypisze: Anna
console.log(osoba["wiek"]); // Notacja nawiasów kwadratowych (przydatna, gdy nazwa klucza jest w zmiennej) - Wypisze: 28

// Wywołanie metody obiektu
console.log(osoba.przedstawSie()); // Wypisze: "Cześć, nazywam się Anna Kowalska i mam 28 lat."
console.log(osoba.opiszZainteresowania()); // Wypisze: "Moje zainteresowania to: czytanie, sport, gotowanie."

// Zmiana wartości właściwości
osoba.wiek = 29;
console.log(osoba.wiek); // Wypisze: 29

// Dodawanie nowych właściwości
osoba.zawod = "Programista";
console.log(osoba.zawod); // Wypisze: Programista
```

Obiekty są fundamentalnym elementem JavaScript i stanowią podstawę do tworzenia bardziej złożonych aplikacji i struktur danych.

---

## Tablice: Uporządkowane Listy Danych

Tablice (`Array`) w JavaScript to specjalny rodzaj obiektu, który pozwala na przechowywanie **uporządkowanej listy wartości**. Pomyśl o tablicy jak o długiej liście zakupów, gdzie każdy element ma swoje miejsce i możesz się do niego odwołać po numerze.

Każdy element w tablicy ma swój **indeks**, czyli numer pozycji. Ważne jest, aby pamiętać, że **indeksy w JavaScript zawsze zaczynają się od 0!**

- Pierwszy element ma indeks `0`.
- Drugi element ma indeks `1`.
- Trzeci element ma indeks `2`, i tak dalej.

Tablice tworzymy za pomocą nawiasów kwadratowych `[]`.

```javascript
// Tworzenie prostej tablicy liczb
let liczby = [10, 20, 30, 40, 50];

// Dostęp do elementów tablicy za pomocą indeksu
console.log(liczby[0]); // Wypisze: 10 (pierwszy element)
console.log(liczby[2]); // Wypisze: 30 (trzeci element)
console.log(liczby[4]); // Wypisze: 50 (piąty element)

// Odczytanie długości tablicy (ile ma elementów) za pomocą właściwości `.length`
console.log(liczby.length); // Wypisze: 5

// Zmiana wartości elementu w tablicy
liczby[1] = 25; // Zmieniamy drugi element (o indeksie 1) z 20 na 25
console.log(liczby); // Wypisze: [10, 25, 30, 40, 50]

// Dodawanie elementów do tablicy
// `push()`: dodaje element na końcu tablicy
liczby.push(60);
console.log(liczby); // Wypisze: [10, 25, 30, 40, 50, 60]

// `unshift()`: dodaje element na początku tablicy
liczby.unshift(5);
console.log(liczby); // Wypisze: [5, 10, 25, 30, 40, 50, 60]

// Usuwanie elementów z tablicy
// `pop()`: usuwa ostatni element z tablicy i zwraca go
let usunietaLiczba = liczby.pop();
console.log(usunietaLiczba); // Wypisze: 60
console.log(liczby); // Wypisze: [5, 10, 25, 30, 40, 50]

// `shift()`: usuwa pierwszy element z tablicy i zwraca go
let usunietaPierwszaLiczba = liczby.shift();
console.log(usunietaPierwszaLiczba); // Wypisze: 5
console.log(liczby); // Wypisze: [10, 25, 30, 40, 50]

// Iterowanie (przechodzenie) przez elementy tablicy za pomocą pętli for
console.log("Elementy tablicy:");
for (let i = 0; i < liczby.length; i++) {
  console.log(`Element na indeksie ${i}: ${liczby[i]}`);
}
/*
Wypisze:
Element na indeksie 0: 10
Element na indeksie 1: 25
Element na indeksie 2: 30
Element na indeksie 3: 40
Element na indeksie 4: 50
*/
```

Tablice są niezwykle przydatne w JavaScript, ponieważ pozwalają na efektywne zarządzanie kolekcjami danych, co jest fundamentalne w większości aplikacji.

---

## Zadania do Wykonania: Sprawdź Swoje Umiejętności!

Teraz, gdy poznałeś/aś podstawy JavaScript, czas na trochę praktyki! Pamiętaj, że nauka programowania to przede wszystkim pisanie kodu. Spróbuj samodzielnie rozwiązać poniższe zadania, zanim zajrzysz do rozwiązań. To najlepszy sposób, aby utrwalić wiedzę.

### Zadanie 1: Iloczyn Dwóch Liczb

Napisz funkcję o nazwie `obliczIloczyn`, która przyjmuje **dwie liczby** jako argumenty (parametry) i **zwraca** ich iloczyn (czyli wynik mnożenia). Następnie wywołaj tę funkcję z dowolnymi dwoma liczbami i wypisz wynik w konsoli.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
// Rozwiązanie Zadania 1
function obliczIloczyn(liczbaA, liczbaB) {
  return liczbaA * liczbaB; // Funkcja zwraca iloczyn dwóch liczb
}

// Przykładowe użycie funkcji
let wynikZadania1 = obliczIloczyn(7, 8);
console.log(`Iloczyn liczb 7 i 8 wynosi: ${wynikZadania1}`); // Oczekiwany wynik: 56

let innyWynik = obliczIloczyn(12, 3);
console.log(`Iloczyn liczb 12 i 3 wynosi: ${innyWynik}`); // Oczekiwany wynik: 36
```

</details>

---

### Zadanie 2: Obiekt Książka

Utwórz obiekt JavaScript o nazwie `mojaksiazka`, który będzie reprezentował książkę. Obiekt ten powinien mieć następujące **właściwości**:

- `tytul` (typu String)
- `autor` (typu String)
- `rokWydania` (typu Number)

Dodatkowo, dodaj do tego obiektu **metodę** (funkcję w obiekcie) o nazwie `getOpis`, która **zwróci** tekst zawierający pełny opis książki, np.: "Książka 'W pustyni i w puszczy' napisana przez Henryka Sienkiewicza została wydana w roku 1911.". Następnie wywołaj tę metodę i wypisz jej wynik w konsoli.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
// Rozwiązanie Zadania 2
let mojaksiazka = {
  tytul: "Hobbit, czyli tam i z powrotem",
  autor: "J.R.R. Tolkien",
  rokWydania: 1937,

  // Metoda zwracająca opis książki
  getOpis: function () {
    return `Książka '${this.tytul}' napisana przez ${this.autor} została wydana w roku ${this.rokWydania}.`;
  },
};

// Wywołanie metody i wyświetlenie opisu w konsoli
console.log(mojaksiazka.getOpis());
// Oczekiwany wynik: Książka 'Hobbit, czyli tam i z powrotem' napisana przez J.R.R. Tolkien została wydana w roku 1937.
```

</details>

---

### Zadanie 3: Największa Liczba w Tablicy

Napisz funkcję o nazwie `znajdzNajwiekszaLiczbe`, która przyjmuje **tablicę liczb** jako argument i **zwraca największą liczbę** znajdującą się w tej tablicy. Użyj pętli `for` do przejrzenia wszystkich elementów tablicy.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
// Rozwiązanie Zadania 3
function znajdzNajwiekszaLiczbe(tablicaLiczb) {
  // Zakładamy, że pierwsza liczba jest największa, a potem ją porównujemy z resztą
  if (tablicaLiczb.length === 0) {
    return "Tablica jest pusta!"; // Obsługa pustej tablicy
  }

  let najwieksza = tablicaLiczb[0]; // Inicjujemy zmienną największa wartością pierwszego elementu

  // Pętla zaczyna się od drugiego elementu (indeks 1)
  for (let i = 1; i < tablicaLiczb.length; i++) {
    // Jeśli bieżący element jest większy niż dotychczasowa największa liczba
    if (tablicaLiczb[i] > najwieksza) {
      najwieksza = tablicaLiczb[i]; // Uaktualnij największą liczbę
    }
  }
  return najwieksza; // Zwróć znalezioną największą liczbę
}

// Przykładowe użycie funkcji
let liczby1 = [3, 8, 1, 10, 5];
console.log(
  `Największa liczba w [${liczby1}] to: ${znajdzNajwiekszaLiczbe(liczby1)}`
); // Oczekiwany wynik: 10

let liczby2 = [100, 20, 50, 90];
console.log(
  `Największa liczba w [${liczby2}] to: ${znajdzNajwiekszaLiczbe(liczby2)}`
); // Oczekiwany wynik: 100

let pustaTablica = [];
console.log(
  `Największa liczba w [${pustaTablica}] to: ${znajdzNajwiekszaLiczbe(
    pustaTablica
  )}`
); // Oczekiwany wynik: Tablica jest pusta!
```

</details>

---

### Zadanie 4: Wyświetlanie Imion

Utwórz tablicę o nazwie `listaImion`, która będzie zawierać co najmniej **cztery różne imiona** (jako teksty, czyli Stringi). Następnie, za pomocą **pętli `for`**, przejdź przez wszystkie elementy tej tablicy i **wyświetl każde imię osobno w konsoli**.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```javascript
// Rozwiązanie Zadania 4
let listaImion = ["Kamil", "Ewa", "Piotr", "Zofia", "Michał"];

console.log("Lista imion:");
// Pętla for do przechodzenia przez tablicę
for (let i = 0; i < listaImion.length; i++) {
  console.log(listaImion[i]); // Wypisujemy element o bieżącym indeksie 'i'
}
/*
Oczekiwane wyjście:
Lista imion:
Kamil
Ewa
Piotr
Zofia
Michał
*/
```

</details>

---

## Podsumowanie

To wszystko na temat podstaw JavaScript! Gratulacje, że dotarłeś/aś tak daleko. Pamiętaj, że nauka programowania to proces ciągły. Zachęcam Cię do:

- **Eksperymentowania** z kodem – zmieniaj wartości, dodawaj nowe linie, zobacz, co się stanie!
- **Tworzenia własnych funkcji, obiektów i małych aplikacji** – im więcej piszesz, tym lepiej rozumiesz.
- **Zgłębiania bardziej zaawansowanych tematów** – to dopiero początek Twojej podróży z JavaScriptem!

Co jest dla Ciebie najbardziej interesujące do nauki w JavaScript po tych podstawach?
