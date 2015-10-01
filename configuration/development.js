var Immutable = require('seamless-immutable');

module.exports = Immutable({
	
	clientPort: process.env.APP_PORT || 5555,

	logLevel: process.env.APP_LOG_LEVEL || 'info'
});