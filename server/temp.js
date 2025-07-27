const express = require("express");
const router = express.Router();
const {contact}= require("./contact")

router.post("/send-email", contact);

module.exports = {router};