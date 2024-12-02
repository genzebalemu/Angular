import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from "./db/db.js";
import router from "./routes/category.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use("/api", router)
app.get('/', (req, res)=>{
    res.send("server is running")
})
app.listen(4000, ( )=>{
    console.log("responds")
})