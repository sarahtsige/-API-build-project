const countryData = require('./countrydata.json')
const Country = require('../models/Country.js')
const Asylum = require("../models/Asylum");
const AsylumData = require("../db/refugeedata.json");


const Asylums = AsylumData.map(item => {
    const asylum = {
        Origin: item.Origin,
        CountryOfAsylumOrResidence: item.CountryOfAsylumOrResidence,
        year: item.Year,
        total: item.Value
    };
    return asylum;
});


Asylum.remove({})
.then(() => {
    Asylum.create(Asylums)
    .then(countries => {
        console.log(countries);
    })
    .catch(err => {
        console.log(err);
    });
});



const countries = countryData.map(item => {
    const country= {
        name: item.name,
        capital: item.capital,
        region: item.region,
        population: item.population,
        demonym: item.demonym,
        latlong: item.latlng,
        flag: item.flag,
        asylum: Asylums
    };
    return country;
});

Country.remove({})
.then(() => {
    Country.create(countries)
    .then(countries => {
        console.log(countries);
    })
    .catch(err => {
        console.log(err);
    });
});

