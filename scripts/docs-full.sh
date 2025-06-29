#!/bin/bash

# Comprehensive documentation build script with coverage and TypeDoc
# This script runs tests, generates coverage, copies to docs, generates TypeDoc, and starts Docusaurus

set -e

echo "🚀 Starting comprehensive documentation build..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Step 2: Build TypeScript
echo "🔨 Building TypeScript..."
npm run build

# Step 3: Run tests with coverage
echo "🧪 Running tests with coverage..."
npm run test:coverage

# Step 4: Copy coverage to docs
echo "📊 Copying coverage report to docs..."
npm run test:coverage:copy

# Step 5: Generate TypeDoc API documentation
echo "📚 Generating TypeDoc API documentation..."
npm run docusaurus:typedoc

# Step 6: Start Docusaurus
echo "🌐 Starting Docusaurus documentation server..."
npm run docusaurus:start

echo "✅ Documentation build complete!"
echo "📖 Documentation: http://localhost:3000/butter/"
echo "📊 Coverage: http://localhost:3000/butter/coverage/"
echo "🔗 API Docs: http://localhost:3000/butter/docs/api/"
