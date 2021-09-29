const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilatioin failed', err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilatioin failed', err);
    }

    console.log('Compilation was successfuly')
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/cliet'),
  ]
  })
})