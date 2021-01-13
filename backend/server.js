const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./Models/UserModel")
const Event = require("./Models/EventModel")
const Register = require("./Models/UserModel")
const dotenv = require('dotenv');
<<<<<<< HEAD

const cors=require('cors')
  
  

=======
const cors = require('cors')
>>>>>>> master
dotenv.config();

app.get('/', (request, response) => {
    response.send({ msg: 'welcome to Event Manager App' })
})

// middleware
app.use(express.json())
 
app.use(cors({
    origin : 'http://localhost:3000'
    })) 
app.use('/contact', require('./Routes/ContactRoute'));
app.use('/category', require('./Routes/CategoryRoute'));
app.use('/user', require('./Routes/UserRoute'));
app.use('/event', require('./Routes/EventRoute'));
app.use('/admin', require('./Routes/AdminRoute'))
app.use('/search', require('./Routes/SearchRoute'));




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

