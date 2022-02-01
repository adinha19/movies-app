const Movie = require('../models/Movie')

const getMovies = async (req, res, next) => {

    let params = JSON.parse(req.params.data)

    if (params[1]) {
        let reg = { $regex: params[1], $options: 'i' }

        let matches = params[1].match(/(\d+)/) || ''

        if (params[1].toLowerCase() === `less than ${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $lte: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $eq: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `more than ${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $gte: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `after year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $gt: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `before year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $lt: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $eq: matches[0] } }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else {
            await Movie.find({ $and: [{ type: params[2] }, { $or: [{ title: reg }, { year: reg }, { description: reg }, { actors: reg }] }] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        }
    } else {
        await Movie.find({ type: params[2] }).sort({ rating: 'desc' }).limit(10).skip(params[0])
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
    movie.rating = (Number(movie.rating) + req.body.rating) / 2
    await movie.save()

    let reg = { $regex: req.body.search, $options: 'i' }

    await Movie.find({ $and: [{ type: req.body.type }, { $or: [{ title: reg }, { year: reg }, { description: reg }, { actors: reg }] }] }).sort({ rating: 'desc' }).limit(req.body.movies)
        .then(response => res.json(response))
        .catch(err => console.log(err))
}

exports.rateMovie = rateMovie
exports.getMovies = getMovies