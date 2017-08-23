const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: ['babel-polyfill', './src/components/index.jsx'],

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
				test : [/\.js?$/,/\.jsx?$/],
				loader : 'babel-loader',
				exclude : /(node_modules)/,
				query : {
                    presets : ['es2015','react']
                }
			},
			{
				test: [/\.css$/,/\.less$/],
        		use: [ 'style-loader', 'css-loader', 'less-loader' ]
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