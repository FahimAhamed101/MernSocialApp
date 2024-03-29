const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./router/user");
dotenv.config();


mongoose.connect(process.env.MONGODB).then(()=>
console.log("DB connection successfull")).catch(()=>{
          console.log("Some error occured")
})
app.use(cors());
app.use(express.json());

app.use("/api/user" , userRouter);
app.listen(5000 , ()=>{
          console.log("Server is running")
})