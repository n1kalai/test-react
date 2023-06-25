import smileImg from "./img/smile.jpg";
import { Aboutt } from "./styledcomponent";
import { Img } from "./styledcomponent";
const About = () => {
  return (
    <Aboutt className="aboutDiv">
      <Img src={smileImg} alt="" />
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          repellat voluptate fuga, ad necessitatibus odit nulla animi
          dignissimos, quis aliquam veritatis! Velit fugit consequatur fuga
          veritatis expedita. Modi, eaque fuga?
        </p>
      </div>
    </Aboutt>
  );
};
export default About;
