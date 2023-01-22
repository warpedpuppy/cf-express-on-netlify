// 'use strict';

// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// const { CONNECTION_URI } = require('../config');
// let conn = null;

// const uri = CONNECTION_URI;

// exports.connect = async function() {
//   if (conn == null) {
//     conn = mongoose.connect(uri, {
//       serverSelectionTimeoutMS: 5000
//     }).then(() => mongoose);
//     // `await`ing connection after assigning to the `conn` variable
//     // to avoid multiple function calls creating new connections
//     await conn;
//   }

//   return conn;
// };

