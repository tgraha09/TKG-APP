https://css-tricks.com/css-modules-part-2-getting-started/

module.exports = {
    entry: './src/dist',
    mode: 'production',
    output: {
      path: __dirname + '/build',
      filename: 'tkg-templates.js',
    },
    
    module: {
        rules: [
            {
              test: /\.js/,
              loader: 'babel-loader',
              include: __dirname + '/src/dist',
            },
            {
              test: /\.css/,
              exclude: __dirname +'/src/App.js',
              loaders: ['style-loader', 'css-loader']
            }
          ],
    }
};