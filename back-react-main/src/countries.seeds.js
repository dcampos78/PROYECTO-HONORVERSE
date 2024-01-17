const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Country = require('./api/models/countries.model');

const arrayCountries =[
    {
      "name": "Reino de Manticore",
      "capital": "Aterrizaje",
      "foundation_date": "Siglo 24",
      "picture": ""
    },
    {
      "name": "República de Grayson",
      "capital": "Austin City",
      "foundation_date": "Siglo 23",
      "picture": ""
    },
    {
      "name": "República Popular de Haven",
      "capital": "Nuevo Paris",
      "foundation_date": "Siglo 23",
      "picture": ""
    },
    {
      "name": "Liga Solariana",
      "capital": "Tierra",
      "foundation_date": "mundo natal",
      "picture": ""
    },
    {
      "name": "Imperio Andermani",
      "capital": "Nuevo Berlin",
      "foundation_date": "Siglo 23",
      "picture": ""
    },
    {
      "name": "Confederacion Silesiana",
      "capital": "Silesia",
      "foundation_date": "Siglo 23"
    },
    {
      "name": "Republica de Erewhon",
      "capital": "Erewhon",
      "foundation_date": "Siglo 23",
      "picture": ""
    },
    {
      "name": "Republica de Monica",
      "capital": "Monica",
      "foundation_date": "Siglo 23",
      "picture": ""
    },
  ];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountries = await Country.find();
    if (allCountries.length > 0) {
      await Country.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los simpsons', err);
  })
  .then(async () => {
    const CountriesMap = arrayCountries.map((country) => new Country(country));
    await Country.insertMany(countriesMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
