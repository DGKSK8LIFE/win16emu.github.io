const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.sendFile("index.html", {
    root: __dirname
  });
});

app.get('/public/index.css', (req, res) => {
  res.sendFile("index.css", {
    root: __dirname
  });
});

app.listen(9000, () => {
  console.log("Listening on port 9000.");
});
