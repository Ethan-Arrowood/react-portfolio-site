var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!materialize-css/dist/js/materialize.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: "app/styles/app.scss",
      Main: "app/components/Main.jsx",
      Navigation: "app/components/Navigation.jsx",
      Home: "app/components/Home.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/materialize-css/sass')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
