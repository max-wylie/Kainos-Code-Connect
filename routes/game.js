var express = require('express');
var router = express.Router();

// GET Education  page
router.get('/', function(req, res, next) {
    res.render('game');  // Render the game.ejs file
});

module.exports = router;
