const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Countrydb", {useNewUrlParser: true});

module.exports = mongoose;