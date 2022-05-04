class NotFoundError extends Error {
  constructor(message = 'Пользователь не найден') {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
