// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const mode =
//   process.env.NODE_ENV === "production" ? "production" : "development";
// module.exports = {
//   entry: "./components/main.js",
//   mode,
//   module: {
//     rules: [
//       { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   devtool:
//     process.env.NODE_ENV === "production" ? "hidden-source-map" : "source-map",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//     clean: true,
//     scriptType: "text/javascript",
//   },
//   resolve: {
//     extensions: [".js"],
//   },
//   optimization: {
//     minimizer: ["...", new CssMinimizerPlugin()],

//     plugins: [
//       new CopyPlugin({
//         patterns: [
//           { from: "img", to: "img" },
//           { from: "fonts", to: "fonts" },
//         ],
//       }),
//       new MiniCssExtractPlugin(),
//     ],
//   },
// };

// вот здесь вернуть всё обратно/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  entry: "./components/main.js",
  mode,
  target: "node",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  devtool:
    process.env.NODE_ENV === "production" ? "hidden-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    scriptType: "text/javascript",
  },
  resolve: {
    extensions: [".js"],
    fallback: {
      fs: require.resolve("fs"),
      tls: require.resolve("tls"),
      net: require.resolve("net"),
      path: require.resolve("path"),
      zlib: require.resolve("zlib"),
      http: require.resolve("http"),
      https: require.resolve("https"),
      stream: require.resolve("stream"),
      crypto: require.resolve("crypto"),
      buffer: require.resolve("buffer"),
      "crypto-browserify": require.resolve("crypto-browserify"),
      os: false,
      child_process: false,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "fonts", to: "fonts" },
      ],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
