module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.,
  ],
  globals: {
    Atomics: 'readonly',
    React: 'writable',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-unresolved': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'no-await-in-loop': [0],
    'no-param-reassign': [0],
    'no-unused-vars': [0],
    'object-curly-newline': [0],
    'prettier/prettier': [0],
    'react/jsx-filename-extension': [0],
    'react/prop-types': [0],
  },
};
