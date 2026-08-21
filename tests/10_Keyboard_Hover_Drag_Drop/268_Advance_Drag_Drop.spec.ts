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

}
);