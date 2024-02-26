const mongoose=require("mongoose");
const mailSender=require("../../utils/mailSender");
// const mailBody=require("../../mail/templates/emailVerificationTemplate");

const OTPSchema=new mongoose.Schema({

   email:{
    type:String,
    
   },
   otp:{
    type:String,
    
   },
   createAt:{
    type:Date,
    default:Date.now,
    expires:60*5,
   }
    
});

//a function  to send mails
async function sendVerificationEmail(email,otp){
    try{
        const mailResponse=await mailSender(email,"Verification Eail from swp",otp);
        console.log("emial send successfully",mailResponse);
    }
    catch(error){
        console.log("error occured while sending mail",error);
        throw error;
    }
};



//define the post-save hook send email after the document has been saved
OTPSchema.pre("save",async function(next){

    //new document save to the databse
    if(this.isNew){
       // await sendVerificationEmail(this.email,this.otp);
        
       try {
        await sendVerificationEmail(this.email, this.otp);
      } catch (error) {
        console.log("Error occurred while sending verification email:", error);
        // Handle the error if necessary
        // For example, you can return an error response or throw the error
        return next(error);
      }
    }

    
    
    next();
});

module.exports=mongoose.model("OTP",OTPSchema);
