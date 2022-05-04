const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 100,
  message: 'Вы превысили лимит в 100 запросов за 24 часа',
  headers: true,
});

module.exports = rateLimiter;
