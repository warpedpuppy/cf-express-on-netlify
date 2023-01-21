const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());
const { API_ROOT, CONNECTION_URI } = require('../config');
try {
	const mongoose = require("mongoose");
	// mongoose.set('strictQuery', true);
} catch (e) {
	console.log('connection error ', e)
}

// mongoose.connect(CONNECTION_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then( () => console.log('connected'))
// .catch( e => console.error(e) );


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
// module.exports.handler = serverless(app);

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};