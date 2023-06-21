import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
  const Wrapper = styled.div`
    display:flex;
    width: 100%;
    height:100%;
    position: absolute;
    flex-direction: column;
  
    `
  const OutletStyle = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `
  return (
    <Wrapper>
      <Header />
      <OutletStyle>
        <Outlet />
      </OutletStyle>
      <Footer />
    </Wrapper>
  )
}

export default Layout
