const mdb = require('mongoose')
const signupSchema = mdb.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: Number,
})

const Signup = mdb.model("signups",signupSchema);

module.exports = Signup