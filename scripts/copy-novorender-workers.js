import * as fs from "fs";

const options = {
  force: true, // overwrite files
  recursive: true,
};

fs.cpSync(
  "node_modules/@novorender/webgl-api",
  "public/novorender/webgl-api",
  options
);
fs.cpSync(
  "node_modules/@novorender/measure-api",
  "public/novorender/measure-api",
  options
);
