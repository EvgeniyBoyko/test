const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bundle.js',
    },
    module: {
        rules: [
            {
             test: /\.css$/i,
             use: ["style-loader", "css-loader"],
            },
            {
             test: /\.js$/,
             exclude: /node_modules/,
             use: ['babel-loader'],
            }
        ]
    },
    devServer: {
        port: 1488,
        open: true,
        stats: 'errors-only',
    },
    
};