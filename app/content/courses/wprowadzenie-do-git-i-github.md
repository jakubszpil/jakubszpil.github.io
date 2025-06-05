---
title: "Wprowadzenie do Git i GitHub"
description: "Kompleksowy kurs wprowadzający do systemu kontroli wersji Git oraz platformy GitHub. Poznaj podstawowe pojęcia, komendy oraz narzędzia do pracy zespołowej i automatyzacji."
keywords:
  [
    "Git",
    "GitHub",
    "kontrola wersji",
    "repozytorium",
    "commit",
    "branch",
    "pull request",
    "CI/CD",
    "GitHub Actions",
    "GitHub Pages",
  ]
categories: ["git", "devops"]
createdAt: "2025-06-05"
---

Ten kurs to szybki i przystępny przewodnik po podstawach pracy z Gitem i GitHubem. Nauczysz się, czym jest kontrola wersji, poznasz kluczowe komendy oraz dowiesz się, jak pracować zespołowo nad kodem i publikować swoje projekty w internecie.

## Spis treści

1. [Czym jest system kontroli wersji?](#czym-jest-system-kontroli-wersji)
2. [Co to jest Git?](#co-to-jest-git)
3. [Repozytorium, branch, commit](#repozytorium-branch-commit)

   - [Co to jest repozytoriun?](#repozytorium)
   - [Co to jest branch/gałąź?](#branch-gałąź)
   - [Co to jest commit?](#commit)

4. [Fundamentalne komendy Git’a](#fundamentalne-komendy-gita-commit-checkout-pull-push-clone)
   - [`git clone`](#git-clone)
   - [`git checkout` oraz `git switch`](#git-checkout-oraz-git-switch)
   - [`git add`](#git-add)
   - [`git commit`](#git-commit)
   - [`git pull`](#git-pull)
   - [`git push`](#git-push)
   - [`git status`](#git-status)
   - [`git log`](#git-log)
5. [Czym jest Github? Przykładowe alternatywy](#czym-jest-github-przykładowe-alternatywy)
6. [Pull request - z czym to się je?](#pull-request---z-czym-to-się-je)
7. [Github actions - podstawy CI/CD](#github-actions---podstawy-cicd)
8. [Github pages - możliwość wystawienia naszej aplikacji na świat](#github-pages---możliwość-wystawienia-naszej-aplikacji-na-świat)

---

## Czym jest system kontroli wersji?

Wyobraź sobie, że pracujesz nad projektem i chcesz zachować każdą ważną wersję pliku. System kontroli wersji (VCS, czyli Version Control System) to narzędzie, które pozwala Ci śledzić wszystkie zmiany w projekcie, cofać się do wcześniejszych wersji oraz bezpiecznie współpracować z innymi.

**Dlaczego warto używać systemu kontroli wersji?**

- Masz pełną historię zmian w plikach.
- Możesz wrócić do każdej wcześniejszej wersji projektu.
- Pracujesz w zespole bez ryzyka nadpisania czyjejś pracy.
- Twój kod jest lepiej zorganizowany i bezpieczniejszy.

---

## Co to jest Git?

Git to najpopularniejszy system kontroli wersji na świecie. Został stworzony przez Linusa Torvaldsa (tego samego, który stworzył Linuksa). Git działa zarówno lokalnie na Twoim komputerze, jak i w chmurze (na serwerze).

**Co wyróżnia Gita?**

- Możesz pracować nad projektem nawet bez internetu.
- Zmiany są bezpieczne i łatwo wrócić do poprzednich wersji.
- Można tworzyć „gałęzie” (branches), by testować nowe pomysły bez psucia głównego projektu.

---

## Repozytorium, branch, commit

W tej części dokładniej przyjrzymy się tym trzem pojęciom – to podstawa pracy z Gitem!

### Repozytorium

Repozytorium (ang. repository) to miejsce, w którym przechowujesz cały swój projekt i jego historię.  
Może być lokalne (na Twoim komputerze) lub zdalne (np. na GitHubie).

**Co znajduje się w repozytorium?**

- Wszystkie pliki projektu (np. kody źródłowe, dokumentacja).
- Ukryty folder `.git` – to tam Git zapisuje całą historię zmian.
- Informacje o wszystkich commitach, gałęziach i tagach.

**Typowe operacje:**

- Tworzenie nowego repozytorium: `git init`
- Pobranie istniejącego repozytorium z internetu: `git clone <adres_repo>`

### Branch (gałąź)

Branch, czyli gałąź, pozwala Ci równolegle pracować nad różnymi funkcjonalnościami bez ryzyka, że popsujesz główny kod.  
Wyobraź sobie, że gałąź to alternatywny tor, na którym możesz wprowadzać zmiany i eksperymentować.

**Dlaczego warto używać gałęzi?**

- Możesz testować nowe funkcje bez wpływu na główną wersję projektu (najczęściej gałąź `main` lub `master`).
- Każdy członek zespołu może pracować na własnej gałęzi.
- Łatwo wycofać zmiany lub połączyć je z główną gałęzią (tzw. merge).

**Typowe operacje:**

- Tworzenie nowej gałęzi: `git branch <nazwa_gałęzi>`
- Przełączanie się na gałąź: `git checkout <nazwa_gałęzi>` (lub nowocześnie: `git switch <nazwa_gałęzi>`)
- Łączenie gałęzi: `git merge <nazwa_gałęzi>`

**Przykład:**

1. Masz projekt na gałęzi `main`.
2. Tworzysz gałąź `nowa-funkcja`, gdzie testujesz nową opcję.
3. Po przetestowaniu możesz połączyć (merge) gałąź `nowa-funkcja` z `main`.

### Commit

Commit to zapis zmian w projekcie wraz z krótkim opisem tego, co zostało zrobione.  
Możesz traktować je jak „punkty zapisu” – każdy commit to krok naprzód w historii projektu.

**Co warto wiedzieć o commitach?**

- Każdy commit ma unikalny identyfikator (hash).
- W opisie commita wpisujesz, co zostało zmienione (np. `Dodano menu na stronie głównej`).
- Możesz się cofnąć do dowolnego commita w historii projektu.

**Jak zrobić commit?**

1. Najpierw dodajesz pliki do „obszaru stage”:  
   `git add <plik>` lub `git add .` (wszystkie pliki)
2. Następnie zapisujesz zmiany:  
   `git commit -m "Opis zmian"`

**Przykład cyklu pracy:**

1. Zmieniasz plik w projekcie.
2. Dodajesz go do stage: `git add index.html`
3. Zapisujesz zmiany: `git commit -m "Poprawa nagłówka strony"`

---

## Fundamentalne komendy Git’a: commit, checkout, pull, push, clone

Poniżej znajdziesz szczegółowe opisy najważniejszych komend Git'a. Dowiesz się, po co każda z nich służy, jak jej używać i zobaczysz praktyczne przykłady.

### `git clone`

**Do czego służy?**  
Klonuje (kopiuje) istniejące repozytorium z internetu (np. z GitHuba) na Twój komputer.

**Jak używać?**

```bash
git clone https://github.com/uzytkownik/projekt.git
```

Po tej komendzie masz na swoim komputerze pełną kopię repozytorium – z całą historią zmian.

---

### `git checkout` oraz `git switch`

**Do czego służą?**  
Pozwalają przełączać się między różnymi gałęziami w projekcie lub cofać się do konkretnego commita.

**Jak używać?**

- Przełączenie na inną gałąź:
  ```bash
  git checkout nazwa_gałęzi
  # lub
  git switch nazwa_gałęzi
  ```
- Przełączenie do konkretnego commita (tryb tylko do odczytu):
  ```bash
  git checkout hash_commita
  ```

**Przykład:**  
Masz gałąź `main` i `nowa-funkcja`. Przełączasz się na drugą:

```bash
git switch nowa-funkcja
```

---

### `git add`

**Do czego służy?**  
Dodaje zmienione pliki do tzw. „staging area” – miejsca, gdzie przygotowujesz pliki do zapisania ich historią (commit).

**Jak używać?**

- Dodanie pojedynczego pliku:
  ```bash
  git add index.html
  ```
- Dodanie wszystkich zmodyfikowanych plików:
  ```bash
  git add .
  ```

**Przykład:**  
Po zmianie kilku plików, przygotuj je do commita:

```bash
git add index.html
git add style.css
```

---

### `git commit`

**Do czego służy?**  
Zapisuje wykonane zmiany w repozytorium z krótkim opisem.

**Jak używać?**

```bash
git commit -m "Opis zmian"
```

Opis powinien być krótki i mówić, co zostało zmienione.

**Przykład:**

```bash
git commit -m "Dodano sekcję kontakt na stronie"
```

---

### `git pull`

**Do czego służy?**  
Pobiera najnowsze zmiany z repozytorium zdalnego (np. z GitHuba) do Twojego lokalnego repozytorium i automatycznie je łączy.

**Jak używać?**

```bash
git pull
```

**Przykład:**  
Przed rozpoczęciem pracy zawsze warto pobrać zmiany innych osób:

```bash
git pull
```

---

### `git push`

**Do czego służy?**  
Wysyła Twoje lokalne zmiany (commity) do repozytorium zdalnego, aby inni mogli je zobaczyć i pobrać.

**Jak używać?**

```bash
git push
```

Możesz podać też nazwę zdalnego repozytorium i gałęzi, np.:

```bash
git push origin nowa-funkcja
```

**Przykład:**  
Po skończonej pracy i zapisaniu zmian (commit) wysyłasz je do GitHuba:

```bash
git push
```

---

### `git status`

**Do czego służy?**  
Pokazuje aktualny stan repozytorium: które pliki zostały zmienione, które są przygotowane do commita (w staging area), a które nie.

**Jak używać?**

```bash
git status
```

**Przykład:**  
Chcesz sprawdzić, co zmieniłeś przed commitem:

```bash
git status
```

---

### `git log`

**Do czego służy?**  
Pokazuje historię wszystkich commitów w repozytorium.

**Jak używać?**

```bash
git log
```

**Przykład:**  
Możesz przejrzeć listę zmian w projekcie wraz z datami i autorami:

```bash
git log
```

---

## Czym jest Github? Przykładowe alternatywy

GitHub to platforma internetowa, na której możesz trzymać swoje projekty oparte o Gita, dzielić się kodem i współpracować w grupie. To taki „Facebook dla programistów i kodu”.

**Inne popularne platformy:**

- GitLab
- Bitbucket
- Azure DevOps

---

## Pull request - z czym to się je?

Pull request (PR) to prośba, by Twoje zmiany w projekcie zostały zaakceptowane i połączone z główną wersją. Tworzysz PR, gdy chcesz, by ktoś sprawdził Twój kod – to część pracy zespołowej.

**Jak wygląda typowy proces PR?**

1. Tworzysz nową gałąź i wprowadzasz w niej zmiany.
2. Otwierasz pull request na GitHubie.
3. Inni sprawdzają Twój kod i mogą go komentować lub poprosić o poprawki.
4. Po akceptacji Twoje zmiany trafiają do głównej wersji projektu.

---

## Github actions - podstawy CI/CD

GitHub Actions pozwala zautomatyzować wiele zadań, np. testowanie, budowanie i wdrażanie aplikacji. Dzięki temu projekt jest lepiej przetestowany, a Ty masz mniej ręcznej pracy.

**Główne pojęcia:**

- **Workflow** – zestaw zadań, które GitHub może wykonać za Ciebie automatycznie (np. po każdym commicie).
- Wszystko konfiguruje się w plikach YAML w folderze `.github/workflows/`.

---

## Github pages - możliwość wystawienia naszej aplikacji na świat

GitHub Pages to darmowa opcja do publikowania stron internetowych lub portfolio prosto z Twojego repozytorium. Nie potrzebujesz własnego serwera!

**Jak to zrobić?**

1. Stwórz repozytorium z plikami strony (HTML, CSS, JS itp.).
2. W ustawieniach repozytorium włącz GitHub Pages.
3. Twoja strona pojawi się pod adresem:  
   `https://<twoja-nazwa-użytkownika>.github.io/<nazwa-repo>`

---

> To tylko wstęp – każdy temat można zgłębić szerzej z praktycznymi przykładami i ćwiczeniami!
