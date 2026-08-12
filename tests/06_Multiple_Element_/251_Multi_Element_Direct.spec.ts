import {test, expect} from '@playwright/test';

test('To verify Mutiple Elements directly withoiut using loop in a page', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
await page.getByTestId('forgotten-password-link').click();
//await page.getByText('Forgotten Password').click(); //Cant use getByText() and getByRole() as they are not unique locators for the element in the page. So we can use getByTestId() which is unique for the element in the page.
await page.waitForTimeout(3000);
}
   );

