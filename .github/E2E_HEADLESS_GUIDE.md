# 🚫 NEVER OPEN BROWSER WINDOWS - E2E Testing Guide

## ⚠️ **IMPORTANT: Avoiding Browser Pop-ups**

This project is configured to **NEVER** open browser windows during E2E testing by default.

## ✅ **Safe Commands (No Browser Windows)**

| Command                | Description            | Guarantee                  |
| ---------------------- | ---------------------- | -------------------------- |
| `npm run e2e`          | Default E2E tests      | ✅ **100% Headless**       |
| `npm run e2e:safe`     | Extra-safe test runner | ✅ **Guaranteed Headless** |
| `npm run e2e:headless` | Explicit headless mode | ✅ **100% Headless**       |

## ⚠️ **Commands That WILL Open Browsers**

| Command              | Description            | Warning                   |
| -------------------- | ---------------------- | ------------------------- |
| `npm run e2e:headed` | Visual debugging       | 🚨 **WILL OPEN BROWSERS** |
| `npm run e2e:debug`  | Step-through debugging | 🚨 **WILL OPEN BROWSERS** |
| `npm run e2e:ui`     | Interactive UI         | 🚨 **WILL OPEN BROWSERS** |

## 🔒 **How We Enforce Headless Mode**

### 1. **Global Configuration**

```typescript
// playwright.config.ts
use: {
  headless: true,  // Global default
}
```

### 2. **Per-Project Configuration**

```typescript
// Each browser project explicitly sets headless
projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      headless: true, // Explicit override
    },
  },
  // ... same for firefox and webkit
];
```

### 3. **Environment Variables**

```bash
export PLAYWRIGHT_HEADLESS=true
export CI=true
```

### 4. **Command Line Flags**

```bash
--workers=1  # Prevents race conditions that might affect headless mode
```

## 🛡️ **Multiple Safety Layers**

1. **Config File**: `headless: true` in both global and project settings
2. **Environment**: `PLAYWRIGHT_HEADLESS=true` and `CI=true`
3. **Command Flags**: `--workers=1` for consistency
4. **Package Scripts**: Default commands are headless-only

## 🧪 **Testing the Configuration**

Use the **safe test runner** to verify headless mode:

```bash
npm run e2e:safe
```

This script:

- ✅ Sets environment variables to force headless
- ✅ Runs a simple smoke test
- ✅ Confirms no browser windows opened
- ✅ Provides clear feedback

## 🚨 **If Browser Windows Still Open**

If you ever see browser windows during E2E tests:

1. **Check your command**: Make sure you're not using `:headed` or `:debug`
2. **Use the safe runner**: `npm run e2e:safe`
3. **Check environment**: Ensure no `PLAYWRIGHT_HEADLESS=false` is set
4. **Clear cache**: `npx playwright install`

## 📋 **Development Workflow**

### Daily Development (Headless)

```bash
npm run e2e              # Fast feedback, no windows
npm run e2e:safe         # Extra-safe option
```

### Debugging (When Needed)

```bash
npm run e2e:headed       # Visual debugging
npm run e2e:debug        # Step-through debugging
```

### CI/CD (Always Headless)

```bash
# GitHub Actions automatically uses headless mode
# No browser windows possible in CI environment
```

## 🎯 **Key Principles**

1. **Default = Headless**: All default commands run headless
2. **Explicit = Headed**: Only explicitly named commands open browsers
3. **Safe Options**: Multiple ways to ensure headless mode
4. **Clear Warnings**: Commands that open browsers are clearly marked

## 🔧 **Configuration Files**

- `playwright.config.ts`: Main configuration with headless defaults
- `package.json`: Scripts with clear naming conventions
- `.github/workflows/ci.yml`: CI environment with explicit headless
- `scripts/test-headless.sh`: Safe test runner with extra protections

**Remember: If you see browser windows during E2E tests, something went wrong!** 🚨
