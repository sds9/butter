#!/bin/bash

# Project Setup Script
# This script sets up the development environment

echo "🔧 Setting up development environment..."

# Load NVM if available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "📦 Loading NVM..."
    source "$HOME/.nvm/nvm.sh"
    
    # Use the Node version specified in .nvmrc if it exists
    if [ -f ".nvmrc" ]; then
        echo "🔄 Using Node version from .nvmrc..."
        nvm use
    else
        echo "ℹ️  No .nvmrc file found, using current Node version"
    fi
else
    echo "⚠️  NVM not found, using system Node version"
fi

# Show current Node and npm versions
echo "📋 Current versions:"
echo "   Node: $(node --version)"
echo "   npm: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete! You can now start developing."
echo ""
echo "📚 Available commands:"
echo "   npm run dev     - Run development checks"
echo "   npm test        - Run tests in watch mode"
echo "   npm run build   - Build the project"
echo "   npm run lint    - Lint and fix code"
