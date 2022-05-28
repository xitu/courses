const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    mode: 'development', // development mode is toooooooooo slow
    devtool: false,
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, '../src/components/'),
      },
    },
  })
}