import {test, expect} from '@playwright/test'
import { TIMEOUT } from 'node:dns';


//Find the person email id and country- Without Pagination
test('Pagination Example-In the First Page', async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    
    //For the person present in first page- Without Pagination

    const priyarow = await page.locator('#employees-tbody tr').filter({hasText: 'Priya Kapoor'});
    const email = await priyarow.locator('td[data-col="email"]').innerText();
    const country = await priyarow.locator('td[data-col="country"]').innerText();
    
    console.log(email,country);
    await page.waitForTimeout(5000);
}
);
    //For the person who we dont no where the name is present- Pagination concept

   test('Pagination Example -Multiple Pages', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country

    let name: string = "Camila Lopez";
    let row;
    while (true) {
        row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) {
            break;
        }

        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found!")
        await next.click();
    }

    const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();


    console.log(email, country);
    await page.waitForTimeout(9000);


});