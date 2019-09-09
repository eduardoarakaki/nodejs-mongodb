/* import mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	var db = new mongo.Db(
		'db',
		new mongo.Server(
			'localhost', // string containing server address
			27017, // connection port
			{}
		),
		{}
	);
	return db;
}

module.exports = function(){
	return connMongoDB;
}