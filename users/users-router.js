const express = require('express');
const USERS_ROUTER = express.Router();

USERS_ROUTER
.get('/', (req, res) => {
	res.send('users get hit')
})
.post('/', (req, res) => {
	res.send('users post hit')
})
.put('/', (req, res) => {
	res.send('users put hit')
})
.delete('/', (req, res) => {
	res.send('users delete hit')
})

module.exports = USERS_ROUTER