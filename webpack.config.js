var path = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
        
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        })
    ]
}