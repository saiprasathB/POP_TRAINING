
import '../Css/Navbarcss.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
        <nav>
          
                <li>
                    <Link to='/'>Home</Link>
                    
                </li>
                <li>
                    <Link to='/about'>About</Link>
                    
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                    
                </li>

<div>
                <span>Hooks</span>
                <ol>
                    <li><Link to='/use-effect'> UseEffect </Link></li>
                    <li><Link to='/use-state'> UseState </Link></li>
                </ol>

                </div>
                <li>
                <Link to='signUp'>Sign Up</Link>
                    
                </li>
                <li>
                <Link to='/login'>Login</Link>
                    
                </li>
        </nav></header>
    )
}
export default Navbar