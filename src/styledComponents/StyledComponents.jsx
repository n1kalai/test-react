import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

export const PostsContainer = styled.div`
  width: 400px;
  height: auto;
  background-color: #9DF9EF;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 20px;
  margin-left: 100px;
  background-color: #51E2F5;
  border-radius: 15px;
  border-style: none;
    &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  background-color: #355C7D;
  padding: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: end;
  list-style-type: none;
  margin-right: 50px;
`;

export const Li = styled.li`
  margin-right: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #9DF9EF;
  text-decoration: none;
  &.active {
    font-weight: bold;
    border-bottom: solid 2px black;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 80px;
  color: black;
  font-weight: bold;
  
`;

export const FooterText = styled.p`
  font-size: 16px;
  margin-right: 20px;
`;

export const FooterInfotmation = styled.span`
  margin-right: 20px;
  cursor: pointer;
 
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 150px;
  position: relative;

`;

export const AboutImage = styled.img`
  margin: 70px 70px 70px 70px;
`;


export const LoremIpsumText = styled.p`
  font-size: 25px;
  color: #333;
  margin: 0 100px 0 100px;
`;

export const AboutText = styled.p`
  position: absolute;
  left: 500px;
  bottom: 350px;
  display: flex;
  align-items: center;
 
  padding: 20px;
  font-size: 150px;
  color: black;
`;


