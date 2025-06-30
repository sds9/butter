---
sidebar_position: 2
---

# Examples

Here are some practical examples of using Butter in your AWS CDK applications.

## Basic Setup

The simplest way to get started with Butter:

```typescript
import { Butter } from 'butter';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class SimpleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a basic Butter construct
    const butter = new Butter(this, 'SimpleButter');
  }
}
```

## Custom Configuration

Configure Butter with custom properties:

```typescript
import { Butter, ButterProps } from 'butter';

export class ConfiguredStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const butterProps: ButterProps = {
      description: 'Production Butter instance',
      enableAdvancedFeatures: true,
    };

    const butter = new Butter(this, 'ProductionButter', butterProps);

    // Get configuration summary
    const summary = butter.getSummary();
    console.log(`Created Butter: ${summary.description}`);
  }
}
```

## Multiple Environments

Set up Butter for different environments:

```typescript
import { Butter, ButterProps } from 'butter';

interface EnvironmentStackProps extends StackProps {
  environment: 'dev' | 'staging' | 'prod';
}

export class EnvironmentStack extends Stack {
  constructor(scope: Construct, id: string, props: EnvironmentStackProps) {
    super(scope, id, props);

    const butterProps: ButterProps = {
      description: `Butter for ${props.environment} environment`,
      enableAdvancedFeatures: props.environment === 'prod',
    };

    const butter = new Butter(this, `${props.environment}Butter`, butterProps);
  }
}

// Usage
new EnvironmentStack(app, 'DevStack', { environment: 'dev' });
new EnvironmentStack(app, 'ProdStack', { environment: 'prod' });
```

## Error Handling

Handle configuration validation:

```typescript
import { Butter, ButterProps } from 'butter';

export class ValidatedStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    try {
      const butter = new Butter(this, 'ValidatedButter', {
        description: 'A'.repeat(101), // This will throw an error
        enableAdvancedFeatures: true,
      });
    } catch (error) {
      console.error('Butter configuration error:', error.message);

      // Fall back to default configuration
      const butter = new Butter(this, 'FallbackButter', {
        description: 'Fallback Butter configuration',
      });
    }
  }
}
```

## Testing Your Butter Constructs

Example test using AWS CDK's testing utilities:

```typescript
import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib';
import { Butter } from 'butter';

describe('Butter Construct', () => {
  test('creates with default configuration', () => {
    const stack = new Stack();

    const butter = new Butter(stack, 'TestButter');
    const summary = butter.getSummary();

    expect(summary.description).toBe('Default Butter construct');
    expect(summary.advancedFeaturesEnabled).toBe(false);
  });

  test('creates with custom configuration', () => {
    const stack = new Stack();

    const butter = new Butter(stack, 'TestButter', {
      description: 'Test Butter',
      enableAdvancedFeatures: true,
    });

    const summary = butter.getSummary();
    expect(summary.description).toBe('Test Butter');
    expect(summary.advancedFeaturesEnabled).toBe(true);
  });
});
```

## Next Steps

- Explore the [API Reference](/api-reference) for complete documentation
- Check out the [TypeDoc API docs](/docs/api) for detailed method signatures
- Join the community discussions on [GitHub](https://github.com/your-username/butter)
