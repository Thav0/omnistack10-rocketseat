const axios = require('axios')
const Dev = require('../models/Dev')
const stringAsArray = require('../utils/parseStringAsArray')


module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if(!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      const techsArray =  stringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })

      // Filtrar as conexões que estão no maximo 10km de distancia
      // e que o novo dev tenha pelo menos uma das tecnologias filtradas

      
    }

    return res.json(dev)
  },

  async update(req, res) {

  }
};