const mongoose=require("mongoose")

const RatingAPost=new  mongoose.Schema({
    user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	
	
	post: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "post",
		index: true,
	},
})
module.exports=mongoose.model("RatingAPost",RatingAPost);