const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.sendFile("public/index.html", {
    root: __dirname
  });
});

app.listen(9000, () => {
  console.log("Listening on port 9000.");
});
