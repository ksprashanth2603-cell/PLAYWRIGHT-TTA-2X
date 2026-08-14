import {test, expect} from '@playwright/test';

test('To Verify the present of terminated employee details:Web Table Example', async ({page}) =>
{
await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('admin');
await page.getByRole('textbox', { name: 'Password' }).fill('Awesomeqa@4321');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/viewEmployeeList/);
await page.waitForTimeout(3000);

 await page.locator('.oxd-table-card')
 .filter({ hasText: 'Terminated' })
 .locator('.bi-trash')
 .click();


    await page.waitForTimeout(3000);
    //Easisest way to verify the table data
}
);