# jakubszpil.github.io

Personal portfolio website for [Jakub Szpil](https://github.com/jakubszpil)

## 🚀 Features

- Modern React + TypeScript stack
- Modular monorepo structure (TurboRepo)
- Vite-powered fast builds
- Unit tests for UI and features
- Content-driven (articles, courses, projects)

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) (recommended: latest LTS)
- npm (comes with Node.js)

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jakubszpil/jakubszpil.github.io.git
   cd jakubszpil.github.io
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

Output: `/dist/client`

## 🧪 Run Tests

```bash
npm run test
```

Runs all unit tests for UI and features.

## 📁 Monorepo Structure

- `app/` – Main app, routes, UI, features
- `packages/feature-articles/` – Articles content & logic
- `packages/feature-courses/` – Courses content & logic
- `packages/feature-projects/` – Projects content & logic
- `packages/shared/` – Shared utilities
- `public/` – Static assets

## 📚 Learn More

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TurboRepo](https://turbo.build/)

## 👤 Author

**Jakub Szpil**  
[GitHub](https://github.com/jakubszpil)
