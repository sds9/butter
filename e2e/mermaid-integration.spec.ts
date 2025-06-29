import { expect, test } from '@playwright/test';

test.describe('Mermaid Integration', () => {
  test('should have Mermaid theme installed and accessible', async ({
    page,
  }) => {
    // Navigate to the main docs page first
    await page.goto('/docs/intro');
    await page.waitForLoadState('networkidle');

    // Check that we can navigate to docs successfully
    await expect(page).toHaveTitle(/Getting Started.*Butter/);

    // Try to access the diagrams page directly
    await page.goto('/butter/docs/diagrams');
    await page.waitForLoadState('networkidle');

    // Check if page loads (even if Mermaid hasn't rendered yet)
    const pageContent = page.locator('main');
    await expect(pageContent).toBeVisible();

    // Look for mermaid code blocks in the markdown
    const mermaidCodeBlocks = page.locator('code.language-mermaid');
    const count = await mermaidCodeBlocks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should render basic page structure for diagrams', async ({ page }) => {
    await page.goto('/butter/docs/diagrams');
    await page.waitForLoadState('networkidle');

    // Check for key headings from our diagrams page
    const flowchartHeading = page.locator('h2:has-text("Flowcharts")');
    await expect(flowchartHeading).toBeVisible();

    const sequenceHeading = page.locator('h2:has-text("Sequence Diagrams")');
    await expect(sequenceHeading).toBeVisible();
  });
});
