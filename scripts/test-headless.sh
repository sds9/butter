#!/bin/bash

# Safe E2E test runner that ensures headless mode
# This script will never open browser windows

echo "🎭 Running E2E tests in headless mode..."
echo "⚠️  This will NOT open any browser windows"
echo ""

# Set environment variables to force headless mode
export PLAYWRIGHT_HEADLESS=true
export CI=true

# Run a simple smoke test first
echo "🔬 Running smoke test..."
npx playwright test e2e/smoke-tests.spec.ts --project=chromium --workers=1 --reporter=line

if [ $? -eq 0 ]; then
    echo "✅ Smoke test passed - no browser windows should have opened!"
else
    echo "❌ Smoke test failed - but still no browser windows should have opened"
fi

echo ""
echo "💡 To run with visible browsers for debugging, use:"
echo "   npm run e2e:headed"
echo "   npm run e2e:debug"
