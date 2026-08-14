# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts >> Verify how to handle webtables using XPath
- Location: tests\07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts:7:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('.tsc_table_s13').filter({ hasText: 'China' }).locator('.tr').nth(4)

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  |    // First of all, go to the link of the web table, 
  4  |     // find the correct Helen banquet, 
  5  |     // and then use a for loop to find the following siblings of the Helen banquet and print them in the console.
  6  | 
  7  | test('Verify how to handle webtables using XPath', async({page}) =>
  8  | {
  9  | await page.goto('https://awesomeqa.com/webtable.html');
  10 | 
> 11 | const Row = await page.locator('.tsc_table_s13').filter({ hasText: 'China'}).locator('.tr').nth(4).textContent();
     |                                                                                                    ^ Error: locator.textContent: Target page, context or browser has been closed
  12 | console.log(Row);
  13 | /* await page.locator('.oxd-table-card')
  14 |     .filter({ hasText: 'Terminated' })
  15 |     .locator('.bi-trash')
  16 |     .click();*/    
  17 | 
  18 | ////table[@id="customers"]/tbody/tr[5]/td[2]
  19 | /*
  20 | const firstPart = '//table[@id="customers"]/tbody/tr[';
  21 | const secondPart = ']/td[';
  22 | const thirdPart = ']';
  23 | 
  24 | const allRows = await page.locator('//table[@id="customers"]/tbody/tr').count();
  25 | const allCols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
  26 | 
  27 | 
  28 | for (let i=2; i<=allRows; i++)
  29 |  {
  30 |     for (let j=1; j<=allCols; j++)
  31 |     {
  32 |   const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`; 
  33 |   //console.log(dynamicXpath);
  34 |   const cellData = await page.locator(dynamicXpath).allInnerTexts();
  35 |   //console.log(cellData);
  36 | 
  37 |   if (cellData.includes("Helen Bennett"))
  38 |   {
  39 |     const countryPath = `${dynamicXpath}/following-sibling::td`;
  40 |     const countryData = await page.locator(countryPath).allInnerTexts();
  41 |     
  42 |     console.log('===========================================');
  43 |     console.log(`Country of Helen Bennett is ${countryData}`);
  44 |     console.log('===========================================');
  45 |   }
  46 | 
  47 | 
  48 | 
  49 |     }
  50 |  } */
  51 | }
  52 | );
  53 | 
  54 | 
```