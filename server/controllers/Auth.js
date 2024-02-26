const User=require("../modules/user/User");
const OTP=require("../modules/user/OTP");
const otpGenertor=require("otp-generator");
const bcypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Profile = require("../modules/user/Profile");
const Collage=require("../modules/user/Collagedetail");
const mailSender=require("../utils/mailSender");
const {passwordUpdate}=require("../mail/templates/passwordUpdate");
require("dotenv").config();
const client=require("../config/client")



//SignUp controller for new user 
exports.signUp=async (req,res)=>{
    try{
        //fetch the data from signup page
        const {
            firstName,
            lastName,
            email,
            password,
            conformPass,
            otp,
           
        }=req.body;

        //validate ker lo
        if(!firstName || !lastName || !email || !password || !conformPass ){
            return res.status(400).json({
                success:false,
                message:'All feild is required',
            })
        }
        //match the password
        if(password!==conformPass){
            return res.status(400).json({
                success:false,
                message:'password and conform password dont matched',
            })
        }
        //check user all ready exit or not
        const exitUser=await User.findOne({email});
        if(exitUser){
            return res.status(400).json({
                success:false,
                message:'user all ready exit',
            });
        }
        //find recet otp stored in db for user
        //make sure you have to serch google for it
        const recentOtp=await OTP.find({email}).sort({createdAt:1}).limit(1);

        console.log( "recent otp:", recentOtp);

       //validation for otp
        if(recentOtp.length===0){
            //OTP is not found
            return res.status(400).json({
                success:false,
                message:'OTP is not found',
            });
        }
        else if( otp!==recentOtp[0].otp){
            //invalid otp
                return res.status(400).json({
                    success:false,
                    message:'opt is not matched',
                })
        }
        
        //Hash code
        const hashcodePassword=await bcypt.hash(password,10);
        //create the user
        
        //entry in db
        const profileDetils= await Profile.create({
            gender:null,
            number:null,
            about:null,
            
        });
        const collageDetails=await Collage.create({
            collageName:null,
            collageDec:null,
            rejno:null,
            rollno:null,
            branch:null,
            year:null,
            semester:null,
        })

       //we need to check image url
        const user=await User.create({
            firstName,
            lastName,
            email,
            password:hashcodePassword,
            profile:profileDetils,
            collageinfo:collageDetails,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        return res.status(200).json({
            success:true,
            message:'user rejester succesfully ',
        });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:'something went wrong in signup',
        })
    }
};


//User Login

exports.login=async (req,res)=>{
    try{
        
        //fetch the data from req body
        const {email,password}=req.body;
        //validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'all fiels are required',
            })
        }
        
        //check user exit or not
        //if new it return correctly the also implement this .populate("profile")
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:'user dont exit please signup',
            })
        }
       
        //generate JWT, after password matching
        if(await bcypt.compare(password,user.password)){
            const payload={
                email:user.email,
                id:user._id,
            }
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"1d",
            });
            user.token=token;
            user.password=undefined;

            //create cookies ans send responce
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            };
            //store the info in redis server
            await client.json.set(`${user._id}`,'$',{user})
            await client.expire(`${email}`,10);
            res.cookie("token",token,options).status(200).json({
                success:true,
                message:'Logged in successfully',
                token,
                user,
            });

        }
        else{
            return res.status(400).json({
                success:false,
                message:'password is oncorrect',
            })
        }
    }
    catch(error){
        console.log(error);
        //return 500 internal server error status code with error message
        return res.status(500).json({
            success:false,
            message:'Login Failure please Try Again',
        });
    }
};


//send OTP
exports.sendOTP=async (req,res)=>{
    try{
        //fetch emil form request body
        const {email}=req.body;
        //check if user allredy exit 
        const checkUserPresent=await User.findOne({email});
        //if user all ready exit then send responce
        console.log("user is exit",checkUserPresent);
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:'user all ready exit',
            });
        }
        //generate otp
        var otp=otpGenertor.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });

        console.log("otp generated",otp);

        //cheack otp is unique or not
        let result=await OTP.findOne({otp:otp});

        while(result){
            otp=otpGenertor(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result=await OTP.findOne({otp:otp});
        }
            console.log("recent OTP is here",result);
        const otpPayload={email,otp};
        //create entry for otp in db
        const otpBody=await OTP.create({email:email,otp:otp});

        console.log( "otp body is here", otpBody.otp);

        //return responce successfully
        res.status(200).json({
            success:true,
            message:'OTP send on email',
            otp,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};


//changing password for user
exports.changePassword=async (req,res)=>{
    try{
        
        //get old password new password, and conform new password form req.body
        const {oldPassword,newPassword,conformPassword}=req.body;

        //get user data from get req.body
        const id=req.user.id;
        console.log( "user id", id)
        const userDetail=await User.findOne({_id:id});

        //validation password
        console.log("user old password is",userDetail.password)
        const isPasswordMatch=await bcypt.compare(
            oldPassword,
            userDetail.password
        );

        if(!isPasswordMatch){
            return res.status(402).json({
                success:false,
                message:'password does not matched please enter correct password',
            });
        }
        //matched new password and confrom new password
        if(newPassword!==conformPassword){
            return res.status(400).json({
                success:false,
                message:'does not matched newpassword and conformpassword',
            });
        }

        //update password
        const encyptedPassword=await bcypt.hash(newPassword,10);
        const updatedUserdetails=await User.findByIdAndUpdate(
            req.user._id,
            {password:encyptedPassword},
            {new:true}
        );

        //send notification email
        try{
            const emailResponse=await mailSender(
                updatedUserdetails.email,
                passwordUpdate(
                    updatedUserdetails.email,
                    `password updates successfully for ${updatedUserdetails.firstname} ${updatedUserdetails.lastname}`
                ),
                
            );
            console.log("Email sent successfully:", emailResponse.response);
        }
        catch(error){
            //if there is error in sending in email send internal server error
            return res.status(501).json({
                success:false,
                message:'internal server error in sending email',
            });

        }
        //return success
        res.status(200).json({
            success:true,
            message:'password has updates successfully',
        })

        

    }
    catch(error){
        		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
        return res.status(501).json({
            success:false,
            message:"internal server error please try agin",
        })
    }
}