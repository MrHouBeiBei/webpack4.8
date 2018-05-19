const path = require('path');

const config = {
    mode: 'production',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    }
};

module.exports = config;