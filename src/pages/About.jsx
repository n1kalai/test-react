import styled from "styled-components";
import Gela from "../photo/Screenshot_2.png";
const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  & h1 {
    position: absolute;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    top: 50px;
  }
  & figure {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    & img {
      margin-right: 10px;
    }
  }
`;
export const About = () => {
  return (
    <StyledAbout>
      <h1>ABOUT US</h1>
      <figure>
        <img src={Gela} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          quae veritatis consectetur doloremque voluptatibus perspiciatis fugiat
          est, amet delectus atque libero consequuntur ad laborum aperiam iusto
          perferendis sed deleniti nisi!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          quae veritatis consectetur doloremque. voluptatibus perspiciatis
          fugiat est, amet delectus atque libero consequuntur ad laborum aperiam
          iusto perferendis sed deleniti nisi!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          quae veritatis consectetur doloremque voluptatibus perspiciatis fugiat
          est, amet delectus atque libero consequuntur ad laborum aperiam iusto.
          perferendis sed deleniti nisi!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          quae veritatis consectetur doloremque voluptatibus perspiciatis fugiat
          est, amet delectus atque libero consequuntur ad laborum aperiam iusto
          perferendis sed deleniti nisi!
        </p>
      </figure>
    </StyledAbout>
  );
};
