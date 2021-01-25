const jwt = require("jsonwebtoken")
const User = require("../Models/UserModel")

module.exports = async(request,response,next)=>{
    // console.log('request.cookies : ',request.cookies);
    const token = request.header('authorization')
        console.log(token);



//    const token = request.cookies.jwt
   
   //const token = request.header('authorization')
   
//    console.log(request.cookies);
//    const tokenstring = request.headers.cookie.split(';')
   
//     const tokenstringJWT = tokenstring[0].split('=');
//     const token = tokenstringJWT[1];
//     console.log(token);

    // const options = {
    //     jwtFromRequest: ExtractJwt.jwtFromRequest(),
    //     secretOrKey: process.env.SECRET}
    //     console.log(options);

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


