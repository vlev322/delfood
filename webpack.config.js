const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const loaders = {
	ts: {
		test: /\.(ts|tsx|jsx)$/,
		use: ["babel-loader", "ts-loader"]
	},
	styl: env => ({
		test: /\.styl$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					// you can specify a publicPath here
					// by default it uses publicPath in webpackOptions.output
					publicPath: "../",
					hmr: env === "development"
				}
			},
			"css-loader",
			"stylus-loader"
		]
	}),
	fonts: {
		test: /fonts+([\S]*)+.(woff|woff2|eot|ttf|svg|otf)$/,
		exclude: /\/node_modules\//,
		use: {
			loader: "file-loader",
			options: {
				name: "style/fonts/[name].[ext]"
			}
		}
	},
	img: {
		test: /img+([\S]*)+.(jpg|jpeg|gif|png|svg)$/,
		exclude: /\/node_modules\//,
		use: {
			loader: "file-loader",
			options: {
				name: "style/img/[name].[ext]"
			}
		}
	}
};

const entries = {
	ts: path.join(__dirname, "src", "ts", "index.ts"),
	styl: path.join(__dirname, "src", "style", "stylesheets", "main.styl")
};

module.exports = function(env) {
	return {
		mode: env.ENVIRONMENT,
		target: "web",
		context: `${__dirname}/src/ts/`,
		devtool: "inline-source-map",
		entry: [entries.ts, entries.styl],
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "bundle.min.js",
			publicPath: "/"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
		},
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
		},
		module: {
			rules: [loaders.ts, loaders.styl(env.ENVIRONMENT), loaders.fonts, loaders.img]
		},
		devServer: {
			hot: true,
			port: 9000,
			compress: true,
			contentBase: path.join(__dirname, "/"),
			hot: true,
			historyApiFallback: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, "/src/index.html")
			}),
			new MiniCssExtractPlugin({
				filename: "style/style.min.css"
			})
		]
	};
};
