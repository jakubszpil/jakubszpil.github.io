---
title: "Wprowadzenie do SQL"
description: "Dowiedz się czym jest SQL, do czego służy, poznaj podstawowe polecenia i naucz się wykonywać pierwsze zapytania do bazy danych. Kurs praktyczny dla początkujących z wyjaśnieniami i przykładami."
keywords:
  [
    sql,
    baza danych,
    zapytania,
    select,
    insert,
    update,
    delete,
    wprowadzenie,
    praktyka,
    learning,
  ]
categories: [sql, bazy-danych]
createdAt: 2025-07-04
quiz:
  title: "Quiz: Podstawy SQL"
  questions:
    - question: "Czym jest SQL?"
      options:
        - "System operacyjny"
        - "Język programowania ogólnego przeznaczenia"
        - "Język zapytań do relacyjnych baz danych"
        - "Edytor tekstów"
      answer: 2
      explanation: "SQL (Structured Query Language) to język zapytań używany do komunikacji z relacyjnymi bazami danych."

    - question: "Jakie polecenie służy do pobierania danych z bazy?"
      options:
        - "FETCH"
        - "SELECT"
        - "REMOVE"
        - "GET"
      answer: 1
      explanation: "SELECT służy do pobierania (wybierania) danych z bazy."

    - question: "Które polecenie służy do wstawiania nowych rekordów?"
      options:
        - "UPDATE"
        - "INSERT"
        - "APPEND"
        - "ADD"
      answer: 1
      explanation: "INSERT INTO pozwala dodać nowe rekordy do tabeli."

    - question: "Jak usunąć dane z tabeli?"
      options:
        - "REMOVE"
        - "DROP"
        - "DELETE"
        - "ERASE"
      answer: 2
      explanation: "DELETE służy do usuwania rekordów z tabeli."

    - question: "Co oznacza WHERE w poleceniach SQL?"
      options:
        - "Tworzy nową tabelę"
        - "Określa warunek, który muszą spełnić wybrane rekordy"
        - "Zmienia nazwę bazy danych"
        - "Sortuje dane"
      answer: 1
      explanation: "WHERE zawęża operację do rekordów spełniających wskazany warunek."

    - question: "Co zrobi polecenie: SELECT * FROM Uzytkownicy WHERE wiek > 18?"
      options:
        - "Usunie użytkowników starszych niż 18 lat"
        - "Wyświetli wszystkich użytkowników starszych niż 18 lat"
        - "Doda użytkowników starszych niż 18 lat"
        - "Zaktualizuje wiek użytkowników"
      answer: 1
      explanation: "Wyświetli wszystkie rekordy, gdzie wiek jest większy niż 18."

    - question: "Czym jest klucz podstawowy (PRIMARY KEY) w tabeli?"
      options:
        - "Kolumna przechowująca wyłącznie tekst"
        - "Kolumna, która jednoznacznie identyfikuje każdy rekord w tabeli"
        - "Specjalny typ zapytania"
        - "Pole, które zawsze musi być puste"
      answer: 1
      explanation: "Klucz podstawowy to unikalny identyfikator rekordu w tabeli."

    - question: "Jaka jest różnica między DELETE a DROP?"
      options:
        - "DELETE usuwa rekordy z tabeli, DROP usuwa całą tabelę"
        - "DELETE tworzy kopię zapasową, DROP ją przywraca"
        - "DELETE sortuje dane, DROP je filtruje"
        - "Nie ma różnicy"
      answer: 0
      explanation: "DELETE usuwa pojedyncze rekordy, DROP usuwa całą tabelę lub bazę danych."

    - question: "Jak posortować wyniki według kolumny 'nazwisko' rosnąco?"
      options:
        - "ORDER BY nazwisko ASC"
        - "SORT nazwisko"
        - "GROUP BY nazwisko"
        - "SELECT nazwisko"
      answer: 0
      explanation: "ORDER BY nazwisko ASC sortuje rosnąco po kolumnie nazwisko."

    - question: "Jak ograniczyć liczbę zwracanych wyników do 10?"
      options:
        - "LIMIT 10"
        - "TOP 10"
        - "MAX 10"
        - "RANGE 10"
      answer: 0
      explanation: "LIMIT 10 ogranicza liczbę wyników do 10 (np. w MySQL, PostgreSQL)."
