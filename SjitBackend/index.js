const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require('./Models/signupSchema');
const bcrypt = require('bcrypt');
const app = express();
const cors =require('cors')
app.use(cors())
const PORT = 3001;
dotenv.config();
app.use(express.json()); 

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MONGODB CONNECTION SUCCESS");
  })
  .catch((err) => {
    console.log("CHECK YOUR CONNECTION", err);
  });


app.post("/signup", async(req, res) => {
  try {
    console.log(req.body)
    const { firstName, lastName, email,password,phoneNumber} = req.body;
    const hashedpass=await bcrypt.hash(password,10);
    const newSignup = new Signup({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("SIGNUP SUCCESS");
   res.status(201).json ({ message: "SIGNUP DONE", isSignup: true }); 
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "SIGNUP FAILED" ,isSignup:false}); 
  }
});


app.post('/login',async(req,res)=>{
  try{
  const {email,pass}=req.body
  console.log("server is Up")
  console.log(req.body)
  const checking =await Signup.findOne({"email":email})
  if(checking){
   
   return res.status(200).json({ message: "User  exist" }); 
  }else{
    return res.status(404).json({ message: "User does not exist" }); 
  }

  }
  

 catch(error){
  console.log("error")
 return  res.status(400).json({message:"Faild"})
}

})

















app.listen(PORT, () => console.log("SERVER STARTED"));