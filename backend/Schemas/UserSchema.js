const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName:{type: String, required: false},
    firstName:{type: String, required: false},
    lastName:{type: String, required: false},
    email:{ type:String, Number, required: true},
    password:{type: String, Number, required: true},
    gender:{type: String, enum: ['female', 'male', 'N/A'], default: 'N/A'},
    dateOfBirth: {
        type: Date,
        required: false,
        trim: true,
    },
    photo:{type: String},
    place:{type: String},
    hometown:{type: String},
    language:{type:String},
    yourInterests:{type:String, required:[false,]},
    others:{type:String},
    events: {type: String}

})

module.exports = UserSchema

// const root = 'https://s3.amazonaws.com/mybucket'; virtual getter 