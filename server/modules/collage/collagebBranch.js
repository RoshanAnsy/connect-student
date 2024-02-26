const mongoose=require("mongoose")

const branchDetails=new mongoose.Schema({
    branchName:{
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
    },
    noOfSheet:{
        type:Number,
    }
})

module.exports=mongoose.model("branch",branchDetails);