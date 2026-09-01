import { test, expect, Locator } from '@playwright/test';

test('Shadow dom example', async({page})=>
{

    //can be used as normal page handling 
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/shadow-dom');
    await page.getByTestId('card-account-email').fill('student@thetestingacademy.com');
    await page.getByTestId('card-account-password').fill('pw');
    await page.getByTestId('card-account-submit').click();
    await expect(page.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');

    //Or can be used as=> find the parent locator and use it as below<parent locator'counter-cart' in this case
        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');

        await page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await page.getByTestId('card-inside-password').fill('pramod@123');
        await page.getByTestId('card-inside-submit').click();


});

