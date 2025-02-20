
import '../Css/Navbarcss.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
    var [dropdown, setDropdown] = useState(false);
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

                <div class="dropdown" onMouseEnter={()=>setDropdown(!dropdown)}
                onMouseLeave={()=>setDropdown(!dropdown)}>
                    <span>Hooks</span>
                   {dropdown && (<ol class="dropdown-content">
                        <li><Link to='/use-effect' class='use'> UseEffect </Link></li>
                        <li ><Link to='/use-state' class='use'> UseState </Link></li>
                        <li ><Link to='/use-effect-api'  class='use'> UseEffectApi </Link></li>
                        <li ><Link to='/use-ref'  class='use'> UseRef </Link></li>
                        <li ><Link to='/use-memo'  class='use'> UseMemo </Link></li>
                    </ol>)}

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