import'../Css/Signup.css'
function SignUp(){
    return(
        <div>
             <center><h1>SignIn</h1></center>
           <center> <form action="/login" class="formsignup">
        <table border="0" class="table">
            <tr>
                <td><label htmlFor="FirstName">FirstName:</label></td>
                <td><input type="text" placeholder="Enter FirstName" required /></td>
            </tr>
            <br />
            <tr>
                <td><label htmlFor="SecondName">SecondName:</label></td>
                <td><input type="text" placeholder="Enter SecondName" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="Email">Email:</label></td>
                <td><input type="email" placeholder="Enter Email" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="DOB">DOB:</label></td>
                <td><input type="date" placeholder="Enter DOB" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="Age">Age:</label></td>
                <td><input type="number" placeholder="Enter Age" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="Gender">Gender:</label></td>
                <td> <input type="radio" name="gender" value="Male" />Male </td>
                <td> <input type="radio" name="gender" value="Female" />Female </td>
            </tr>
            <tr>
                <td><label htmlFor="Password">Password:</label></td>
                <td><input type="password" placeholder="Enter Password" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="ConPassword">ConfirmPassword:</label></td>
                <td><input type="password" placeholder="Enter Password" required /></td>
            </tr>
            
        </table>
        <br />
      <center> <button>SignIn</button></center>
    </form>
    </center>  
        </div>
    )
}
export default SignUp