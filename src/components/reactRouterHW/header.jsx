import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 80px;
  width: 100%;

  margin: 0;
  padding-top: 20px;

  background-color: #333;

  & nav {
    margin-right: 0px;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: end;
  margin-right: 100px;
  gap: 50px;
  & li {
    list-style: none;
    font-size: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  background-color: green;
  padding: 10px;
  color: white;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  border-radius: 15px;

  &.active {
    border-bottom-color: green;
    background-color: white;
    color: green;
  }
`;

const Header = () => {
  return (
    <MainDiv>
      <nav>
        <StyledUl>
          <li>
            <StyledNavLink activeClassName="active" exact to="/">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="active" to="/about">
              About
            </StyledNavLink>
          </li>
        </StyledUl>
      </nav>
    </MainDiv>
  );
};

export default Header;
