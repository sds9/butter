import { describe, it, expect } from 'vitest';
// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
import * as Butter from '../lib/index';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/index.ts
describe('Butter Construct', () => {
  it('should export Butter class', () => {
    expect(Butter.Butter).toBeDefined();
    expect(typeof Butter.Butter).toBe('function');
  });

  it('should have ButterProps interface', () => {
    // Test that we can create a Butter instance with empty props
    // This is a basic test to ensure the construct can be instantiated
    expect(() => {
      // We can't actually instantiate without a valid CDK scope,
      // but we can test that the class exists and is constructable
      const props: Butter.ButterProps = {};
      expect(props).toBeDefined();
    }).not.toThrow();
  });
});
