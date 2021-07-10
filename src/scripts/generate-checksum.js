const { exec } = require("child_process");
const crypto = require("crypto");
const { writeFile } = require("fs");

const mfes = ["land", "sky"];

exec(
  "{ git diff --name-only ; git diff --name-only --staged ; } | sort | uniq",
  {
    encoding: "UTF8",
  },
  (err, data) => {
    const allChangedFiles = data.split("\n");
    const changedMicroFEs = mfes.filter((name) => {
      return allChangedFiles.find((fileName) =>
        fileName.includes(`packages/${name}`)
      );
    });
    const randomHash = crypto.randomBytes(200).toString("hex");

    console.log("Changed MFEs:", changedMicroFEs);

    changedMicroFEs.forEach((mf) => {
      writeFile(
        __dirname + `/../packages/${mf}/checksum`,
        randomHash,
        {
          flag: "w+",
        },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            exec(`git add src/packages/${mf}/checksum`);
            console.log("regenerated checksum for", mf);
          }
        }
      );
    });
  }
);
