const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login, logout } = require('../controllers/users');
const { validateRegister, validateLogin } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', validateRegister, createUser);
router.post('/signin', validateLogin, login);

router.use(auth);

router.post('/signout', logout);
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use(() => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
