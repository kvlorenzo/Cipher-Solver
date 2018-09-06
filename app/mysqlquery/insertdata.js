/* IMPORTANT:
Turns out that it is not good practice to use a database with client-side
Javascript, so I am scrapping the idea of maintaining a database to
store a cipher history and will resort to a traditional data structure
instead. However, I will be keeping this code to demo some of my efforts
of learning mysql while creating this project. There is not a lot of code 
since I have not taken any formal courses (as of FALL 2018) on databases, but
practicing based on tutorials have helped gain a firm grasp on how to
manage a database such the one below. So enjoy what little there is to see and
I hope you appreciate my effort in learning databases :)
*/

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