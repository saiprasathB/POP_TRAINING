import "../Css/Navbarcss.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  var [dropdown, setDropdown] = useState(false);
  var [dropdown1, setDropdown1] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div
            className="dropdown1"
            onMouseEnter={() => setDropdown1(!dropdown1)}
            onMouseLeave={() => setDropdown1(!dropdown1)}
          >
            <span>Memoization</span>
            {dropdown1 && (
              <ol className="dropdown-content">
                <li>
                  <Link to="/example1" className="use">
                    {" "}
                    Example1{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/example2" className="use">
                    {" "}
                    Example2{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/lazyloadingandsupense" className="use">
                    {" "}
                    LazyLoading{" "}
                  </Link>
                </li>
              </ol>
            )}
          </div>
        </li>
        <li>
          <Link to="/hoc">Hoc</Link>
        </li>

        <div
          className="dropdown1"
          onMouseEnter={() => setDropdown(!dropdown)}
          onMouseLeave={() => setDropdown(!dropdown)}
        >
          <span>Hooks</span>
          {dropdown && (
            <ol className="dropdown-content">
              <li>
                <Link to="/use-effect" className="use">
                  {" "}
                  UseEffect{" "}
                </Link>
               
              </li>
              <li>
                <Link to="/use-state" className="use">
                  {" "}
                  UseState{" "}
                </Link>
              </li>
              <li>
                <Link to="/use-effect-api" className="use">
                  {" "}
                  UseEffectApi{" "}
                </Link>
              </li>
              <li>
                <Link to="/use-ref" className="use">
                  {" "}
                  UseRef{" "}
                </Link>
              </li>
              <li>
                <Link to="/use-memo" className="use">
                  {" "}
                  UseMemo{" "}
                </Link>
              </li>
              <li>
                <Link to="/use-callback" className="use">
                  {" "}
                  UseCallBack{" "}
                </Link>
              </li>
              <li>
                <Link to="/use-memoize" className="use">
                  {" "}
                  UseMemoize{" "}
                </Link>
              </li>
            </ol>
          )}
        </div>
        <li>
          <Link to="signUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
