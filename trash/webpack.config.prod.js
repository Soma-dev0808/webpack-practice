// build-utilsで環境に合わせてのwebpack.config.jsを作成したので、ゴミ箱に入れている。
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    // Hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack bundled Javascript Project',
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true, // Hot reload
    },
    devtool: 'source-map',
};
