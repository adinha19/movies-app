const Movie = require('../models/Movie')

const getMovies = async (req, res, next) => {

    let params = JSON.parse(req.params.data)

    if (params[1]) {
        let reg = { $regex: params[1], $options: 'i' }
        
        await Movie.find({ $or: [{ title: reg }, { year: reg }, { description: reg }, { actors: reg }], $expr: {
            $function: {
                
            }
        }}).sort({ rating: 'desc' }).limit(10).skip(params[0])
            .then(response => {
                res.json(response)
            })
            .catch(err => console.log(err))
    } else {
        await Movie.find().sort({ rating: 'desc' }).limit(10).skip(params[0])
            .then(response => {
                res.json(response)
            })
            .catch(err => console.log(err))
    }
}

const rateMovie = async (req, res, next) => {
    const id = req.params.id

    let movie;
    try {
        movie = await Movie.findById(id)
    } catch {
        console.log(err)
    }
    movie.rating = (movie.rating + req.body.rating) / 2
    await movie.save()
    await Movie.find({}).sort({ rating: 'desc' }).limit(req.body.movies)
        .then(response => res.json(response))
        .catch(err => console.log(err))
}

exports.rateMovie = rateMovie
exports.getMovies = getMovies