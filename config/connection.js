var mysql = require("mysql");

var connection

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

connection.connect();

//   exports connection
module.exports = connection;