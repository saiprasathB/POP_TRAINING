const express=require('express')

const app=express()

const PORT =3001

app.get("/static",(req,res)=>{
    res.sendFile('C:\\Users\\sande\\Documents\\SaiPrasath\\POP_TRAINING\\Practice\\Day-1\\index.html');
})





app.listen(PORT,()=>{
    console.log("Server is Running")
})
