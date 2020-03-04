const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CountryAPI", {useNewUrlParser: true});

module.exports = mongoose;