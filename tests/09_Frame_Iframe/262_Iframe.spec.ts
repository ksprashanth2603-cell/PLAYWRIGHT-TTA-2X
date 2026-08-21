import {test, expect, FrameLocator} from '@playwright/test'

test('Iframe Example', async({page})=>
{
await page.goto('https://app.thetestingacademy.com/playwright/frames/');
let vehicleFrame:FrameLocator = await page.frameLocator('#frame-one');

await vehicleFrame.locator('#RESULT_TextField-1').fill('Verna');
await vehicleFrame.locator('#RESULT_TextField-2').fill('Prashanth');
await vehicleFrame.locator('#RESULT_TextField-3').fill('KA-01-PA-1111');

await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
await vehicleFrame.locator('#RESULT_TextField-4').fill('2016');
await vehicleFrame.locator('#RESULT_TextArea-1').fill('Insurance is Up to date');
await vehicleFrame.getByTestId('vehicle-submit').click();

//await page.getByText('Multi-frame frameset', { exact: true }).click();

//await page.pause();
}
);