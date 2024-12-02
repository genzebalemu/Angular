import mongoose from "mongoose";
const withListSchema= new mongoose.Schema({
    productid:Number
});

const WishList = mongoose.model("categories", wishListSchema)
module.exports= WishList;