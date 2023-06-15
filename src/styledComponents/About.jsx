import { AboutContainer, AboutImage, AboutText, LoremIpsumText } from "./StyledComponents";



export const About = () => {
  return (
    <AboutContainer>
      <AboutImage src="https://i.pinimg.com/originals/e1/cc/4d/e1cc4d6ab1367daf7adca214d60fcb12.jpg" alt=" Image Lorem Ipsum" />
      
        <LoremIpsumText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consequat risus non ligula pulvinar, sit amet hendrerit arcu
          fringilla. Duis eu tincidunt mauris. Nulla pulvinar, purus a
          consectetur porttitor, ipsum justo eleifend lacus, ut lobortis enim
          est et ligula. Mauris non ex tincidunt, pharetra neque et, finibus
          tellus. Fusce malesuada dui vel turpis pulvinar, vel eleifend ante
          ullamcorper. Etiam sed neque ut lacus ullamcorper laoreet eu non
          dolor. Quisque scelerisque est id bibendum lacinia.
        </LoremIpsumText>

        <AboutText>
    
    About Us
  
</AboutText>
      
    </AboutContainer>
  );
};
