const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://awesomeqa.com/webtable.html');
  const tables = await page.$$eval('table', els => els.map(e => ({ summary: e.getAttribute('summary'), id: e.id, html: e.outerHTML.slice(0, 300) })));
  console.log('TABLES:', JSON.stringify(tables, null, 2));
  const rowsSummary = await page.locator('table[summary="Sample Table"] tbody tr').count();
  console.log('ROWS summary=Sample Table:', rowsSummary);
  const rowsAny = await page.locator('table tbody tr').count();
  console.log('ROWS any table tbody tr:', rowsAny);
  await browser.close();
})();
