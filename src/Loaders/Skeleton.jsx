import Dots from "./Dots";
import Loader from "./Loader";
import styled from 'styled-components'


const StyledSection=styled.section`
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

div{
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
gap:1rem;
}

`

const Skeleton = () => {
    return ( 
  
        <StyledSection>
        <Dots/>
        <div>
        <Loader/>
        <Loader/>
        <Loader/>
        <Loader/>
        </div>
        
        </StyledSection>

     );
}
 
export default Skeleton;