const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String },
    description: { type: String },
    year: { type: String },
    img: { type: String },
    actors: [],
    rating: { type: Number }
});

module.exports = Movie = mongoose.model("Movie", MovieSchema);