/* 
Assignment01
Course code = COMP 229
Student: Daljeet Bhinder
*/
const express = require('express');
const router = express.Router();

// Handle GET request to the resources page
router.get('/', (req, res) => {
  res.render('resources'); // Render the 'resources.ejs' template
});

module.exports = router;
