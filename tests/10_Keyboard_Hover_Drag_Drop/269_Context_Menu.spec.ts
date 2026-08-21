import { test, expect, } from '@playwright/test';

test('Right Click', async ({ page }) => 
{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.getByTestId('ctx-target').click({button : "right"});
    await page.getByRole('button',  {name :"Copy"}).click();

    const alloptions = await page.getByTestId('ctx-menu').innerText();
    console.log(alloptions);
    

}
);
