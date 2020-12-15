const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (request, response) => {
    response.send({ msg: 'welcome to Event Manager App' })
})
app.use(express.json())
app.use('/contact' , require('./Routes/Contact'))

// connect to mongodb 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.MONGO_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is connected 😎');
    })
    .catch((err) => {
        console.log(err);
    })



app.listen(7000, () => {
    console.log('Server Started on port 7000');
})

