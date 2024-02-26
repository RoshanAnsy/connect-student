const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
			useUnifiedTopology: true,
        })
        .then(()=>console.log("DB Connected Successfully"))

        .catch((err)=>{
         console.log(`DB CONNECTION ISSUES`);
         console.error(err.message);
         process.exit(1);
        })

};

module.exports=dbConnect;