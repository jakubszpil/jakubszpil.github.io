---
title: "Framework na 80 linii, czyli implementacja Signal API od zera"
description: "Dowiedz się, jak zaimplementować minimalistyczny system reaktywny (Signal API) w JavaScript/TypeScript w mniej niż 80 liniach kodu. Praktyczny przewodnik krok po kroku."
keywords:
  [
    signal,
    reactive,
    javascript,
    typescript,
    frontend,
    framework,
    kurs,
    architektura,
  ]
categories: [typescript]
createdAt: 2025-06-22
---

Dowiedz się, jak zbudować własny, minimalistyczny system reaktywny inspirowany Signal API – od koncepcji po gotowy kod.

## Spis treści

1. [Czym jest Signal API?](#czym-jest-signal-api)
2. [Po co nam sygnały?](#po-co-nam-sygnały)
3. [Podstawowe założenia architektury](#podstawowe-założenia-architektury)
4. [Implementacja Signal API](#implementacja-signal-api)
5. [Prosty przykład użycia](#prosty-przykład-użycia)
6. [Co dalej? Inspiracje i rozwijanie własnego frameworka](#co-dalej-inspiracje-i-rozwijanie-własnego-frameworka)

---

## Czym jest Signal API?

**Signal API** to nowoczesny sposób zarządzania stanem i propagowania zmian w aplikacjach frontendowych. Sygnał (Signal) to po prostu wartość, która jest obserwowalna – każda zmiana tej wartości automatycznie powiadamia powiązane fragmenty kodu, które mogą na nią zareagować (np. przerysować UI).

---

## Po co nam sygnały?

- Eliminują ręczną obsługę subskrypcji i odświeżania
- Upraszczają zarządzanie stanem i zależnościami
- Pozwalają na budowę bardzo wydajnych i przewidywalnych interfejsów

Mechanika sygnałów leży u podstaw takich rozwiązań jak SolidJS Signals, Preact Signals czy reactivity system w Vue.js.

---

## Podstawowe założenia architektury

1. **Signal**: funkcja przechowująca wartość i listę „tasków” (efektów) zależnych od tej wartości.
2. **effect**: funkcja, która wykona zadanie, reagując na zmiany sygnału.
3. **computed**: sygnał zależny, obliczany na podstawie innych sygnałów.
4. **Task i AbortSignal**: pozwalają bezpiecznie anulować zadania, gdy są już niepotrzebne.

---

## Implementacja Signal API

Poniżej znajdziesz kompletny kod implementacji minimalistycznego Signal API – w całości TypeScript, gotowy do użycia i dalszej rozbudowy!

```typescript
interface Task {
  (abortSignal: AbortSignal): void;
}

interface Signal<T> {
  (): T;
}

interface WritableSignal<T> extends Signal<T> {
  set(value: T): void;
  update(fn: (value: T) => T): void;
}

let currentTask: Task | null = null;
let currentAbortController: AbortController | null = null;

function runTask(task: Task) {
  if (currentAbortController) {
    currentAbortController.abort();
  }
  currentAbortController = new AbortController();
  task(currentAbortController.signal);
}

export function effect(task: Task): void {
  currentTask = task;
  runTask(task);
  currentTask = null;
}

export function signal<T>(setupOrValue: T | (() => T)): WritableSignal<T> {
  let tasks: Set<Task> = new Set();
  let currentValue: T;
  let currentValueSnapshot: string;
  let previousInitialValue: T;
  let previousInitialValueSnapshot: string;

  function callSetupOrValue() {
    if (setupOrValue instanceof Function) {
      return setupOrValue();
    }
    return setupOrValue;
  }

  function getValue() {
    const currentInitialValue = callSetupOrValue();
    const currentInitialValueSnapshot = JSON.stringify(currentInitialValue);

    if (currentInitialValueSnapshot !== previousInitialValueSnapshot) {
      previousInitialValueSnapshot = currentInitialValueSnapshot;
      previousInitialValue = currentInitialValue;
      currentValue = currentInitialValue;
      currentValueSnapshot = JSON.stringify(currentInitialValue);
    }

    return currentValue;
  }

  const signal: WritableSignal<T> = () => {
    if (currentTask) tasks.add(currentTask);
    return getValue();
  };

  function updateValue(value: T): void {
    if (currentValueSnapshot === JSON.stringify(value)) return;
    currentValue = value;
    currentValueSnapshot = JSON.stringify(value);
    tasks.forEach((task) => runTask(task));
  }

  signal.set = (value) => updateValue(value);

  signal.update = (setter) => updateValue(setter(getValue()));

  return signal;
}

export const computed = <T>(setup: () => T): Signal<T> => setup;
```

---

## Prosty przykład użycia

Zobacz, jak można wykorzystać własny system sygnałów w praktyce:

```typescript
import { signal, effect } from "./lib";

const count = signal(0);

effect(() => {
  console.log("Wartość licznika:", count());
});

count.set(1); // Wartość licznika: 1
count.update((v) => v + 5); // Wartość licznika: 6
```

### signal z obiektem

```typescript
import { signal, effect } from "./lib";

interface User {
  id: number;
  name: string;
}

interface State {
  users: Array<User>;
}

const state = signal<State>({
  users: [],
});

effect(() => {
  console.log("Wartość stanu aplikacji: ", JSON.stringify(state()));
});

state.set({ users: [{ id: 1, name: "Kuba" }] }); // Wartość stanu aplikacji:  {"users":[{"id":1,"name":"Kuba"}]}

state.update((prev) => ({
  ...prev,
  users: [...prev.users, { id: 2, name: "Ola" }],
})); // Wartość stanu aplikacji:  {"users":[{"id":1,"name":"Kuba"},{"id":2,"name":"Ola"}]}
```

### computed

Obliczanie wartości zależnej od innych sygnałów jest bardzo proste:

```typescript
import { signal, effect, computed } from "./lib";

const a = signal(2);
const b = signal(3);
const sum = computed(() => a() + b());

effect(() => {
  console.log("Suma:", sum());
});

a.set(10); // Suma: 13
b.set(20); // Suma: 30
```

---

## Co dalej? Inspiracje i rozwijanie własnego frameworka

- Dodaj obsługę efektów czyszczących (cleanup) i anulowanie subskrypcji
- Przenieś sygnały na poziom UI (np. zaktualizuj DOM bezpośrednio po zmianie wartości)
- Zintegruj z React, Vue lub własnym mini-frameworkiem
- Zainspiruj się kodem SolidJS, Preact Signals i systemem reaktywnym Vue

> Minimalizm daje moc! Teraz możesz zrozumieć, jak działają sygnały pod maską i rozbudować swój własny system reaktywności według potrzeb.
