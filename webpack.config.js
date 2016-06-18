/*
 * Webpack Config
 */

module.exports = {

  // Entry
  entry:[
    './app/app.jsx'
  ],

  //Output
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },

  //Code Transformations
  resolve:{
    root:__dirname,
    alias:{},
    extensions:['','.js','.jsx']
  },

  //module: loader
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015','stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
};
