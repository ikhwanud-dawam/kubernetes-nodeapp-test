  var mysql = require("mysql");
  require('dotenv').config()

  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'mysql-stateful-service', // Replace with your host name
    port: process.env.MYSQL_PORT || '3306', //Replace with your port
    user: process.env.MYSQL_USER || 'root', // Replace with your database username
    password: process.env.MYSQL_ROOT_PASSWORD || 'password', // Replace with your database password
    database: process.env.MYSQL_DATABASE || 'nodecrud', // // Replace with your database Name
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database is connected successfully !");
  });
  module.exports = connection;