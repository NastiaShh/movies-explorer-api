const router = require('express').Router();
const { validateMovie, validateMovieId } = require('../middlewares/validation');
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateMovie, addMovie);
router.delete('/:_id', validateMovieId, deleteMovie);

module.exports = router;
