var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
      title: 'Jason\' site',
      message: 'Howdy!'
  });
});

module.exports = router;

/*---------------------------------
1. Create .js script in public. This file will run in the browser.

2. Create .hbs or .ejs file that references 
   the .js created in #1 inside a <script> element.
   
3. Create .js script that will server as your router 
   for this exercise.
---------------------------------

Your router should have 2 routes:

A. GET route that renders your view, 
   passing in the title and other info you need
   
B. POST route that passes data up and 
   receives it back down after a simple modification*/