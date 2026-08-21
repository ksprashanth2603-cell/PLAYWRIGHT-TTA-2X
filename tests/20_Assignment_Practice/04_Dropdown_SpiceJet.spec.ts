import {test,expect} from '@playwright/test'

test('Spicejet Country Dropdown select', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');

    /*const origin = page.locator('[data-testid="to-testID-origin"]');
    await origin.click();
    await origin.pressSequentially('de');

    // Wait for the suggestion list to appear and click the first element containing "Delhi"
    await page.waitForSelector('text=Delhi', { state: 'visible', timeout: 5000 });
    await page.locator('text=Delhi').first().click();*/
    

    const origin = await page.getByTestId('to-testID-origin');
    await origin.click();
    await origin.pressSequentially('de');

    //await page.waitForSelector('text=Delhi', { state: 'visible', timeout: 5000 });
    await page.getByText('Delhi', {exact:true}).click();
    //await page.pause();

    const Destination = await page.getByTestId('to-testID-destination');
    await Destination.click();
    await Destination.pressSequentially('pu');

    //await page.waitForSelector('text=Bengaluru', { state: 'visible', timeout: 5000 });

    await page.getByText('Pune', {exact:true}).click();

    //await page.pause();


});