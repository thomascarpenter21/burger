var connection = require("../config/connection.js");

function objToSql(ob) {
  
  var arr = [];

  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + '=' + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM" + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},

insertOne: function(table, burger_name, cb) {
    var queryString = "INSERT INTO" + table + " (burger_name) VALUE ('" + burger_name + "')";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},

updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;