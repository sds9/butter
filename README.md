# Butter - Batteries-Included TypeScript Development Environment

The point of this project is to demonstrate the nicest possible way to develop TypeScript (Node.js) with all of the nice-to-have VS Code extensions and settings fully configured.

This is a **complete, production-ready development environment** with:

- ✅ **TypeScript** with modern ES2022 features
- ✅ **Vitest** for fast, modern testing
- ✅ **ESLint** with TypeScript support and best practices
- ✅ **Prettier** for consistent code formatting
- ✅ **VS Code** fully configured with extensions and settings
- ✅ **Auto-formatting** on save and paste
- ✅ **Auto-linting** with fix-on-save
- ✅ **File nesting** for clean project structure
- ✅ **Comprehensive npm scripts** for all development tasks
- ✅ **Auto-setup on project open** - Automatically runs `nvm use` and `npm install`

## 🚀 Quick Start

**The easiest way:** Just open the project in VS Code! It will automatically:

1. Run `nvm use` (if NVM is available)
2. Install dependencies with `npm install`
3. Start running tests automatically

**Manual setup:**

```bash
# Run the setup script
npm run setup

# Or run setup manually
nvm use && npm install

# Run development check (lint + typecheck + test)
npm run dev

# Start developing with watch mode
npm run watch

# Run tests in watch mode
npm test
```

## 📁 Project Structure

This project demonstrates a TypeScript construct library that includes:

- `lib/index.ts` - Main library code with the `Butter` construct
- `test/butter.test.ts` - Test files using Vitest
- Full ESLint + Prettier + TypeScript configuration
- VS Code settings optimized for TypeScript development

## 🛠 Available Commands

### Setup

- `npm run setup` - **Project setup** (nvm use + npm install + status info)

### Development

- `npm run dev` - **Complete development check** (lint + typecheck + tests)
- `npm run watch` - Watch TypeScript files and compile on changes
- `npm run build` - Compile TypeScript to JavaScript

### Testing

- `npm test` - Run tests in watch mode (interactive)
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report

### Code Quality

- `npm run lint` - Run ESLint and auto-fix issues
- `npm run lint:check` - Check ESLint without fixing
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are formatted
- `npm run typecheck` - Run TypeScript type checking

### CI/CD

- `npm run ci` - **Complete CI check** (lint + format + typecheck + tests)

## 🎯 VS Code Integration

This project is fully configured for VS Code with:

### Installed Extensions

- **ESLint** - Real-time linting with auto-fix
- **Prettier** - Code formatting
- **Vitest** - Test runner integration

### Configured Features

- **Auto-Setup on Open** - Automatically runs `nvm use` and `npm install` when opening project
- **Format on Save** - Automatically format files when saving
- **Format on Paste** - Format pasted code
- **Auto-fix ESLint** - Fix linting issues on save
- **Auto-organize Imports** - Sort and organize imports on save
- **File Nesting** - Clean file explorer with related files grouped
- **TypeScript InlayHints** - Helpful type information inline
- **Integrated Testing** - Run tests directly from VS Code
- **Auto-Run Tests** - Tests automatically run when VS Code opens and on file changes
- **Test Debugging** - Debug tests directly in VS Code with breakpoints

### Available Tasks (Ctrl+Shift+P → "Tasks: Run Task")

- **Setup Project** - Run `nvm use` and `npm install` (auto-runs on open)
- **Manual Setup** - Manual project setup if auto-setup fails
- **Run Vitest** - Start test watcher
- **Run ESLint** - Lint and fix code
- **TypeScript Compile** - Build the project
- **Development Check** - Full quality check
- **CI Check** - Complete CI validation

## 🔧 Configuration Files

- `.eslintrc.json` - ESLint configuration with TypeScript support
- `.prettierrc.json` - Prettier formatting rules
- `tsconfig.json` - TypeScript compiler options
- `vitest.config.ts` - Vitest test configuration
- `.vscode/settings.json` - VS Code workspace settings
- `.vscode/tasks.json` - VS Code tasks for common operations

## 🎨 Code Style

This project uses:

- **Prettier** for consistent formatting
- **ESLint** for code quality and best practices
- **TypeScript strict mode** for type safety
- **Modern ES2022** features
- **Consistent import organization**

## 🧪 Testing

Tests are written with **Vitest**, which provides:

- ⚡ Lightning fast test execution
- 🔄 Watch mode with instant feedback
- 📊 Built-in coverage reporting
- 🎯 Modern assertion library
- 🔧 TypeScript support out of the box
- 🚀 **Auto-run on startup** - Tests run automatically when you open VS Code
- 🔍 **Auto-run on save** - Tests re-run whenever you save files
- 🐛 **Debug support** - Set breakpoints and debug tests directly in VS Code

## 📝 Example Usage

```typescript
import { Butter, ButterProps } from './lib/index.js';

// Use the Butter construct
const myButter = new Butter(scope, 'MyButter', {
  // Configure your construct
});
```

## 🚀 Getting Started with Your Own Project

1. **Clone or fork this repository**
2. **Update package.json** with your project details
3. **Modify lib/index.ts** with your code
4. **Add tests** in the test/ directory
5. **Run `npm run dev`** to verify everything works
6. **Start coding!** All the tooling is ready to go

This setup provides the ultimate TypeScript development experience with modern tools, comprehensive quality checks, and seamless VS Code integration.

Happy coding! 🎉
