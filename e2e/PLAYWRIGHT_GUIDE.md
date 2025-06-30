# 🎭 Playwright Configuration Guide

## 🔧 Headless Mode Configuration

Playwright is now configured to run **headless by default** - no browser windows will open during test execution.

### ✅ **Fixed Configuration**

- **Default Mode**: Headless (no visible browser windows)
- **Screenshots**: Captured only on test failures
- **Videos**: Recorded only on test failures
- **Traces**: Collected on retry attempts

### 🏃 **Available Commands**

| Command              | Mode     | Use Case                           |
| -------------------- | -------- | ---------------------------------- |
| `npm run e2e`        | Headless | Default - fastest execution, no UI |
| `npm run e2e:headed` | Headed   | Debug with visible browser         |
| `npm run e2e:debug`  | Debug    | Step-through debugging             |
| `npm run e2e:ui`     | UI Mode  | Interactive test runner            |

### 🎯 **When to Use Each Mode**

#### Headless (Default)

```bash
npm run e2e
```

- ✅ **CI/CD pipelines**
- ✅ **Local development** (fast feedback)
- ✅ **Automated testing**
- ✅ **Background execution**

#### Headed Mode

```bash
npm run e2e:headed
```

- 🔍 **Debugging test failures**
- 👀 **Visual verification** of test steps
- 🐛 **Troubleshooting** UI interactions

#### Debug Mode

```bash
npm run e2e:debug
```

- 🔬 **Step-by-step debugging**
- ⏸️ **Pause and inspect** elements
- 🕵️ **Deep troubleshooting**

#### UI Mode

```bash
npm run e2e:ui
```

- 📊 **Interactive test dashboard**
- 🎮 **Manual test control**
- 📈 **Real-time test results**

### 🛠️ **Overriding Configuration**

You can override the headless setting per test run:

```bash
# Force headless mode
npx playwright test --project=chromium

# Force headed mode (override config)
npx playwright test --headed --project=chromium

# Run with additional options
npx playwright test --headed --slow-mo=1000 --project=chromium
```

### 🔍 **Debugging Failed Tests**

When tests fail in headless mode, you get:

1. **Screenshots** - Visual state at failure
2. **Videos** - Recording of the failure sequence
3. **Traces** - Detailed execution timeline
4. **Console logs** - Browser console output

Access these via:

```bash
npx playwright show-report
```

### 🎬 **Video and Screenshot Settings**

Current configuration in `playwright.config.ts`:

```typescript
use: {
  headless: true,           // No visible browser
  screenshot: 'only-on-failure',  // Screenshots on failures
  video: 'retain-on-failure',     // Videos on failures
  trace: 'on-first-retry',        // Traces on retries
}
```

### 📊 **CI/CD Behavior**

In GitHub Actions CI:

- ✅ **Always headless** (no display available)
- ✅ **Artifacts uploaded** on failure (screenshots, videos, traces)
- ✅ **Multi-browser testing** (Chromium, Firefox, WebKit)
- ✅ **Parallel execution** for speed

### 🚨 **Troubleshooting**

If you still see browser windows:

1. **Check command**: Ensure you're using `npm run e2e` (not `e2e:headed`)
2. **Clear cache**: `npx playwright install`
3. **Verify config**: Check `playwright.config.ts` has `headless: true`
4. **Override test**: Use `--headed` flag explicitly if needed

### 🎯 **Best Practices**

- **Development**: Use headless for quick feedback
- **Debugging**: Switch to headed mode only when needed
- **CI/CD**: Always headless (automatic)
- **Team**: Document which mode to use for different scenarios

Now your Playwright tests will run **silently in the background** by default! 🎉
