const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    webpack = require("webpack");


module.exports = {
    entry: {
        app: "./src/app.js",
        vendor: ["react", "react-dom"]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
    ]
};
