import { NavLink } from "react-router-dom"
import styled from 'styled-components'
export const Header = () => {

    const StyledHeader = styled.header`
        height: 100px;
        width: 100%;
        background-color: #A2B2EE;
        padding-top: 20px;

        & nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 10px;
            margin-right: 20px;
        }

        & h1 {
            background-image: url('https://e0.pxfuel.com/wallpapers/993/804/desktop-wallpaper-purple-glitter-purple-glitter-purple-glitter-background-purple-lavender-glitter-thumbnail.jpg');
            background-size: cover;
            background-clip: text;
            -webkit-background-clip: text; 
            color: transparent;
            font-size:2.5rem;
            font-weight:900;
            text-shadow: 0 0 20px #b2bee7;
            
        }
    `;
    const StyledUl = styled.ul`
        display: flex;
        justify-content: center;
        gap: 50px;
        font-size:1.3rem;
        & li {
            list-style-type: none;

        }
    `

    return (
        <StyledHeader>
            <nav>
                <h1>M.K. Homework</h1>
                <StyledUl>
                   <li>
                        <NavLink className={({isActive}) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : 'link')} to='/about'>About</NavLink>
                    </li>
                </StyledUl>
            </nav>
        </StyledHeader>
    )
}