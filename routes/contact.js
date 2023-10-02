// routes/contact.js

const express = require('express');
const router = express.Router();

// Handle GET request to the contact page
router.get('/', (req, res) => {
  res.render('contact'); // Render the 'contact.ejs' template
});

module.exports = router;
