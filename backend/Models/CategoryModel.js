const mongoose = require('mongoose');
const Contact = require('../Schemas/CategorySchema');

const CategorytModel = mongoose.model('Category', CategorySchema);



module.exports = CategorytModel;