import { test, expect } from '@playwright/test';

test.skip('save authenticated session state', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://app.wingify.com/#login');
  await page.fill('#login-username', 'opg73@singleuseemail.site');
  await page.fill('#login-password', 'Wingify@4321');
  await page.click('#js-login-btn');

  const success = page.waitForURL(/#\/(dashboard|home)/, { timeout: 30000 }).then(() => true).catch(() => false);
  const failure = page
    .getByText('Your email, password, IP address or location did not match')
    .waitFor({ timeout: 30000 })
    .then(() => true)
    .catch(() => false);

  const [loginSucceeded, loginFailed] = await Promise.all([success, failure]);
  if (!loginSucceeded) {
    throw new Error(
      `Login did not complete. Page URL: ${page.url()} - failure message visible: ${loginFailed}`
    );
  }
  await expect(page).toHaveURL(/#\/(dashboard|home)/);

  await context.storageState({ path: './user-session.json' });
  console.log('Session saved to user-session.json ✅');
});
