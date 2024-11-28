import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json'
    }
  },
  plugins: {
    '@typescript-eslint': ts,
    ts
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...ts.configs['recommended'].rules
  }
};