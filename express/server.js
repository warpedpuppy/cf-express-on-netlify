const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());
const { API_ROOT } = require('../config');

const knex = require('knex');

const MOVIE_ROUTER = require('../movies/movie-router');
const USERS_ROUTER = require('../users/users-router');

app.use(`${API_ROOT}/movies`, MOVIE_ROUTER);  
app.use(`${API_ROOT}/users`, USERS_ROUTER);  

module.exports = app;
module.exports.handler = serverless(app);
