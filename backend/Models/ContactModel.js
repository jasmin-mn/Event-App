const mongoose = require('mongoose');
const Contact = require('../Schemas/ContactSchema');

const ContactModel = mongoose.model('Contact', ContactSchema);



module.exports = ContactModel;