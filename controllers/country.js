const Country = require('../models/Country');


module.exports = {
  index: (req, res) => {
    Country.find({})
      .then(country => {
        res.json(country)
      })
  },
  showYear: (req, res) => {
    Country.find({year: req.params.year})
      .then(country => {
        res.json(country)
      })
  },
  showId: (req, res) => {
    Country.find({_id: req.params._id})
      .then(country => {
        res.json(country)
      })
  },
  showName: (req, res) => {
    Country.find({name: req.params.name})
      .then(country => {
        res.json(country)
      })
  },
  create: (req, res) => {
   Country.create(req.body)
      .then(country => {
        res.json(country)
      })
  }
}