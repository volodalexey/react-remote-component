const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  isProduction = process.env.NODE_ENV === 'production',
  cwd = __dirname,
  out_dir = '',
  app_bundle_path = `/${out_dir}js/rrc.app.js`,
  vendor_bundle_path = `/${out_dir}js/rrc.vendor.js`;

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new HtmlWebpackPlugin({
    filename: `${out_dir}index.html`,
    template: path.join(cwd, 'index.ejs'),
    inject: 'body'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: vendor_bundle_path,
    minChunks: Infinity
  }),
];

if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: false
  }));
}


module.exports = {
  
  entry: {
    app: path.join(cwd, 'index.jsx'),
    vendor: ['react', 'react-dom']
  },
  
  output: {
    path: path.join(cwd, '../dist'),
    filename: `${app_bundle_path}${isProduction ? '?[chunkhash]' : ''}`,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [cwd],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        include: [cwd],
        loader: 'style-loader!css-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: plugins,

  devServer: {
    contentBase: path.join(cwd, '../dist'),
    /*
     app.get("*", express.static(contentBase, options.staticOptions), serveIndex(contentBase));
     */
    staticOptions: {
      extensions: ['js']
    }
  }
};
