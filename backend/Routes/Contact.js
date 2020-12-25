const express = require('express');
const ContactModel = require('../Models/ContactModel');
const nodemailer = require('nodemailer');
// const sendEmail = require('../Utilities/sendEmail')

const router = express.Router();


router.post('/', async (request, response) => {

    const { name, email, Phone, Date, subject, message } = request.body;

    const output = `
    <p>you have a new message</p>
    <ul>
        <li> Name: ${name} </li>
        <li> Email: ${email} </li>
        <li> Email: ${Phone} </li>
        <li> Email: ${Date} </li>
        <li> Company: ${subject} </li>
    </ul>
    <p> Message: ${message} </p>

    `

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: email,
        to: "najeebselwi@gmail.com",
        subject,
        Phone,
        message,
        html: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw error;
        console.log('Message sent', info.messageId);
        response.send({ msg: 'Email have been sent' });
    })
});




module.exports = router;