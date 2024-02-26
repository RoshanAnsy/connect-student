const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
  
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    ratingOfPost:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAPost",
        }
    ],
    
    thumbnail:{
        type:String,
        
    },
    tag:{
        type:[String],
       
    },
    like: {
		type: Number,
        default:0,
		
	},
    dislike: {
		type: Number,
		default:0,
	},
    share: {
		type: Number,
		default:0,
	},
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
});

module.exports=mongoose.model("post",postSchema);