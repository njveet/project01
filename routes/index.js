/* 
Assignment01
Course code = COMP 229
Student: Daljeet Bhinder
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Home route accessed!');
  res.render('index');
});

module.exports = router;