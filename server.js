var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "view")));

// cho cai nay vao
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

// ko quan trong
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("listen on port ...");
});
