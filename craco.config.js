const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@pages': './src/pages',
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#7126B5' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postOptions: {
      plugins: [require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer')]
    }
  }
};
