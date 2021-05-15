// craco.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoEsbuildPlugin = require('craco-esbuild')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))
          return webpackConfig
        },
      },
    },
    {
      plugin: CracoEsbuildPlugin,
      options: {
        includePaths: [path.resolve(__dirname, 'packages/libs')],
        esbuildLoaderOptions: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
    },
  ],
  webpack: {
    configure: webpackConfig => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
      )

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)
      return webpackConfig
    },
  },
}
