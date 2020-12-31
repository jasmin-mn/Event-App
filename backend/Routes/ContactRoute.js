const express = require('express');
const Contact = require('../Models/ContactModel');
const nodemailer = require('nodemailer');
// const sendEmail = require('../Utilities/sendEmail')

const router = express.Router();


router.post('/', async (request, response) => {

    const { name, email, Phone, Date, subject, message } = request.body;

    const NewMessage = new Contact({ // Saving the received E-Mail in the Database
        name, email, Phone, Date, subject, message
    });
    await NewMessage.save();

    response.send(`Thank you ${name} for contacting us, your E-Mail has been sent !!`)

    const output = `
    <p>you have a new message</p>
    <ul>
        <li> From: ${name} </li>
        <li> Email: ${email} </li>
        <li> Phone: ${Phone} </li>
        <li> Date: ${Date} </li>
        <li> subject: ${subject} </li>
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
        to: process.env.CONTACT_EMAIL,
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