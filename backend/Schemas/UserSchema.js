const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName:{type: String,Number, required: true},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{ type:String, Number, required: true},
    password:{type: String, Number, required: true},
    gender:{type: String, enum: ['female', 'male', 'N/A'], default: 'N/A'},
    age: {
        type: Number,
        
    },
    photo:{type: String},
    place:{type: String},
    hometown:{type: String},
    language:{type: [String]},
    yourInterests:{type:[String]},
    others:{type:[String]},
    events: {type: String},
    role:{ type: String, enum:["user", "admin"], default: "user"},

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: String

})

module.exports = UserSchema

// const root = 'https://s3.amazonaws.com/mybucket'; virtual getter 