const nodeMailer = require("nodemailer");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "lisa13suarez@gmail.com",
        pass: process.env.G_PASSWORD
    }
});

module.exports = transporter;