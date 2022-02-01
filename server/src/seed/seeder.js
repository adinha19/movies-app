const Movie = require('../models/Movie')
const data = require('./data')

const seedMovies = async (req, res, next) => {
    await Movie.insertMany(data.data)
        .then(() => console.log('Database succesfully seeded'))
        .catch(err => console.log(err))
}

exports.seedMovies = seedMovies