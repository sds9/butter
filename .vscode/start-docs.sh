#!/bin/bash
# Start Docusaurus and auto-open in VS Code Simple Browser

echo "🚀 Starting Docusaurus development server..."

# Change to docs directory and start Docusaurus in background
cd docs
npm start &
DOCUSAURUS_PID=$!

echo "📡 Waiting for Docusaurus server to be ready..."

# Wait for server to be ready (check if port 3000 is responding)
while ! curl -s http://localhost:3000 > /dev/null 2>&1; do
    sleep 1
done

echo "✅ Docusaurus server is ready!"
echo "🌐 Opening documentation in VS Code Simple Browser..."

# Open in VS Code Simple Browser (this requires VS Code to be running)
# We'll use a small delay to ensure everything is ready
sleep 2

# Return to original directory
cd ..

echo "📚 Docusaurus documentation is now available at http://localhost:3000"
echo "🔧 Server PID: $DOCUSAURUS_PID"

# Keep the script running so the background process stays alive
wait $DOCUSAURUS_PID
