import { NavLink } from "react-router-dom"
import styled from 'styled-components'



export const Header = ({user,setUser,setShowModal}) => {

    const StyledHeader = styled.header`
        height: 100px;
        width: 100%;
        background-color: #A2B2EE;
        padding-top: 20px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        

        & nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 10px;
            margin-right: 20px;
        }

        p{
            font-size:1.2rem;
            font-weight:bold;
        }

        button{
            min-width: 5rem;
            max-width: 8rem;
            height: 2.5rem;
            border-radius:10px;
            border:none;
            background-color:#c6ceed;
            color:#333;
            font-weight:bold;
            cursor:pointer;
            &:hover {
                box-shadow: 0 0 20px #333;
            }
        }

        

@media screen and  (max-width: 800px) {
h1{
    display:none;
    
}
    
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

        @media screen and  (max-width: 600px) {
            gap: 10px;
        }
          
    `


    const handleShowModal =()=>{
        setShowModal(true)
    }

    const handleSignOut =()=>{
        localStorage.removeItem('user');
        setUser({isSignedIn:false,name:''})
    }



    return (
        <StyledHeader>
            <nav>
                <StyledUl>
                   <li>
                        <NavLink className={({isActive}) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : 'link')} to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : 'link')} to='/protectedPage'>Protected Page</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : 'link')} to='/todo'>Todo</NavLink>
                    </li>
                </StyledUl>
            </nav>
            {user.isSignedIn?<p>Welcome {user.name}</p>:null}
           {!user.isSignedIn? <button onClick={handleShowModal}>Sign In</button> : <button onClick={handleSignOut}>Sign Out</button>}
          
        </StyledHeader>
    )
}