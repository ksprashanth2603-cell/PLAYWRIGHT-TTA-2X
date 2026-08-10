import {test, expect} from 'playwright/test';

test('Verify the sign up error with invalid email with PW locator', async ({ page }) => 
    {
    await page.goto("https://vwo.com/free-trial/");
    page.getByRole('textbox', { name: 'Email' }).fill("test@");

    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
    
    //let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent(); Better use this Xpath rather than using PW locator here
    let error_msg = await page.getByText("The email address you entered is incorrect.").textContent();
    
    
    expect(error_msg).toContain("The email address you entered is incorrect.");
    await page.waitForTimeout(3000);
   }
    
   );