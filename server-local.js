
// const mongoose = require('mongoose');

// const { CONNECTION_URI } = require('./config');
// mongoose.connect(CONNECTION_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then( () => {console.log('connected'); app.set('db', "connected")})
// .catch( e => console.error(e) );
async function c() {
	let connect = await require('./express/mongoose-connect');
	let conn = await connect.connect();
	console.log(conn)
	const app = await require('./express/server');
	app.set('db', "connected");
	const { LOCAL_PORT } = require('./config');

	app.listen(LOCAL_PORT, () => console.log(`Local app listening on port ${LOCAL_PORT}!`));
}
c();


