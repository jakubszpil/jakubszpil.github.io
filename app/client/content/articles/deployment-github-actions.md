---
title: "Proste deployowanie przy użyciu GitHub Actions"
description: "Dowiedz się, jak wdrożyć dowolną aplikację za pomocą GitHub Actions w prosty i automatyczny sposób."
keywords: [react, github actions, deployment, CI/CD, automatyzacja]
categories: [devops, ci]
createdAt: 2025-03-15
---

## Wprowadzenie

GitHub Actions to potężne narzędzie do automatyzacji procesów CI/CD. W tym artykule pokażę Ci, na przykładznie aplikacji reactowej, jak w prosty sposób wdrożyć aplikację na GitHub Pages przy użyciu GitHub Actions.

## Wymagania wstępne

- Konto na GitHubie
- Zainstalowany Node.js i npm
- Aplikacja React utworzona przy pomocy `create-react-router`

## Tworzenie aplikacji

Jeśli nie masz jeszcze aplikacji, możesz utworzyć ją w następujący sposób:

```sh
npx create-react-router@latest my-app
cd my-app
git init
git remote add origin https://github.com/twoj-user/twoj-repo.git
```

## Konfiguracja pliku workflow

W repozytorium GitHub utwórz folder `.github/workflows`, a w nim plik `deploy.yml`.

### Treść pliku `deploy.yml`

```yaml
# Nazwa pipeline'a - będzie się ona wyświetlać podczas trwającej akcji
name: Deploy React App to GitHub Pages

# Triggery - ten pipeline będzie się triggerował za każdym razem gdy:
# - wystąpi push do brancha `main`
# - powstanie pull_request
on:
  pull_request:
  push:
    branches:
      - main

# Permissiony - ustawienie to jest konieczne, by skrypt od deployowania aplikacji poprawnie działał
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # Checkout'owanie repozytorium by mieć do kodu źródłowego
      - name: Checkout repo
        uses: actions/checkout@v4

      # Instalowanie zależności potrzebnych projektowi
      - name: Install dependencies
        run: npm install

      # Budowanie aplikacji
      - name: Build project
        run: npm run build

      # Opcjonalnie - testowanie aplikacji
      # - name: Test project
      #   run: npm run test

      - name: Deploy to GitHub Pages
        # przydatny skrypt do deployowania aplikacji na wskazany branch
        # dokumentacja: https://github.com/JamesIves/github-pages-deploy-action
        uses: JamesIves/github-pages-deploy-action@v4
        # Warunek ten sprawia, że deployowanie aplikacji będzie miało miejsce jedynie w przypadku pusha do brancha `main`
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        with:
          # Nazwa brancha, z którego serwis GitHub Pages korzysta do deployowania aplikacji na środowisko
          branch: gh-pages
          # Nazwa folderu ze zbudowaną aplikacją w wersji produkcyjnej
          folder: build
```

## Konfiguracja GitHub Pages

1. Wejdź w ustawienia repozytorium (`Settings` → `Pages`).
2. W sekcji "Build and deployment" ustaw "Source" na `GitHub Actions`.
3. Po zatwierdzeniu zmian aplikacja zostanie automatycznie wdrożona.

## Podsumowanie

Dzięki GitHub Actions możesz w pełni zautomatyzować deployment'u aplikacji React. Wystarczy commit na branchu `main`, a aplikacja zostanie automatycznie wdrożona na GitHub Pages.

## Bonus

Chcesz zobaczyć jak ja to mam zaimplementowane? [Zajrzyj tutaj](https://github.com/jakubszpil/jakubszpil.github.io/blob/main/.github/workflows/deploy.yml)
