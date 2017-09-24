var webpack = require('webpack');
var jquery = require('jquery');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            exclude: [/node_modules/, /public/],
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "autoprefixer-loader"},
                {loader: "less-loader"}
            ]
        },
            {
                test: /\.(jsx|js)$/,
                loader: ['react-hot-loader', 'babel-loader'],
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    resolve: {
        modules: ["node_modules"]
    }
}