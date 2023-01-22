


// async function c() {
// 	let connect = await require('./express/mongoose-connect');
// 	let conn = await connect.connect();
// 	console.log(conn)
// 	const app = await require('./express/server');
// 	app.set('db', "connected");
// 	const { LOCAL_PORT } = require('./config');

// 	app.listen(LOCAL_PORT, () => console.log(`Local app listening on port ${LOCAL_PORT}!`));
// }
// c();


async function c() {
	
	const mongoose = require('mongoose');

	const { CONNECTION_URI } = require('./config');
	let conn = await mongoose.connect(CONNECTION_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	})

	console.log("conn = ", conn)

	const app = await require('./express/server');
	if (conn) {app.set('db', "connected") } else { app.set('db', "not connected") };
	const { LOCAL_PORT } = require('./config');

	app.listen(LOCAL_PORT, () => console.log(`Local app listening on port ${LOCAL_PORT}!`));
}
c();

