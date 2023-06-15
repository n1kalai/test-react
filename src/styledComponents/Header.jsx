
import { Li, Nav, StyledNavLink, Ul } from "./StyledComponents";

export const Header = () => {
    return (
        <Nav>
        <Ul>
            <Li>
                <StyledNavLink className={({isActive}) => (isActive ? "active" : "")}
            to="/">
                Home
                </StyledNavLink> 
                </Li>
            {/* <Li>
                <StyledNavLink className={({isActive}) => (isActive ? "active" : "")}
            to="/post/:id">
                Posts
                </StyledNavLink>
                </Li> */}
            <Li>
                <StyledNavLink className={({isActive}) => (isActive ? "active" : "")}
                to="/about">
                    About
                    </StyledNavLink>
                    </Li>
        </Ul>
    </Nav>
    )

};


