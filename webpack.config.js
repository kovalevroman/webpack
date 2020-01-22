const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home'
  },
  watch: true,
  devtool: NODE_ENV === 'development' ? 'source-map' : null,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
    })
  ]

};
