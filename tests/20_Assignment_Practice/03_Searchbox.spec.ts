import {test,expect} from '@playwright/test';

test('To verify Search box function', async({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/webtable');
await page.getByPlaceholder('Search username, role, city, project...').pressSequentially('Priya Nair');
await expect(page.getByText('Priya Nair')).toBeVisible();
}
);
