
const express = require('express');
const Events = require('../Models/EventModel');
const router = express.Router();



// View all Events by Location
router.get('/search', async (request, response) => {

    try {
        const events = await Events.find({ "event_name": request.body.event_name });
        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.send(events)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


module.exports = router