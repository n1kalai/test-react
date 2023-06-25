import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 10px;
  -webkit-box-align: center;
  align-items: center;
  background: darkgrey;
  color: #e0d21e;
`;

export const Ul = styled.div`
  display: flex;
  gap: 50px;
  list-style-type: none;
  text-decoration: none;
`;

export const FooterUl = styled.ul`
  display: flex;
  list-style-type: none;
  text-decoration: none;
  -webkit-box-pack: justify;
  justify-content: space-evenly;
  padding: 1%;
  margin: 1%;
`;

export const Button = styled.button`
  height: 30px;
  background-color: wheat;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Postdiv = styled.div`
  border: 2px solid blanchedalmond;
  border-radius: 5px;
  text-align: center;
  background: cadetblue;
`;

export const Aboutt = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Img = styled.img`
width 50%;`;
