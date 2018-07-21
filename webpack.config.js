var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader','sass-loader']
        })
      },{
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader','postcss-loader',]  
          })
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options:{
              name : "fonts/[name].[ext]",
          },
        },
      },{
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options:{
              name : "img/[name].[ext]",
          },          
        }
      },       
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename:'style.css'})
  ]
};