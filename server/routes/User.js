const express=require("express");
const router=express.Router();

//Import the required controller and milddleware function

const {
    login,
    signUp,
    sendOTP,
    changePassword
}=require("../controllers/Auth");

const {resetPasswordToken,
    resetPassword
}=require("../controllers/profilecontrollers/ResetPassword");
const {redis,findDetails}=require("../middlewares/redisServer")
const {auth}=require("../middlewares/auth")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

//Route for user login
router.post("/login",login);

//Route for user signup
router.post("/signUp",signUp);

//Route for user sendotp
router.post("/sendOTP",sendOTP);

//Route for user changePassword
router.post("/changePassword",changePassword);



// ***********************************************************************************
//                                     Reset password
// ***********************************************************************************

router.post("/resetPasswordToken",resetPasswordToken);

router.post("/resetPassword",resetPassword);
// Export the router for use in the main application

//when refresh the page it will call
router.get("/refresh_page",auth,redis,findDetails)
module.exports=router;