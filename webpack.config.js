const path = require("path");
const PropertiesReader = require("properties-reader");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    //filename: "properties-reader.js",
    //library: "propertiesReader",
  },
  devServer: {
    historyApiFallback: true,
  },
  entry: path.join(__dirname, "/src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.(png|jpe?g|pdf|ico)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        //use: ["style-loader", "css-loader"],
        loader: ["css-loader", "style-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  externals: {
    Config: JSON.stringify(require("./bancoppel_enterprises.json")),
  },
};

/*
const path = require("path");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "App.js",
    path: path.join(__dirname, "/dist"),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
};
*/
