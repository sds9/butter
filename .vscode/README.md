# VS Code Workspace Configuration

This folder contains VS Code workspace configuration files that enhance the development experience for the Butter project.

## Auto-Documentation Setup

When you open this workspace in VS Code, the following will happen automatically:

1. **Project Setup**: The setup script will run to configure Node.js (via nvm) and install dependencies
2. **Documentation Generation**: TypeDoc API documentation will be generated from the source code
3. **Docusaurus Server**: The Docusaurus development server will start automatically
4. **Browser Opening**: The documentation will automatically open in VS Code's Simple Browser

## Files

- `settings.json` - VS Code workspace settings including Vitest configuration, formatting, and browser settings
- `tasks.json` - Automated tasks including setup, testing, and documentation
- `launch.json` - Debug configurations for running and debugging tests
- `open-docs.sh` - Script to automatically open documentation in Simple Browser
- `node-wrapper.sh` - Node.js wrapper for ensuring correct nvm version
- `start-docs.sh` - Alternative documentation startup script

## Manual Commands

If you need to manually control the documentation:

- **Start Documentation**: Run the "Start Docusaurus" task or use `Cmd+Shift+P` → "Tasks: Run Task" → "Start Docusaurus"
- **Open Documentation**: Run the "Auto-Open Documentation" task or use the command palette
- **Generate API Docs**: Run `npm run docs:full` in the terminal

## Documentation URLs

- **Main Documentation**: <http://localhost:3000>
- **API Reference**: <http://localhost:3000/api>
- **Coverage Reports**: Available via the "Serve Coverage Report" task

## Troubleshooting

If the documentation doesn't open automatically:

1. Check that Docusaurus is running: <http://localhost:3000>
2. Manually run the "Auto-Open Documentation" task
3. Use `code --open-url http://localhost:3000` in the terminal
4. Check the terminal output for any errors
