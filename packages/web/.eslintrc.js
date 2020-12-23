export default {
  "env": {
    "browser": true,
    // "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-base",
    "eslint:recommended",
    "prettier",
    // "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "no-unused-vars": "warn"
  }
};
