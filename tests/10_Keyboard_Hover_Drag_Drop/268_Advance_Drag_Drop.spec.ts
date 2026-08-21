import {test,expect} from '@playwright/test'

test('Advance Drag and Drop', async ({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
   /* const Option1 = await page.getByTestId('card-write-spec');
    const Option2 = await page.getByTestId('card-review-pr-21');
    const Option3 = await page.getByTestId('card-update-readme');

    const Inprogress = await page.getByTestId('col-in-progress');
    const Review = await page.getByTestId('col-review');
    const Done = await page.getByTestId('col-done');

    await Option1.dragTo(Inprogress);
    await Option2.dragTo(Review);
    await Option3.dragTo(Done);

    //await page.pause();
*/

await page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-in-progress'));
await page.getByTestId('card-review-pr-21').dragTo(page.getByTestId('col-review'));
await page.getByTestId('card-update-readme').dragTo(page.getByTestId('col-done'));

    // Manual mouse path — for finicky DnD libraries

    // let source: Locator = page.locator('#card-write-spec');
    // const sBox = (await source.boundingBox())!;


    // let target: Locator = page.locator('[data-status="review"]');
    // const tBox = (await target.boundingBox())!;


    // await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    // await page.mouse.down();
    // await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    // await page.mouse.up();

}
);