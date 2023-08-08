Host:

- Init NextJS (npx create-next-app@latest)
- Install @module-federation/nextjs-mf dependency
- Configure next.config.js
- Declare modules in module.d.ts inside /src directory
- Import remote components with next/dynamic

Remote:

- Init React (npx create-react-app project-name)
- Install dev-dependencies (npm install -D @babel/plugin-proposal-private-property-in-object, @babel/preset-react, webpack-dev-server, babel-loader, dotenv-webpack, external-remotes-plugin, file-loader, css-loader, sass-loader, style-loader, svg-loader, sass, webpack-cli, html-webpack-plugin)
- Create .babelrc at root directory ({"presets": [["@babel/preset-react", { "runtime": "automatic" }]]})
- Create and configure webpack.config.js at root directory
- Add dev script in package.json ("dev": "webpack-dev-server")
- Create components and expose them in webpack.config.js (Remember to use export default)
