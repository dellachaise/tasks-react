const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })]
};
