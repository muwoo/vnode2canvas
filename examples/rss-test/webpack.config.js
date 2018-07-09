/**
 * @author muwoo
 * Date: 2018/7/2
 */
const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, './src')
        ],
        use: [{loader: path.join(__dirname, './canvas-style-loader')}
        ]
      }
    ]
  }
};
