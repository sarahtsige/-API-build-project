const express = require("express");
const app = express();
const Country = require("./models/Country");




app.get("/", function(req, res) {
  Country.find({}).then(countries => res.json(countries));
});

app.listen(4000, () => console.log("Listening on port 4000"));