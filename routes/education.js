var express = require('express');
var router = express.Router();

// GET Education  page
router.get('/', function(req, res, next) {
    res.render('education');  // Render the education.ejs file
});

module.exports = router;
