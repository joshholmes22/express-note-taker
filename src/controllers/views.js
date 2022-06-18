const path = require("path");

const renderHomePage = (req, res) => {
  //return index.html file
  //get file path
  const filePath = path.join(__dirname, "../../public/index.html");
  // use res.sendFile()
  return res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
  //return index.html file
  //get file path
  const filePath = path.join(__dirname, "../../public/notes.html");
  // use res.sendFile()
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotesPage,
};
