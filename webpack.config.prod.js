const webpackConfig = require("./webpack.config"),
    webpack = require("webpack"),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    }),
    new ExtractTextPlugin("[name].css"),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessorOptions: { discardComments: { removeAll: true } }
    })
);

webpackConfig.module.rules.push(
    {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }
        ]
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ 
            fallback: 'style-loader', 
            use: 'css-loader' 
        })
    }
);

module.exports = webpackConfig;
