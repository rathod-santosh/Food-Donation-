"use strict";

var express = require("express");
var _require = require("../controllers/ngoController"),
  acceptDonation = _require.acceptDonation;
var router = express.Router();

// Route to accept a donation
router.post("/ngo/accept-donation/:donationId", acceptDonation);
module.exports = router;