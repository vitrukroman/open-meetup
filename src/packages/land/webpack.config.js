const common = require("../../config/webpack.config");
const { getEnvVariable } = require("../../config/env");
const HOSTNAME_SKY = getEnvVariable(`HOSTNAME_SKY`);
const PORT_SKY = getEnvVariable(`PORT_SKY`);
const PORT_LAND = getEnvVariable(`PORT_LAND`);
const { merge } = require("webpack-merge");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = merge(common, {
  devServer: {
    port: PORT_LAND,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Land",
      remotes: {
        Sky: `Sky@${HOSTNAME_SKY}:${PORT_SKY}/remoteEntry.js`,
      },

      shared: ["react", "react-dom"],
    }),
  ],
});
