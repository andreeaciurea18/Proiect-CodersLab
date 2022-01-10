const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entryPath = ".";

module.exports = {
    entry: ["whatwg-fetch",`./${entryPath}/js/app.js`],
    mode: "development",
    output: {
        filename: "build/out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },

    devServer: {
        static: {
            directory: path.join(__dirname, `${entryPath}`),
            watch: true
        },
        compress: true,
        hot: true,
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};