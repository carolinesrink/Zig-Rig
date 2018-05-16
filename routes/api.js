var router = require('express').Router();

router.get('/test', function(req, res) {
	res.json({name:'Wyatt Logan'});
});

module.exports = router;
