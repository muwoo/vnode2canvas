// Karma configuration
// Generated on Tue Aug 14 2018 19:17:15 GMT+0800 (CST)
const webpack = require('../webpack.config')
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    webpack: webpack,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
