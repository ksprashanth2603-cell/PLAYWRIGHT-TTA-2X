# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts >> Verify how to handle webtables using XPath
- Location: tests\07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.tsc_table_s13').filter({ hasText: 'China' }).locator('.tr').nth(4)

```

# Page snapshot

```yaml
- table "Sample Table" [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Structure" [ref=e5]
      - columnheader "Country" [ref=e6]
      - columnheader "City" [ref=e7]
      - columnheader "Height" [ref=e8]
      - columnheader "Built" [ref=e9]
      - columnheader "Rank" [ref=e10]
      - columnheader "â€¦" [ref=e11]
  - rowgroup [ref=e12]:
    - row [ref=e13]:
      - rowheader "Total" [ref=e14]
      - cell "4 buildings" [ref=e15]
  - rowgroup [ref=e16]:
    - row [ref=e17]:
      - rowheader "Burj Khalifa" [ref=e18]
      - cell "UAE" [ref=e19]
      - cell "Dubai" [ref=e20]
      - cell "829m" [ref=e21]
      - cell "2010" [ref=e22]
      - cell "1" [ref=e23]
      - cell [ref=e24]
    - row [ref=e25]:
      - rowheader "Clock Tower Hotel" [ref=e26]
      - cell "Saudi Arabia" [ref=e27]
      - cell "Mecca" [ref=e28]
      - cell "601m" [ref=e29]
      - cell "2012" [ref=e30]
      - cell "2" [ref=e31]
      - cell [ref=e32]
    - row [ref=e33]:
      - rowheader "Taipei 101" [ref=e34]
      - cell "Taiwan" [ref=e35]
      - cell "Taipei" [ref=e36]
      - cell "509m" [ref=e37]
      - cell "2004" [ref=e38]
      - cell "3" [ref=e39]
      - cell [ref=e40]
    - row [ref=e41]:
      - rowheader "Financial Center" [ref=e42]
      - cell "China" [ref=e43]
      - cell "Shanghai" [ref=e44]
      - cell "492m" [ref=e45]
      - cell "2008" [ref=e46]
      - cell "4" [ref=e47]
      - cell [ref=e48]
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
  9  | await page.goto('https://awesomeqa.com/webtable1.html');
  10 | 
> 11 | const Row = await page.locator('.tsc_table_s13').filter({ hasText: 'China'}).locator('.tr').nth(4).textContent();
     |                                                                                                    ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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