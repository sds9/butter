#!/bin/bash

# Ultimate Development Experience Script
# This script starts all development tools simultaneously

echo "🚀 Starting Ultimate Development Experience..."

# Start multiple processes in parallel
echo "📊 Starting TypeScript compiler in watch mode..."
npm run build:watch &

echo "🧪 Starting Vitest in watch mode..."
npm run test:watch &

echo "🔍 Starting ESLint in watch mode..."
npx eslint . --ext .ts,.js --watch &

echo "✅ All development tools are running!"
echo ""
echo "🎯 What's running:"
echo "  - TypeScript compiler (watch mode)"
echo "  - Vitest test runner (watch mode)"
echo "  - ESLint linter (watch mode)"
echo ""
echo "💡 Open your code in VS Code and start developing!"
echo "   All changes will be automatically:"
echo "   - ✅ Compiled"
echo "   - ✅ Tested"
echo "   - ✅ Linted"
echo "   - ✅ Formatted"
echo ""
echo "🛑 Press Ctrl+C to stop all processes"

# Wait for all background processes
wait
