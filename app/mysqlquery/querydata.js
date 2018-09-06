var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'messages'
});

connection.connect(function(err) {
  if (err) {
    console.log("Error occurred: Connection unsuccessful");
  }
  console.log("Connection successful");
});

var query = connection.query('SELECT * FROM messages ORDER BY id DESC LIMIT 1',
  function(err, result) {
    if (err) {
      console.log("Error occurred: Query unsuccessful");
      return;
    }
    console.log(query.sql)
    return;
});