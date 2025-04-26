"use strict";

var mongoose = require("mongoose");
var donationSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  ngoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    "default": null
  },
  status: {
    type: String,
    "enum": ["Pending", "Accepted", "Collected"],
    "default": "Pending"
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model("Donation", donationSchema);