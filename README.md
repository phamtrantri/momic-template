# How does it work?

- Webpack will look at the entry file (./packages/common/index.js)
- Webpack finds imports (E.g.: import App from './App')
- Webpack match it against the rules (E.g.: test: /\.[jt]sx?$/)
- Webpack applies babel-loader
- babel-loader uses config in babel.config.json
- Babel parses the code into an AST, applies presets/plugins and generates plain JS that Webpack can understand (e.g. strip types (preset-typescript), transpile JSX (preset-react), downlevel features (preset-env))
- Webpack takes that transformed JS, feeds it into its module graph, and continues bundling.