const mongoose = require("mongoose")
const RegisterSchema = require("../Schemas/UserSchema")
const Register = mongoose.model("Register", RegisterSchema)



module.exports = Register