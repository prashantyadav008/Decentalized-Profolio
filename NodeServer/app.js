/** @format */

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
