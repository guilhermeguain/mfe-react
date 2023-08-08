Host:

- Init NextJS (npx create-next-app@latest)
- Install @module-federation/nextjs-mf dependency
- Configure next.config.js
- Declare modules in module.d.ts inside /src directory
- Import remote components with next/dynamic

Remote:

- Init React (npx create-react-app project-name)
- Add dev script in package.json ("dev": "webpack-dev-server")
- Install dev-dependencies (npm install -D @babel/plugin-proposal-private-property-in-object, @babel/preset-react, babel-loader, css-loader, dotenv-webpack, external-remotes-plugin, file-loader, sass-loader, style-loader, webpack-cli)
- Create and configure webpack.config.js at root directory
- Create components and expose them in webpack.config.js (Remember to use export default)
