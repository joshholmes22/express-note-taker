const { readDataFromFile, writeDataToFile } = require("../utils/readWriteFile");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // read from file and return data
  const notes = readDataFromFile("db.json");

  return res.json(notes);
};

const saveNote = (req, res) => {
  // get user input
  const { title, text } = req.body;

  const id = uuidv4();

  const note = {
    id,
    title,
    text,
  };

  // add new note to existing list
  const data = readDataFromFile("db.json");

  data.push(note);

  writeDataToFile(data, "db.json");

  return res.json({
    message: "Note successfully saved",
  });
};

const deleteNote = (req, res) => {
  // get required id and remove from list
  const { id } = req.params;

  const data = readDataFromFile("db.json");

  const filteredNotes = data.filter((note) => note.id !== id);

  //save new list
  writeDataToFile(filteredNotes, "db.json");

  return res.json({
    message: "Note successfully deleted",
  });
};

module.exports = {
  getNotes,
  saveNote,
  deleteNote,
};
