module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['react', '@typescript-eslint','import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      }
    ],
    "import/prefer-default-export": "off",
    "dot-notation": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off"

  },
  overrides: [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off",
        "react/jsx-no-bind": "off"
      }
    }
  ]
};