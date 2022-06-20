const { Router } = require("express");
const { getNotes, saveNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", saveNote);

module.exports = router;
