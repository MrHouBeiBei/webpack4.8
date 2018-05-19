const path = require('path');

const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist2'),
      filename: 'my-first-webpack.bundle.js'
    }
};

module.exports = config;