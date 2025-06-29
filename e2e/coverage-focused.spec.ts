import { expect, test } from '@playwright/test';

test.describe('Coverage Integration (Focused)', () => {
  test('coverage documentation page loads and displays correctly', async ({
    page,
  }) => {
    // Navigate to the coverage documentation page
    await page.goto('/docs/coverage');

    // Check that the page loads successfully (not a 404)
    await expect(page.locator('h1')).toContainText('Code Coverage Report');

    // Check that key sections are present
    await expect(page.getByText('Coverage Overview')).toBeVisible();
    await expect(page.getByText('Coverage Thresholds')).toBeVisible();
    await expect(page.getByText('View Coverage Report')).toBeVisible();

    // Check that the coverage report button is present and properly styled
    const coverageButton = page.getByRole('link', {
      name: /open coverage report/i,
    });
    await expect(coverageButton).toBeVisible();
    await expect(coverageButton).toHaveAttribute('href', '/butter/coverage/');
    await expect(coverageButton).toHaveAttribute('target', '_blank');

    // Check that emojis are displayed
    await expect(page.getByText('📊')).toBeVisible();
    await expect(page.getByText('🎯')).toBeVisible();
    await expect(page.getByText('📈')).toBeVisible();
  });

  test('coverage report files are accessible via static assets', async ({
    page,
  }) => {
    // Try to access the coverage report directly
    const response = await page.goto('/butter/coverage/');

    // Should not be a 404 (coverage files should exist from previous generation)
    expect(response?.status()).not.toBe(404);

    // Check that the page loads some content
    await expect(page.locator('body')).toBeVisible();
  });

  test('navigation includes coverage link', async ({ page }) => {
    await page.goto('/');

    // Check that navbar contains coverage link
    const navCoverageLink = page
      .locator('nav.navbar')
      .getByRole('link', { name: /coverage/i });
    await expect(navCoverageLink).toBeVisible();
    await expect(navCoverageLink).toHaveAttribute(
      'href',
      '/butter/docs/coverage'
    );
  });

  test('footer includes coverage link', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer to ensure it's visible
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Check that footer contains coverage link
    const footerCoverageLink = page
      .locator('footer')
      .getByRole('link', { name: /coverage/i });
    await expect(footerCoverageLink).toBeVisible();
  });

  test('coverage documentation has proper sections and content', async ({
    page,
  }) => {
    await page.goto('/docs/coverage');

    // Check all major sections exist
    await expect(page.getByText('Coverage Overview')).toBeVisible();
    await expect(page.getByText('Coverage Thresholds')).toBeVisible();
    await expect(page.getByText('Generating Coverage Reports')).toBeVisible();
    await expect(page.getByText('Coverage Files')).toBeVisible();
    await expect(page.getByText('Tips for Better Coverage')).toBeVisible();

    // Check that code examples are present
    await expect(page.locator('code')).toBeVisible();

    // Check that the documentation mentions npm scripts
    await expect(page.getByText(/npm run test:coverage/)).toBeVisible();
  });
});
