
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


// View all Categories
router.get('/view', async (request, response) => {

    try {
        const category = await Category.find(request.id);
        if (!category) {
            return response.status(500).send({ msg: 'Server error' })
        }
        response.json(category)

    } catch (error) {
        response.status(500).send({ msg: 'Server error' })

    }
});


// Updating Categories
router.put('/edit/:id', async (request, response) => {

    const { name, description } = request.body;
    const category = await Category.findByIdAndUpdate(
        { _id: (request.params.id) },
        { $set: { name, description } }
    );

    if (category) {
        response.send(`The Category name have been updated !!`)
    } else {
        response.send('server error');
    }

})



// Deleting Categories
router.delete('/delete/:id', async (request, response) => {

    const category = await Category.findByIdAndDelete({ _id: (request.params.id) });

    if (category) {
        response.send('Category have been Deleted!!')
    } else {
        response.send('server error');
    }
})


module.exports = router