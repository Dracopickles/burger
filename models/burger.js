// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(result) {
			callback(result);
		});
	},
	// The variables cols and vals are arrays.
	insertOne: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function(result) {
			callback(result);
		});
	},
	updateOne: function(objColVals, condition, callback) {
		orm.updateOne("burgers", objColVals, condition, function(result) {
			callback(result);
		});
	}
};

module.exports = burger
