const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
      		filename: 'style.css',
    	}) 
	]



};