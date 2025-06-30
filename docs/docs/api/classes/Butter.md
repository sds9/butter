[butter](../index.md) / Butter

# Class: Butter

Defined in: [index.ts:73](https://github.com/sds9/butter/blob/main/lib/index.ts#L73)

Butter is a powerful AWS CDK construct that provides...

## Public

## Examples

Basic usage:

```typescript
import { Butter, ButterProps } from './lib/index';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const butter = new Butter(this, 'MyButter', {
      description: 'My awesome Butter construct',
      enableAdvancedFeatures: true,
    });
  }
}
```

Advanced usage with custom configuration:

```typescript
const butter = new Butter(this, 'AdvancedButter', {
  description: 'Advanced Butter with custom settings',
  enableAdvancedFeatures: true,
});
```

## Extends

- `Construct`

## Constructors

### Constructor

> **new Butter**(`scope`, `id`, `props`): `Butter`

Defined in: [index.ts:103](https://github.com/sds9/butter/blob/main/lib/index.ts#L103)

Creates a new Butter construct.

#### Parameters

##### scope

`Construct`

The scope in which to define this construct

##### id

`string`

The scoped construct ID

##### props

[`ButterProps`](../interfaces/ButterProps.md) = `{}`

Configuration properties for the construct

#### Returns

`Butter`

#### Throws

When invalid configuration is provided

#### Example

```typescript
const butter = new Butter(this, 'MyButter', {
  description: 'My Butter construct',
  enableAdvancedFeatures: true,
});
```

#### Overrides

`Construct.constructor`

## Methods

### validateConfiguration()

> `private` **validateConfiguration**(`props`): `void`

Defined in: [index.ts:129](https://github.com/sds9/butter/blob/main/lib/index.ts#L129)

Validates the provided configuration.

#### Parameters

##### props

[`ButterProps`](../interfaces/ButterProps.md)

The configuration to validate

#### Returns

`void`

#### Private

#### Throws

When configuration is invalid

---

### createResources()

> `private` **createResources**(): `void`

Defined in: [index.ts:141](https://github.com/sds9/butter/blob/main/lib/index.ts#L141)

Creates the AWS resources for this construct.

#### Returns

`void`

void

#### Private

---

### enableAdvancedFeatures()

> `private` **enableAdvancedFeatures**(): `void`

Defined in: [index.ts:156](https://github.com/sds9/butter/blob/main/lib/index.ts#L156)

Enables advanced features for this construct.

#### Returns

`void`

void

#### Private

---

### getSummary()

> **getSummary**(): `object`

Defined in: [index.ts:174](https://github.com/sds9/butter/blob/main/lib/index.ts#L174)

Gets a summary of this Butter construct's configuration.

#### Returns

`object`

A summary object containing key configuration details

##### description

> **description**: `string`

##### advancedFeaturesEnabled

> **advancedFeaturesEnabled**: `boolean`

#### Public

#### Example

```typescript
const butter = new Butter(this, 'MyButter');
const summary = butter.getSummary();
console.log(summary.description); // "Default Butter construct"
```

## Properties

### description

> `readonly` **description**: `string`

Defined in: [index.ts:78](https://github.com/sds9/butter/blob/main/lib/index.ts#L78)

The description of this Butter construct

---

### advancedFeaturesEnabled

> `readonly` **advancedFeaturesEnabled**: `boolean`

Defined in: [index.ts:84](https://github.com/sds9/butter/blob/main/lib/index.ts#L84)

Whether advanced features are enabled
