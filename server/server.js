const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const movies = require('./src/routes/api/movies.route')
const app = express();
const db = require("./src/config/config");
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
//parse url encoded data with qs library

app.use(cors());
//enable cross origin resource sharing 

app.listen(db.port, () => console.log(`Server up and running on port ${db.port} !`));
// port is 5000.

mongoose
    .connect(
        db.mongo,
        { useNewUrlParser: true }
    )

    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use('/src/images/', express.static('src/images/'))
//open the path to images folder so frontend can access images

app.use('/api/movies', movies);
//open the route