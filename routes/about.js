/* 
Assignment01
Course code = COMP 229
Student: Daljeet Bhinder
*/
// routes/about.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
