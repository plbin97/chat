const path = require('path');
module.exports = {
    mode: "production",
    devtool: "source-map", // Enable source map for debugging
    devServer: {
        contentBase: './public',
        filename: 'chat.js',
        index: 'index.html',
        publicPath: '/dist/',
        liveReload: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        writeToDisk: true
    },
    entry: ['babel-polyfill', './src/index.js'],  // Entry file

    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: 'chat.js',
    },
    module: {
        rules: [
            { // model for sass
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        publicPath: './dist/'
                    }
                }
            }
        ]
    },
};