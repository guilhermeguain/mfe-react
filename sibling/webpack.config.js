const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const projectPackage = require("./package.json");

const sharedDependencies = () => {
  const dependencies = Object.keys(projectPackage.dependencies);

  return dependencies.reduce((acc, dependency) => {
    acc[dependency] = {
      singleton: true,
      requiredVersion: false,
      eager: true,
    };

    return acc;
  }, {});
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    watchFiles: ["src/**/*"],
    static: path.join(__dirname, "dist"),
    port: 3008,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[a-c]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "sibling",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/components/Button/",
      },
      shared: sharedDependencies(),
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
