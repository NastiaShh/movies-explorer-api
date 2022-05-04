class ValidationError extends Error {
  constructor(message = 'Данные пользователя некорректны') {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
