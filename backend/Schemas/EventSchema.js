
const mongoose=require("mongoose");



const EventSchema=new mongoose.Schema({

    group_name:{type:String,required:true},
    group_admin:{type:String,required:true },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    description:{type:String},
    dateEventcreated:{type:Date,default:Date.now},
    location:{type:String},
    Event_photo:{type:String},
    member:{type:Number},
    eventtype:{type:String},
    dateEventstarted:{type:Date}
  

})


module.exports=EventSchema