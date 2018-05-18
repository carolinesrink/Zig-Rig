const db = require('../models');

module.exports = {
	//TODO
	//handle login request
	login: function(req, cb) {
		cb({redirect:'/home'});
	},
	
	//TODO
	//handle logout request
	login: function(req, cb) {
		cb({redirect:'/'});
	},
	
	//TODO
	//create new account
	signup: function(req, cb) {
		db.User
			.create(req.userName, req.passWord)
			.then(dbModel => res.json(dbModel))
			.catch(err => console.log(err), console.log("There was an issue when creating a new user"));
		cb({redirect:'/home'});
	},
}
