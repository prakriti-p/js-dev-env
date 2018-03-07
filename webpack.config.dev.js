import path from 'path';

export default {
  debug: true,
  devtool: "inline-source-map", //Don't understand
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //possible options - 'node'
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']},
    ]
  }
}
