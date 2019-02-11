const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
    entry: {
        app: './src/index.js',
        vanilla: './src/vanilla.js'
    },
    output: {
        path: path.resolve(__dirname + "/dist/public"),
        filename: './js/[name].[chunkhash].js'
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            }, // end JS
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false
                    }
                }]
            }, // end html
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            sourceMap: true,
                            plugins: () => [autoprefixer]
                        } // end options
                    },
                    'resolve-url-loader',
                    "sass-loader?outputStyle=compressed&sourceMap"
                ]
            }, // end css
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    'file-loader?name=assets/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            }, // end image
            {
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use: "file-loader?name=assets/[name].[ext]"
            } // end files
        ] // end rule
    }, // end module
    plugins: [
        new CleanWebpackPlugin(['public/**/*.*', 'dist/**/*.*']),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css",
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/views/template.html",
            filename: "index.html",
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: "./src/views/template.html",
            filename: "vanilla.html",
            chunks: ['vanilla']
        })
    ]
};