import React from "react";
import { NavLink } from "react-router-dom";
import '../../../src/App.css';



export const Header = ()=> { 
    return(
        <header>
        <nav>
            <ul className="none">
                <li>

            <NavLink  className={({isActive})=>(isActive ? "active":"")} to="/">
    Home
            </NavLink>
                </li>
                <li>

            <NavLink  className={({isActive})=>(isActive ? "active":"")} to="/about">
    About
            </NavLink>
                </li>
                
            </ul>
        </nav>
        </header>


    )
}