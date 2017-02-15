const {resolve} = require('path');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'webpack.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'buble-loader',
                    options: {
                        jsx: 'h'
                    }
                }
            }
        ]
    }
}