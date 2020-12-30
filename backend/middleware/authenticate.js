const jwt = require("jsonwebtoken")
const User = require("../Models/UserModel")

module.exports = async(request,response,next)=>{
    const token = request.header('authorization')
    console.log(token);

    if(!token){
        return response.status(400).json({msg: 'No Token authorization denied!!'})
    }
    try{
        const decode = await jwt.verify(token, process.env.SECRET)
        console.log('decode:', decode);
        request.id = decode.id
        const currentUser = await User.findById(decode.id)
        if(!currentUser){
            return response.status(400).json({msg: 'The User with the current token is no longer exist'})
        }
        request.id = currentUser.id
        console.log(request.user);
        next()
    } catch(error){
        console.log(error);
        return response.status(400).json({msg: 'Token is not valid'})
    }
}