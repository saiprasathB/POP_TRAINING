const mdb = require('mongoose')
const signupSchema = mdb.Schema({
    FirstName:String,
    lastName:String,
    email:String,
    password:String,    
    phoneNumber:Number 
})

const Signup = mdb.model("signups",signupSchema);

module.exports = Signup