import {test, expect} from '@playwright/test'

test('Custom dropDown Example', async ({page}) =>
{
await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
await page.getByTestId('lang-trigger').click();
await page.getByRole('option', { name: 'TypeScript' }).click();

await page.getByTestId('framework-trigger').click();
await page.getByRole('option', { name: 'React' }).click();

await page.getByTestId('experience-trigger').click();
await page.getByRole('option', { name: 'Senior (7+ years)' }).click();


await page.getByTestId('dropdown-save').click();


}
);