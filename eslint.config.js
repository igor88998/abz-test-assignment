import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import featureSliced from '@conarti/eslint-plugin-feature-sliced'

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'feature-sliced': featureSliced,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'feature-sliced/layers-slices': 'error',
      'feature-sliced/absolute-relative': 'error',
      'feature-sliced/public-api': 'error',
    },
    settings: {
      'feature-sliced': {
        layers: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'],
      },
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'feature-sliced/absolute-relative': 'off',
    },
  },
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'feature-sliced/absolute-relative': 'off',
    },
  }
)
