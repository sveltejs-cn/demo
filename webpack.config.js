const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const entryPaths = glob.sync('./src/**/index.entry.js');
const entries = entryPaths.reduce((prev, cur) => {
	prev[cur.replace(/\.\/src\/(.+?)\/index\.entry\.js$/, '$1')] = cur;
	return prev;
}, {});
console.log(entries);

module.exports = {
	entry: entries,
	resolve: {
		extensions: ['.js', '.svelte']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	].concat(Object.keys(entries).map(entry => {
		return new HtmlWebpackPlugin({
			filename: entry + '.html',
			chunks: [entry]
		});
	})),
	devtool: prod ? false: 'source-map'
};
