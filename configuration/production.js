var Immutable = require('seamless-immutable');

module.exports = Immutable({
	
	clientPort: process.env.APP_PORT || 3456,

	logLevel: process.env.APP_LOG_LEVEL || 'info'
});