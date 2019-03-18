var mysql = require("mysql");

var connection
console.log(process.env.JAWSDB_URL)
if (process.env.JAWSDB_URL) {

   connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

   connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Minecraft420",
    database: "burgers_db"

  });
}
console.log(connection)

connection.connect(function (err) {
  if (err) {
    throw error
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//   exports connection
module.exports = connection;