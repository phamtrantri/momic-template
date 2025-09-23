import { merge } from 'webpack-merge';
import common from './webpack.common.js';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map', // slower, but useful in production debugging
  optimization: {
    usedExports: true,
    mangleExports: true,
    minimize: false,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     }),
  //     new CssMinimizerPlugin(),
  //   ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
      // chunks: 'all',
    },
    runtimeChunk: 'single', // better long-term caching
  },
  // plugins: [
  //   new BundleAnalyzerPlugin(),
  // ]
});