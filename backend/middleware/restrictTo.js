const { response } = require("express")

module.exports = (...roles)=>{
    return(request, response,next)=>{

    
    // roles is an array ['admin' ,'supervisor']
    if(!roles.includes(request.user.role)){
        return response.status(404).json({msg: 'You dont have the permission for this action, Authorization Denied'})
    }
    next()
    }
}