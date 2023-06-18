import styled from "styled-components";
import img from "./../../img/omar-ram-_YOt06k87yo-unsplash.jpg";

const MainStyledDiv = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  & img {
    width: 500px;
    height: 550px;
    padding: 20px 25px;

    z-index: 1;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  & h1 {
    position: absolute;
    left: 32%;
    top: 11%;
    font-size: 60px;
    letter-spacing: 8px;
    z-index: 2;
  }
  & p {
    margin-top: 130px;
    font-size: 15px;
    width: 80%;
  }
`;
export const About = () => {
  return (
    <MainStyledDiv>
      <img src={img} alt="Img" />
      <TextDiv>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          minima molestiae sint asperiores culpa facere, quia, delectus fugit
          voluptatum perspiciatis odit dolorem, praesentium totam voluptatibus
          animi voluptatem repellendus quasi? Architecto distinctio
          reprehenderit dolorem eveniet debitis doloremque voluptates minima
          totam? Eos architecto nihil perspiciatis doloremque? <br /> <br />
          Voluptatem, dolor suscipit doloribus mollitia omnis fuga minus ratione
          vitae ut incidunt ex maiores eligendi impedit reiciendis labore aut
          corporis voluptatibus rerum quas, veritatis optio cupiditate dolorem?
          Eos, necessitatibus, sed consequatur voluptate sunt nulla cumque
          quaerat magni laborum quisquam qui, expedita quis sit eum perferendis
          nostrum tempora culpa. Et distinctio sint harum quos, doloribus porro
          odit.
        </p>
      </TextDiv>
    </MainStyledDiv>
  );
};
