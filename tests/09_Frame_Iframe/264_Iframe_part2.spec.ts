import {test,expect, FrameLocator} from '@playwright/test'

/*test('Iframe Example', async({page})=>
{
await page.goto('https://selectorshub.com/iframe-scenario/');

let frame1:FrameLocator = await page.frameLocator('#pact1');
let frame2:FrameLocator = await frame1.frameLocator('#pact2');
let frame3:FrameLocator = await frame2.frameLocator('#pact3');


await frame1.getByPlaceholder('First Crush').fill('Aishwarya Rai');
await page.pause();
await frame2.locator('#jex').fill('Wife');
await frame3.locator('#glaf').fill('Playwright');

    await page.pause();

}


);*/

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2').first();
    let frame3: FrameLocator = frame2.frameLocator('#pact3').first();

    const firstbox = await frame1.locator('#inp_val').first();
    await firstbox.pressSequentially('Aishwarya Rai');
    await frame2.locator('#jex').fill('Wife');
    await frame3.locator('#glaf').fill('Playwright');

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);

});