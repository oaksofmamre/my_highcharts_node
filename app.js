"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
