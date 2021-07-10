const express = require("express");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", "..", ".env"),
});
const { getEnvVariable } = require("../config/env");
const { mf: microFrontend } = require("minimist")(process.argv.slice(2));

const app = express();

const staticPath = path.resolve(__dirname, "..", "packages", microFrontend, "dist");
app.use(express.static(staticPath));
app.get("*", (_, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "packages", microFrontend, "dist", "index.html")
  );
});
const PORT = getEnvVariable(`PORT_${microFrontend.toUpperCase()}`);
app.listen(PORT, () =>
  console.log("Micro-Frontend", microFrontend, "started on port", PORT)
);
