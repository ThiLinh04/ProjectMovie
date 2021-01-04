const { addWebpackAlias, override } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    components: path.resolve(__dirname, './src/components'),
    assets: path.resolve(__dirname, './src/assets'),
    pages: path.resolve(__dirname, './src/pages'),
    core: path.resolve(__dirname, './src/core'),
    containers: path.resolve(__dirname, 'src/containers'),
  })
);
