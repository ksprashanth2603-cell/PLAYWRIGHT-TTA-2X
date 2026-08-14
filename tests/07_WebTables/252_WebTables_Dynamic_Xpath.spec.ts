import {test, expect} from '@playwright/test';

   // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following siblings of the Helen banquet and print them in the console.

test('Verify how to handle webtables using XPath', async({page}) =>
{
await page.goto('https://awesomeqa.com/webtable.html');

//const row = await page.locator('#customers td:right-of(td:text("Helen Bennett"))').nth(0).innerText(); This also works
const row = await page.locator('#customers').locator('td:right-of(td:text("Helen Bennett"))').nth(0).innerText();
console.log('Helen Bennett is from ',row);
  
/*
////table[@id="customers"]/tbody/tr[5]/td[2]

const firstPart = '//table[@id="customers"]/tbody/tr[';
const secondPart = ']/td[';
const thirdPart = ']';

const allRows = await page.locator('//table[@id="customers"]/tbody/tr').count();
const allCols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();


for (let i=2; i<=allRows; i++)
 {
    for (let j=1; j<=allCols; j++)
    {
  const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`; 
  //console.log(dynamicXpath);
  const cellData = await page.locator(dynamicXpath).allInnerTexts();
  //console.log(cellData);

  if (cellData.includes("Helen Bennett"))
  {
    const countryPath = `${dynamicXpath}/following-sibling::td`;
    const countryData = await page.locator(countryPath).allInnerTexts();
    
    console.log('===========================================');
    console.log(`Country of Helen Bennett is ${countryData}`);
    console.log('===========================================');
  }



    }
 } 

 */ //This also works
}
);

