var path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/react']
              }
            }
          }
        ]
      },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
};