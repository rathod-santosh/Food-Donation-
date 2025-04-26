"use strict";

// models/donor.js
var mongoose = require('mongoose');
var donorSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  donations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donation'
  }],
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Donor', donorSchema);