import {Link} from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contactUs">Contact Us</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
