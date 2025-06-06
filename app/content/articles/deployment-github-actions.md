---
title: "Proste deployowanie przy użyciu GitHub Actions"
description: "Dowiedz się, jak wdrożyć dowolną aplikację za pomocą GitHub Actions w prosty i automatyczny sposób."
keywords: [react, github actions, deployment, CI/CD, automatyzacja]
categories: [devops, ci]
createdAt: 2025-03-15
---

GitHub Actions to potężne narzędzie do automatyzacji procesów CI/CD. W tym artykule na przykładzie aplikacji React pokażę, jak w prosty sposób skonfigurować automatyczne wdrażanie na GitHub Pages z wykorzystaniem GitHub Actions.

---

## Spis treści

1. [Wprowadzenie](#wprowadzenie)
2. [Wymagania wstępne](#wymagania-wstępne)
3. [Tworzenie aplikacji React](#tworzenie-aplikacji-react)
4. [Konfiguracja workflow GitHub Actions](#konfiguracja-workflow-github-actions)
   - [Przykładowy plik deploy.yml](#przykładowy-plik-deployyml)
   - [Omówienie kroków workflow](#omówienie-kroków-workflow)
5. [Konfiguracja GitHub Pages](#konfiguracja-github-pages)
6. [Podsumowanie](#podsumowanie)
7. [Bonus: Pełny przykład w repozytorium](#bonus-pełny-przykład-w-repozytorium)

---

## Wprowadzenie

GitHub Actions umożliwia automatyzację procesów związanych z budowaniem, testowaniem i wdrażaniem aplikacji. Dzięki temu możesz wdrażać swoją aplikację na GitHub Pages lub inny hosting jednym commitem – bez ręcznego wykonywania deployu.

---

## Wymagania wstępne

Przed rozpoczęciem upewnij się, że posiadasz:

- Konto na GitHubie,
- Zainstalowany Node.js oraz npm,
- Aplikację React utworzoną przez `create-react-app` lub `create-react-router` (w przykładzie użyto tego drugiego).

---

## Tworzenie aplikacji React

Nie masz jeszcze projektu? Oto jak szybko utworzyć aplikację React:

```sh
npx create-react-router@latest my-app
cd my-app
git init
git remote add origin https://github.com/twoj-user/twoj-repo.git
```

> **Uwaga:** Zmień `twoj-user` i `twoj-repo` na nazwę swojego użytkownika i repozytorium na GitHubie.

---

## Konfiguracja workflow GitHub Actions

Aby wdrożyć aplikację na GitHub Pages automatycznie, utwórz w repozytorium folder `.github/workflows`, a w nim plik `deploy.yml`.

### Przykładowy plik deploy.yml

```yaml
name: Deploy React App to GitHub Pages

on:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      # - name: Test project
      #   run: npm run test

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        with:
          branch: gh-pages
          folder: build
```

### Omówienie kroków workflow

- **Trigger**: Workflow uruchamia się na każdy `push` do brancha `main` oraz przy `pull_request`.
- **Uprawnienia**: `permissions: contents: write` jest niezbędne do wykonania zapisu na branchu z GitHub Pages.
- **Kroki:**
  1. **Checkout repo** – pobranie kodu źródłowego.
  2. **Install dependencies** – instalacja zależności npm.
  3. **Build project** – budowanie aplikacji produkcyjnej.
  4. _(Opcjonalnie)_ **Test project** – uruchomienie testów jednostkowych.
  5. **Deploy to GitHub Pages** – automatyczny deploy do gałęzi `gh-pages` przy użyciu [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action).

---

## Konfiguracja GitHub Pages

Aby GitHub Pages korzystało ze zdeployowanej aplikacji:

1. Wejdź w ustawienia repozytorium: **Settings** → **Pages**.
2. W sekcji **Build and deployment** ustaw **Source** na `GitHub Actions`.
3. Zapisz zmiany. Od teraz każda zmiana na branchu `main` uruchomi automatyczny deploy.

---

## Podsumowanie

GitHub Actions pozwala w pełni zautomatyzować proces wdrażania aplikacji React na GitHub Pages. Wystarczy commit na branchu `main`, a całość zostanie zbudowana i opublikowana bez Twojej ingerencji.

---

## Bonus: Pełny przykład w repozytorium

Chcesz zobaczyć kompletną konfigurację w praktyce?  
[Zajrzyj tutaj](https://github.com/jakubszpil/jakubszpil.github.io/blob/main/.github/workflows/deploy.yml)
