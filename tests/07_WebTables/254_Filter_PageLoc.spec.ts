import {test, expect} from '@playwright/test';

test('To identify forgot button using filter and has-text', async ({page}) =>
{

await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
await page.locator('.forgot-link').filter({ hasText: 'Forgotten Password'}).click();
//await Button.click();

//const button = await page.getByText('Privacy Policy').click();// This can also be used
const button = await page.locator('footer a').filter({ hasText: 'Privacy Policy' }).click();
//console.log(button);
//await page.pause();
await expect(page).toHaveURL(/#privacy-policy/);
}
);
