require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// const rateLimiter = require('./middlewares/rateLimiter');

const { PORT = 3001 } = process.env;
const { NODE_ENV, DB_PATH } = process.env;
const app = express();

app.use(cors({
  origin: ['http://movies-explorer.nsh.nomoredomains.work',
    'https://movies-explorer.nsh.nomoredomains.work',
    'http://api.movies-explorer.nsh.nomoredomains.work',
    'https://api.movies-explorer.nsh.nomoredomains.work',
    'http://localhost:3000',
    'https://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3001'],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(cookieParser());
app.use(helmet());
// app.use(rateLimiter);

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

mongoose.connect(NODE_ENV === 'production' ? DB_PATH : 'mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
