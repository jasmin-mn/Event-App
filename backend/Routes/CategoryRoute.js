
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


// Updating Category name
router.put('/edit/:id', async (request, response) => {
    try {
        const category = await Category.findByIdAndUpdate(
            { _id: (request.params.id) }, {
            $set: { name: 'Frontend' }
        });

            response.send(`The Category name have been updated !!`)
  
    } catch (err) {
        console.log(err);
        response.send('server error');
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const category = await Category.findByIdAndUpdate({ _id: (request.params.id) });
        if (category) {
            response.send('Category have been Deleted!!')
        }

    } catch (err) {
        console.log(err);
        response.send('server error');
    }

})


module.exports = router