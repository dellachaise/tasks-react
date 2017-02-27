const webpackConfig = require("./webpack.config");


webpackConfig.module.rules.push(
    {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                }
            }
        ]
    }
);

module.exports = webpackConfig;
