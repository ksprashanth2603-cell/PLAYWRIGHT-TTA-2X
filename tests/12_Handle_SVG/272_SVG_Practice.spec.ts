import {test, expect} from '@playwright/test';

const URL=" https://app.thetestingacademy.com/playwright/widgets/svg";

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG and assert visible', async({page}) =>
    {
     await page.getByTestId('shape-circle-blue').click();
     const output = await page.locator('#shapes-output').innerText();
     console.log(output);
     await expect(output).toContain('shape-circle-blue');


     await page.getByTestId('bar-q3').click();
     const output2= await page.locator('#bars-output').innerText();
     console.log(output2);
     await expect(output2).toContain('bar-q3');

     await page.getByTestId('star-4').click();
     const output3= await page.locator('#stars-readout').innerText();
     console.log(output3);
     await expect(output3).toContain('4');

     //to get the bargraph data
    let allBars = await page.locator(".bar").all();
        for(const bar of allBars){

                // logic which is the hegiht, low ......click on that.

                const q = await bar.getAttribute('data-quarter');
                const h = await bar.getAttribute('height');
                console.log(q);
                console.log(h);
        }

    });




});    