// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

keystone.init({
	'name': 'AspectDemo',
	'brand': 'AspectDemo',

	'sass': 'public',
	'static': 'public',
	// 'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});
keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));
keystone.set('nav', {
	// posts: ['posts', 'post-categories'],
	// galleries: 'galleries',
	// enquiries: 'enquiries',
	users: 'users',
});

keystone.start();
