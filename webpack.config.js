const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  context: __dirname + '/frontend/',
  entry: {
    home: './home',
    about: './about'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },
  watch: true,
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
    })
  ],

  resolve: {
    alias: {
      templates: './common/templates/'
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
