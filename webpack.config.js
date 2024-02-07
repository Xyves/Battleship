import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
      watch: false,
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  mode: isProduction ? "production" : "development",
  watchOptions: {
    ignored: /node_modules/, // Ignore watching node_modules for changes
  },
};

export default config;
