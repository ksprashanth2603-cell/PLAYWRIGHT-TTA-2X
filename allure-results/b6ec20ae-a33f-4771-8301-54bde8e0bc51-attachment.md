# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts >> Verify how to handle webtables using XPath
- Location: tests\07_WebTables\252_WebTables_Dynamic_Xpath.spec.ts:7:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('#customers td:right-of(td:text("Helen Bennett"))') resolved to 6 elements:
    1) <td>UK</td> aka getByRole('cell', { name: 'UK' })
    2) <td>Canada</td> aka getByRole('cell', { name: 'Canada' })
    3) <td>Austria</td> aka getByRole('cell', { name: 'Austria' })
    4) <td>Italy</td> aka getByRole('cell', { name: 'Italy' })
    5) <td>Mexico</td> aka getByRole('cell', { name: 'Mexico' })
    6) <td>Germany</td> aka getByRole('cell', { name: 'Germany' })

Call log:
  - waiting for locator('#customers td:right-of(td:text("Helen Bennett"))')

```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
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
> 11 | const row = await page.locator('#customers td:right-of(td:text("Helen Bennett"))').innerText();
     |                                                                                    ^ Error: locator.innerText: Error: strict mode violation: locator('#customers td:right-of(td:text("Helen Bennett"))') resolved to 6 elements:
  12 | //const row = await page.locator('#customers').locator('td:right-of(:text("Helen Bennett"))').nth(4).allInnerTexts();
  13 | //filter({ hasText: 'Helen Bennett'}).locator('td:right-of').allInnerTexts();
  14 | console.log(row);
  15 |   
  16 | /*
  17 | ////table[@id="customers"]/tbody/tr[5]/td[2]
  18 | 
  19 | const firstPart = '//table[@id="customers"]/tbody/tr[';
  20 | const secondPart = ']/td[';
  21 | const thirdPart = ']';
  22 | 
  23 | const allRows = await page.locator('//table[@id="customers"]/tbody/tr').count();
  24 | const allCols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
  25 | 
  26 | 
  27 | for (let i=2; i<=allRows; i++)
  28 |  {
  29 |     for (let j=1; j<=allCols; j++)
  30 |     {
  31 |   const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`; 
  32 |   //console.log(dynamicXpath);
  33 |   const cellData = await page.locator(dynamicXpath).allInnerTexts();
  34 |   //console.log(cellData);
  35 | 
  36 |   if (cellData.includes("Helen Bennett"))
  37 |   {
  38 |     const countryPath = `${dynamicXpath}/following-sibling::td`;
  39 |     const countryData = await page.locator(countryPath).allInnerTexts();
  40 |     
  41 |     console.log('===========================================');
  42 |     console.log(`Country of Helen Bennett is ${countryData}`);
  43 |     console.log('===========================================');
  44 |   }
  45 | 
  46 | 
  47 | 
  48 |     }
  49 |  } 
  50 | 
  51 |  */
  52 | }
  53 | );
  54 | 
  55 | 
```