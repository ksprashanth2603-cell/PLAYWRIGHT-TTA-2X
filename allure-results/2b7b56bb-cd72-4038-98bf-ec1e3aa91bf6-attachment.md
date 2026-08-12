# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\253_WebTable_Dynamic.spec.ts >> To verify Dynamic WebTable in a page
- Location: tests\07_WebTables\253_WebTable_Dynamic.spec.ts:3:5

# Error details

```
Error: locator.allInnerTexts: Unexpected token "1" while parsing css selector "Row 1:". Did you mean to CSS.escape it?
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
  3  | test('To verify Dynamic WebTable in a page', async ({page})=>
  4  | {
  5  |  await page.goto('https://awesomeqa.com/webtable1.html');   
  6  |  const rows = page.locator('table[summary="Sample Table"] tbody tr');
  7  |         const rowCount = await rows.count();
  8  |         console.log(rowCount);
  9  | 
  10 |         for (let i = 0; i <= rowCount; i++) 
  11 |         {
  12 |             const rowData = await rows.nth(i).locator('td').allInnerTexts();
  13 |             console.log(`Row ${i + 1}:`, rowData);
> 14 |             const cellData = await page.locator(`Row ${i + 1}:`).allInnerTexts();
     |                                                                  ^ Error: locator.allInnerTexts: Unexpected token "1" while parsing css selector "Row 1:". Did you mean to CSS.escape it?
  15 | 
  16 |     if (cellData.includes("Financial Center"))
  17 |   {
  18 |     const countryPath = `cellData/following-sibling::td`;
  19 |     const countryData = await page.locator(countryPath).allInnerTexts();
  20 |     
  21 |     console.log('===========================================');
  22 |     console.log(`Country of Financial Center is ${countryData}`);
  23 |     console.log('===========================================');
  24 |   }
  25 |         }
  26 | }
  27 | );
```