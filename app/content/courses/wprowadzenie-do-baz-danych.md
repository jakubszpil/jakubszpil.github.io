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
categories: [wprowadzenie, sql, bazy-danych]
createdAt: 2025-07-05
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
5. [Podstawowe polecenia SQL](#podstawowe-polecenia-sql)
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

## Podstawowe polecenia SQL

### SELECT

Pobiera dane z bazy. Najważniejsze i najczęściej używane polecenie.

```sql
SELECT * FROM Uzytkownicy;
```

Wyświetli wszystkie kolumny i rekordy z tabeli Uzytkownicy.

Możesz wybrać tylko wybrane kolumny:

```sql
SELECT imie, nazwisko FROM Uzytkownicy;
```

---

### INSERT

Dodaje nowe rekordy do tabeli.

```sql
INSERT INTO Uzytkownicy (imie, nazwisko, wiek) VALUES ('Jan', 'Kowalski', 30);
```

---

### UPDATE

Zmienia dane w istniejących rekordach.

```sql
UPDATE Uzytkownicy SET wiek = 31 WHERE imie = 'Jan' AND nazwisko = 'Kowalski';
```

**Uwaga:** Bez WHERE zaktualizujesz wszystkie rekordy!

---

### DELETE

Usuwa rekordy z tabeli.

```sql
DELETE FROM Uzytkownicy WHERE wiek < 18;
```

**Uwaga:** Bez WHERE usunie wszystkie rekordy w tabeli!

---

## Warunki i filtrowanie danych (WHERE)

Pozwala określić, które rekordy mają być wybrane, zmienione lub usunięte.

```sql
SELECT * FROM Uzytkownicy WHERE wiek > 18;
```

Porównywanie tekstów:

```sql
SELECT * FROM Uzytkownicy WHERE imie = 'Anna';
```

Łączenie warunków:

```sql
SELECT * FROM Uzytkownicy WHERE wiek > 18 AND miasto = 'Warszawa';
```

---

## Sortowanie wyników (ORDER BY)

Sortuje wyniki według wybranej kolumny.

```sql
SELECT * FROM Uzytkownicy ORDER BY nazwisko ASC;
```

`ASC` – rosnąco (domyślnie), `DESC` – malejąco

---

## Ograniczanie wyników (LIMIT)

Ogranicza liczbę zwracanych rekordów.

```sql
SELECT * FROM Uzytkownicy LIMIT 10;
```

W niektórych bazach (np. MS SQL) zamiast LIMIT używa się `TOP`.

---

## Tworzenie i modyfikacja tabel

Tworzenie nowej tabeli:

```sql
CREATE TABLE Produkty (
  id INT PRIMARY KEY,
  nazwa VARCHAR(100),
  cena DECIMAL(10,2)
);
```

Dodawanie kolumny:

```sql
ALTER TABLE Produkty ADD COLUMN opis TEXT;
```

Usuwanie tabeli:

```sql
DROP TABLE Produkty;
```

---

## Klucze i relacje

- **Klucz podstawowy (PRIMARY KEY)** – unikalnie identyfikuje każdy rekord w tabeli (np. id).
- **Klucz obcy (FOREIGN KEY)** – wskazuje na powiązany rekord w innej tabeli, umożliwia powiązania między danymi.

Przykład relacji:

```sql
CREATE TABLE Zamowienia (
  id INT PRIMARY KEY,
  id_produktu INT,
  ilosc INT,
  FOREIGN KEY (id_produktu) REFERENCES Produkty(id)
);
```

---

## Dobre praktyki w SQL

- Zawsze używaj klauzuli WHERE, jeśli chcesz zmieniać lub usuwać tylko wybrane rekordy.
- Używaj nazw tabel i kolumn, które jasno opisują przechowywane dane.
- Regularnie twórz kopie zapasowe bazy.
- Testuj zapytania SELECT przed wykonaniem UPDATE lub DELETE.
- Unikaj gwiazdki (\*) w SELECT w dużych projektach – wybieraj konkretne kolumny.
- Dokumentuj nietypowe zapytania i modyfikacje struktury bazy.

---

## Praktyczne zadania

### Zadanie 1: Pobieranie danych

Wyświetl wszystkie dane z tabeli "Uzytkownicy".

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
SELECT * FROM Uzytkownicy;
```

</details>

---

### Zadanie 2: Wstawianie nowych rekordów

Dodaj nowego użytkownika o imieniu "Anna", nazwisku "Nowak" i wieku 25.

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
INSERT INTO Uzytkownicy (imie, nazwisko, wiek) VALUES ('Anna', 'Nowak', 25);
```

</details>

---

### Zadanie 3: Filtrowanie danych

Wyświetl imiona i nazwiska użytkowników, którzy mają więcej niż 18 lat.

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
SELECT imie, nazwisko FROM Uzytkownicy WHERE wiek > 18;
```

</details>

---

### Zadanie 4: Aktualizacja danych

Zmień wiek użytkownika "Anna Nowak" na 26.

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
UPDATE Uzytkownicy SET wiek = 26 WHERE imie = 'Anna' AND nazwisko = 'Nowak';
```

</details>

---

### Zadanie 5: Usuwanie danych

Usuń wszystkich użytkowników o wieku poniżej 18 lat.

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
DELETE FROM Uzytkownicy WHERE wiek < 18;
```

</details>

---

### Zadanie 6: Tworzenie tabeli

Utwórz tabelę "Produkty" z polami: id (liczba całkowita, klucz podstawowy), nazwa (tekst), cena (liczba zmiennoprzecinkowa).

<details>
  <summary>Pokaż rozwiązanie</summary>

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
  <summary>Pokaż rozwiązanie</summary>

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
  <summary>Pokaż rozwiązanie</summary>

```sql
SELECT imie, nazwisko, wiek FROM Uzytkownicy ORDER BY wiek DESC LIMIT 5;
```

</details>

---

### Zadanie 9: Łączenie warunków

Wyświetl wszystkich użytkowników z miasta "Warszawa" w wieku powyżej 18 lat.

<details>
  <summary>Pokaż rozwiązanie</summary>

```sql
SELECT * FROM Uzytkownicy WHERE miasto = 'Warszawa' AND wiek > 18;
```

</details>

---

## Podsumowanie

SQL to potężne i uniwersalne narzędzie do pracy z danymi w relacyjnych bazach danych. Pozwala efektywnie pobierać, modyfikować i zarządzać informacją. Warto poznać zarówno podstawy, jak i bardziej zaawansowane możliwości tego języka – to inwestycja, która przyda się w niemal każdej dziedzinie IT!
