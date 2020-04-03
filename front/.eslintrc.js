module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base', "eslint:recommended" ,'prettier'
  ],
  plugins: ['react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "prettier/prettier": ["error"],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
}
