class UnauthorizedError extends Error {
  constructor(message = 'Произошла ошибка авторизации') {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
