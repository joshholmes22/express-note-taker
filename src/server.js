const express = require("express");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
