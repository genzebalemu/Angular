import express from "express"
const router = express.Router();
import Category from "./../db/category.js";


router.post("/categories", async(req,res)=>{
    try {
        category = req.body;

        const NewCategory = new Category({name: category.name})
        await NewCategory.save();
        res.status(200).json(NewCategory)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.get("/categories", async (req,res)=>{
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
      res.status(500) .json({message: error.message}) 
    }
});

router.get("/categories/:id", async(req,res)=>{
    try {
        const category = await Category.find(req.params.id)
        if(category){
            res.status(200).json(category)
        } else{
            res.status(404).json({message:"category not found"})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.delete("/categories/:id", async(req, res)=>{
    try {
        const deletedcategory = await Category.findByIdAndDelet(req.params.id)
        if(!deletedcategory){
            res.status(404).json({message:"category not found"})
        }
        res.status(200).json({message:"category deleted"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.put("/categories/:id", async(req,res)=>{
    try {
        const updatedcategory= await Category.findByIdAndUpdate(req.params.id, req.body, { new: true})
        if(!updatedcategory){
            res.status(400).json({message:" category not found"})
        }
        res.status(200).json(updatedcategory)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});
 
export default router;