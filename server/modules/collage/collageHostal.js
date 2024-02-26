const mongoose=require("mongoose")

const hostalDetails=new mongoose.Schema({
    hostalName:{
        type:String
    },
    about:{
        type:String,

    },
    imageUrl:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

})

module.exports=mongoose.model("hostal",hostalDetails);