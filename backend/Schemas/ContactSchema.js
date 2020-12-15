const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    
    name: { type: String },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
});

module.exports = ContactSchema;