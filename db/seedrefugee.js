const Country = require("../models/Country");
const Asylum = require("../models/Asylum");

Country.find({}).then(countries => {
  countries.forEach(country => {
    Asylum.find({ Origin: country.name }).then(asylum => {
      country.asylum = asylum;
      country.save();
    });
  });
});
