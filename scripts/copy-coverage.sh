#!/bin/bash

# Script to copy Vitest coverage reports to Docusaurus static directory

set -e

echo "🧪 Copying Vitest coverage report to Docusaurus..."

# Ensure coverage exists
if [ ! -d "coverage" ]; then
    echo "❌ No coverage directory found. Run 'npm run test:coverage' first."
    exit 1
fi

# Ensure docs static directory exists
mkdir -p docs/static/coverage

# Copy coverage files to Docusaurus static directory
cp -r coverage/* docs/static/coverage/

echo "✅ Coverage report copied to docs/static/coverage/"
echo "📊 Access it at: http://localhost:3000/butter/coverage/"
