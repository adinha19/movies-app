const mongoose = require('mongoose');
const db = require("./src/config/config").mongo;
const seed = require('./src/seed/seeder')

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => {
        seed.seedMovies()
        console.log('database seeded')
    })
    .catch(err => console.log(err));