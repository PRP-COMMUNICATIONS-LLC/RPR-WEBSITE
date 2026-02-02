import { test } from '@playwright/test';

test('capture production screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5180');

  // 1. Header + Hero
  await page.screenshot({ path: 'verification/prod_hero.png' });

  // 2. Foundations + Process
  const foundations = page.locator('#foundations');
  await foundations.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/prod_foundations.png' });

  const methods = page.locator('#methods');
  await methods.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/prod_methods.png' });

  // 3. Labs + Overwatch + Footer + BackToTop
  const labs = page.locator('#labs');
  await labs.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'verification/prod_labs.png' });

  const overwatch = page.locator('#overwatch');
  await overwatch.scrollIntoViewIfNeeded();

  // Wait for BackToTop to appear
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/prod_overwatch_footer.png' });
});
