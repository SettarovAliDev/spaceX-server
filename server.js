const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// MIDDLEWARE
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// RESET DATABASE
// const dbReset = require('./app/utils/db-reset');
// dbReset();

// ROUTES
app.get('/', (req, res) => {
  res.json({ message: ' welcome' });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
