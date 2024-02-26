const RatingAPost=require("../../modules/post/ratingAndPost")
const post=require("../../modules/post/userPost");

exports.RatingAPost=async(req,res)=>{
    try{
    //user id
    const user_id=req.user.id;
    const {like,dislike,share,postId}=req.body;

    //allready review or not
    const allreadyReview=await RatingAPost.findOne({user:user_id,post:postId});

    if(allreadyReview!==null){
       return res.status(401).json({
            message:"post is all ready review",
            success:false,
        })
    }
    console.log("not need to print this ")
    const ratingReview=await RatingAPost.create({
        user:user_id,
        post:postId,
        
    })
    const updatePostDetails=await post.findByIdAndUpdate({_id:postId},
        {$inc: { like: like, dislike: dislike, share: share }},
        {
            $push: {
                ratingOfPost: ratingReview._id,
            }
        },
        {new: true})
    console.log("updated post details",updatePostDetails)
        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            // ratingReview,
        })
    }
    catch(error) {
        
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }    

}