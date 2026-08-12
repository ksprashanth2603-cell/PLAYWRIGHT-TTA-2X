import {test, expect} from '@playwright/test';

test('Toverify Login Page of Parctice assigment', async ({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.getByPlaceholder('student@thetestingacademy.com').fill('student@gmail.com');
    await page.getByPlaceholder('Password').fill('student');
    await page.waitForTimeout(3000);
    await page.getByRole('checkbox', { name: 'Remember Me' }).check();
    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    expect(page).toHaveURL(/#login-success/);
    await page.waitForTimeout(3000);
}
    );
