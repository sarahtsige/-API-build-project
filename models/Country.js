const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const Country = new Schema({
    name: String,
    capital: String,
    region: String,
    population: Number,
    demonym: String,
    latlong: [Number],
    flag: String
})

module.exports = mongoose.model('Country', Country)