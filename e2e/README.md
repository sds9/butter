# End-to-End Tests

This directory contains Playwright end-to-end tests for the Butter project documentation site.

## Test Suites

### 1. Smoke Tests (`smoke-tests.spec.ts`)

Basic functionality tests that verify:

- Homepage loads correctly
- Navigation contains coverage link
- Coverage static files are accessible
- Basic site functionality works without major errors

### 2. Coverage Integration Tests (`coverage-focused.spec.ts`)

Focused tests for the coverage integration:

- Coverage documentation page loads
- Coverage navigation links work
- Coverage report HTML is accessible
- Coverage workflow integration works
- Coverage documentation has proper styling

### 3. Basic Functionality Tests (`basic-functionality.spec.ts`)

Comprehensive tests for core Docusaurus functionality:

- Homepage loads correctly
- Navigation bar contains expected links
- Footer contains expected links
- Documentation page loads correctly
- Responsive design works on mobile

### 4. API and Performance Tests (`api-and-performance.spec.ts`)

Tests for API documentation and performance:

- API documentation page loads correctly
- TypeDoc generated content is accessible
- Page loads within reasonable time
- No console errors on key pages
- Images load correctly

## Running Tests

### Run All Tests

```bash
npm run e2e
```

### Run Tests in UI Mode (Interactive)

```bash
npm run e2e:ui
```

### Run Tests in Headed Mode (Visible Browser)

```bash
npm run e2e:headed
```

### Debug Tests Step by Step

```bash
npm run e2e:debug
```

### View Last Test Report

```bash
npm run e2e:report
```

## VS Code Tasks

The following VS Code tasks are available:

- **Run E2E Tests**: Run all Playwright tests
- **Run E2E Tests (UI Mode)**: Run tests in interactive UI mode
- **Debug E2E Tests**: Debug tests step by step

## Test Configuration

Tests are configured in `playwright.config.ts` with:

- **Browsers**: Chromium, Firefox, WebKit
- **Base URL**: `http://localhost:3000/butter`
- **Server**: Automatically starts Docusaurus dev server
- **Timeout**: 30 seconds for tests, 120 seconds for server startup
- **Retries**: 2 retries on CI, 0 locally

## Coverage Integration Testing

The tests specifically verify:

1. **Documentation Page**: `/docs/coverage` loads and displays content
2. **Navigation Links**: Coverage links appear in navbar and footer
3. **Static Assets**: Coverage HTML report is accessible at `/coverage/`
4. **Button Functionality**: Coverage report button works correctly
5. **Content Sections**: All coverage documentation sections are present

## Test Status

✅ **Smoke Tests**: All basic functionality working
✅ **Coverage Integration**: Coverage files accessible and navigation working
⚠️ **Documentation Pages**: Some specific content tests may need URL adjustments
⚠️ **API Documentation**: TypeDoc integration tests may need configuration

## Troubleshooting

### Common Issues

1. **Page Not Found (404)**:
   - Check that Docusaurus server is running
   - Verify base URL configuration
   - Ensure page files exist in correct location

2. **Console Errors**:
   - MDX compilation errors in markdown files
   - Check syntax in `.md` files with JSX components
   - Verify all JSX tags are properly closed

3. **Timeout Issues**:
   - Increase timeout in test configuration
   - Check server startup time
   - Verify network connectivity

### Debugging

1. **Screenshots**: Tests automatically take screenshots on failure
2. **Videos**: Available in headed mode
3. **Trace Viewer**: Use `--trace on` for detailed execution traces
4. **Browser DevTools**: Available in debug mode

## Integration with CI/CD

Tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Install Playwright
  run: npx playwright install

- name: Run E2E Tests
  run: npm run e2e
```

For CI environments, tests will:

- Use different retry settings (2 retries vs 0 locally)
- Run in headless mode
- Generate reports and artifacts
- Not reuse existing server instances
