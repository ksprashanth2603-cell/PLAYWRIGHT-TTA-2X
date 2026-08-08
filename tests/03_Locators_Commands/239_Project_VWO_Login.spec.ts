import {test, expect} from '@playwright/test';

//Type 1: Own Written Test Case
/*test('To verify Fail login of VWO', async ({page}) => 
{

    
await page.goto('https://app.wingify.com/#/login');
await page.locator('#login-username').fill('abc@gmail.com');
await page.locator('#login-password').fill('abc123');
await page.locator('#js-login-btn').click();
await expect(page.locator('#js-notification-box-msg')).toHaveText('Your email, password, IP address or location did not match');
}
    ); */

 //Type 2 TTA way of writing Test Case

test('To verify Fail login of VWO', async ({page}) =>
{
    let usernamefield = page.locator('//input[@class="text-input W(100%)"]');//Locator BY XPath || ('#login-username');Locator by Id || //input[@data-qa="hocewoqisi"] Locator by Custom Attribute/Customer Locator
    let passwordfield = page.locator('#login-password');
    let loginbutton = page.locator('#js-login-btn');

    await page.goto('https://app.wingify.com/#/login');
    await usernamefield.fill('abc@gmail.com');
    await page.pause();
    await passwordfield.fill('abc123');
    await loginbutton.click();

    let notificationmsg = page.locator('#js-notification-box-msg'); //XPath locator '//div[@class="notification-box-description"]');
    
    await expect(notificationmsg).toHaveText('Your email, password, IP address or location did not match');

}
    );

 
 
