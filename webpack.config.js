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
        loaders: [
           {
                test: /\.(jsx|js)$/,
                loader: ['react-hot-loader','babel-loader'],
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            }
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