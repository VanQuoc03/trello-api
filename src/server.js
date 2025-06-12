const express = require("express");
const app = express();

const host = "localhost";
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
