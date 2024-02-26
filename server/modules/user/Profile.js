const mongoose=require("mongoose");

const profileInfo=new mongoose.Schema({

    gender:{
        type:String,
       
    },
    number:{
        type:String,
        
    },
    about:{
        type:String,
       
    },
    dob:{
        type:Date,
     },
     github:{
        type:String
     },
     linkedin:{
        type:String
     }
    
});

module.exports=mongoose.model("profileInfo",profileInfo);