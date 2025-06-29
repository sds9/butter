#!/bin/bash
# VS Code Vitest Node.js wrapper script
# This ensures the correct Node.js version is used

# Load NVM if available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    
    # Use the Node version specified in .nvmrc if it exists
    if [ -f ".nvmrc" ]; then
        nvm use
    fi
fi

# Execute node with all passed arguments
exec node "$@"
