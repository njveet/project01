/* 
Assignment01
Course code = COMP 229
Student: Daljeet Bhinder
*/
// routes/contact.js

const express = require('express');
const router = express.Router();

// Handle GET request to the contact page
router.get('/', (req, res, next) => {
  res.render('contact'); // Render the 'contact.ejs' template
});

module.exports = router;
