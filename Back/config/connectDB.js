//imports
const mongoose=require('mongoose');

//connection to DB
const connectDB=async ()=>{
    try {
       await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true ,useUnifiedTopology:true});
       console.log("Connected to DB");
    } catch (e) {
    console.log("Cannot connect to DB",e);
    }

}
//exportation
module.exports=connectDB;