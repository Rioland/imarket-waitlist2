
   
const mysql = require("mysql");
// const DATA = require("./dbparam");
require("dotenv").config();

const dbConn=mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  // localAddress:
  
});

// dbConn

module.exports=dbConn;


// exports.getConnected=()=>db.getConnection((err,conn));
