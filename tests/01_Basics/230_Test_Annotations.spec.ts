import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// Skip test
test.skip('skipped test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

// Focused test example (uncomment .only when debugging a single spec)
// test.only('focused test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
// });

test('focused test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// Mark as failing
test.fail('expected to fail', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/This title does not exist/);
});

// Slow test (3x timeout)
test.slow('slow test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
});

// Conditional skip
test('conditional', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Not supported in Firefox');
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
