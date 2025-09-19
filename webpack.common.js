import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: path.resolve(__dirname, "./packages/common/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@shared': path.resolve(__dirname, "./packages/shared/src"),
      '@common': path.resolve(__dirname, "./packages/common/src"),
      '@sub-1': path.resolve(__dirname, "./packages/sub-1/src"),
      '@sub-2': path.resolve(__dirname, "./packages/sub-2/src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
