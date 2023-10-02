// routes/blog.js

const express = require('express');
const router = express.Router();

// Handle GET request to the blog page
router.get('/', (req, res) => {
  res.render('blog'); // Render the 'blog.ejs' template
});

module.exports = router;
