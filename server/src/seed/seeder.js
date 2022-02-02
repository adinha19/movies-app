const Movie = require('../models/Movie')
const data = require('./data')

const seedMovies = async (req, res, next) => {
    Movie.collection.drop()
    await Movie.insertMany(data.data)
        .then(() => {
            console.log('Database succesfully seeded')
            process.exit()
        })
        .catch(err => console.log(err))
}

exports.seedMovies = seedMovies