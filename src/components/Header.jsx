import styled from "styled-components";
import cartLogo from './../images/cart.png'
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {

    const StyledDiv = styled.div`
        height: 100px;
        width: 100%;
        background-color: rgb(187, 187, 187);
        & nav {
            display: flex;
            justify-content: space-between;
            margin-left: 100px;
            margin-right: 100px;
        }
        & h1 {
            margin-top: 40px;
        }
        & img {
            width: 30px;
        }
        & p {
            font-size: 20px;
        }
    `
    const StyledUl = styled.ul`
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 40px;
        & li {
            list-style-type: none;
        }
        & a {
            color: black;
            text-decoration: none;
            font-size: 20px;
        }
    `

    const counter = useSelector((state) => state.cartcounter);
    

    return (
        <StyledDiv>
            <nav>
                <h1>React Website</h1>
                <StyledUl>
                   <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <div className="cartDiv">
                        <img src={cartLogo} alt='cartLogo' />
                        {counter.visible && (<p>{counter.value}</p>)}
                    </div>
                </StyledUl>
            </nav>
        </StyledDiv>
    )
}