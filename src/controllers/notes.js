const { readDataFromFile } = require("../utils/readWriteFile");

const getNotes = (req, res) => {
  const notes = readDataFromFile("db.json");

  return res.json(notes);
};

module.exports = {
  getNotes,
};
