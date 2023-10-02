// routes/project.js

const express = require('express');
const router = express.Router();

// Handle GET request to the project page
router.get('/', function(req, res, next) {
  res.render('project'); // Render the 'project.ejs' template
});


module.exports = router;
