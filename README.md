Host:

- Init NextJS (npx create-next-app@latest)
- Install @module-federation/nextjs-mf dependency
- Configure next.config.js
- Declare modules in module.d.ts inside /src directory
- Import remote components with next/dynamic

Remote:

- Init React (npx create-react-app project-name)
- Install dev-dependencies (npm install -D @babel/plugin-proposal-private-property-in-object, @babel/preset-react, webpack-dev-server, dotenv-webpack, external-remotes-plugin, babel-loader, css-loader, style-loader, webpack-cli, html-webpack-plugin)
- Create .babelrc at root directory ({"presets": [["@babel/preset-react", { "runtime": "automatic" }]]})
- Create and configure webpack.config.js at root directory
- Add scripts in package.json ({"start": "webpack --mode production && serve --cors dist -p 3005", "dev": "webpack-dev-server", "build": "webpack"})
- Create components and expose them in webpack.config.js (Remember to use export default)
