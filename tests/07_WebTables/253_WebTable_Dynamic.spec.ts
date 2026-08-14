import {test, expect} from '@playwright/test';

test('To verify Dynamic WebTable in a page', async ({page})=>
{
 await page.goto('https://awesomeqa.com/webtable1.html');   
 const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(rowCount);

        for (let i = 0; i <= rowCount; i++) 
        {
            const rowData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}:`, rowData);
        }


/*const Row = await page.locator('.tsc_table_s13').filter({ hasText: 'China'}).locator('tr.odd').last().locator('td').nth(4).allInnerTexts();
console.log(Row);*/
}
);