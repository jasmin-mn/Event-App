const express = require('express');
const ContactModel = require('../Models/ContactModel');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router();


// router.post('/', async (request, response) => {

//     const { name, email, Phone, Date, subject, message } = request.body;
//     const contact = new ContactModel({
//         name, email, Phone, Date, subject, message
//     });
//     await contact.save();

//     response.send('Message have been sent')
// });


router.post('/sendEmail', async (request, response) => {

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
        host: "Gmail",
        port: 465,
        auth: {
            user: "app.event10@gmail.com",
            pass: "Erfolg21"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: email,
        to: "app.event10@gmail.com",
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