const express = require('express');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authenticate = require("authenticate")
const User = require('../Models/UserModel');
const router = express.Router()

router.post("/register", async(request,response)=>{
    const {userName,firstName, lastName, email, password, gender} = request.body;
    try{
        let data = await User.findOne({ email })
        if(data){
            return response.status(400).json({msg: "User already exist"})
        }
        data = new User({
            userName,firstName, lastName, email, password, gender


        })
        const salt = await bcrypt.genSalt(10)
        data.password = await bcrypt.hash(password, salt)
        await data.save();

        const payload = {
            id: data.id,
            iat:Date.now(),
            exp:Date.now() + 60000
        }
        jwt.sign(
            payload,
            process.env.SECRET,
            (error, token)=>{
                if(error) throw error;
                response.json({token})
            }
        )
    } catch (error){
        console.log(error);
        response.status(500).send({msg: "Server error"})
    }
})


// router.post("/", async (request, response)=>{
//     const {userName,firstName, lastName, email, password, gender} = request.body;
//     const newUser = new User({
//         userName, firstName, lastName, email, password, gender
        
//     })

//     await newUser.save()
//     response.send("Thank you, You are successfully registered")
   
   
// })

router.post("/login", async(request,response)=>{
    const { email, password} = request.body
    let data = await User.findOne({ email })
    if(!data){
        return response.status(400).json({msg: "Invalid email or password. Kindly type in the right information."})
    } else{
        return response.status(200).json({msg: "Login."})
    }

    const isMatch = await bcrypt.compare(password, data.password)
    if(!isMatch){
        return response.status(400).json({msg: "Invalid email or password. Kindly type in the right information."})
    } else{
        return response.status(200).json({msg: "Login."})
    }

    // token
    const payload = {
        id: data.id,
        iat:Date.now(),
        exp:Date.now() + 600000

    }
    jwt.sign(
        payload,
        process.env.SECRET,
        (error, token)=>{
            if(error) throw error
            console.log(token);
            response.json({token})
        }
    )

    try{

    } catch(error){
        console.log(error);
        response.status(500).send("Server error")
    }

})

// Profile

router.get("/", async(request, response)=>{
    const{ userName, firstName, lastName, email, password, dateOfBirth, place, hometown, gender, language, yourInterests, others} = request.body
    const newUser = new User({
        userName, firstName, lastName, email, password, dateOfBirth, place, hometown, gender, language, yourInterests, others

    })

    await newUser.save()
    response.send("Profile Updated")
})


module.exports = router