import { expect, test } from '@playwright/test';

test.describe('API Documentation', () => {
  test('API documentation page loads correctly', async ({ page }) => {
    await page.goto('/api');

    // Check that the API page loads
    await expect(page).toHaveTitle(/API.*Butter/);

    // Check that the page has content
    await expect(page.locator('main')).toBeVisible();
  });

  test('TypeDoc generated content is accessible', async ({ page }) => {
    // Try to access the API reference page
    await page.goto('/api-reference');

    // Should either show the API reference or redirect appropriately
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Build and Performance', () => {
  test('page loads within reasonable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('no console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Should not have any console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('no console errors on coverage page', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/docs/coverage');
    await page.waitForLoadState('networkidle');

    // Should not have any console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('images load correctly', async ({ page }) => {
    await page.goto('/');

    // Check that images load without errors
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');

      if (src && !src.startsWith('data:')) {
        // Wait for image to load
        await expect(img).toBeVisible();
      }
    }
  });
});
