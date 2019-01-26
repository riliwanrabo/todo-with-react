const path = require("path");
const hwp = require("html-webpack-plugin");
const mcep = require("mini-css-extract-plugin");

const hwp_plugin = new hwp({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

const mcep_plugin = new mcep({
  filename: "main.css"
});

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname)
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /.(c|sc|sa)ss$/,
        use: ["style-loader", mcep.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [hwp_plugin, mcep_plugin],
  devServer: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
