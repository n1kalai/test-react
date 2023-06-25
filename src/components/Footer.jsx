import { Fragment } from "react"
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
        text-shadow: 0 0 3px #333;
        position:relative;
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
    
    `

    return (
        
        <StyledDiv>
            <RoundDiv></RoundDiv>
            <h1>DI-march homeworks</h1>
            <p>Maia kiknavelidze</p>
            <FlexDiv>
                <p style={{textDecoration:'underline', fontSize:'1.3rem'}}>contact info:</p>
                <p>kiknavelidzem2@gmail.com</p>
                <p>Linked In</p>
            </FlexDiv>
        </StyledDiv>
    )
    
}