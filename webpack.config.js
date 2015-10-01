var webpack = require('webpack');

module.exports = {
	entry: './public/entry.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {stage: 0}}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }
        })
    ]
};