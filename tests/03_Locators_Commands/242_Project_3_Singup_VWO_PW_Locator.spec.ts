import {test, expect} from 'playwright/test';

test('Verify the sign up error with invalid email with PW locator', async ({ page }) => 
    {
    await page.goto("https://vwo.com/free-trial/");
    page.getByRole('textbox', { name: 'Email' }).fill("test@");

    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();

    let error_msg = await page.getByText("The email address you entered is incorrect.").textContent();
    //expect(error_msg).toContain("The email address you entered is incorrect.");
    //let error_msg = await page.getByText("The email address you entered is incorrect.").textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");
    }
    
    );