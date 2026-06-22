---
name: testing
description: Project-local testing conventions for this repo. Use when adding, updating, debugging, or reviewing tests with Vitest, React Testing Library, happy-dom, route stubs, test fixtures, mocks, or observable behavior assertions.
---

# Testing

Use this skill for test changes in this repo.

## Test Stack

- Test runner: Vitest.
- UI testing: React Testing Library.
- DOM environment: happy-dom.
- Setup file: `setup-tests.ts`.
- Test include pattern: `app/**/*.test.{ts,tsx}`.

## Commands

- Run all tests: `npm run test`.
- Run CI-style tests: `npm run test:ci`.
- For focused work, prefer a targeted Vitest invocation when practical, then broaden if the change touches shared behavior.

## File Placement

- Put tests in nearby `__tests__` folders.
- Use `.test.ts` or `.test.tsx`.
- Reuse existing `test-fixtures.ts` files for domain data.
- Add or update fixtures when expected data shape changes.

## Route Tests

- Use `createRoutesStub` from `react-router` for route modules with loaders.
- Render the stub with `initialEntries` and `generatePath` for parameterized paths.
- Provide `HydrateFallback` when matching existing route test style.
- Await user-visible output with `screen.findBy...` before assertions that depend on loader completion.

## Mocking

- Mock domain `data-access` dependencies when testing route/component behavior in isolation.
- Mock child UI components when the parent contract is the important behavior.
- Use `vi.mocked(...)` for typed mocked modules.
- Reset or restore mocks in `afterEach` consistently with existing tests.

## Assertions

- Test observable behavior, rendered text, routing output, and component contracts.
- Avoid asserting class strings unless styling behavior is the feature under test.
- Avoid testing private implementation details.
- Cover missing data, category/filter branches, route params, and empty states when relevant.

## Maintenance

- Keep tests small and deterministic.
- When changing shared UI or data-access behavior, update the nearest focused tests first, then run broader tests.
