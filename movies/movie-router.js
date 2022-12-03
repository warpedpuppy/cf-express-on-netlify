const express = require('express');
const MOVIE_ROUTER = express.Router();

MOVIE_ROUTER
.get('/', (req, res) => {
	res.send('movies get hit')
})
.post('/', (req, res) => {
	res.send('movies post hit')
})
.put('/', (req, res) => {
	res.send('movies put hit')
})
.delete('/', (req, res) => {
	res.send('movies delete hit')
})

module.exports = MOVIE_ROUTER