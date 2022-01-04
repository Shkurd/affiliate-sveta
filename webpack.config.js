const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `[name].bundle.${ext}` : `./${ext}/[name].[hash].bundle.${ext}`

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  ]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}


module.exports = {

  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  // entry: ['@babel/polyfill', './index.js'],
  entry: {
    'healthy-fit-happy': ['@babel/polyfill', './assets/js/healthy-fit-happy.js'],
    'privacy-policy': ['@babel/polyfill', './assets/js/privacy-policy.js'],
    'article01': ['@babel/polyfill', './assets/js/article01.js'],
    'article02': ['@babel/polyfill', './assets/js/article02.js'],
    'article03': ['@babel/polyfill', './assets/js/article03.js'],
    'coffee-tweak1': ['@babel/polyfill', './assets/js/coffee-tweak1.js']
    
  },

  output: {
    filename: 'assets/js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
	  hot: isDev,
  },
  plugins: [
    new CleanWebpackPlugin(),
    
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
     // chunks: ['main']
     chunks: ['healthy-fit-happy']
    }),
    new HTMLWebpackPlugin({
      filename: 'privacy-policy.html',
      template: 'privacy-policy.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
      chunks: ['privacy-policy']
    }),
    new HTMLWebpackPlugin({
      filename: 'article01.html',
      template: 'article01.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
      chunks: ['article01']
    }),
    new HTMLWebpackPlugin({
      filename: 'article02.html',
      template: 'article02.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
      chunks: ['article02']
    }),
    new HTMLWebpackPlugin({
      filename: 'article03.html',
      template: 'article03.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
      chunks: ['article03']
    }),
    new HTMLWebpackPlugin({
      filename: 'coffee-tweak1.html',
      template: 'coffee-tweak1.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      },
      chunks: ['coffee-tweak1']
    }),


    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/images'),
        to: path.resolve(__dirname, 'dist/assets/images')
      },
      {
        from: path.resolve(__dirname, 'src//assets/api'),
        to: path.resolve(__dirname, 'dist/assets/api')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'assets/' + filename('css'),
      // filename: './assets/css/[name].[hash].bundle.css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, "src/"),
              outputPath: '/',
              publicPath: '../../',
              useRelativePath: true,
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }

}
