class ForbiddenError extends Error {
  constructor(message = 'Недостаточно прав для данного действия') {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
