import{test,expect} from'@playwright/test'

test('Mouse Hover Example', async ({page})=>

    {
     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
     await page.getByTestId('nav-add-ons').hover();
     await page.getByTestId('test-id-Meal').click();
     await expect(page.getByTestId('hover-output')).toContainText('test-id-Meal');
    }
);