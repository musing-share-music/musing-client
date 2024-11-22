import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        createDefaultProgram: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'error',

      /* import 규칙 */
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: true,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
            },
            {
              pattern: 'app/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'shared/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '#/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['#/**'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
