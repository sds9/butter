---
title: API Reference
description: Complete API documentation for Butter
---

# API Reference

The complete API documentation for Butter is generated using TypeDoc and provides detailed information about all classes, interfaces, methods, and properties.

## Browse the API Documentation

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <a 
    href="/api" 
    className="button button--primary button--lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Full API Documentation
  </a>
</div>

## Quick Reference

### Main Classes

- **`Butter`** - The main construct class for creating Butter resources
- **`ButterProps`** - Configuration interface for Butter construct

### Key Methods

- **`getSummary()`** - Get a summary of the construct's configuration
- **`constructor()`** - Create a new Butter construct instance

## Code Examples

### Basic Usage

```typescript
import { Butter } from 'butter';

const butter = new Butter(this, 'MyButter', {
  description: 'My Butter construct',
  enableAdvancedFeatures: false
});
```

### Advanced Configuration

```typescript
import { Butter, ButterProps } from 'butter';

const props: ButterProps = {
  description: 'Advanced Butter setup',
  enableAdvancedFeatures: true
};

const butter = new Butter(this, 'AdvancedButter', props);
const summary = butter.getSummary();
console.log(summary);
```

## TypeScript Support

Butter is written in TypeScript and provides full type definitions. Your IDE will provide:

- **IntelliSense** - Auto-completion for all methods and properties
- **Type Checking** - Compile-time error checking
- **Documentation** - Inline documentation in your editor

## Need Help?

- Check the [API Documentation](/api) for detailed method signatures
- Look at the [examples](/docs/examples) for common use cases
- Report issues on [GitHub](https://github.com/your-username/butter/issues)
