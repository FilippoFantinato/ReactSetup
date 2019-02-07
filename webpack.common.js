"use strict";

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './public');

var config = {
	entry: APP_DIR + '/index.tsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				loader: 'ts-loader'
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: "thread-loader",
						options: {
						  workers: 2,
						  workerParallelJobs: 50,
						  workerNodeArgs: ['--max-old-space-size=1024'],
						  poolTimeout: 2000,
						  poolParallelJobs: 50,
						  name: "my-pool"
						}
					},
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new Dotenv()
	]
};

module.exports = {
	config: config,
	APP_DIR: APP_DIR,
	BUILD_DIR: BUILD_DIR
};
