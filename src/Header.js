import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px 30px;
    gap: 20px;
    & img {
      height: 80px;
    }
    & .logo {
      margin-right: auto;
    }
  `
  return (

    <HeaderStyle>
      <a className='logo' href='/about'>
        <img src='https://icon-library.com/images/twitter-icon-white-transparent/twitter-icon-white-transparent-9.jpg' />
      </a>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/about'>Pricing</NavLink>
      <NavLink to='/about'>Contact</NavLink>
      <NavLink to='/about'>Blog</NavLink>
    </HeaderStyle>

  )
}

export default Header
