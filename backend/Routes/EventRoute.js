
const express = require('express');
const Events = require('../Models/EventModel');

const authenticate = require('../middleware/authenticate')
const restrictTo = require('../middleware/restrictTo');

const Category = require('../Models/CategoryModel');

const router = express.Router();


router.post('/sendData', authenticate, restrictTo('admin', 'superuser'), async (request, response) => {

    try {
        let { event_name, event_admin, event_photo, location, language, member, description, dateEventstarted, category_id } = request.body;
        location = location.charAt(0).toUpperCase() + location.slice(1);

        const event = new Events({
            event_name, event_admin, event_photo, description, location, language, member, dateEventstarted, user_id: request.id, category_id
        });
        await event.save();

        response.send('you have created your Event ')

    } catch (error) {
        response.send(error)
    }
});



router.delete('/delete', authenticate, async (req, res) => {
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


router.post('/update', authenticate, restrictTo('admin', 'superuser'), (req, res) => {

    Events.findByIdAndUpdate(req.body.id, {

        event_name: req.body.event_name,
        event_admin: req.body.event_admin,
        event_photo: req.body.event_photo,
        description: req.body.description,
        location: req.body.location,
        language: req.body.language,
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
        const events = await Events.find().populate('category_id');

        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.send(events)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


// View one Event
router.get('/viewOneEvent/:id', async (request, response) => {

    try {
        const events = await Events.findById({ _id: request.params.id }).populate('category_id');

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

        const filter = await Events.aggregate([{
            $group: {
                _id: { location: '$location' },
                event_photo: { $first: '$event_photo' },
                count: { $sum: 1 }
            }
            // { event_photo: '$event_photo', count: { $sum: 1 } }
        }], (error, result) => {
            if (error) {
                console.log(error);
            }
            return response.send(result);
        });
        // console.log(filter);

        const events = await Events.find(filter);
        console.log(events);

        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        return response.send(events)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })
    }
});


// View Events by seected Location
router.get('/viewBySelectedCity/:city', async (request, response) => {

    try {

        const events = await Events.find({ location: request.params.city });

        console.log(events);

        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        return response.send(events)

    } catch (error) {
        response.status(500).send({ msg: error })
    }
});


// View all Events by Category
router.get('/viewByCategory', async (request, response) => {

    try {
        const filter = await Events.aggregate([{

            "$lookup":
            {
                from: "categories",
                foreignField: "_id",
                localField: "category_id",
                as: "category"
            }
        },
        {
            $group: { _id: '$category', count: { $sum: 1 } }
        }], (error, result) => {
            if (error) {
                return response.send(error);
            }
            response.send(result);
        });

        const events = await Events.find(filter);

        if (!events) {
            return response.status(500).send({ msg: 'Server error' })
        }
        return response.send(events)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })
    }

});




module.exports = router