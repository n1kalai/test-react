import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartWindow from "./CartWindow";
import { cartAction } from "./Store/CartSlice";



const Header = ()=> { 
    const cart = useSelector(state=>state.cart)
    const dispatch= useDispatch()

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
        <li>
            <NavLink  onClick={()=>dispatch(cartAction.toggleShowWindow())} className={({isActive})=>(isActive?'active':'')} to='/Cart'>
                Cart {cart.cart.length}
            </NavLink>
        </li>
        </header>
    )
}


export default Header