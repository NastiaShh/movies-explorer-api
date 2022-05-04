const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  console.log(err);

  res.status(status).send({
    message: status === 500 ? 'Произошла ошибка на сервере' : err.message,
  });
  next();
};

module.exports = errorHandler;
