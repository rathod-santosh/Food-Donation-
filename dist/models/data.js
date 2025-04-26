"use strict";

var mysql = require('mysql');

// Set up MySQL connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  // Change this
  database: "food_donations"
});
connection.connect();
app.get("/profile", function (req, res) {
  if (!req.session.name) {
    return res.redirect('/signup');
  }
  var email = req.session.email;
  var query = "SELECT * FROM food_donations WHERE email = ?";
  connection.query(query, [email], function (err, results) {
    if (err) throw err;
    res.render("profile", {
      name: req.session.name,
      email: req.session.email,
      gender: req.session.gender,
      donations: results
    });
  });
});