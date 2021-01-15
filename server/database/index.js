/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/listApp';

mongoose.connection.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`);
});

mongoose.connection.once('open', () => {
	console.log(`Successfully connected to "${MONGODB_URI}"`);
});

module.exports = {
  db: mongoose,
  MONGODB_URI
};
