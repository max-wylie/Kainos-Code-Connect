var express = require('express');
var router = express.Router();

// GET Fact Checking page
router.get('/', function(req, res, next) {
    res.render('factchecking');  // Render the factchecking.ejs file
});

module.exports = router;
