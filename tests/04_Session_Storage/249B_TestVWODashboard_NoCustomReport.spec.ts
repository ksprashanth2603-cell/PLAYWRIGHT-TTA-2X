import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('To fetch the auth data from auth.json file and verify the dashboard page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard');
  // Locator declared separately from the assertion
  const signOutButton = page.getByRole('button', { name: 'Sign Out' });
  await expect(signOutButton).toBeVisible();

  await page.getByRole('button', { name: 'ORDERS' }).click();
  //await page.getByRole('button', { name: 'Delete' }).first().click();
});

test('To fetch the auth data from auth.json file and verify the cart page', async ({ page }) => 
{
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard');
  // Locator declared separately from the assertion
  const signOutButton = page.getByRole('button', { name: 'Sign Out' });
  await expect(signOutButton).toBeVisible();

 await page.locator('button[routerlink="/dashboard/cart"]').click();
  await expect(page.getByRole('heading', { name: /My Cart/ })).toBeVisible();
});

