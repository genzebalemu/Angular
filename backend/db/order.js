import mongoose from "mongoose";
const orderSchema= new mongoose.Schema({
    date:Date,
    
});

const Order = mongoose.model("categories", orderSchema)
module.exports= Order;