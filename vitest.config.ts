import path from 'path';

import { defineConfig } from 'vitest/config';

// Vitest configuration for single project (not workspace)
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
      reporter: ['text', 'json', 'html', 'lcov', 'text-summary'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules',
        'cdk.out',
        'test',
        'docs',
        'docs-md',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        'scripts/**',
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
      // Coverage thresholds
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      // Include source files for coverage even if not tested
      all: true,
      include: ['lib/**/*.ts'],
      // Watermarks for coverage colors
      watermarks: {
        statements: [50, 80],
        functions: [50, 80],
        branches: [50, 80],
        lines: [50, 80],
      },
    },

    // Timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Reporter configuration
    reporters: ['verbose'],

    // Better error reporting for VS Code
    outputFile: {
      json: './coverage/test-results.json',
    },

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
