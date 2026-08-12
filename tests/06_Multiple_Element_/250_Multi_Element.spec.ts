import {test, expect} from '@playwright/test';


  // Navigate to the page.
  // Find the locator which gives all the elements and text
  // loop through it and find the one which we want to click

test('To verify Mutiple Elements in a page', async ({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');


const allrightpaneltext = await page.locator('a.list-group-item').allInnerTexts();
 for (const linktext of allrightpaneltext)
{
 if(linktext === "Forgotten Password")
 {
    await page.getByText(linktext).first().click();
 }
}

/*const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) 
    {
        console.log(await link.getAttribute("href"));
    }
*/

}
    );
