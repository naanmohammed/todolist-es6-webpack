const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    addtasks: './src/modules/addTasks.js',
    deletetasks: './src/modules/deleteTasks.js',
    savetolocalstorage: './src/modules/saveToLocalStorage.js',
    gettasksfromlocalstorage: './src/modules/getTasksFromLocalStorage.js',
    checkcompleted: './src/modules/checkCompleted.js',
    clearcompletedtasks: './src/modules/clearCompletedTasks.js',
    updateTaskDescription: './src/modules/updateTaskDescription.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};