
import styled from "styled-components"


export const About = () => {

    const AboutStyledDiv = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 100vh;
        margin-left: auto;
        border-radius: 10px;
        gap: 15px;
        position: relative;
        padding-top: 1.5rem;
        color: #5F7ADB;

       
        & img {
            width: 700px;
            height: 80%;
            margin-left: 30px;
            z-index: 1;
        }

        & h1 {
            letter-spacing: 20px;
            position: absolute;
            left: 33%;
            z-index: 2;
            font-size:3.5rem;
            color: #c6ceed;
            text-shadow: 0 0 10px #333;
        }




        }
           
    `

    const WrpDiv = styled.div`
        display: flex;
         flex-wrap:wrap;
        font-size: 1.4rem;
        max-height:75vh;
        overflow-y:scroll;
    
        & p { 
            margin-top: 8rem;
             font-size: 1.2rem;
        }

    


    ` 

    return (

        <AboutStyledDiv>
            <img src='https://wallpapers.com/images/hd/cute-aesthetic-cartoon-powerpuff-girl-buttercup-9i6adl0x6uafm59g.jpg' alt="aboutImg" />
            <h1>ABOUT US</h1>
            <WrpDiv>
<p>
Got a white boy on my roster
He be feeding me pasta and lobster
He just hit me up on Tuesday like, "What you doing, bae?
Let me take you shoppin'" (Brr)
I told him, "Well, I'm a little busy" (Damn)
He said, "Damn, I'm in your city (Fuck)
But anyway, it's okay, hope you have a good day
I'ma send you 'bout eight fifty" (Ooh)
Then I told him, "You treat me so well"
He said, "Cash App or Zelle? (Ching)
Matter of fact, scratch that, I'ma send you a stack
Just cause you fine as hell"
And I told him, "Well, thank you, baby" (Thank you)
"Anything for my favorite lady" (Ooh)
Well, I gotta go, they just let me know
That I could pick up my Mercedes (Skrrt)
I got hoes 
In different area codes 
Everywhere I go 
I call and they drop the lo' 
'Cause I got hoes 
In different area codes 
Some of 'em bros 
And I'm big pimpin' 'cause they know ...
</p>
            </WrpDiv>
        </AboutStyledDiv>
       
    )
}