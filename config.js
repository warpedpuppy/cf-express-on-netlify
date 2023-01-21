const Config = {
	CONNECTION_URI: process.env.CONNECTION_URI || 'mongodb://localhost:27017',
	API_ROOT: '/.netlify/functions/server',
	LOCAL_PORT: 3000
}
module.exports = Config;