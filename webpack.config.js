module.exports = {
  entry: './src/index.js',

  mode: 'development',

  devtool: 'inline-source-map',

  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
}