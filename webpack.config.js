const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
        }],
    },
};
