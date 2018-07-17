/**
 * @author muwoo
 * Date: 2018/7/2
 */
module.exports = {
  output: {
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
