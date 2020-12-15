const mongoose = require("mongoose")
const RegisterSchema = require("../Schemas/RegisterSchema")
const Register = mongoose.model("Register", RegisterSchema)



module.exports = Register