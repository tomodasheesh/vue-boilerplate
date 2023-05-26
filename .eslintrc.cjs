/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-required-prop-with-default': ['error'],
    'prettier/prettier': [
      'warn',
      {
        singleAttributePerLine: true,
        endOfLine: 'auto'
      }
    ],
    'vue/attributes-order': [
      'warn',
      {
        alphabetical: true
      }
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
