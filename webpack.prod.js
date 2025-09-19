import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map', // slower, but useful in production debugging
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     }),
  //     new CssMinimizerPlugin(),
  //   ],
  //   splitChunks: {
  //     chunks: 'all', // vendor code splitting
  //   },
  //   runtimeChunk: 'single', // better long-term caching
  // },
});