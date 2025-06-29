#!/bin/bash
# Auto-open Docusaurus docs in VS Code Simple Browser

# Function to check if Docusaurus is running
check_docusaurus() {
    curl -s http://localhost:3000 > /dev/null 2>&1
}

# Wait up to 30 seconds for Docusaurus to be ready
echo "🔍 Checking if Docusaurus is running..."
for i in {1..30}; do
    if check_docusaurus; then
        echo "✅ Docusaurus is running!"
        echo "🌐 Opening in VS Code Simple Browser..."
        # Use VS Code CLI to open Simple Browser
        code --open-url http://localhost:3000
        exit 0
    fi
    echo "⏳ Waiting for Docusaurus... ($i/30)"
    sleep 1
done

echo "❌ Docusaurus is not running. Please start it manually with 'npm run docusaurus:start'"
exit 1
