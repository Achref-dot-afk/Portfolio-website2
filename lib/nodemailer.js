require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async function sendMail(data){

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.APP_EMAIL_ADRESS,
      pass: process.env.MAIL_SECRET,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const message = {
    from: `${data.name} <${data.email}>`, 
    to: process.env.APP_EMAIL_ADRESS, 
    subject: data.subject, 
    text: data.message,
  };

  try {
    const info = await transporter.sendMail(message);
    return info;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};
