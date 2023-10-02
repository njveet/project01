// routes/services.js

const express = require('express');
const router = express.Router();

// Handle GET request to the services page
router.get('/', (req, res) => {
  res.render('services'); // Render the 'services.ejs' template
});

module.exports = router;
