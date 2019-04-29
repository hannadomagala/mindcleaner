const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../stylesheets/styles.css"
    })
  ]
};
