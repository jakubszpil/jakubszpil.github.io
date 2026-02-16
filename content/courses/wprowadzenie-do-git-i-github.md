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
    "learning",
  ]
category: git
createdAt: 2025-06-05
quiz:
  title: "Quiz: Podstawy Git i GitHub"
  questions:
    - question: "Co oznacza skrót VCS?"
      options:
        - "Virtual Clone Service"
        - "Version Control System"
        - "Verified Commit Syntax"
        - "Versioned Coding System"
      answer: 1
      explanation: "VCS to Version Control System, czyli system kontroli wersji."

    - question: "Co robi polecenie 'git clone'?"
      options:
        - "Tworzy nową gałąź"
        - "Pobiera całe repozytorium zdalne na lokalny komputer"
        - "Łączy zmiany z innego repozytorium"
        - "Zatwierdza zmiany do historii"
      answer: 1
      explanation: "'git clone' kopiuje całe repozytorium wraz z historią na Twój komputer."

    - question: "Czym jest commit w Gicie?"
      options:
        - "Nowa gałąź"
        - "Zdalne repozytorium"
        - "Automatyczne pobieranie zmian"
        - "Zapis zmian w repozytorium z opisem"
      answer: 3
      explanation: "Commit to zapis zmian, który trafia do historii projektu i ma komentarz."

    - question: "Jak nazywa się prośba o połączenie zmian na GitHubie?"
      options:
        - "Merge commit"
        - "Pull request"
        - "Push request"
        - "Branch request"
      answer: 1
      explanation: "Pull request to prośba o połączenie zmian z inną gałęzią."

    - question: "Która platforma NIE jest alternatywą dla GitHub?"
      options:
        - "GitLab"
        - "Bitbucket"
        - "Stack Overflow"
        - "Azure DevOps"
      answer: 2
      explanation: "Stack Overflow to portal Q&A, nie platforma hostingu repozytoriów."
---

Witaj w świecie **Git i GitHub**! 🚀 Jeśli chcesz profesjonalnie zarządzać swoimi projektami kodowania, współpracować z innymi programistami i śledzić każdą zmianę, to trafiłeś/aś idealnie. Ten kurs to Twój przystępny przewodnik, który wprowadzi Cię w podstawy kontroli wersji, kluczowe komendy Git oraz możliwości, jakie oferuje platforma GitHub. Gotowy/a na nową, efektywną pracę z kodem? Zaczynajmy! ✨

## Spis treści

