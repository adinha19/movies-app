const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const movies = require('./src/routes/api/movies.route')
const app = express();
const db = require("./src/config/config");
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

app.listen(db.port, () => console.log(`Server up and running on port ${db.port} !`));

mongoose
    .connect(
        db.mongo,
        { useNewUrlParser: true }
    )

    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use('/src/images/', express.static('src/images/'))

app.use('/api/movies', movies);