---

SQL (Structured Query Language) to język, który pozwala komunikować się z relacyjnymi bazami danych. Dzięki SQL możesz pobierać, dodawać, zmieniać i usuwać dane, a także zarządzać strukturą bazy. To jedno z najważniejszych narzędzi każdego, kto pracuje z danymi!

## Spis treści

1. [Czym jest SQL?](#czym-jest-sql)
2. [Do czego służy SQL?](#do-czego-służy-sql)
3. [Typowe zastosowania SQL](#typowe-zastosowania-sql)
4. [Podstawowe elementy składni SQL](#podstawowe-elementy-składni-sql)
5. [Podstawowe polecenia SQL (szczegółowo)](#podstawowe-polecenia-sql-szczegolowo)
   - [SELECT](#select)
   - [INSERT](#insert)
   - [UPDATE](#update)
   - [DELETE](#delete)
6. [Warunki i filtrowanie danych (WHERE)](#warunki-i-filtrowanie-danych-where)
7. [Sortowanie wyników (ORDER BY)](#sortowanie-wyników-order-by)
8. [Ograniczanie wyników (LIMIT)](#ograniczanie-wyników-limit)
9. [Tworzenie i modyfikacja tabel](#tworzenie-i-modyfikacja-tabel)
10. [Klucze i relacje](#klucze-i-relacje)
11. [Dobre praktyki w SQL](#dobre-praktyki-w-sql)
12. [Praktyczne zadania](#praktyczne-zadania)
13. [Podsumowanie](#podsumowanie)

---

## Czym jest SQL?

SQL (Structured Query Language) to standardowy język zapytań służący do pracy z relacyjnymi bazami danych (np. MySQL, PostgreSQL, SQLite, Oracle). Pozwala na:

- pobieranie danych (wyszukiwanie, filtrowanie, sortowanie),
- dodawanie i edycję informacji,
- usuwanie danych,
- zarządzanie strukturą bazy (tworzenie i modyfikacja tabel).

Jest wykorzystywany na całym świecie przez programistów, analityków, administratorów baz danych i naukowców danych.

---

## Do czego służy SQL?

- **Pobieranie danych** – m.in. wyświetlanie listy klientów, produktów, zamówień.
- **Wyszukiwanie i filtrowanie** – np. znajdź wszystkich użytkowników powyżej 18 lat.
- **Dodawanie nowych danych** – np. rejestracja nowego klienta.
- **Aktualizacja danych** – np. zmiana adresu e-mail lub stanu zamówienia.
- **Usuwanie danych** – np. usunięcie nieaktualnych rekordów.
- **Tworzenie i zmienianie struktury** – zakładanie nowych tabel, dodawanie kolumn.

---

## Typowe zastosowania SQL

- Systemy sklepów internetowych
- Systemy bankowości i finansów
- Zarządzanie zasobami przedsiębiorstw (ERP)
- Aplikacje społecznościowe
- Analiza i raportowanie danych (Business Intelligence, Data Science)
- Systemy rejestracji użytkowników i ich autoryzacja

---

## Podstawowe elementy składni SQL

- SQL nie rozróżnia wielkości liter (SELECT, select, Select są równoważne), ale zwykle używa się wielkich liter dla poleceń.
- Każde polecenie kończy się średnikiem (`;`).
- Nazwy tabel i kolumn są podawane bez cudzysłowów (chyba, że zawierają znaki specjalne).
- Łańcuchy znaków (teksty) zapisujemy w pojedynczych apostrofach, np. `'Jan'`.

---

## Podstawowe polecenia SQL (szczegółowo)

### SELECT

**Opis:** Służy do pobierania danych z jednej lub więcej tabel.

**Przykład:**

```sql
SELECT imie, nazwisko FROM Uzytkownicy WHERE wiek > 18;
```

**Wyjaśnienie składni:**

- `SELECT` – rozpoczyna zapytanie pobierające dane.
- `imie, nazwisko` – nazwy kolumn, które chcesz pobrać (możesz użyć `*`, by pobrać wszystkie).
- `FROM Uzytkownicy` – nazwa tabeli, z której pobierane są dane.
- `WHERE wiek > 18` – warunek wyboru (możesz go pominąć, by pobrać wszystkie rekordy).

---

### INSERT

**Opis:** Dodaje nowe rekordy do wybranej tabeli.

**Przykład:**

```sql
INSERT INTO Uzytkownicy (imie, nazwisko, wiek) VALUES ('Anna', 'Nowak', 25);
```

**Wyjaśnienie składni:**

- `INSERT INTO` – rozpoczyna polecenie dodania rekordu.
- `Uzytkownicy` – nazwa tabeli.
- `(imie, nazwisko, wiek)` – lista kolumn, do których będą przypisane wartości.
- `VALUES ('Anna', 'Nowak', 25)` – wartości przypisane odpowiednio do wskazanych kolumn.

---

### UPDATE

**Opis:** Zmienia dane w istniejących rekordach.

**Przykład:**

```sql
UPDATE Uzytkownicy SET wiek = 26 WHERE imie = 'Anna' AND nazwisko = 'Nowak';
```

**Wyjaśnienie składni:**

- `UPDATE Uzytkownicy` – wskazanie tabeli, w której chcesz zmienić dane.
- `SET wiek = 26` – określenie nowej wartości dla kolumny.
- `WHERE imie = 'Anna' AND nazwisko = 'Nowak'` – warunek, które rekordy mają zostać zmienione (bardzo ważne, by nie pominąć WHERE!).

---

### DELETE

**Opis:** Usuwa rekordy z wybranej tabeli.

**Przykład:**

```sql
DELETE FROM Uzytkownicy WHERE wiek < 18;
```

**Wyjaśnienie składni:**

- `DELETE FROM Uzytkownicy` – wskazanie tabeli, z której rekordy mają być usunięte.
- `WHERE wiek < 18` – warunek wyboru rekordów do usunięcia.

---

## Warunki i filtrowanie danych (WHERE)

**Opis:** WHERE pozwala określić, które rekordy mają zostać wybrane, zmienione lub usunięte.

**Przykład:**

```sql
SELECT * FROM Uzytkownicy WHERE miasto = 'Warszawa' AND wiek > 18;
```

- `miasto = 'Warszawa'` – wybiera tylko rekordy, gdzie miasto to Warszawa.
- `AND wiek > 18` – dodatkowy warunek: tylko osoby powyżej 18 roku życia.

Możliwe operatory:

- =, != (<>), >, <, >=, <=
- AND, OR, NOT
- LIKE (dopasowanie wzorca), IN (lista wartości), BETWEEN (zakres)

---

## Sortowanie wyników (ORDER BY)

**Opis:** Pozwala posortować wyniki według jednej lub więcej kolumn.

**Przykład:**

```sql
SELECT imie, nazwisko FROM Uzytkownicy ORDER BY nazwisko ASC, imie DESC;
```

- `ORDER BY nazwisko ASC` – posortuj alfabetycznie po nazwisku rosnąco
- `imie DESC` – jeśli nazwiska się powtarzają, sortuj po imieniu malejąco

---

## Ograniczanie wyników (LIMIT)

**Opis:** LIMIT służy do ograniczenia liczby zwracanych wyników.

**Przykład:**

```sql
SELECT * FROM Produkty ORDER BY cena DESC LIMIT 3;
```

- Wyświetli 3 najdroższe produkty.

---

## Tworzenie i modyfikacja tabel

**Tworzenie tabeli:**

```sql
CREATE TABLE Produkty (
  id INT PRIMARY KEY,
  nazwa VARCHAR(100),
  cena DECIMAL(10,2)
);
```

- `CREATE TABLE Produkty` – utwórz nową tabelę o nazwie Produkty.
- `id INT PRIMARY KEY` – kolumna "id" typu liczba całkowita, klucz główny (unikalny identyfikator).
- `nazwa VARCHAR(100)` – kolumna "nazwa" typu tekstowego o maks. długości 100 znaków.
- `cena DECIMAL(10,2)` – kolumna "cena" typu liczba zmiennoprzecinkowa (10 cyfr, w tym 2 po przecinku).

**Dodawanie kolumny:**

```sql
ALTER TABLE Produkty ADD COLUMN opis TEXT;
```

**Usuwanie tabeli:**

```sql
DROP TABLE Produkty;
```

---

## Klucze i relacje

- **Klucz podstawowy (PRIMARY KEY):** Unikalnie identyfikuje każdy rekord w tabeli (np. id).
- **Klucz obcy (FOREIGN KEY):** Tworzy powiązanie między dwiema tabelami.

**Przykład relacji:**

```sql
CREATE TABLE Zamowienia (
  id INT PRIMARY KEY,
  id_produktu INT,
  ilosc INT,
  FOREIGN KEY (id_produktu) REFERENCES Produkty(id)
);
```

- `id` – unikalny identyfikator zamówienia.
- `id_produktu` – odwołanie do kolumny "id" w tabeli Produkty.
- `FOREIGN KEY...` – definiuje powiązanie (relację) między tabelami.

---

## Dobre praktyki w SQL

- Zawsze używaj klauzuli WHERE, jeśli chcesz zmieniać lub usuwać tylko wybrane rekordy.
- Używaj czytelnych nazw tabel i kolumn.
- Twórz kopie zapasowe bazy przed poważnymi zmianami.
- Testuj zapytania SELECT przed wykonaniem UPDATE lub DELETE.
- Unikaj SELECT \* w dużych projektach – wybieraj konkretne kolumny.
- Dokumentuj nietypowe zapytania i modyfikacje struktury bazy.

---

## Praktyczne zadania

### Zadanie 1: Pobieranie danych

Wyświetl wszystkie dane z tabeli "Uzytkownicy".

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
SELECT * FROM Uzytkownicy;
```

</details>

---

### Zadanie 2: Wstawianie nowych rekordów

Dodaj nowego użytkownika o imieniu "Anna", nazwisku "Nowak" i wieku 25.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
INSERT INTO Uzytkownicy (imie, nazwisko, wiek) VALUES ('Anna', 'Nowak', 25);
```

</details>

---

### Zadanie 3: Filtrowanie danych

Wyświetl imiona i nazwiska użytkowników, którzy mają więcej niż 18 lat.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
SELECT imie, nazwisko FROM Uzytkownicy WHERE wiek > 18;
```

</details>

---

### Zadanie 4: Aktualizacja danych

Zmień wiek użytkownika "Anna Nowak" na 26.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
UPDATE Uzytkownicy SET wiek = 26 WHERE imie = 'Anna' AND nazwisko = 'Nowak';
```

</details>

---

### Zadanie 5: Usuwanie danych

Usuń wszystkich użytkowników o wieku poniżej 18 lat.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
DELETE FROM Uzytkownicy WHERE wiek < 18;
```

</details>

---

### Zadanie 6: Tworzenie tabeli

Utwórz tabelę "Produkty" z polami: id (liczba całkowita, klucz podstawowy), nazwa (tekst), cena (liczba zmiennoprzecinkowa).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
CREATE TABLE Produkty (
  id INT PRIMARY KEY,
  nazwa VARCHAR(100),
  cena DECIMAL(10,2)
);
```

</details>

---

### Zadanie 7: Relacja między tabelami

Utwórz tabelę "Zamowienia" zawierającą klucz obcy do "Produktów".

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
CREATE TABLE Zamowienia (
  id INT PRIMARY KEY,
  id_produktu INT,
  ilosc INT,
  FOREIGN KEY (id_produktu) REFERENCES Produkty(id)
);
```

</details>

---

### Zadanie 8: Sortowanie i ograniczanie wyników

Wyświetl 5 najstarszych użytkowników (imie, nazwisko, wiek).

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
SELECT imie, nazwisko, wiek FROM Uzytkownicy ORDER BY wiek DESC LIMIT 5;
```

</details>

---

### Zadanie 9: Łączenie warunków

Wyświetl wszystkich użytkowników z miasta "Warszawa" w wieku powyżej 18 lat.

<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>

```sql
SELECT * FROM Uzytkownicy WHERE miasto = 'Warszawa' AND wiek > 18;
```

</details>

---

## Podsumowanie

SQL to potężne i uniwersalne narzędzie do pracy z danymi w relacyjnych bazach danych. Pozwala efektywnie pobierać, modyfikować i zarządzać informacją. Warto poznać zarówno podstawy, jak i bardziej zaawansowane możliwości tego języka – to inwestycja, która przyda się w niemal każdej dziedzinie IT!
