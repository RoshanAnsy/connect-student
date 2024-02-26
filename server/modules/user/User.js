const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true,
    },
        
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
 
    collagecode:{
        type:String,
    },
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profileInfo",
        required:true,
    },
    postdetail:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        }
    ],
    collageinfo:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"collageInfo",
    },
    image:{
        type:String, 
    },
   otp:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"OTP"
   }

} , { timestamps:true }
);

module.exports=mongoose.model("User",userSchema);