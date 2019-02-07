const merge = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');

const common = require('./webpack.common.js');

dotenv.config();

module.exports = merge(common.config, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: common.BUILD_DIR,
		hot: true,
		inline: true,
		open: true,
		publicPath: '/',
		historyApiFallback: true
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin()
    ]
});
