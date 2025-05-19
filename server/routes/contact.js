/** @format */

const express = require("express");
const router = express.Router();
const {
  getServerStatus,
  sendContactEmail,
} = require("../controllers/contactController");

router.get("/", getServerStatus);
router.post("/", sendContactEmail);

module.exports = router;
