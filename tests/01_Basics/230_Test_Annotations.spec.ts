import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

// Skip test
test.skip('skipped test', async ({ page }) => {
    // This test is skipped
});

// Only run this test
test.skip('focused test', async ({ page }) => {// use test.only()
    // Only this test runs
});

// Mark as failing
/*test.fail('expected to fail', async ({ page }) => {
    // Test is expected to fail
});*/

// Slow test (3x timeout)
test.skip('slow test', async ({ page }) => {
    // Has extended timeout
});

// Conditional skip
test.skip('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});