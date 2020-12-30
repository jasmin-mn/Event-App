
const express = require('express');
const Events = require('../Models/CategoryModel');

const router = express.Router();


router.post('/', async (request, response) => {

    const { name, description } = request.body;
    const event = new Events({
        name, description
    });
    await event.save();

    response.send('you have created your Categeory ')
});

module.exports = router