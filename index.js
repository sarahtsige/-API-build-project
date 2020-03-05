const express = require("express");
const app = express();
const parser = require("body-parser");
const Country = require("./models/Country");

app.use(parser.json());



app.get("/", function(req, res) {
  Country.find({}).then(countries => res.json(countries));
});

app.get("/name/:name", function(req, res) {
  Country.find({ name: req.params.name }).then(countries =>
    res.json(countries)
  );
});


app.get("/region/:region", function(req, res) {
  Country.find({ region: req.params.region }).then(countries =>
    res.json(countries)
  );
});


app.get("/id/:id", function(req, res) {
  Country.findById(req.params.id).then(country => {
    res.json(country);
  });
});

app.post("/", function(req, res) {
  Country.create(req.body).then(list => {
    res.json(list);
  });
});

app.delete("/id/:id", function(req, res) {
  Country.findOneAndRemove({ _id: req.params.id }).then(country => {
    res.json(country);
  });
});

app.listen(4000, () => console.log("Listening on port 4000"));
