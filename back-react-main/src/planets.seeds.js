const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Planet = require('./api/models/planets.model');

const arrayPlanets = [
    {
      "name": "Manticore",
      "settled": "1416 PD",
      "population": "1,5 billion",
      "capital": "Aterrizaje",
      "location": "Sistema Manticore A",
      "gravity": "1,01 G",
      "country": "Reino de Manticore",
      "moons": "1 (Thorson)",
      "picture": ""
    },
    {
      "name": "Sphinx",
      "settled": "1430 PD",
      "population": "1,2 billion",
      "capital": "Yawata Crossing",
      "location": "Sistema Manticore A",
      "gravity": "1,35 G",
      "country": "Reino de Manticore",
      "moons": "2 (Perseus, Bellerefonte)",
      "picture": ""
    },
    {
      "name": "Gryphon",
      "settled": "1492 PD",
      "population": "600 millones",
      "capital": "Yawata Crossing",
      "location": "Sistema Manticore A",
      "gravity": "1,05 G",
      "country": "Reino de Manticore",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "San Martin",
      "settled": "1485 PD",
      "population": "1 billion",
      "capital": "Ciudad San Marcos",
      "location": "Sistema Trevor Star",
      "gravity": "2,7 G",
      "country": "Reino de Manticore",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "Grayson",
      "settled": "988 PD",
      "population": "3 billion",
      "capital": "Austin City",
      "location": "Sistema Grayson",
      "gravity": "1,17 G",
      "country": "Protectorado de Grayson",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "Medusa",
      "settled": "",
      "population": "700 millones",
      "capital": "Residencia del comisionado",
      "location": "Sistema Medusa",
      "gravity": "0,85 G",
      "country": "Reino de Manticore",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "Mesa",
      "settled": "1460 PD",
      "population": "6 billions",
      "capital": "Mendel",
      "location": "Sistema Mesa",
      "gravity": "1,02",
      "country": "Liga Solariana",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "Tierra",
      "settled": "Hogar natal",
      "population": "muchos billions",
      "capital": "Chicago",
      "location": "Sistema Solar",
      "gravity": "1",
      "country": "Liga Solariana",
      "moons": "1 (Luna)",
      "picture": ""
    },
    {
      "name": "Beowulf",
      "settled": "250 PD",
      "population": "muchos billions",
      "capital": "Columbia",
      "location": "Sistema Sigma Draconis",
      "gravity": "1",
      "country": "Liga Solariana",
      "moons": "0",
      "picture": ""
    },
    {
      "name": "Haven",
      "settled": "1309 PD",
      "population": "muchos billions",
      "capital": "Nuevo Paris",
      "location": "Sistema Haven",
      "gravity": "1",
      "country": "República Popular de Haven",
      "moons": "0",
      "picture": ""
    },
  ];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanets = await Planet.find();//ahora planets
    if (allPlanets.length > 0) {
      await Planet.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los simpsons', err);
  })
  .then(async () => {
    const PlanetsMap = arrayPlanets.map((planet) => new PLanet(planet));
    await PLanet.insertMany(planetsMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
