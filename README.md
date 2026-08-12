# PLAYWRIGHT TTA 2X

A Playwright test automation project using a custom TTA HTML reporter.

## Quick Start

- Install dependencies:

```bash
npm install
```

- Install Playwright browsers:

```bash
npx playwright install
```

- Run a single test (headed):

```bash
npx playwright test tests/02_First_tests/231_First_Running_Verify.spec.ts --headed
```

- Run a specific test file:

```bash
npx playwright test tests/20_Assignment_Practice/02_WebTable.spec.ts --headed
```

- Open the latest Custom TTA report (Windows PowerShell):

```powershell
Get-ChildItem -Path 'tta-report' -Filter 'report_*.html' | Sort-Object LastWriteTime -Descending | Select-Object -First 1 | ForEach-Object { Start-Process $_.FullName }
```

- Open the latest report from Git Bash:

```bash
latest=$(ls -t "tta-report"/report_*.html | head -n1)
cmd.exe /C start "" "$latest"
```

## Project Contents

- `package.json` - npm dependencies and scripts
- `package-lock.json` - npm lockfile
- `playwright.config.ts` - Playwright configuration and reporter setup
- `tests/` - Playwright test suites
- `utils/CustomReporter.ts` - custom TTA HTML reporter
- `tta-report/` - generated report output

## Notes

- The custom reporter generates HTML reports under `tta-report/report_<timestamp>.html`.
- `allure-playwright` is installed, but `allure-commandline` requires Java for `allure serve`.
- Consider adding `tta-report/` to `.gitignore` to avoid committing generated reports.

## Run Tests

- Run full suite:

```bash
npx playwright test
```

- Run a single spec:

```bash
npx playwright test tests/02_First_tests/231_First_Running_Verify.spec.ts
```

- Run with headed browser and one worker:

```bash
npx playwright test --headed --workers=1
```

## Contact

Maintainer: Prashanth
