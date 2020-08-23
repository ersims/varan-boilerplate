module.exports = {
  presets: ['varan'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        fileName: false,
        pure: true,
        transpileTemplateLiterals: true,
        "namespace": "v"
      },
    ],
  ],
  env: {
    dev: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: true,
            pure: true,
            transpileTemplateLiterals: true,
            "namespace": "v"
          },
        ],
      ],
    },
  },
};
