import { test, expect } from '@playwright/test';

test.describe('Docusaurus Site Basic Functionality', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check that the homepage loads
    await expect(page).toHaveTitle(/Butter/);

    // Check that the main heading is present
    await expect(page.locator('h1')).toContainText('Butter');

    // Check that the tagline is visible
    await expect(page.locator('.hero__subtitle')).toBeVisible();

    // Check that the navigation bar is present
    await expect(page.locator('nav.navbar')).toBeVisible();
  });

  test('navigation bar contains expected links', async ({ page }) => {
    await page.goto('/');

    // Check navbar links
    await expect(page.locator('nav.navbar .navbar__brand')).toBeVisible();

    // Check for Documentation link
    const docsLink = page
      .locator('nav.navbar')
      .getByRole('link', { name: /docs/i });
    await expect(docsLink).toBeVisible();

    // Check for Coverage link (our new integration)
    const coverageLink = page
      .locator('nav.navbar')
      .getByRole('link', { name: /coverage/i });
    await expect(coverageLink).toBeVisible();

    // Check for API Reference link
    const apiLink = page
      .locator('nav.navbar')
      .getByRole('link', { name: /api/i });
    await expect(apiLink).toBeVisible();
  });

  test('footer contains expected links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Check that footer is visible
    await expect(page.locator('footer')).toBeVisible();

    // Check for Coverage link in footer
    const footerCoverageLink = page
      .locator('footer')
      .getByRole('link', { name: /coverage/i });
    await expect(footerCoverageLink).toBeVisible();
  });

  test('documentation page loads correctly', async ({ page }) => {
    await page.goto('/docs/intro');

    // Check that the docs page loads
    await expect(page).toHaveTitle(/Tutorial Intro.*Butter/);

    // Check that the sidebar is present
    await expect(page.locator('.menu')).toBeVisible();

    // Check that main content area is present
    await expect(page.locator('main')).toBeVisible();
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Check that mobile menu toggle is visible
    await expect(page.locator('.navbar__toggle')).toBeVisible();

    // Check that the page is still functional
    await expect(page.locator('h1')).toBeVisible();
  });
});
