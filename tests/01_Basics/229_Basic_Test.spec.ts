import {test, expect} from '@playwright/test';

test.only('To verify the Title of the page', async ({page}) => //page = Fixture (Injected by Playwright Test Runner)
{
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle('Login - Wingify');
}
);