import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {

    const StyledDiv = styled.div`
        height: 100px;
        width: 100%;
        background-color: linen;
        padding-top: 20px;
        & nav {
            display: flex;
            justify-content: space-between;
            margin-left: 100px;
            margin-right: 100px;
        }
    `
    const StyledUl = styled.ul`
        display: flex;
        justify-content: center;
        gap: 100px;
        & li {
            list-style-type: none;
        }
    `

    return (
        <StyledDiv>
            <nav>
                <h1>React Website</h1>
                <StyledUl>
                   <li>
                        <NavLink className={({isActive}) => (isActive ? "active" : "")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/about'>About</NavLink>
                    </li>
                </StyledUl>
            </nav>
        </StyledDiv>
    )
}