import styled from "styled-components";
import AboutImage from "../imgs/aboutImage.jpg"

const AboutPage = () => {

  const StyledMainAbout = styled.article`
        width: 65%;
        display: flex;
        justify-content: space-between;
        height: 600px;
        background-color: #fdfbed;
        margin-inline: auto;
        border-radius: 4px;
        position: relative;
        margin-block: 30px;
        box-shadow: 3px 5px 20px #969696;
        & img {
            height: 97%;
            margin-block: 10px;
            margin-left: 10px;
            z-index: 1;
        }
    `

  const TextDiv = styled.div`
        display: flex;
        & h1 {
            position: absolute;
            left: 31%;
            font-size: 90px;
            font-weight: 400;
            z-index: 3;
            color: #313131;
        }
        & p { 
            margin: auto;
            font-size: 18px;
            padding-inline: 15px;
            color: #313131;
        }
    `

  return (
    <StyledMainAbout>
      <img src={AboutImage} alt="about" />
      <TextDiv>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam optio delectus dicta adipisci, sunt maxime ipsum, ipsa fugiat tempora dolores nulla quidem dolorum perferendis ratione commodi, explicabo alias vel?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum at sunt vero distinctio! Soluta iste voluptas sit ex laudantium accusamus assumenda, rem, alias voluptatibus omnis eligendi rerum dicta obcaecati!
        </p>
      </TextDiv>
    </StyledMainAbout>
  )
}

export default AboutPage