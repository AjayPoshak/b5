const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders : [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/}
            // {test: /\.css/, loaders: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [HtmlWebPackPluginConfig]
}
