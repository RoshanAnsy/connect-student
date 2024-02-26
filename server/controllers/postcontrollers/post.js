const Post=require("../../modules/post/userPost");
const User=require("../../modules/user/User");
const {uploadImageToCloudinary}=require("../../utils/imageUploader");
require("dotenv").config();

exports.createPost=async (req,res)=>{

    try{
         //fetch the data
    const desc=req.body.desc;
    const id=req.user.id;
  
//    const thumbnail=req.files.file;
   const thumbnail=req.files.file;

//    console.log(thumbnail)
   console.log("desc and thuminal are ",desc,thumbnail);
    //validation
    if(!desc){
        return res.status(400).json({
            success:false,
            message:'you have to add what want to post',

        });
    }
    
    const userDetils=await User.findById(id);
    // console.log("User detils",userDetils);
    if(!userDetils){
        return res.status(400).json({
            success:false,
            message:'user detils is not found',
        });
    }
    //
    //upload image to cluodnary
    const thumbnailImage=await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);
//    console.log(thumbnailImage)
    
    //create db entry for new post
    const newPost=await Post.create({
        description:desc,
        instructor:userDetils._id,
        thumbnail:thumbnailImage.secure_url,
    });

    console.log("new post is here",newPost)
    //add a new post to the user schema of user
    await User.findByIdAndUpdate(
        {_id:userDetils._id},
       { 
         $push: {
            postdetail:newPost._id,
        }
    },
        {new:true},
    );

    //return resp
    return res.status(200).json({
        success:true,
        message:'post created successfully',
        data:newPost,
    });
 }
    catch(error){
        return res.status(400).json({
            success:false,
            message:'failed to create post',
            error:error.message,
        })
    }

}



//get all post handler function

exports.showAllPost=async (req,res)=>{
    try{
        //fetch all post from db
        // const id=req.user.id;
        const allPost=await Post.find({}).populate("instructor").populate("ratingOfPost").exec();
        //validation of post
            // console.log("this is from post finction",req.user.id)
        if(!allPost){
            return res.status(300).json({
                success:false,
                message:'there is no post avable till now',
            });
        }
        //return
        return res.status(200).json({
            success:true,
            message:'data for all post fetched succesfully',
            data:allPost,
        })
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            success:false,
            message:'cannot fetch post data',
            error:err.message,
        })
    }
}