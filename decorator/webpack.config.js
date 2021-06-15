const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const config = {
  entry: './index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader"
            // options: {
            //   // injectType: "singletonStyleTag"
            //   // injectType: "linkTag"
            // }
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
module.exports = config;