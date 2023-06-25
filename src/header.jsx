import { NavLink } from "react-router-dom";
import { Nav } from "./styledcomponent";
import { Ul } from "./styledcomponent";

const Header = () => {
  return (
    <div>
      <Nav>
        <h1>My Fist React Website</h1>
        <Ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/footer">Footer</NavLink>
          </li>
        </Ul>
      </Nav>
    </div>
  );
};
export default Header;
