---
title: "Zaawansowane zapytania SQL"
description: "Poznaj techniki budowania bardziej złożonych zapytań SQL. Naucz się korzystać z JOIN, agregacji, podzapytań, funkcji i zaawansowanych operacji na danych. Praktyczny przewodnik po zaawansowanym SQL z przykładami i szczegółowymi wyjaśnieniami."
keywords:
  [
    sql,
    join,
    group by,
    having,
    podzapytania,
    agregacja,
    zaawansowane zapytania,
    wyjaśnienia,
    praktyka,
    learning,
  ]
categories: [sql, bazy-danych]
createdAt: 2025-07-05
quiz:
  title: "Quiz: Zaawansowane zapytania SQL"
  questions:
    - question: "Do czego służy polecenie JOIN?"
      options:
        - "Do tworzenia nowych tabel"
        - "Do pobierania danych z kilku tabel powiązanych relacjami"
        - "Do usuwania danych"
        - "Do sortowania wyników"
      answer: 1
      explanation: "JOIN pozwala łączyć dane z kilku tabel na podstawie relacji."

    - question: "Czym różni się INNER JOIN od LEFT JOIN?"
      options:
        - "INNER JOIN zwraca tylko pasujące rekordy, LEFT JOIN zwraca też te bez dopasowania z lewej tabeli"
        - "LEFT JOIN zawsze łączy wszystkie rekordy obu tabel"
        - "Nie ma różnicy"
        - "INNER JOIN sortuje dane"
      answer: 0
      explanation: "INNER JOIN zwraca tylko pasujące rekordy, LEFT JOIN także te z lewej tabeli bez dopasowania."

    - question: "Jakie polecenie agreguje dane według zadanej kolumny?"
      options:
        - "ORDER BY"
        - "GROUP BY"
        - "JOIN"
        - "UNION"
      answer: 1
      explanation: "GROUP BY grupuje dane według wybranej kolumny."

    - question: "Czym jest podzapytanie (subquery)?"
      options:
        - "Zapytaniem wewnątrz innego zapytania"
        - "Kolejną tabelą"
        - "Sortowaniem wyników"
        - "Funkcją matematyczną"
      answer: 0
      explanation: "Podzapytanie to zapytanie zagnieżdżone w innym zapytaniu SQL."

    - question: "Do czego służy HAVING?"
      options:
        - "Do filtrowania całej tabeli"
        - "Do filtrowania grup po agregacji (po GROUP BY)"
        - "Do zmiany struktury tabeli"
        - "Do łączenia tabel"
      answer: 1
      explanation: "HAVING filtruje wyniki po agregacji i grupowaniu."
---

SQL pozwala nie tylko pobierać i modyfikować proste dane, ale również realizować bardzo złożone analizy, łączyć wiele tabel, grupować, sumować i filtrować rekordy na różne sposoby. Poznaj zaawansowane techniki, które otworzą przed Tobą nowe możliwości!  
W tym kursie znajdziesz nie tylko przykłady, ale także szczegółowe wyjaśnienia, co robi każda komenda i jak działa składnia.

## Spis treści

