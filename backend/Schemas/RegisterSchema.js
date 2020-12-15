const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
    userName:{type: String, required: true},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{ type:String, Number, required: true},
    password:{type: String, Number, required: true},
    gender:{type: String, enum: ['female', 'male'], default: NaN}

})