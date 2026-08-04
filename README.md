# PLAYWRIGHT-TTA-2X

Playwright end-to-end test automation sample project.

## Project Contents

- `package.json` - npm dependencies and scripts
- `package-lock.json` - npm lockfile
- `playwright.config.ts` - Playwright configuration
- `tests/example.spec.ts` - sample Playwright test
- `.github/` - GitHub workflows or repository metadata

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```

## Notes

- `node_modules/` is excluded from source control.
- A `node_modules/.gitignore` file is included so the folder remains ignored if created locally.
