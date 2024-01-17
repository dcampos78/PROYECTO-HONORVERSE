const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Character = require('./api/models/characters.model');

const arrayCharacters =[
    {
      "name": "Honor Harrington",
      "profession": "Comandante Naval",
      "rank": "Almirante",
      "birthday": "2 de octubre de 1859 PD",
      "planet": "Sphinx",
      "country": "Reino de Manticore",
      "picture": ""
    },
    {
      "name": "Andrew LaFollet",
      "profession": "Capitán Naval",
      "rank": "Capitán de Corbeta",
      "birthday": "1842 PD",
      "planet": "Grayson",
      "country": "Protectorado de Grayson",
      "picture": ""
    },
    {
      "name": "Thomas Theisman",
      "profession": "Comandante Naval",
      "rank": "Almirante",
      "birthday": "1832 PD",
      "planet": "Haven",
      "country": "República Popular de Haven",
      "picture": ""
    },
    {
      "name": "Hamish Alexander",
      "profession": "Comandante Naval",
      "rank": "Almirante",
      "birthday": "1820 PD",
      "planet": "Manticore",
      "country": "Reino de Manticore",
      "picture": ""
    },
    {
      "name": "Horace Harkness",
      "profession": "Comandante Naval",
      "rank": "Chief Warrant Officer",
      "birthday": "1832 PD",
      "planet": "Manticore",
      "country": "Reino de Manticore",
      "picture": ""
    },
    {
      "name": "Elisabeth III Winton",
      "profession": "Dirigente",
      "rank": "Reina",
      "birthday": "1865 PD",
      "planet": "Manticore",
      "country": "Reino de Manticore",
      "picture": ""
    },
    {
      "name": "Aldona Anisimovna",
      "profession": "Espia",
      "rank": "Espia",
      "birthday": "1882 PD",
      "planet": "Mesa",
      "country": "Liga Solariana",
      "picture": ""
    },
    {
      "name": "Benjamin Mayhew IX",
      "profession": "Dirigente",
      "rank": "Protector",
      "birthday": "1871 PD",
      "planet": "Grayson",
      "country": "República de Grayson",
      "picture": ""
    },
    {
      "name": "Lester Tourville",
      "profession": "Comandante Naval",
      "rank": "Almirante",
      "birthday": "1881 PD",
      "planet": "Haven",
      "country": "República Popular de Haven",
      "picture": ""
    },
  ];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharacters = await Character.find();
    if (allCharacters.length > 0) {
      await Character.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersMap = arrayv.map((character) => new Character(character));
    await Character.insertMany(charactersMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
