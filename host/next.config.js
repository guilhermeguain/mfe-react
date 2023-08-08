const NextFederationPlugin = require("@module-federation/nextjs-mf");
const packagejson = require("./package.json");

const sharedDependencies = () => {
  const dependencies = Object.keys(packagejson.dependencies);

  return dependencies.reduce((acc, dependency) => {
    acc[`${dependency}/`] = {
      singleton: true,
      requiredVersion: false,
      eager: true,
    };
    
    return acc;
  }, {});
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      try {
        config.plugins.push(
          new NextFederationPlugin({
            name: "host",
            remotes: {
              child: `child@http://localhost:3005/remoteEntry.js`,
            },
            filename: "static/chunks/remoteEntry.js",
            shared: sharedDependencies(),
            exposes: {},
          })
        );
      } catch (e) {
        console.error("Error connecting to remote server:", e);
      }
    }
    return config;
  },
}

module.exports = nextConfig
