module.exports = [
  {
    ignores: [
      '**/cucumber-report/assets/js/*.min.js',
      '**/cucumber-report/assets/js/jquery-3.2.1.min.js',
      '**/cucumber-report/assets/js/bootstrap.min.js'
    ],
  },
  {
    files: ['cypress/**/*.js', '*.js'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        define: 'readonly',
        jQuery: 'readonly',
        r: 'readonly',
        g: 'readonly',
        b: 'readonly',
        document: 'readonly',
        window: 'readonly',
        cy: 'readonly',
        require: 'readonly',
        module: 'readonly',
        config: 'readonly'
      }
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-useless-escape': 'error',
      'no-cond-assign': 'error',
      'no-redeclare': 'error',
      'no-prototype-builtins': 'error',
      'no-empty': 'error',
      'no-control-regex': 'error',
      'no-self-assign': 'error'
    },
    ignores: [
      'cypress/cucumber-report/assets/js/*.min.js',
      'cypress/cucumber-report/assets/js/jquery-3.2.1.min.js',
      'cypress/cucumber-report/assets/js/bootstrap.min.js'
    ]
  },
  {
    files: ['**/*.min.js'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-useless-escape': 'off',
      'no-cond-assign': 'off',
      'no-redeclare': 'off',
      'no-prototype-builtins': 'off',
      'no-empty': 'off'
    }
  }
]