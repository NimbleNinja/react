module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-alert': 0,
    'no-console': 0,
    'no-constant-condition': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'consistent-return': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': [{ exceptMethods: ['render'] }],
  },
};
