const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './src/components/index.js',
	devtool: 'inline-source-map',
	output: {
		path : path.resolve(__dirname,'public'),
		filename : 'bundle.js'
	},
	devServer : {
		inline: true,
		port: 8080,
		hot: true,
		historyApiFallback: true
	},
	resolve : {
		extensions : ['.js','.jsx','.json']
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin()
	],
	module : {
		rules : [
			{
				enforce : 'pre',
				test : /\.js$/,
				loader : 'eslint-loader',
				exclude : /(node_modules)/
			},
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /(node_modules)/,
				query : {
                    presets : ['es2015','react']
                }
			},
			{
				test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
			},
			{
	        	test: /\.(png|svg|jpg|gif)$/,
	        	use: [
	        		'file-loader'
	        	]
	       	}
		]
	}
}