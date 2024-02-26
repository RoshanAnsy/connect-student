const mongoose=require("mongoose")

const collageData= new mongoose.Schema({
    collageName:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        required:true,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    imageUrl:{
        type:String,
        required:true,
    },

    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        
    },
    hostal:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hostal",
    },

}, { timestamps:true }
)

module.exports=mongoose.model("collageData",collageData);
