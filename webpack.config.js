let path = require('path');

let conf = {
    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
          static: path.join(__dirname, 'dist'),
          compress: true,
          liveReload: true,
          open: true,
        },
        
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    watch: true
};

module.exports = conf;