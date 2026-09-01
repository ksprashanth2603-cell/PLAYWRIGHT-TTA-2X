import { test, expect } from '@playwright/test';

test('To print and find cheapest macmini', async ({ page }) => {
    // Open Flipkart and search for Mac Mini
    await page.goto('https://www.flipkart.com/search');
    await page.fill("input[name='q']", 'macmini');
    await page.keyboard.press('Enter');
    await page.waitForSelector('[data-id]');

    // Get all product cards and read their text
    const cards = page.locator('[data-id]');
    const count = await cards.count();

    let cheapest = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < count; i++) {
        const text = await cards.nth(i).textContent();
        const match = (text || '').match(/₹\s*([\d,]+)/);

        // Only consider cards that have a price
        if (match) {
            const price = Number(match[1].replace(/,/g, ''));
            if (price < cheapest) cheapest = price;
        }
    }

    // Print and verify the lowest price
    console.log('Cheapest Mac Mini price: ₹' + cheapest);
    expect(cheapest).toBeGreaterThan(0);
});