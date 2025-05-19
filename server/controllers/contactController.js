/** @format */

const nodemailer = require("nodemailer");
const { generateEmailTemplate } = require("../utils/emailTemplate");

const getServerStatus = async (req, res) => {
  res.status(200).json({ message: "Server is running" });
};

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // return res.status(200).json({ data: [name, email, subject, message] });

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.RECEIVER_EMAIL, // user email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.RECEIVER_EMAIL, // sender address
      to: process.env.RECEIVER_EMAIL, // receiver email
      subject: `Contact Form: ${subject}`,
      html: generateEmailTemplate({ name, email, subject, message }),
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { getServerStatus, sendContactEmail };
