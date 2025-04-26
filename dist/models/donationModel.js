"use strict";

require("dotenv").config();
var mysql = require("mysql2");

// Create MySQL Database Connection
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
db.connect(function (err) {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});
module.exports = db;