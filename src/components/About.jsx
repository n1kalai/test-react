import styled from "styled-components"
import aboutImg from "./../images/about.jpg"

export const About = () => {

    const MainStyledDiv = styled.div`
        width: 80%;
        display: flex;
        justify-content: space-between;
        height: 600px;
        background-color: #fdfbed;
        margin-left: auto;
        margin-right: auto;
        border: solid 1px #fefdc8;
        border-radius: 10px;
        gap: 15px;
        position: relative;
        padding-top: 20px;
        box-shadow: 0 0 30px #9e8a69;
        & img {
            width: 500px;
            height: 550px;
            margin-left: 30px;
            z-index: 1;
        }
    `

    const FlexDiv = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 1.4rem;
        & h1 {
            letter-spacing: .5rem;
            position: absolute;
            left: 35%;
            z-index: 2;
        }
        & p { 
            margin-top: 8rem;
            z-index: 2;
        }
    ` 

    return (
        <MainStyledDiv>
            <img src={aboutImg} alt="aboutImg" />
            <FlexDiv>
                <h1>ABOUT US</h1>
                <p>How It All Started Hi!  I’m Lopa. I had my first baby during the most stressful year of my life. (Trust me, it was one for the record books!) Many moms guzzle coffee to get through the bone-deep exhaustion of early motherhood (no shade if that’s you!)...but my nervous system was frriiiieeed and coffee just gave me anxiety, panic attacks, & crap sleep. I needed something that didn’t “steal energy from tomorrow to fuel today,” as Traditional Chinese Medicine says. I tried *every* coffee alternative, but...meh. Chalky. Weak. Low-quality ingredients. No energy or functional benefits. So-called “natural” flavors that lacked OOMPH. Worst of all? Fake adaptogens (yep, it’s a thing) and unsustainable ingredients. Hard no.</p>
            </FlexDiv>
        </MainStyledDiv>
    )
}