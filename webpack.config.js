const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //公開時にはproductionにすると出力後dist内のapp.jsを圧縮できる
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, "src/app.tsx"),
  //出力先
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            // loader: "babel-loader",
            loader: "ts-loader"
            // options: {
            //   presets: ["@babel/preset-env", "@babel/preset-react"],
            // },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              //ここ書かないとcss内でのurl()を変換してくれなくなるらしい
              url: true
            }
          }
          , 
        ],

      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|tff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  //ローカルでの開発環境に関する項目
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    //サーバー起動時に自動的に画面が立ち上がる
    open: true,
    port: 8000
  },
};