var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	//Return built index.html from React
	//res.sendFile(path.join(__dirname,'../view/build/index.html'));
	res.send('<h1>WTF</h1>');
});

module.exports = router;
