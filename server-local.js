const app = require('./express/server');
const mongoose = require('mongoose');

const { CONNECTION_URI } = require('./config');
mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then( () => {console.log('connected'); app.set('db', "connected")})
.catch( e => console.error(e) );

const { LOCAL_PORT } = require('./config');

app.listen(LOCAL_PORT, () => console.log(`Local app listening on port ${LOCAL_PORT}!`));
