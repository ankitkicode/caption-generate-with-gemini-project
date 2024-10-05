const mongoose = require("mongoose")
const dotenv = require('dotenv')    
dotenv.config();
const db = process.env.DATABASE_URI;
const connectDB = async()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
        });
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}


module.exports = connectDB;