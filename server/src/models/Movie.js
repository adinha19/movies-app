const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String, sparse: true },
    description: { type: String, sparse: true },
    year: { type: String },
    img: { type: String },
    actors: [],
    type: { type: String },
    rating: { type: Number }
});

module.exports = Movie = mongoose.model("Movie", MovieSchema);