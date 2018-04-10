// const path = require('path');
// // do sciezki absolutnej

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filenmae: 'bundle.js'
//     }
// };

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
      rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      }]
  }
};
