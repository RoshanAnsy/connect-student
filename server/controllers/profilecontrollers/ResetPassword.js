const { findOne } = require("../../modules/user/Profile");
const User=require("../../modules/user/User");
const mailSender=require("../../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

exports.resetPasswordToken=async (req,res)=>{
    try{
        //get email
        const email=req.body;
        //cheack user exit or not
        const user=await findOne({email});
        //validate user
        if(!user){
            return res.status(400).json({
                success:false,
                message:'user does not exit',
            });
        }
        //generate random byte token
        const token=crypto.randomBytes(20).toString("hex");

        const updateDetails=await User.findByIdAndUpdate(
            {email:email},
            {
                token:token,
                resepasswordExpires:Date.now()+3600000,
            },
            {new:true},
        );
        console.log("Details",updateDetails);
        const url = `http://localhost:3000/update-password/${token}`;

        await mailSender(
            email,
            "password Reset",
            `your Link for email verification is ${url}. please click on this url to reset your password`
        );
        
    }
    catch(error){
        //if get any error in reset password
        res.status(500).json({
            success:false,
            message:'password does not reset due to internal server issue',
        });
    }
}

//reset password
exports.resetPassword=async (req,res)=>{
    try{
        const {password,confirmPassword,token}=req.body;

        //validation
        if(password !==confirmPassword){
            return res.status(400).json({
                success:false,
                message:'plese enter the correct confirm password',
            });
        }

        //find user details
        const userDetails=await User.findOne({token:token});
        if(!userDetails){
            res.status(400).json({
                success:false,
                message:'token is Invalid'
            });
        }

        //cheack token is expire or not
        if(!(userDetails.resepasswordExpires >Date.now())){
            return res.status(400).json({
                success:false,
                message:'token is expired plese regenerate token',
            })
        }
        //hash the password
        const encryptedPassword=await bcrypt.hash(password,10);

        //user find and upadte
        await User.findByIdAndUpdate(
            {token:token},
            {password:encryptedPassword},
            {new:true},
        );
        return res.status(200).json({
            success:true,
            message:'password reset successfully',
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'internal server issue',
        });
    }
}