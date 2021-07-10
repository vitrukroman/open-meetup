const common = require("../../config/webpack.config");
const { getEnvVariable } = require("../../config/env");
const { merge } = require("webpack-merge");
const PORT_SKY = getEnvVariable(`PORT_SKY`);

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = merge(common, {
  devServer: {
    port: PORT_SKY,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Sky",
      library: {
        type: "var",
        name: "Sky",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./skyContext": "./src/context/skyContext",
        "./useSkyContext": "./src/context/useSkyContext",
        "./DayTimeSwitcherButton":
          "./src/components/DayTimeSwitcherButton/DayTimeSwitcherButton",
        "./Orb":
            "./src/components/Orb/Orb",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
