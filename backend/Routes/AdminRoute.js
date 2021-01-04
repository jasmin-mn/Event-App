const express = require('express');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authenticate = require("../middleware/authenticate")
const restrictTo = require('../middleware/restrictTo');
const User = require('../Models/UserModel'); 
const router = express.Router()
 
// @root get admin/dashboard 
router.get('/dashboard', authenticate , restrictTo('admin'), async(request , response)=>{
    try {
        const user = await User.findById(request.id).select('-password');
        if(!user){
            return response.status(500).json({ msg : 'Server error'})
        }
        response.json({ msg : ` welcome back  ${user.firstName} `  })
        
    } catch (error) {
        
        return response.status(500).json({ msg : 'Server error'})
    }

});
router.delete('/delUser/:uid' ,authenticate , restrictTo('admin','superuser','manager') , async (request , response)=>{
    try {
        const user = await User.findById(request.params.uid);
    
   
    if(!user) {
        return response.status(404).json({ msg : ' user not found  ' })  
    }
  
      
       await User.findByIdAndRemove(request.params.uid)   
       

       response.send("user is deleted ")
    } catch (error) {
       
   }  
})

module.exports = router