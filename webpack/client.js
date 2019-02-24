const path = require('path');
const client = require('varan/webpack/client');
const pwaManifest = {
  name: 'Varan Progressive Web App',
  short_name: 'VaranPWA',
  description: 'My awesome Progressive Web App using Varan!',
  background_color: '#EFEFEF',
  theme_color: '#59C3C3',
  icons: [
    {
      src: path.resolve(__dirname, '../src/assets/images/Logo.png'),
      sizes: [96, 192, 512, 1024],
    },
  ],
};

// Exports
module.exports = options => client({ ...options, pwaManifest });
