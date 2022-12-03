const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());
const { API_ROOT } = require('../config');

const API_ROUTER = express.Router();

API_ROUTER
.get('/movies', (req, res) => {
	res.send('movies get hit')
})
.post('/movies', (req, res) => {
	res.send('movies post hit')
})
.put('/movies', (req, res) => {
	res.send('movies put hit')
})
.delete('/movies', (req, res) => {
	res.send('movies delete hit')
})
.get('/users', (req, res) => {
	res.send('user get hit')
})
.post('/users', (req, res) => {
	res.send('user post hit')
})
.put('/users', (req, res) => {
	res.send('user put hit')
})
.delete('/users', (req, res) => {
	res.send('user delete hit')
})

app.use(API_ROOT, API_ROUTER);  

module.exports = app;
module.exports.handler = serverless(app);
