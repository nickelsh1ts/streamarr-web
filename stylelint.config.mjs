/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    '@dreamsicle.io/stylelint-config-tailwindcss',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'plugin',
          'theme',
          'variant',
          'utility',
          'tailwind',
          'apply',
          'custom-variant',
        ],
      },
    ],
  },
};
