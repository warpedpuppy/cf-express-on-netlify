const app = require('./express/server');

const { LOCAL_PORT } = require('./config')

app.listen(LOCAL_PORT, () => console.log(`Local app listening on port ${LOCAL_PORT}!`));
