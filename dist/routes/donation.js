"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/donationController"),
  updateDonationStatus = _require.updateDonationStatus;
router.post("/update-donation-status", updateDonationStatus);
module.exports = router;