const passport = require('passport');
const LocalStrategy = require('./LocalStrategy');
const db = require('../models/Index');

passport.serializeUser((user, done) => {
	console.log('Serialize called');
	console.log(user);
	console.log('---------');
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log('Deserialize called');
	db.User.findOne(
		{ _id: id },
		'firstName lastName username githubHandle',
		(err, user) => {
			console.log('Deserialize user called');
			console.log(user);
			console.log('--------------');
			done(null, user);
		}
	);
});

passport.use(LocalStrategy);

module.exports = passport;