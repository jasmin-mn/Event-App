const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
 
const User = require("./Models/UserModel")
 
const Event=require("./Models/EventModel")
const Register = require("./Models/UserModel")
 

app.get('/', (request, response) => {
    response.send({ msg: 'welcome to Event Manager App' })
})
app.use(express.json())
app.use('/contact' , require('./Routes/Contact'))
app.use('/user', require('./Routes/UserRoute'))
app.use('/event', require('./Routes/EventRoute'))
app.use('/login', require('./Routes/UserRoute'))
app.use('/register', require('./Routes/UserRoute'))
app.use('/profile', require('./Routes/UserRoute'))
app.use('/event', require('./Routes/EventRoute'))

 
 


// connect to mongodb 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.MONGO_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is connected 😎');
    })
    .catch((err) => {
        console.log(err);
    })




app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
})

