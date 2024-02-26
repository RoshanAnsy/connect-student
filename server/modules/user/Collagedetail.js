const mongoose=require("mongoose");

const collageInfo=new mongoose.Schema({

    collageName:{
        type:String,
    },
     rejno:{
        type:String,
        
    },
    rollno:{
        type:String,
        
    },
    year:{
        type:String,
       
    },
    semester:{
        type:String,
      
    },
    branch:{
        type:String,
      
    },
    universityName:{
        type:String,
    },
    
    fatherName:{
        type:String,
    },
    policeStations:{
        type:String,
    },
    dist:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:String,
    },
    country:{
        type:String,
    },
    bloodgroup:{
        type:String,
    }
    

});

module.exports=mongoose.model("collageInfo",collageInfo);