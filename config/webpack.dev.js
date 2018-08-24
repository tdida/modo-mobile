const path = require("path");
const chalk = require("chalk");
const helpers = require("./helpers");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const projectName = "examples";
const pkg = require(path.join(process.cwd(), "package.json"));

module.exports = {
  mode: "development",
  entry: {
    main: helpers.root("./" + projectName + "/index.tsx")
  },
  output: {
    path: helpers.root("build"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[id].chunk.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "examples/",
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  resolve: {
    modules: [helpers.root(projectName), helpers.root("./node_modules")],
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    alias: {
      [pkg.name]: process.cwd()
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin((percentage, msg, addInfo) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write(`☺☺☺  ${chalk.magenta(msg)} (${chalk.magenta(addInfo)})`);
        stream.clearLine(1);
      } else if (percentage === 1) {
        console.log(
          chalk.green("\n ☺☺☺ webpack: bundle build is now finished.")
        );
      }
    }),
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`),
    new HtmlWebpackPlugin({
      title: "Modo Mobile",
      chunksSortMode: function(a, b) {
        const entryPoints = ["vendor", "main"];
        return (
          entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0])
        );
      },
      favicon: "./favicon.ico",
      stat: false,
      inject: "body",
      template: "./" + projectName + "/index.html",
      hash: true
    })
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(tsx|ts|js|jsx)$/,
            loaders: ["babel-loader", "ts-loader"],
            exclude: /node_modules/
          },
          {
            test: /\.(bmp|gif|jpe?g|png)$/,
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]"
            }
          },
          {
            test: /\.(less|css)$/,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  ident: "postcss",
                  plugins: () => [
                    autoprefixer({
                      browsers: [
                        "last 2 versions",
                        "Firefox ESR",
                        "> 1%",
                        "ie >= 9",
                        "iOS >= 8",
                        "Android >= 4"
                      ]
                    }),
                    cssnano({
                      preset: "default",
                      zindex: false
                    })
                  ]
                }
              },
              {
                loader: "less-loader"
              }
            ]
          },
          {
            exclude: [/\.(js|jsx|tsx|ts)$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
