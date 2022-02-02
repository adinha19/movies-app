const Movie = require('../models/Movie')

const getMovies = async (req, res, next) => {

    let params = JSON.parse(req.params.data)

        //first item in array is skip number, second item in params array is search term, third is type

    if (params[1]) {
        let reg = { $regex: params[1], $options: 'i' }

        let matches = params[1].match(/(\d+)/) || ''
        //regex to match numbers, returns array of elements, first element is the number.
        if (params[1].toLowerCase() === `less than ${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $lte: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $eq: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `more than ${matches[0]} stars`) {
            await Movie.find({ $and: [{ type: params[2] }, { rating: { $gt: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `after year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $gt: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `before year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $lte: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else if (params[1].toLowerCase() === `year ${matches[0]}`) {
            await Movie.find({ $and: [{ type: params[2] }, { year: { $eq: matches[0] } }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else {
            await Movie.find({ $and: [{ type: params[2] }, { $or: [{ title: reg }, { description: reg }, { actors: reg }] }] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
                .then(response => {
                    res.json(response)
                })
                .catch(() => res.status(404).json("Unexpected problem, please try again later"))
        }
        //cases for regular expression, if none, return what we normally find
    } else {
        await Movie.find({ type: params[2] }).sort({ rating: "desc", title: "desc" }).limit(10).skip(params[0])
            .then(response => {
                res.json(response)
            })
            .catch((err) => console.log(err))
    }
        //send movies/shows sorted by rating, we need to sort by title first, because if theres same rating, it might be returned in Get More
}

const rateMovie = async (req, res, next) => {
    const id = req.params.id

    let movie;
    try {
        movie = await Movie.findById(id)
    } catch {
        res.status(404).json("Unexpected problem, please try again later")
    }
    // find movie by id

    movie.rating = (movie.rating + req.body.rating) / 2
    await movie.save()
    // add rating average, save movie to db

    await Movie.find({ type: req.body.type }).sort({ rating: "desc", title: "desc" }).limit(10)
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
    //send new movies/shows sorted by rating, we need to sort by title first, because if theres same rating, it might be returned in Get More

}

exports.rateMovie = rateMovie
exports.getMovies = getMovies