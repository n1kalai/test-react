import styled from "styled-components";

const Footer = () => {
  const StyledFooter = styled.footer`
    height: 150px;
    width: 100%;
    background-color: #702170;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
      color: #fff;
      font-size: 26px;
      font-weight: 500;
      text-shadow: 1px 2px 3px #000000;
    }
  `

    return (
      <StyledFooter>
        <p>© {new Date().getFullYear()}, Built with ❤️</p>
      </StyledFooter>
    )
  };

export default Footer;
  