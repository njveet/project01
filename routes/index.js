// routes/home.js

//const express = require('express');
//const router = express.Router();

// Handle GET request to the home page
//router.get('/', (req, res) => {
//  res.render('home'); // Render the 'home.ejs' template
//});

//module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Home route accessed!');
  res.render('index');
});

module.exports = router;