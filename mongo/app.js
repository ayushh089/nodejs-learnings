const express=require('express')
const app=express()
const userModel=require("./usermodel")
app.get("/",(req,res)=>{
    res.send("hey")
})
app.get("/create",async (req,res)=>{
    let userData=await userModel.create({
        name:"Ayush",
        username:"fswf",
        email:"fs"
    })
    res.send(userData)
})
app.listen(3000)