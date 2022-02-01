const express = require('express');
const router = express.Router();
const movieController = require('../../controllers/movie.controller')

router.get("/:data", movieController.getMovies)

router.put('/rate/:id', movieController.rateMovie)

module.exports = router;