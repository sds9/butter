import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    // Enable TypeScript support
    globals: true,
    environment: 'node',

    // Test file patterns
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
    exclude: ['node_modules', 'cdk.out', 'coverage'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules',
        'cdk.out',
        'test',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
      ],
    },

    // Timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Reporter configuration
    reporters: ['verbose'],

    // Mock configuration
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,
  },

  // Resolve configuration for TypeScript and ESM
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './lib'),
    },
  },

  // ESM configuration
  esbuild: {
    target: 'es2022',
  },
});
