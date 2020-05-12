module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    'react/prefer-stateless-function': [2],
    'react/prop-types': 0,
    'react/prefer-stateless-function': [2],
    'react/state-in-constructor': [2, "never"],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
};
