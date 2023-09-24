const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB connection successful"))
    .catch((error)=>{
        console.log("issue in DB connection")
        console.error(error.message);
        process.exit();
    });
}
module.exports=dbConnect;