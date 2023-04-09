const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "todoAdd",
      library: {
        type: "var",
        name: "todoAdd",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./TodoAdd": "./src/features/TodoAdd",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};
