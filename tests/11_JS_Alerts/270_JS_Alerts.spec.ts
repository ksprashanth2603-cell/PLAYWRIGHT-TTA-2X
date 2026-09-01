import {test, expect} from '@playwright/test'

test('Js Alerts', async({page})=>
{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')


//JS Alert
page.once('dialog', async (dialog) => 
{
console.log(dialog.message()); // "I am a JS Alert"
await dialog.accept();          // clicks OK
}
);
await page.getByRole('button', { name: 'Click for JS Alert' }).click();

//Assertion
//await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');



//JS Confirm
page.once('dialog', async(dialog)=>
{
console.log(dialog.message());
//await dialog.accept();
// or to dismiss
await dialog.dismiss();
}
);
await page.getByRole('button', { name: 'Click for JS Confirm' }).click();



//JS Prompt
page.once('dialog', async (dialog)=>
{
 console.log(dialog.message());
 await dialog.accept('Prashanth');
}
);
await page.getByRole('button', {name : 'Click for JS Prompt'}).click();



}
);