import {test,expect} from '@playwright/test'

test('Drag and Drop Example', async ({page}) =>
{
await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
const OptionA = await page.locator('#column-a');
const OptionB = await page.locator('#column-b');

await OptionA.dragTo(OptionB);
await page.pause();

}
);