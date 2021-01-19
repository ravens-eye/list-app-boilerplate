// Import dependencies
const express = require('express');
const morgan = require('morgan');

const { db, MONGODB_URI } = require('./server/database');
const routes = require('./server/routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// REST API routes
app.use(routes);

// Error handler
app.use(function (err, req, res, next) {
  console.log('====== ERROR =======');
  console.error(err.stack);
  res.status(500);
});

async function initializeApp() {
  try {
    await db.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    // Start server on successful databse connection
    app.listen(PORT, () => {
      console.log(`🌎  ==> REST API Server now listening on PORT ${PORT}!`);
    });
  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
  }
}

initializeApp();
