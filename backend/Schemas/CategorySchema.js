const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    name: { type: String, required: true },
    photo: { type: String, default: "https://pixabay.com/de/vectors/laptop-3d-programmierung-internet-3173613/" },
    description: { type: String },
});

module.exports = CategorySchema;