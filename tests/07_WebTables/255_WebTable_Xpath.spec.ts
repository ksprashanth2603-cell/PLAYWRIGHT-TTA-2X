import {test,expect} from '@playwright/test';

test('To understand Xpath Axses(sibling tree) and CSS Pseudo Selector', async({page})=>

    {
     // Finding check box of Priya Nair using Xpath Axses
     await page.goto('https://app.thetestingacademy.com/playwright/webtable');
     await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
    ).click();
    //await page.waitForTimeout(10000);

    //Finding the check box of Priya Nair using playwright locator option
    await page.locator("#employee-body").filter({hasText:'Priya.Nair'}).locator("td").first().click();
    //await page.waitForTimeout(10000);

    //Finding the check box of Rohan mehta using Pseudo css slelctor 
    await page.locator("tr:has(td:has-text('Rohan.Mehta'))").locator("td").first().click();
    //await page.waitForTimeout(10000);

    //Easy and First Prefer way
    await page.getByRole('checkbox', {name: "Select Ananya.Iyer"}).click();
    
    //To find Merra Rao City
    const City = await page.locator("tr[data-username='Meera.Rao'] td:nth-child(5)").innerText();
    console.log(City);
    }
);