const express = require('express');
const ContactModel = require('../Models/ContactModel');
// const nodemailer = require('nodemailer');
// const sendEmail = require('./utils/sendEmail');
const router = express.Router();


router.post('/', async (request, response) => {

    const { name, email, Phone, Date, subject, message } = request.body;
    const contact = new ContactModel({
        name, email, Phone, Date, subject, message
    });
    await contact.save();

    response.send('Message have been sent')
});



module.exports = router;