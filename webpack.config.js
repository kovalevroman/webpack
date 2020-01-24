const webpack = require('webpack');
const path = require('path');

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
  ],

  resolve: {
    alias: {
      templates: path.resolve(__dirname, 'common/templates/')
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {"targets": "> .5% and last 2 versions"}
              ]
            ],
          }
        }
      }
    ]
  }

};
