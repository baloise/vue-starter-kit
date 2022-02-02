/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
}

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/typescript/recommended',
//     '@vue/prettier',
//   ],
//   globals: {
//     defineProps: 'readonly',
//     defineEmits: 'readonly',
//     defineExpose: 'readonly',
//     withDefaults: 'readonly',
//   },
//   parserOptions: {
//     ecmaVersion: 2020,
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     '@typescript-eslint/ban-types': 'off',
//   },
//   overrides: [
//     {
//       files: [
//         '**/__tests__/*.{j,t}s?(x)',
//         '**/tests/unit/**/*.spec.{j,t}s?(x)',
//       ],
//       env: {
//         jest: true,
//       },
//     },
//   ],
// }
