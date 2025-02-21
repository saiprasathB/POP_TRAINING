
import Home from './components/FunctionalComponents/Home'
import About from './components/FunctionalComponents/About'
import Contact from './components/FunctionalComponents/Contact'
import SignUp from './components/FunctionalComponents/SignUp'
import Login from './components/FunctionalComponents/Login'
import Navbar from './components/FunctionalComponents/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import UseEffects from './components/FunctionalComponents/Hooks/UseEffects'
import UseEffectApi from './components/FunctionalComponents/Hooks/UseEffectApi'
import UseRef from './components/FunctionalComponents/Hooks/UseRef'
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo'
import UseCallback from './components/FunctionalComponents/Hooks/UseCallBack'
import UseMemoize from './components/FunctionalComponents/Hooks/UseMemoize'
import HoC from './components/FunctionalComponents/HoC/Hoc'
function App() {
  return (
   <main>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home prop="hello" name = "sai"></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/use-effect-api" element={<UseEffectApi/>}></Route>
    <Route path="/use-effect" element={<UseEffects/>}></Route>
    <Route path="/use-ref" element={<UseRef/>}></Route>
    <Route path="/use-memo" element={<UseMemo/>}></Route>
    <Route path="/use-callback" element={<UseCallback/>}></Route>
    <Route path="/use-memoize" element={<UseMemoize/>}></Route>
    <Route path="/hoc" element={<HoC/>}></Route>
    
    
    </Routes>
    </BrowserRouter>
    {/* /* <Navbar/>
    <h1>Welcome</h1>
    <hr />
    <Home prop="hello" name = "sai"></Home>
    <hr />
    <About></About>
    <hr />
    <Contact></Contact>
    <hr />
    <SignUp></SignUp> 
    <hr />
    <Login></Login>
    <hr /> */ }
    
   </main>
  )
}

export default App
