const webpackConfig = require("./webpack.config"),
    webpack = require("webpack");

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new webpack.optimize.UglifyJsPlugin()
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
    }
);

module.exports = webpackConfig;
