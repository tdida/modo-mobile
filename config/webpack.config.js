const Dashboard = require("webpack-dashboard");
const DashboardPlugin = require("webpack-dashboard/plugin");
const dashboard = new Dashboard();

module.exports = {
  entry: "./components/index.tsx",
  output: {
    filename: "index.js",
    path: __dirname + "/lib"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./examples"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [new DashboardPlugin(dashboard.setData)],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
