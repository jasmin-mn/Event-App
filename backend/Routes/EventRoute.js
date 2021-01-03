
const express = require('express');
const Events = require('../Models/EventModel');

const router = express.Router();


router.post('/sendData', async (request, response) => {

    const {group_name,group_admin,location,member,description,dateEventstarted } = request.body;
    const event = new Events({
        group_name,group_admin,description,location,member,dateEventstarted 
    });
    await event.save();

    response.send('you have created your Event ')
});


router.post('/delete',(req,res)=>{

    Events.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data);

        res.send("deleted")
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/update',(req,res)=>{

    Events.findByIdAndUpdate(req.body.id,{

        group_name:req.body.group_name,
        group_admin:req.body.group_admin,
        description:req.body.description,
        location:req.body.location,
        member:req.body.member,
        dateEventstarted:req.body.dateEventstarted


    }).then(data=>{
        console.log(data);
        res.send("updated")
    })
    .catch(err=>{
        console.log(err);
    })
})




module.exports=router