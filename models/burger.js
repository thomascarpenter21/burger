
var orm = require("../config/orm.js");

// this my orm that will interface with the database
var burger = {
	all: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	// cols and values are arrays
	create: function (cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function (res){
			cb(res);
		})
	}
}

module.exports = burger;