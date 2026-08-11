# PLAYWRIGHT TTA 2X

A small Playwright project using a custom TTA HTML reporter.

## Quick Start

- Install dependencies:

```bash
npm install
```

- Run a single test (headed):

```bash
npx playwright test tests/02_First_tests/231_First_Running_Verify.spec.ts --headed
```

- Open the latest Custom TTA report (Windows PowerShell):

```powershell
Get-ChildItem -Path 'tta-report' -Filter 'report_*.html' | Sort-Object LastWriteTime -Descending | Select-Object -First 1 | ForEach-Object { Start-Process $_.FullName }
```

Or (Git Bash):

```bash
latest=$(ls -t "tta-report"/report_*.html | head -n1); cmd.exe /C start "" "$latest"
```

## Notes
- Custom reporter: `utils/CustomReporter.ts` — generates `tta-report/report_<timestamp>.html` and attempts to open it after the run.
- Allure: `allure-playwright` is present but `allure-commandline` requires Java to run `allure serve`.
- Consider adding `tta-report/` to `.gitignore` to avoid committing large artifacts.

## Contact
Maintainer: Prashanth
# PLAYWRIGHT-TTA-2X

A sample Playwright end-to-end automation project built for the Playwright TTA 2x course.

## Project Contents

- `package.json` - npm dependencies and scripts
- `package-lock.json` - npm lockfile
- `playwright.config.ts` - Playwright configuration
- `tests/` - Playwright test suites and template files
- `.github/` - GitHub workflows and repository metadata
- `Jenkinsfile` - Jenkins pipeline for running tests

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Run tests

- Run all tests:
  ```bash
  npx playwright test
  ```
- Run a single spec in headed mode:
  ```bash
  npx playwright test tests/03_Locators_Commands/246_PressSeq.spec.ts --headed
  ```
- Run tests with one worker to reduce browser overlap:
  ```bash
  npx playwright test --workers=1 --headed
  ```

## Project Structure

- `tests/01_Basics/` - basic Playwright assertions and annotations
- `tests/02_First_tests/` - browser-context-page examples
- `tests/03_Locators_Commands/` - locator and command practice
- `tests/19_Advance_Framework/` - advanced framework scaffolding

## Notes

- `node_modules/` is excluded from source control.
- Use `npm install` to install dependencies, not `npm ci` if you want to keep local changes to package-lock updates.
- The repository includes a `Jenkinsfile` for CI automation.
