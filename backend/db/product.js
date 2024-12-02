import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:String,
    shutdescription:String,
    description:String,
    purchasingprice:Number,
    sellingprice:Number,
    images:Array[string],
    categoryid:Number
});

const User = mongoose.model("users", userSchema)
module.exports = User;