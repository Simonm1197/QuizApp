var path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "final"),
        filename: "bundle.js",
        publicPath: '/',
    },



    module: {
        rules:
            [
                {
                    test: /\.jsx?$/,
                    exclude: /node.modules/,
                    use: "babel-loader",
                },

                {
                    test: /\.scss$/,
                    exclude: /node.modules/,
                    use: ['style-loader','css-loader','postcss-loader','sass-loader'],
                    
                }
            ],
    },


    plugins: [new HtmlWebpackPlugin({
        template: "./Public/index.html",
        filename: "index.html",
    })],


    resolve: {
        extensions: ['.js','.jsx', '.json'],
    },

    mode: "development",
    devServer: {
        port: "2001",
        open: true,
        historyApiFallback: true,
    },
};