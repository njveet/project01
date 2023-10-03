/* 
Assignment01
Course code = COMP 229
Student: Daljeet Bhinder
*/
const express = require('express');
const router = express.Router();

// Handle GET request to the services page
router.get('/', (req, res) => {
  res.render('services'); // Render the 'services.ejs' template
});

module.exports = router;