1. [Czym jest system kontroli wersji?](#czym-jest-system-kontroli-wersji)
2. [Co to jest Git?](#co-to-jest-git)
3. [Repozytorium, branch, commit](#repozytorium-branch-commit)
   - [Co to jest repozytorium?](#repozytorium)
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

System kontroli wersji (VCS, czyli **Version Control System**) to narzędzie, które umożliwia śledzenie wszystkich zmian w projekcie, cofanie się do wcześniejszych wersji oraz bezpieczną współpracę z innymi osobami. Pozwala na zarządzanie historią plików i ułatwia organizację pracy nad kodem. To jak cofanie w czasie dla Twojego projektu! ⏳

**Dlaczego warto używać systemu kontroli wersji?** 🎯

- Pełna historia zmian w plikach.
- Możliwość powrotu do dowolnej wersji projektu. 🔙
- Praca zespołowa bez ryzyka nadpisania czyjejś pracy. 🤝
- Lepsza organizacja i bezpieczeństwo kodu. 🛡️

---

## Co to jest Git?

Git to najpopularniejszy system kontroli wersji na świecie, stworzony przez Linusa Torvaldsa (twórcę Linuksa). Pozwala na pracę zarówno lokalną na komputerze, jak i w chmurze, zapewniając bezpieczeństwo i elastyczność zarządzania projektem. To Twój osobisty "strażnik" kodu. 🧑‍💻

**Co wyróżnia Gita?** 🏆

- Możliwość pracy offline.
- Łatwe cofanie się do poprzednich wersji. ↩️
- Wsparcie dla **gałęzi (branches)**, dzięki którym można testować nowe pomysły bez wpływu na główną wersję projektu. 🌱

---

## Repozytorium, branch, commit

Te trzy pojęcia są podstawą pracy z Gitem i GitHubem. Zrozumienie ich znaczenia i działania pozwala sprawnie korzystać z systemu kontroli wersji. To fundamenty, na których zbudujesz swoją wiedzę. 🏗️

### Repozytorium

**Repozytorium** (ang. repository) to miejsce przechowywania całego projektu wraz z historią zmian. Może być lokalne (na komputerze) lub zdalne (np. na GitHubie). Pomyśl o nim jak o sejfie na Twój kod. 🔐

**Co znajduje się w repozytorium?**

- Pliki projektu (kody źródłowe, dokumentacja) 📄
- Ukryty folder `.git` z historią zmian
- Informacje o commitach, gałęziach i tagach

**Typowe operacje:** 🛠️

- Tworzenie nowego repozytorium: `git init`
- Pobranie repozytorium z internetu: `git clone <adres_repo>`

### Branch (gałąź)

**Gałąź** pozwala pracować nad różnymi funkcjonalnościami równolegle. Dzięki gałęziom możesz eksperymentować i rozwijać nowe funkcje bez wpływu na główną wersję kodu. To jak równoległe wymiary dla Twojego projektu. 🌳

**Dlaczego warto używać gałęzi?**

- Testowanie nowych funkcji bez ryzyka dla głównej wersji projektu (zazwyczaj gałąź `main` lub `master`). 🧪
- Każdy członek zespołu może pracować na własnej gałęzi. 🧑‍🤝‍🧑
- Możliwość łączenia (**merge**) zmian z różnych gałęzi.

**Typowe operacje:** 🌿

- Tworzenie gałęzi: `git branch <nazwa_gałęzi>`
- Przełączanie się na gałąź: `git checkout <nazwa_gałęzi>` lub `git switch <nazwa_gałęzi>`
- Łączenie gałęzi: `git merge <nazwa_gałęzi>`

### Commit

**Commit** to zapis zmian w projekcie wraz z opisem. Każdy commit jest jak punkt kontrolny w historii projektu. To Twój cyfrowy "snapshot" postępów. 📸

**Cechy commitów:**

- Każdy commit ma unikalny identyfikator (**hash**).
- Opis commita powinien informować o dokonanych zmianach. 💬
- Możliwość powrotu do dowolnego commita.

**Tworzenie commita:** 💾

1.  Dodanie plików do obszaru staging:
    `git add <plik>` lub `git add .`
2.  Zapisanie zmian:
    `git commit -m "Opis zmian"`

---

## Fundamentalne komendy Git’a: commit, checkout, pull, push, clone

Poniżej znajdują się szczegółowe opisy najważniejszych komend Git'a wraz z zastosowaniem i przykładami. Przy każdej znajdziesz praktyczną instrukcję użycia. To Twój niezbędnik programisty! 📖

### `git clone`

Klonuje istniejące repozytorium z internetu na komputer. Dzięki temu masz lokalną kopię projektu, nad którą możesz pracować. 📥

```bash
git clone https://github.com/uzytkownik/projekt.git
```

Po tej komendzie otrzymujesz pełną kopię repozytorium z całą historią zmian.

---

### `git checkout` oraz `git switch`

Służą do przełączania się między gałęziami lub do konkretnego commita. Pozwalają na łatwe poruszanie się po różnych wersjach projektu. ↔️

- Przełączenie na inną gałąź:
  ```bash
  git checkout nazwa_gałęzi
  # lub
  git switch nazwa_gałęzi
  ```
- Przełączenie do konkretnego commita (tylko do odczytu):
  ```bash
  git checkout hash_commita
  ```

---

### `git add`

Dodaje zmienione pliki do obszaru staging, przygotowując je do commita. To jakbyś pakował/a pliki do paczki przed wysłaniem. 📦

- Dodanie pojedynczego pliku:
  ```bash
  git add index.html
  ```
- Dodanie wszystkich plików:
  ```bash
  git add .
  ```

---

### `git commit`

Zapisuje zmiany w repozytorium wraz z opisem. To "zatwierdzenie" Twoich zmian w historii projektu. ✅

```bash
git commit -m "Opis zmian"
```

Opis powinien być zwięzły i informować, co zostało zmienione. Pamiętaj o dobrych praktykach pisania commit messages! 📝

---

### `git pull`

Pobiera najnowsze zmiany z repozytorium zdalnego do lokalnego i automatycznie je łączy. Zawsze używaj tej komendy przed rozpoczęciem pracy, aby mieć najaktualniejszą wersję! ⬇️⬆️

```bash
git pull
```

---

### `git push`

Wysyła lokalne zmiany (commity) do repozytorium zdalnego. Dzielisz się swoją pracą ze światem (lub z zespołem). 📤

```bash
git push
```

Możesz również wskazać nazwę zdalnego repozytorium i gałęzi:

```bash
git push origin nowa-funkcja
```

---

### `git status`

Pokazuje aktualny stan repozytorium: które pliki zostały zmienione, które są przygotowane do commita, a które nie. To Twój szybki podgląd sytuacji. 📊

```bash
git status
```

---

### `git log`

Pokazuje historię wszystkich commitów w repozytorium. Możesz zobaczyć, kto, kiedy i co zmieniał. 📜

```bash
git log
```

---

## Czym jest Github? Przykładowe alternatywy

GitHub to platforma umożliwiająca przechowywanie projektów opartych o Git, dzielenie się kodem i współpracę w zespole. Umożliwia zarządzanie projektami, recenzowanie kodu i automatyzację procesów. To swoisty "hub" dla programistów i projektów open source. Bez wątpienia to najpopularniejsza platforma, ale są też inne. 🌐

**Inne popularne platformy:**

- GitLab
- Bitbucket
- Azure DevOps

---

## Pull request - z czym to się je?

**Pull request (PR)** to prośba o akceptację i połączenie Twoich zmian z główną wersją projektu. Jest to podstawowy element pracy zespołowej na GitHubie, pozwalający na recenzowanie kodu i dyskusję przed włączeniem zmian. To Twoja prośba o "wpuszczenie" zmian do głównej linii rozwoju. 🙏

**Proces pull request:** 👥

1.  Tworzysz nową gałąź i wprowadzasz w niej zmiany. ✏️
2.  Otwierasz pull request na GitHubie.
3.  Inni członkowie zespołu sprawdzają kod i mogą komentować lub zgłaszać poprawki. 💬
4.  Po akceptacji zmiany są łączone z główną gałęzią projektu. 🤝

---

## Github actions - podstawy CI/CD

GitHub Actions to narzędzie do automatyzacji zadań takich jak testowanie, budowanie i wdrażanie aplikacji. Pozwala tworzyć workflowy, które wykonują się automatycznie po spełnieniu określonych warunków (np. po każdym commicie). To Twój osobisty robot do zadań specjalnych! 🤖

**Główne pojęcia:** ⚙️

- **Workflow** - zestaw zadań wykonywanych automatycznie.
- Konfiguracja w plikach YAML w folderze `.github/workflows/`.

---

## Github pages - możliwość wystawienia naszej aplikacji na świat

GitHub Pages umożliwia publikowanie stron internetowych lub portfolio bez konieczności posiadania własnego serwera. Strona jest dostępna online bezpośrednio z repozytorium, co jest idealne dla projektów open source, dokumentacji czy portfolio dewelopera. Pokaż swój projekt światu! 🌍

**Jak to zrobić?** 🚀

1.  Utwórz repozytorium z plikami strony (HTML, CSS, JS).
2.  W ustawieniach repozytorium aktywuj GitHub Pages.
3.  Strona będzie dostępna pod adresem:
    `https://<twoja-nazwa-użytkownika>.github.io/<nazwa-repo>`

---

To tylko wstęp - każdy z tych tematów można rozwinąć o praktyczne przykłady i ćwiczenia, które pozwolą lepiej zrozumieć narzędzia i procesy pracy z Git oraz GitHubem. Czy masz konkretne pytania dotyczące któregoś z tych aspektów, które chciałbyś/chciałabyś zgłębić? 🤔
