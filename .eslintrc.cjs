/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  rules: {
    'vue/require-v-for-key':0,
    'vue/no-unused-vars': ['warn', {
      'ignorePattern': '^_',
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': {
        'max': 3,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-on-event-hyphenation': ['error', 'never', {
      'autofix': true,
    }],
    'indent': ['warn', 2],
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'no-unused-vars': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'eqeqeq': ['error', 'always'],
    'object-shorthand': ['error', 'properties'],
    'no-multiple-empty-lines': ['warn', { max: 3 }],

    // @stylistic
    '@stylistic/js/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    '@stylistic/js/arrow-spacing': ['error', { 'before': true, 'after': true }],
    '@stylistic/js/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/js/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    '@stylistic/js/semi-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/js/space-before-blocks': ['error', { 'functions': 'always' }],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/spaced-comment': ['error', 'always'],

    // O:
    'import-helpers/order-imports': [
      'error',
      { // example configuration
        newlinesBetween: 'never',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
  ],
  plugins: [
    '@stylistic/js',
    'eslint-plugin-import-helpers',
  ],
  ignorePatterns: ['**/vendor/**'],
  globals: {
    ElNotification: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
};
