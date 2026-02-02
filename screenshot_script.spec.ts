import { test, expect } from '@playwright/test';

test('capture comprehensive screenshots', async ({ page }) => {
  // Navigate to the local dev server
  await page.goto('http://localhost:5173/');

  // Wait for the fonts and initial render
  await page.waitForTimeout(5000);

  // 1. Header & Hero Desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({ path: 'verification/header.png', clip: { x: 0, y: 0, width: 1920, height: 100 } });
  await page.screenshot({ path: 'verification/hero_desktop.png', clip: { x: 0, y: 0, width: 1920, height: 900 } });

  // 2. Hero Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'verification/hero_mobile.png' });

  // 3. Foundations
  await page.setViewportSize({ width: 1920, height: 1080 });
  const foundations = page.locator('#foundations');
  await foundations.scrollIntoViewIfNeeded();
  await page.waitForTimeout(5000); // Wait longer for Mermaid
  await foundations.screenshot({ path: 'verification/foundations.png' });

  // 4. Labs
  const labs = page.locator('#labs');
  await labs.scrollIntoViewIfNeeded();
  await labs.screenshot({ path: 'verification/labs.png' });

  // 5. BackToTop
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);
  const backToTop = page.locator('button[aria-label="Back to Top"]');
  await backToTop.screenshot({ path: 'verification/back_to_top.png' });
});
