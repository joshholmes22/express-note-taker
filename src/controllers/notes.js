const { readDataFromFile, writeDataToFile } = require("../utils/readWriteFile");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // read from file and return data
  const notes = readDataFromFile("db.json");

  return res.json(notes);
};

const saveNote = (req, res) => {
  const { title, text } = req.body;

  const id = uuidv4();

  const note = {
    id,
    title,
    text,
  };

  const data = readDataFromFile("db.json");
  console.log(data);

  data.push(note);

  writeDataToFile(data, "db.json");

  return res.json({
    message: "Note successfully saved",
  });
};

module.exports = {
  getNotes,
  saveNote,
};
