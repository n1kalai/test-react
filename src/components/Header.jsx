import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
  const StyledHeader = styled.header`
    height: 150px;
    width: 100%;
    background-color: #c8f720;
    & h1 {
      font-size: 48px;
      color: #4d4d4d;
      margin-left: 5%;
      text-shadow: 2px 3px 2px rgba(255, 255, 255)
    }
    & nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    & ul {
      margin-right: 5%;
    }
    & a {
      color: #4d4d4d;
      text-decoration: none;
      font-size: 28px;
      font-weight: bold;
    }
    & a.active {
      border-bottom: 2px solid #ffffff;
    }
  `;

  const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  `;

  return (
    <StyledHeader>
      <nav>
        <h1>Styled Components - GG</h1>
        <StyledList>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : "")} to='/about'>About</NavLink>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  )
}

export default Header;
