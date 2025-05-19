/** @format */

const express = require("express");
const router = express.Router();
const {
  getServerStatus,
  sendContactEmail,
} = require("../controllers/contactController");

router.get("/", getServerStatus);
router.post("/contact-us", sendContactEmail);

module.exports = router;
