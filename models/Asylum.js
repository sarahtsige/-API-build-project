const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AsylumStats = new Schema({
  Origin: String,
  CountryOfAsylumOrResidence: String,
  year: Number,
  total: Number
});

module.exports = mongoose.model("AsylumStats", AsylumStats);
