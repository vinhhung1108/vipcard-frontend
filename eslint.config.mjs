import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const typescriptEslint = await import('@typescript-eslint/eslint-plugin');
const react = await import('eslint-plugin-react');
const reactHooks = await import('eslint-plugin-react-hooks');
const prettier = await import('eslint-plugin-prettier');

export default fixupConfigRules([
  js.configs.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
  }),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint.default,
      react: react.default,
      'react-hooks': reactHooks.default,
      prettier: prettier.default,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
]);
