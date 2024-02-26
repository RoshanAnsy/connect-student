const express=require("express");
const router=express.Router();

const {auth}=require("../middlewares/auth");


const {
    updateProfile,
    getAllUserDetails,
    updateProfilePoto,
    
}=require("../controllers/profilecontrollers/Profiles");


const {updateCollageDetails,
    getAllStudent,
    createCollageDetails,
    addBranchDetails,
    addHostalDetails,
    getCollageDetails
}=require("../controllers/collage/CollageDetails") 


router.put("/updateProfile",auth,updateProfile);
router.get("/getAllUserDetails",auth,getAllUserDetails);
router.put("/updateProfilePoto",auth,updateProfilePoto);
router.put("/updateCollageDetails",auth,updateCollageDetails);
router.get("/getAllStudent",auth,getAllStudent);
router.post("/createCollageDetails",auth,createCollageDetails)
router.put("/addBranchDetails",auth,addBranchDetails)
router.put("/addHostalDetails",auth,addHostalDetails)
router.get("/getCollageDetails",auth,getCollageDetails)

module.exports=router;