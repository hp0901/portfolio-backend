// email/transporter.js
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

console.log("Email user:", process.env.MAIL_USER ? "set" : "not set");
console.log("Email pass:", process.env.MAIL_PASS ? "set" : "not set");


module.exports = transporter;
