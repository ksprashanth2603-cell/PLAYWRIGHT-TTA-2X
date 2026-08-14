# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\255_WebTable_Xpath.spec.ts >> To understand Xpath Axses(sibling tree) and CSS Pseudo Selector
- Location: tests\07_WebTables\255_WebTable_Xpath.spec.ts:3:5

# Error details

```
Error: locator.click: Unsupported token "@type" while parsing css selector "preceding-sibling::td/input[@type="checkbox"]". Did you mean to CSS.escape it?
Call log:
  - waiting for #employee-body >> internal:has-text="Priya.Nair"i >> preceding-sibling::td/input[@type="checkbox"]

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test('To understand Xpath Axses(sibling tree) and CSS Pseudo Selector', async({page})=>
  4  | 
  5  |     {
  6  |      // Finding check box of Priya Nair using Xpath Axses
  7  |      await page.locator('#employee-body').filter({hasText:'Priya.Nair'}).locator('preceding-sibling::td/input[@type="checkbox"]'
> 8  | ).click();
     |   ^ Error: locator.click: Unsupported token "@type" while parsing css selector "preceding-sibling::td/input[@type="checkbox"]". Did you mean to CSS.escape it?
  9  | await page.pause();
  10 |     }
  11 | );
```