import {test, expect} from '@playwright/test';

test('Example for getByRole', async ({ page }) => 
{
await page.goto('https://katalon-demo-cura.herokuapp.com/');
await page.getByRole('link', { name: 'Make Appointment' }).click();
expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
await page.waitForTimeout(3000);
}
);
