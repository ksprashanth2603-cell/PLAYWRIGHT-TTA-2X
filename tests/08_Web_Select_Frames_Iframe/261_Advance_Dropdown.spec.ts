import {test, expect} from '@playwright/test'

test('Single Search Example',async({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
await page.getByTestId('rs-single-input').click();
await page.getByTestId('rs-single-input').fill('Playwright');
await page.getByRole('option', { name : 'Playwright'}).click();
//await page.pause();

}
);

test('Multiple Selection', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
await page.getByTestId('rs-multi-input').click();
await page.getByRole('option', { name : 'Playwright'}).click();
await page.getByRole('option', { name : 'Pytest'}).click();
await page.keyboard.press("Escape");
//await page.pause();
}
);

test('Multiple Creatable and Select on the go- Type and Enter', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
await page.getByTestId('rs-creatable-input').click();

//New entries which is not in the list
await page.getByTestId('rs-creatable-input').fill('Perth');
await page.keyboard.press("Enter");
await page.getByTestId('rs-creatable-input').fill('Sydney');
await page.keyboard.press("Enter");

//Just selecting from the list
await page.getByRole('option', { name : 'api-testing'}).click();

await page.keyboard.press("Escape");
//await page.pause();
}
);

test('Group Selection', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
await page.getByTestId('rs-grouped-input').click();
await page.getByRole('option', { name : 'AWS'}).click();

//await page.pause();
}
);

test('Async- Nothing Upfront- Type and it will appear', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

await page.getByTestId('rs-async-input').click();
await page.getByTestId('rs-async-input').fill('ne');
//to make sure it contains New York
await expect(page.getByTestId('rs-async-menu')).toContainText('New York');
await page.getByRole('option', {name: 'New York'}).click();


await page.pause();
}
);
