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

var curTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

var testMsg = {
  technique: 'Caesar',
  encrypting: 1,
  settings: '7',
  time: curTime,
  message: 'As announced at the final exam'
};

var query = 
  connection.query('insert into messages set ?', testMsg, function(err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(query.sql);
    return;
});