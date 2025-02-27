//import "../css/formstyle.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
function Sign() {
        const [firstName,setFName]=useState("");
        const [lastName,setLName]=useState("");
        const [email,setEmail]=useState("");
        const [password,setPass]=useState("");
        const [phoneNumber,setPhoneno]=useState(0);
        const handleSignUp =(event)=>
        {
            event.preventDefault()
                axios.post("https://pop-training.onrender.com/signup",{

                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    phoneNumber:phoneNumber
                });
        };
    return (
        <div>
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSignUp}>
                    <input type="text" id="firstName"placeholder="First Name" value={firstName} onChange={e=>setFName(e.target.value)}  />
                    <br />
                    <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={e=>setLName(e.target.value)} />
                    <br />
                    <input type="email" id="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                    <br />
                    <input type="password" id="password" placeholder="Password" value={password} onChange={e=>setPass(e.target.value)} />
                    <br />
                    <input type="text" id="phoneNumber"placeholder="Mobile Number" value={phoneNumber} onChange={e=>setPhoneno(e.target.value)}/>
                    <br />
                    <button type="submit">Sign In</button>
                    <br />
                    <div>
                    <h3>Already have an account?<Link to='/signup/login'>Login</Link> </h3>
                    </div>

                </form>
            </div>
            <h1>Hello World</h1>
        </div>
    );
}

export default Sign;