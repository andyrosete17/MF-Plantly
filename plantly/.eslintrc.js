module.exports = {
  extends: [
    'expo',
    'plugin:prettier/recommended', // Integra Prettier con ESLint
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['prettier', 'react-native'],
  rules: {
    'react-native/no-unused-styles': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        trailingComma: 'none',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 90,
        arrowParens: 'avoid',
        quoteProps: 'as-needed',
        jsxSingleQuote: false
      }
    ]
  }
};
