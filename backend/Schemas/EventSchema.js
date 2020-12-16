
const mongoose=require("mongoose");
import EventImage from "./EventImageSchema"


const EventSchema=new mongoose.Schema({

    group_name:{type:String,required:true},
    category:{type:String},
    date:{type:Date},
    location:{type:String},
    Event_photo:{type:String},

})


module.exports=EventSchema