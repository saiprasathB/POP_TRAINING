
import Home from './components/FunctionalComponents/Home'
import About from './components/FunctionalComponents/About'
import Contact from './components/FunctionalComponents/Contact'
import SignUp from './components/FunctionalComponents/SignUp'
import Login from './components/FunctionalComponents/Login'
import Navbar from './components/FunctionalComponents/Navbar'
function App() {
  return (
   <main>
    <Navbar/>
    <h1>Welcome</h1>
    <hr />
    <Home></Home>
    <hr />
    <About></About>
    <hr />
    <Contact></Contact>
    <hr />
    <SignUp></SignUp> 
    <hr />
    <Login></Login>
    <hr />
    
   </main>
  )
}

export default App
