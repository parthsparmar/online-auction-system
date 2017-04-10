module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "sourceType"  : "script",
    "globalReturn": true
  },
  "globals": {
    "requirejs": {},
    "require": {},
    "define": {},
    "window": {},
    "document": {}
  },
  "rules": {
    "key-spacing": ["error", {
      "align": "colon"
    }],
    "strict": ["error", "function"],
    "spaced-comment": ["error", "always", {
      "exceptions": ["/"]
    }],
    "max-len": ["error", {
      "code"                  : 150,
      "comments"              : 150,
      "ignoreTrailingComments": true,
      "ignoreUrls"            : true
    }],
    "no-unused-vars": ["error", {
      "args": "none",
    }],
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "prefer-template": 0,
    "no-throw-literal": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "object-shorthand": 0,
    "no-plusplus": 0,
    "no-lonely-if": 0,
    "no-param-reassign": 0,
    "no-var": "off",  // unless a transpiler is used
    "no-use-before-define": ["error", {
      "functions": false
    }],
    "prefer-arrow-callback": "off" // unless a transpiler is used
  }
};
