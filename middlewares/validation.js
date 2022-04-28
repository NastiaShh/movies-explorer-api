const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const ValidationError = require('../errors/ValidationError');

const validateRegister = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const checkUrl = Joi.string().required().custom((url) => {
  if (!isURL(url, { protocols: ['http', 'https'], require_protocol: true })) {
    throw new ValidationError('Некорректная ссылка');
  }
  return url;
});

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: checkUrl,
    trailerLink: checkUrl,
    thumbnail: checkUrl,
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().required().length(24),
  }),
});

module.exports = {
  validateRegister,
  validateLogin,
  validateUserInfo,
  validateMovie,
  validateMovieId,
};
