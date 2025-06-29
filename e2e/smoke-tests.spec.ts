import { test, expect } from '@playwright/test';

test.describe('E2E Tests - Smoke Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load properly
    await page.waitForLoadState('networkidle');

    // Check that we can find some content on the page
    await expect(page.locator('body')).toBeVisible();

    // Take a screenshot for debugging
    await page.screenshot({
      path: 'test-results/homepage-screenshot.png',
      fullPage: true,
    });
  });

  test('navigation contains coverage link', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for coverage link in navbar
    const navbarLinks = page.locator('nav.navbar a');
    const navbarText = await navbarLinks.allTextContents();

    // Check if any navbar link contains "coverage" (case insensitive)
    const hasCoverageLink = navbarText.some(text =>
      text.toLowerCase().includes('coverage')
    );

    expect(hasCoverageLink).toBeTruthy();
  });

  test('coverage static files are accessible', async ({ page }) => {
    // Try to access the coverage report directly
    const response = await page.goto('/coverage/');

    // Should not be a server error (500+)
    if (response) {
      expect(response.status()).toBeLessThan(500);
    }

    // Check that the page loads some content
    await expect(page.locator('body')).toBeVisible();
  });

  test('basic site functionality works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that the navbar is present
    await expect(page.locator('nav.navbar')).toBeVisible();

    // Check that the main content area exists
    await expect(page.locator('main')).toBeVisible();

    // No serious JavaScript errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error' && !msg.text().includes('webpack')) {
        consoleErrors.push(msg.text());
      }
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    // Allow webpack dev errors but not other serious errors
    const seriousErrors = consoleErrors.filter(
      error => !error.toLowerCase().includes('webpack')
    );
    expect(seriousErrors).toHaveLength(0);
  });
});
