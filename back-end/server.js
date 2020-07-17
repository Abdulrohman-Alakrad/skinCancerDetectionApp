const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongo = require("./database/index");
const db = require("./database/models");
const auth = require('./routes/auth')

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

var data = { firstName: "moh", lastName: "pop" };

app.get("/", (req, res) => {
  res.send("Welcome!");
  db.savePat(data);
});

app.use("/api/users", auth)

app.listen(port, () => console.log(`Server started on port: ${port}`));