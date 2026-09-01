import{test,expect,Locator} from '@playwright/test'

const URL='https://www.flipkart.com/search';

test.describe('FlipKart Search via SVG', () =>
{
 test.beforeEach( async ({page}) =>
 {
    console.log('Before running any testcases');
    await page.goto(URL);
 } 
 );

    test('#TC1 @smoke @regression',async ({page}) =>
    {
      await page.locator('input[name="q"]').fill("macmini");
      const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

    const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }

        await page.pause();



    }
    );




    /*test('#TC2 @regression',async ({page}) =>
    {
     console.log('Second TC')
    }
    );

   test('#TC3',async ({page}) =>
    {
     console.log('Third TC')
    }
    );*/

 
 



}
);