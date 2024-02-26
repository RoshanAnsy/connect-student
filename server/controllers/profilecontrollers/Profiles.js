const Profile=require("../../modules/user/Profile");
const User=require("../../modules/user/User");
const {uploadImageToCloudinary}=require("../../utils/imageUploader");
require("dotenv").config();

exports.updateProfile=async (req,res)=>{
    try{
        const {number,about,gender,dob,github,linkedin}=req.body;
        //get user id
        const id=req.user.id; 
        //validation
        if(!number || !gender  ){
            return res.status(400).json({
                success:false,
                message:'all field are required',
            });
        }
        //find profile
        const userDetils=await User.findById(id);
        // console.log("user id is here",userDetils);
       
         const profileId= userDetils.profile._id;
        //  console.log("profile is is here",profileId);
        const profileDetails=await Profile.findById(profileId);
        
        profileDetails.number=number;
        profileDetails.about=about;
        profileDetails.gender=gender;
        profileDetails.dob=dob;
        profileDetails.github=github;
        profileDetails.linkedin=linkedin;
        //save and updates
        await profileDetails.save();
        //return response
        return res.status(200).json({
            success:true,
            message:'profile update succesfully',
            profileDetails,
        });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:'somthing error in profile updates',
        });
    }
}


//get all user details
exports.getAllUserDetails=async (req,res)=>{
    try{
        const id=req.user.id;
        //validation and get user details
        console.log(id)
        const userDetails= await User.findById(id).populate('collageinfo').populate('profile').populate('postdetail').exec();

        return res.status(200).json({
            success:true,
            message:"user data fetched successfully",
            userDetails,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
};

//updates users profiles photo
exports.updateProfilePoto=async (req,res)=>{
    try{
        
        const displayPoto=req.files.displayPoto;
        const userId=req.user.id;
        //upload image  to cloudnary
        const image=await uploadImageToCloudinary(
            displayPoto,
            process.env.FOLDER_NAME,
            1000,
            1000
        );
        //update profile photo
        const updateProfile=await User.findByIdAndUpdate(
            {_id:userId},
            {image:image.secure_url},
            {new:true},
        );
        //send responce
        res.status(200).json({
            success:true,
            message:'Image uploaded succesfully',
            updateProfile,
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:'profile photo is not updated due to internal server issue',
        });
    }
}