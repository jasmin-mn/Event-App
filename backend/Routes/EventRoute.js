
const express = require('express');
const Events = require('../Models/EventModel');

const router = express.Router();


router.post('/', async (request, response) => {

    const {group_name,group_admin,location,member,description,dateEventstarted } = request.body;
    const event = new Events({
        group_name,group_admin,description,location,member,dateEventstarted 
    });
    await event.save();

    response.send('you have created your Event ')
});

module.exports=router