1. [Łączenie tabel (JOIN)](#łączenie-tabel-join)
   - [Czym jest JOIN i po co go używać?](#czym-jest-join-i-po-co-go-używać)
   - [INNER JOIN](#inner-join)
   - [LEFT JOIN, RIGHT JOIN, FULL JOIN](#left-join-right-join-full-join)
   - [Samozłączenia (SELF JOIN)](#samozłączenia-self-join)
2. [Agregacje i grupowanie danych](#agregacje-i-grupowanie-danych)
   - [GROUP BY](#group-by)
   - [Funkcje agregujące](#funkcje-agregujące)
   - [HAVING](#having)
3. [Podzapytania (subqueries)](#podzapytania-subqueries)
   - [Podzapytania w SELECT](#podzapytania-w-select)
   - [Podzapytania w WHERE i HAVING](#podzapytania-w-where-i-having)
   - [Podzapytania skorelowane](#podzapytania-skorelowane)
4. [Operacje na zbiorach (UNION, INTERSECT, EXCEPT)](#operacje-na-zbiorach-union-intersect-except)
5. [Funkcje wbudowane w SQL](#funkcje-wbudowane-w-sql)
   - [Funkcje tekstowe](#funkcje-tekstowe)
   - [Funkcje daty i czasu](#funkcje-daty-i-czasu)
   - [Funkcje warunkowe](#funkcje-warunkowe)
6. [Widoki (VIEW) i ich zastosowania](#widoki-view-i-ich-zastosowania)
7. [Praktyczne zadania](#praktyczne-zadania)
8. [Podsumowanie](#podsumowanie)

---

## Łączenie tabel (JOIN)

### Czym jest JOIN i po co go używać?

JOIN pozwala połączyć dane z kilku tabel w jednym zapytaniu – jest to niezbędne, jeśli chcesz łączyć informacje rozdzielone na logiczne części (np. dane klienta i jego zamówienia).  
Bez JOIN musiałbyś pisać wiele zapytań lub duplikować dane w jednej tabeli.

---

### INNER JOIN

**Opis:**  
Zwraca tylko te rekordy, które mają dopasowanie w obu łączonych tabelach (czyli tylko pasujące pary).

**Składnia:**

```sql
SELECT tabela1.kolumnaA, tabela2.kolumnaB
FROM tabela1
INNER JOIN tabela2 ON tabela1.klucz = tabela2.klucz_obcy;
```

- `INNER JOIN` – typ złączenia.
- `ON tabela1.klucz = tabela2.klucz_obcy` – warunek, określający, które rekordy mają być połączone.

**Przykład:**

```sql
SELECT Klient.imie, Zamowienie.data
FROM Klient
INNER JOIN Zamowienie ON Klient.id = Zamowienie.klient_id;
```

**Wyjaśnienie:**  
Pobierz imię klienta oraz datę jego zamówienia. Rekord zostanie zwrócony tylko, jeśli klient ma zamówienia.

---

### LEFT JOIN, RIGHT JOIN, FULL JOIN

#### LEFT JOIN

**Opis:**  
Zwraca wszystkie rekordy z lewej tabeli oraz dopasowania z prawej, a jeśli ich nie ma – wstawia NULL.

**Składnia:**

```sql
SELECT Klient.imie, Zamowienie.data
FROM Klient
LEFT JOIN Zamowienie ON Klient.id = Zamowienie.klient_id;
```

**Wyjaśnienie:**  
Zwraca wszystkich klientów, niezależnie czy mają zamówienia. Jeśli nie mają, w kolumnie `data` pojawi się NULL.

#### RIGHT JOIN

**Opis:**  
Działa jak LEFT JOIN, ale odwrotnie – zwraca wszystkie rekordy z prawej tabeli.

#### FULL JOIN

**Opis:**  
Zwraca wszystkie rekordy z obu tabel, dopasowane lub nie.

**Przykład porównania wyników:**

| Klient.imie | Zamowienie.data |
| ----------- | --------------- |
| Jan         | 2025-01-01      |
| Anna        | NULL            |

---

### Samozłączenia (SELF JOIN)

Czasem trzeba połączyć tabelę samą z sobą (np. struktura przełożonych i pracowników).

**Przykład:**

```sql
SELECT A.imie AS pracownik, B.imie AS przelozony
FROM Pracownik A
LEFT JOIN Pracownik B ON A.przelozony_id = B.id;
```

**Wyjaśnienie:**  
Każdy pracownik ma przełożonego – łączymy tabelę Pracownik z samą sobą, by uzyskać imię szefa.

---

## Agregacje i grupowanie danych

### GROUP BY

**Opis:**  
GROUP BY służy do grupowania rekordów wg wskazanej kolumny, np. pokazania liczby zamówień dla każdego klienta.

**Składnia:**

```sql
SELECT kolumna_grupujaca, funkcja_agregujaca(kolumna)
FROM tabela
GROUP BY kolumna_grupujaca;
```

**Przykład:**

```sql
SELECT miasto, COUNT(*) AS liczba_klientow
FROM Klient
GROUP BY miasto;
```

**Wyjaśnienie:**  
Zlicz ilu klientów pochodzi z każdego miasta.

---

### Funkcje agregujące

- `COUNT(*)` – zlicza wszystkie rekordy w grupie.
- `SUM(kolumna)` – suma wartości z danej kolumny.
- `AVG(kolumna)` – średnia wartość.
- `MIN(kolumna)` / `MAX(kolumna)` – najmniejsza/największa wartość.

**Przykład:**

```sql
SELECT produkt_id, SUM(ilosc) AS sprzedano
FROM Zamowienie_Produkt
GROUP BY produkt_id;
```

**Wyjaśnienie:**  
Ile sztuk każdego produktu sprzedano w sumie?

---

### HAVING

**Opis:**  
HAVING filtruje wyniki po agregacji (po GROUP BY), czego nie można zrobić za pomocą WHERE.

**Przykład:**

```sql
SELECT miasto, COUNT(*) AS liczba
FROM Klient
GROUP BY miasto
HAVING COUNT(*) > 5;
```

**Wyjaśnienie:**  
Wyświetl tylko te miasta, w których liczba klientów jest większa niż 5.

---

## Podzapytania (subqueries)

Podzapytanie to zapytanie SQL „wewnątrz” innego zapytania.

---

### Podzapytania w SELECT

**Opis:**  
Możesz użyć podzapytania, by wyliczyć wartość dla każdego rekordu.

**Przykład:**

```sql
SELECT imie,
  (SELECT COUNT(*) FROM Zamowienie WHERE Zamowienie.klient_id = Klient.id) AS liczba_zamowien
FROM Klient;
```

**Wyjaśnienie:**  
Pobierz imię klienta i liczbę jego zamówień – dla każdego klienta osobno liczymy zamówienia.

---

### Podzapytania w WHERE i HAVING

**Opis:**  
Podzapytania mogą służyć jako warunek wyboru rekordów.

**Przykład:**

```sql
SELECT imie FROM Klient
WHERE id IN (SELECT klient_id FROM Zamowienie WHERE data > '2025-01-01');
```

**Wyjaśnienie:**  
Wyświetl tylko klientów, którzy złożyli zamówienie po 1 stycznia 2025.

---

### Podzapytania skorelowane

**Opis:**  
Podzapytanie odwołuje się do wartości z zewnętrznego zapytania.

**Przykład:**

```sql
SELECT imie
FROM Klient k
WHERE EXISTS (
  SELECT 1 FROM Zamowienie z WHERE z.klient_id = k.id AND z.data > '2025-01-01'
);
```

**Wyjaśnienie:**  
Sprawdzamy dla każdego klienta, czy istnieje zamówienie po podanej dacie.

---

## Operacje na zbiorach (UNION, INTERSECT, EXCEPT)

- **UNION:** łączy wyniki wielu zapytań, eliminując duplikaty.
- **UNION ALL:** jak UNION, ale zachowuje duplikaty.
- **INTERSECT:** zwraca wspólne rekordy.
- **EXCEPT:** zwraca rekordy z pierwszego zapytania, których nie ma w drugim.

**Przykład:**

```sql
SELECT imie FROM Klient
UNION
SELECT imie FROM Pracownik;
```

**Wyjaśnienie:**  
Pobierz listę wszystkich imion – zarówno klientów, jak i pracowników (bez powtórzeń).

---

## Funkcje wbudowane w SQL

### Funkcje tekstowe

- `LOWER(tekst)` – zamienia tekst na małe litery.
- `UPPER(tekst)` – na wielkie litery.
- `CONCAT(a, b)` – łączy teksty.
- `SUBSTRING(tekst, start, długość)` – wycina fragment tekstu.
- `LENGTH(tekst)` – długość tekstu.

**Przykład:**

```sql
SELECT CONCAT(imie, ' ', nazwisko) AS pelne_imie FROM Klient;
```

**Wyjaśnienie:**  
Tworzy pełne imię i nazwisko klienta.

---

### Funkcje daty i czasu

- `NOW()` – aktualna data i czas.
- `DATE()` – wydobywa datę z pola daty/czasu.
- `YEAR(data)` – wyciąga rok z daty.

**Przykład:**

```sql
SELECT imie, YEAR(data_urodzenia) AS rok_urodzenia FROM Klient;
```

**Wyjaśnienie:**  
Wyświetla imię klienta i rok jego urodzenia.

---

### Funkcje warunkowe

- `CASE WHEN ... THEN ... ELSE ... END` – pozwala warunkowo zmieniać wartości.

**Przykład:**

```sql
SELECT imie,
  CASE
    WHEN wiek < 18 THEN 'niepełnoletni'
    ELSE 'pełnoletni'
  END AS status
FROM Klient;
```

**Wyjaśnienie:**  
Dla każdego klienta określa status na podstawie wieku.

---

## Widoki (VIEW) i ich zastosowania

**Opis:**  
Widok (VIEW) to „wirtualna tabela” będąca wynikiem zapytania. Widoki upraszczają kod, mogą ukrywać złożoność i zabezpieczać dane.

**Tworzenie widoku:**

```sql
CREATE VIEW Klienci_aktywni AS
SELECT * FROM Klient WHERE aktywny = 1;
```

**Wyjaśnienie:**  
Tworzymy widok z aktywnymi klientami. Potem używamy go jak zwykłej tabeli:

```sql
SELECT * FROM Klienci_aktywni;
```

---

## Praktyczne zadania

### Zadanie 1: Złączenia

Pobierz imię klienta oraz datę każdego jego zamówienia.

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
SELECT Klient.imie, Zamowienie.data
FROM Klient
INNER JOIN Zamowienie ON Klient.id = Zamowienie.klient_id;
```

**Wyjaśnienie:**  
Łączymy tabelę Klient z Zamówienie po kluczu głównym Klient.id i kluczu obcym Zamowienie.klient_id.

</details>

---

### Zadanie 2: Agregacja

Wyświetl liczbę zamówień złożonych przez każdego klienta.

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
SELECT Klient.imie, COUNT(Zamowienie.id) AS liczba_zamowien
FROM Klient
LEFT JOIN Zamowienie ON Klient.id = Zamowienie.klient_id
GROUP BY Klient.imie;
```

**Wyjaśnienie:**  
Łączymy tabele i grupujemy po imieniu klienta. LEFT JOIN pozwala pokazać także tych, którzy nie mają zamówień (liczba_zamowien = 0).

</details>

---

### Zadanie 3: Podzapytanie

Wyświetl produkty zamówione przez klientów z miasta "Warszawa".

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
SELECT Produkt.nazwa
FROM Produkt
INNER JOIN Zamowienie_Produkt ON Produkt.id = Zamowienie_Produkt.produkt_id
INNER JOIN Zamowienie ON Zamowienie_Produkt.zamowienie_id = Zamowienie.id
INNER JOIN Klient ON Zamowienie.klient_id = Klient.id
WHERE Klient.miasto = 'Warszawa';
```

**Wyjaśnienie:**  
Łączymy cztery tabele, by uzyskać produkty z zamówień klientów z Warszawy.

</details>

---

### Zadanie 4: Operacje na zbiorach

Wyświetl imiona osób będących zarówno klientami, jak i pracownikami.

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
SELECT imie FROM Klient
INTERSECT
SELECT imie FROM Pracownik;
```

**Wyjaśnienie:**  
INTERSECT zwraca tylko te imiona, które są jednocześnie w obu tabelach.

</details>

---

### Zadanie 5: Widoki

Stwórz widok prezentujący tylko klientów, którzy mają więcej niż 2 zamówienia.

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
CREATE VIEW Klienci_czesto_zamawiajacy AS
SELECT Klient.id, Klient.imie
FROM Klient
JOIN Zamowienie ON Klient.id = Zamowienie.klient_id
GROUP BY Klient.id, Klient.imie
HAVING COUNT(Zamowienie.id) > 2;
```

**Wyjaśnienie:**  
Widok zawiera tylko tych klientów, którzy mają więcej niż dwa zamówienia (dzięki HAVING).

</details>

---

### Zadanie 6: Funkcje tekstowe i warunkowe

Wyświetl imię i status pełnoletności każdego klienta (pełnoletni/niepełnoletni), imię wypisz wielkimi literami.

<details>
  <summary>Pokaż rozwiązanie i wyjaśnienie</summary>

```sql
SELECT UPPER(imie) AS imie,
  CASE WHEN wiek < 18 THEN 'niepełnoletni' ELSE 'pełnoletni' END AS status
FROM Klient;
```

**Wyjaśnienie:**  
UPPER konwertuje imię na wielkie litery, CASE określa status na podstawie wieku.

</details>

---

## Podsumowanie

Zaawansowane zapytania SQL pozwalają na efektywną analizę i przetwarzanie dużych zbiorów danych. Łączenie tabel, agregacje, podzapytania i widoki otwierają szerokie możliwości analityczne i raportowe. Szczegółowe zrozumienie składni i działania każdej komendy to klucz do budowania profesjonalnych rozwiązań bazodanowych!
