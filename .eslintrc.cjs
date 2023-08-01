module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:tailwindcss/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'multiline-ternary': 'off'
  }
}
