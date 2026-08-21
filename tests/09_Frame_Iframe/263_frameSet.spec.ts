import{test,expect, FrameLocator} from '@playwright/test'

test('Multiple Frame Set Example', async ({page}) =>
{
await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
const header = await mainFrame.getByText('Main frame — practice playground').innerText();
await console.log(header);

let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
await sideFrame.getByTestId('side-link-registration').click();
await page.getByTestId('vehicle-registration-card').isVisible();

await mainFrame.locator('#RESULT_TextField-1').fill('Verna');
await mainFrame.locator('#RESULT_TextField-2').fill('Prashanth');
await mainFrame.locator('#RESULT_TextField-3').fill('KA-01-PA-1111');

//await page.pause();

}
);