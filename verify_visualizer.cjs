const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1600 });
  await page.goto('http://localhost:5179#labs');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'visualizer_l1.png' });

  // Click L2 tab
  await page.click('button:has-text("L2: ELDERS")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'visualizer_l2.png' });

  // Click a node in L2 to test modal
  await page.click('text=COUNCIL OF STRATEGY');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'visualizer_modal.png' });

  await browser.close();
})();
