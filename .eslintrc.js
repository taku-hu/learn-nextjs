module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['import'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json']
      },
      typescript: {
        config: 'tsconfig.json',
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always']
  }
}
