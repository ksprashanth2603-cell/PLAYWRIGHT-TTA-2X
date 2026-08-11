import {test, expect} from '@playwright/test';

test('Verify to Store the data in Session Storage', async ({page})=>
{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('#userEmail').fill('ksprashanth2603@gmail.com');
await page.locator('#userPassword').fill('$Playwright1234');
await page.locator('#login').click();
await expect(page).toHaveURL(/dashboard/);

await page.context().storageState({ path: 'auth.json' });
}
);

