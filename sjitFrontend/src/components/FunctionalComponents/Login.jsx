import '../Css/Form.css'

function Login(){
    return(
        <body class="body"> 
      <div> <center><h1>Welcome To my WebSite</h1></center>
 <center><form action="/about"class="form">
        <table>
            <tr>
                <td>Username</td>
                <td><input type="text" placeholder="Enter Username" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" placeholder="Enter Password" /></td>
            </tr>
            
        </table>
        <center> <button>Login</button></center> 
       <p> Don't have an Account <a href="/signup">Sign Up?</a></p>
        </form>
        </center>
        </div> 
       
            
        </body>
    )
}
export default Login