const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: 'StudyNotion || CodeHelp - by Harsh Patel <your-email@example.com>', // add your sender email here
      to: email,
      subject: title,
      html: body,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log("Error sending email:");
    console.log(error.message);
    throw error;
  }
};

module.exports = mailSender;
