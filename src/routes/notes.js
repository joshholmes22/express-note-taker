const { Router } = require("express");
const { getNotes, saveNote, deleteNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", saveNote);
router.delete("/:id", deleteNote);

module.exports = router;
