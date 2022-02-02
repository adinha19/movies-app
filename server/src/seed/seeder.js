const Movie = require('../models/Movie')
const data = require('./data')

const seedMovies = async (req, res, next) => {
    Movie.collection.drop()
    //drop current collection
    await Movie.insertMany(data.data)
        //insert data 
        .then(() => {
            console.log('Database succesfully seeded')
            process.exit()
            //kill process
        })
        .catch(err => console.log(err))
}

exports.seedMovies = seedMovies