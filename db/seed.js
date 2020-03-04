const countryData = require('./countrydata.json')
const Country = require('../models/Country.js')

const countries = countryData.map(item => {
    const country= {
        name: item.name,
        capital: item.capital,
        region: item.region,
        population: item.population,
        demonym: item.demonym,
        latlong: item.latlng,
        flag: item.flag
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

