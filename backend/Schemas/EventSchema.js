const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({

    event_name: { type: String, required: true },
    event_photo: { type: String, default: 'https://www.pexels.com/de-de/foto/hand-laptop-computer-gerat-574071' },

    category_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    description: { type: String },
    dateEventcreated: { type: Date, default: Date.now() },
    location: { type: String },
    language: { type: String },
    member: { type: Number },
    eventtype: { type: String },
    dateEventstarted: { type: Date },

    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

})


module.exports = EventSchema