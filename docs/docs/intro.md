---
sidebar_position: 1
---

# Getting Started with Butter

Welcome to **Butter**, a comprehensive AWS CDK construct library designed to make your cloud infrastructure development smoother than butter! 🧈

## What is Butter?

Butter is a TypeScript-based AWS CDK construct library that provides high-level abstractions for common AWS infrastructure patterns. It's built with developer experience in mind, offering:

- 🚀 **Simple APIs** - Clean, intuitive interfaces for complex AWS services
- 📚 **Comprehensive Documentation** - Full TypeDoc API documentation and guides
- 🧪 **Well Tested** - Extensive test coverage with Vitest
- 🔧 **TypeScript First** - Full type safety and IntelliSense support
- 📦 **Modular Design** - Use only what you need

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) v2.x
- An AWS account and configured credentials

### Installation

```bash
npm install butter
```

### Basic Usage

```typescript
import { Butter, ButterProps } from 'butter';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const butter = new Butter(this, 'MyButter', {
      description: 'My awesome Butter construct',
      enableAdvancedFeatures: true
    });
  }
}
```

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
