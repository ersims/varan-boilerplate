module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  overrides: [
    // Client environment
    {
      files: ['src/client/**', 'test/client/**'],
      env: {
        browser: true,
      },
    },

    // Test environment
    {
      files: ['test/**', '**/*.test.*'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },

    // Dev dependencies
    {
      files: ['test/**', '**/*.test.*', 'types/**', 'webpack/**'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },

    // Non-transpiled content
    {
      files: ['webpack/**'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': [/node_modules/],
    'react/jsx-filename-extension': {
      extensions: ['.jsx', '.tsx'],
    },
  },
  rules: {
    // Replaced by typescript equivalent below
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disabled as named exports are maybe preferred
    'import/prefer-default-export': 0,

    'lines-between-class-members': 0,
    'no-dupe-class-members': 0,
    'no-restricted-syntax': [2, 'LabeledStatement', 'WithStatement'],
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,

    // React stuff
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'componentDidMount',
          'shouldComponentUpdate',
          'componentDidUpdate',
          'render',
          'componentWillUnmount',
        ],
      },
    ],
  },
};
