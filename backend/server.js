const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./Models/UserModel")
const Event = require("./Models/EventModel")
const Register = require("./Models/UserModel")
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
// const passport = require('passport');
dotenv.config();


// app.get('/', (request, response) => {
//     response.send({ msg: 'welcome to Event Manager App' })
// })

// middleware
app.use(express.json())
app.use(cookieParser());
 
app.use(cors({
    origin : 'http://localhost:3000',
    credentials: true
    })) 
app.use('/contact', require('./Routes/ContactRoute'));
app.use('/category', require('./Routes/CategoryRoute'));
app.use('/user', require('./Routes/UserRoute'));
app.use('/event', require('./Routes/EventRoute'));
app.use('/admin', require('./Routes/AdminRoute'))
app.use('/search', require('./Routes/SearchRoute'));


// app.use(passport.initialize())




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

