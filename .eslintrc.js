module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-shadow': 'error',
    'react/no-unescaped-entities': 'off',
    eqeqeq: 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    '@next/next/no-img-element': 'off',
  },
};
