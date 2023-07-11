import styled from "styled-components"

export const Footer = () => {

    const StyledDiv = styled.div`
        height: 200px;
        width: 100vw;
        background-color: #5F7ADB;;
        display: flex;
        justify-content: space-around;
        align-items:center;
        color:whitesmoke;
        position:relative;
        flex-wrap:wrap;


         h1 {
            background-image: url('https://e0.pxfuel.com/wallpapers/993/804/desktop-wallpaper-purple-glitter-purple-glitter-purple-glitter-background-purple-lavender-glitter-thumbnail.jpg');
            background-size: cover;
            background-clip: text;
            -webkit-background-clip: text; 
            color: transparent;
            font-size:2.5rem;
            font-weight:900;
            cursor:pointer;
           &:hover{
            text-shadow: 0 29px 15px #b2bee7;
           }
        }

        @media screen and  (max-width: 610px) {
           position:fixed;
           bottom:0;
           height:90px;
           p{
            display:none;
           }
           h1{
            text-align:center;
           }
        }
         
    `

    const FlexDiv = styled.div`
        fisplay: flex;
        flex-direction: column;
        & p {
            margin-top: 10px;
        }

        
    `


    const RoundDiv=styled.div `
    height: 110px;
    width:102%;
    background-color:#0c0d0e;
    position:absolute;
    bottom:9.5rem;
    border-radius:50%;
    z-index:1;

    @media screen and  (max-width: 610px) {
        display: none;
    }
       
    
    `

    return (
        
        <StyledDiv>
            <RoundDiv></RoundDiv>
            <h1>Maia Kiknavelidze</h1>
            <FlexDiv>
                <p style={{textDecoration:'underline', fontSize:'1.3rem'}}>contact info:</p>
                <p>kiknavelidzem2@gmail.com</p>
                <p>Linked In</p>
            </FlexDiv>
        </StyledDiv>
    )
    
}