const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/____", {useNewUrlParser: true});

module.exports = mongoose;