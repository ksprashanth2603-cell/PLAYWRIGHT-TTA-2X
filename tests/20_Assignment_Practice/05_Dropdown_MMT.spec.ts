import {test,expect} from '@playwright/test'

test('DropDown example from MMT', async({page})=>
{
await page.goto('https://www.makemytrip.com/flights/');
await page.locator('.commonModal__close').click();
//await page.pause();

const fromCity = await page.locator('#fromCity');
await fromCity.click();
await fromCity.pressSequentially('Delhi');
await page.getByText('New Delhi, India').click();

const toCity = await page.locator('#toCity');
await toCity.click();
await toCity.pressSequentially('Ben');
await page.getByText('Bengaluru, India').click();
//await page.pause();

await page.keyboard.press('Escape');



}
);

