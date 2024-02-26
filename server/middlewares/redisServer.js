const client=require('../config/client')
const User=require("../modules/user/User")
exports.redis=async(req,res,next)=>{
    try{
        const id=req.user.id;
     
        // await client.json.set("bike0",'$',"this is me")
          const results = await client.json.get(`${id}`);
          
          if(results){
            // res.send(results)
            res.status(200).json({
              results
            })
          }
          else{
            next();
          }
        //   console.log(results)
    }
    catch(err){
        res.status(401).json({
            message:'something is issue while fetching the data from redis server',
            err:err.message,
        })

    }
}

//find the user detils from db
exports.findDetails=async(req,res)=>{
  try{
    const id=req.user.id;
    const results=await User.findById(id);
    // res.send(details);
    res.status(200).json({
      results
    })
  }
  catch(err){
    res.status(400).json({
      message:"issue while find the details from db",
      err:err.message,
    })
  }

}