import styled from "styled-components"

export const Footer = () => {

    const StyledDiv = styled.div`
        height: 170px;
        width: 100%;
        background-color: #a2937d;
        display: flex;
        justify-content: space-evenly;
        padding-top: 4%;
    `

    const FlexDiv = styled.div`
        fisplay: flex;
        flex-direction: column;
        & p {
            margin-top: 10px;
        }
    `

    return (
        <StyledDiv>
            <h1>Posts by Fetching JSON</h1>
            <p>COPYRIGHT 2023</p>
            <FlexDiv>
                <p>contact info:</p>
                <p>ninigibradze@gmail.com</p>
                <p>522222222</p>
            </FlexDiv>
        </StyledDiv>
    )
    
}