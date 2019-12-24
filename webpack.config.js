const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const loaders = {
	ts: {
		test: /\.(ts|tsx|jsx)$/,
		use: ["babel-loader", "ts-loader"]
	},
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
	sass: {
		test: /\.sass$/,
		use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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

module.exports = function(env) {
	return {
		mode: env.ENVIRONMENT,
		target: "web",
		context: `${__dirname}/src/ts/`,
		devtool: "inline-source-map",
		entry: [
			path.join(__dirname, "src", "ts", "index.ts"),
			path.join(__dirname, "src", "style", "stylesheets", "main.sass")
		],
		output: {
			path: path.resolve(__dirname, "public"),
			filename: "main.min.js",
			publicPath: "/"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"]
		},
		module: {
			rules: [loaders.ts, loaders.sass]
		},
		devServer: {
			port: 9000,
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
