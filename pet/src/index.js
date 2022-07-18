const express = require("express");
var bodyParser = require("body-parser");
const route = require("./route");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb+srv://urajrishu:aUHDB96UyJaq9SB@cluster0.1wief.mongodb.net/JITENDRA1995-db",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});