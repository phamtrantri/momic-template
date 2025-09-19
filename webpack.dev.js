import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // fast rebuilds with source maps
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // serve static assets
    },
    port: 3000,
    historyApiFallback: true, // SPA routing
    hot: true, // Hot Module Replacement
    open: true, // auto-open browser
  },
});