const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "hello class, we are good to go" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
