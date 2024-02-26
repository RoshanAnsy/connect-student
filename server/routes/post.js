const express=require("express");
const router=express.Router();


const {auth}=require("../middlewares/auth");
const {
    createPost,
    showAllPost
}=require("../controllers/postcontrollers/post");
const {RatingAPost}=require("../controllers/postcontrollers/ratingAPost")
// const { route } = require("./User");


router.post("/createPost",auth,createPost);
router.get("/showAllPost",auth,showAllPost);
router.post("/RatingAPost",auth,RatingAPost);

module.exports=router;