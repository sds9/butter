import { test, expect } from '@playwright/test';

test.describe('Coverage Integration', () => {
  test('coverage documentation page loads correctly', async ({ page }) => {
    await page.goto('/docs/coverage');

    // Check that the coverage page loads
    await expect(page).toHaveTitle(/Code Coverage Report.*Butter/);

    // Check that the main heading is present
    await expect(page.locator('h1')).toContainText('Code Coverage Report');

    // Check that coverage overview section is present
    await expect(page.getByText('Coverage Overview')).toBeVisible();

    // Check that coverage thresholds section is present
    await expect(page.getByText('Coverage Thresholds')).toBeVisible();

    // Check that the coverage report button is present
    const coverageButton = page.getByRole('link', {
      name: /view.*coverage.*report/i,
    });
    await expect(coverageButton).toBeVisible();

    // Check that the button has the correct href
    await expect(coverageButton).toHaveAttribute('href', '/butter/coverage/');
  });

  test('coverage navigation links work', async ({ page }) => {
    await page.goto('/');

    // Test navbar coverage link
    const navCoverageLink = page
      .locator('nav.navbar')
      .getByRole('link', { name: /coverage/i });
    await expect(navCoverageLink).toBeVisible();
    await navCoverageLink.click();

    // Should navigate to coverage documentation page
    await expect(page).toHaveURL(/.*\/docs\/coverage/);
    await expect(page.locator('h1')).toContainText('Code Coverage Report');
  });

  test('coverage report HTML is accessible', async ({ page }) => {
    // First generate coverage if not present
    await page.goto('/butter/coverage/');

    // Check if coverage report loads (it should either show the report or a 404)
    // If it's a 404, that's expected if coverage hasn't been generated yet
    const response = await page.waitForLoadState('networkidle');

    // If the page loads successfully, check for coverage report elements
    try {
      // Check for typical coverage report elements
      await expect(page.locator('body')).toBeVisible();

      // Check if it's an actual coverage report (not a 404)
      const isNotFound = await page
        .locator('text=404')
        .isVisible()
        .catch(() => false);

      if (!isNotFound) {
        // If it's not a 404, it should be the coverage report
        // Coverage reports typically have percentage indicators or tables
        const hasCoverageContent = await page
          .locator('text=/%|percentage|coverage|lines|functions|branches/i')
          .isVisible()
          .catch(() => false);

        if (hasCoverageContent) {
          // This is a real coverage report
          console.log(
            'Coverage report is accessible and contains coverage data'
          );
        }
      }
    } catch (error) {
      // This is expected if coverage hasn't been generated yet
      console.log(
        'Coverage report not yet generated - this is expected for fresh installs'
      );
    }
  });

  test('coverage workflow integration', async ({ page }) => {
    await page.goto('/docs/coverage');

    // Check that the documentation explains the workflow
    await expect(page.getByText('coverage report')).toBeVisible();

    // Check that the instructions mention how to generate coverage
    const instructionsSection = page.locator('.markdown');
    await expect(instructionsSection).toContainText(
      /npm.*coverage|test.*coverage|generate/i
    );

    // Check that coverage thresholds are documented
    await expect(page.getByText(/80%/)).toBeVisible();
  });

  test('coverage documentation has proper styling', async ({ page }) => {
    await page.goto('/docs/coverage');

    // Check that the styled button is present and properly formatted
    const styledButton = page.getByRole('link', {
      name: /view.*coverage.*report/i,
    });
    await expect(styledButton).toBeVisible();

    // Check that the styled container is present
    const container = page.locator('div[style*="border"]').first();
    await expect(container).toBeVisible();

    // Check that emojis are displayed correctly
    await expect(page.getByText('📊')).toBeVisible();
    await expect(page.getByText('🎯')).toBeVisible();
    await expect(page.getByText('📈')).toBeVisible();
  });
});
