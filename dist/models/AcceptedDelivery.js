"use strict";

var mongoose = require("mongoose");
var AcceptedDeliverySchema = new mongoose.Schema({
  donationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donation",
    required: true
  },
  deliveryCharge: {
    type: Number,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  dropLocation: {
    type: String,
    required: true
  },
  status: {
    type: String,
    "default": "accepted_delivery"
  }
});
module.exports = mongoose.model("AcceptedDelivery", AcceptedDeliverySchema);