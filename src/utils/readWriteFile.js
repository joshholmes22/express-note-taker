const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../../db/${fileName}`);
  const rawData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(rawData);
};

const writeDataToFile = (data, fileName) => {
  const filePath = path.join(__dirname, `../../db/${fileName}`);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = { readDataFromFile, writeDataToFile };
