
const express = require('express');
const Events = require('../Models/EventModel');
const authenticate = require('../middleware/authenticate')
const router = express.Router();


router.post('/sendData', authenticate, async (request, response) => {

    try {
        const { group_name, group_admin, location, member, description, dateEventstarted, category_id } = request.body;
        const event = new Events({
            group_name, group_admin, description, location, member, dateEventstarted, user_id: request.id, category_id
        });
        await event.save();

        response.send('you have created your Event ')

    } catch (error) {
        response.send(error)
    }
});


router.post('/delete', authenticate, async (req, res) => {
    // Make sure user own the event 
    try {
        const event = await Events.findById(req.body.id);
        console.log('the user id : ', req.id);

        if (!event) {
            return res.status(404).json({ msg: ' event not found  ' })
        }
        console.log('user id is : ', event.user_id);
        if (event.user_id.toString() !== req.id) {
            return res.status(401).json({ msg: ' you are not authorized to delete ' })
        }
        await Events.findByIdAndRemove(req.body.id)


        res.send("deleted")
    }

    catch (err) {
        console.log(err);
    }
})

router.post('/update', authenticate, (req, res) => {

    Events.findByIdAndUpdate(req.body.id, {

        group_name: req.body.group_name,
        group_admin: req.body.group_admin,
        description: req.body.description,
        location: req.body.location,
        member: req.body.member,
        dateEventstarted: req.body.dateEventstarted


    }).then(data => {
        console.log(data);
        res.send("updated")
    })
        .catch(err => {
            console.log(err);
        })
})


// View all Events
router.get('/viewAll', async (request, response) => {

    try {
        const events = await Events.find(request.params.id);
        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.send(events)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


// View all Events by Location
router.get('/viewByCity', async (request, response) => {

    try {
        const events = await Events.find({ "location": request.body.location });
        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.send(events)


    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


// View all Events by Category
router.get('/viewByCategory', async (request, response) => {

    try {
        const events = await Events.find({ "category_id": request.body.category_id });
        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.send(events)


    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


module.exports = router