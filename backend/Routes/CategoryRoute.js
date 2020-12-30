
const express = require('express');
const Category = require('../Models/CategoryModel');

const router = express.Router();

// Adding new Categories
router.post('/add', async (request, response) => {

    try {
        const { name, description } = request.body;
        const category = new Category({
            name, description
        });
        await category.save();

        response.send(`${name} Categeory have been created !!`)
    } catch (err) {
        console.log(err);
        response.send('server error');
    }
});

router.put('/edit/:id', (request, response) => {
    try {
        const category = ('Category').updateOne({ _id: new ObjectID(request.params.id) }, {
            $set: { name: 'Najeeb' }
        });
        response.send('Category have been updated!!')
    } catch (err) {
        console.log(err);
        response.send('server error');
    }
})

router.delete('/delete/:id', (request, response) => {
    try {
        EventsMgr.collection('Category').deleteOne({ _id: new ObjectID(request.params.id) }, {
            $set: { name: 'js' }
        });
        response.send('Category have been Deleted!!')
    } catch (err) {
        console.log(err);
        response.send('server error');
    }

})


module.exports = router