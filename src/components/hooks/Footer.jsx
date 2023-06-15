import styled from "styled-components"
import {  NavLink } from "react-router-dom";


const Futera = styled.footer`

width:100%;
height:300px;
background-color:green;
border-top-left-radius: 228px;
border-top-right-radius: 228px;
border-bottom-right-radius: 228px;
border-bottom-left-radius: 228px;
& nav ul {
    display:flex;
    list-style:none;
    justify-content: space-evenly;
    margin-top:150px;
    cursor:pointer;

}& h1 {
    display:flex;
    justify-content:center;
}


`
export const Footer = () => { 
return (
    <Futera>
<h1>
    FOOOOOOTER INFO
</h1>
        <nav>
<ul>
    <li>Contact</li>
    <li>Linkedin</li>
    <li>Github</li>
</ul></nav>
    </Futera>
)



}