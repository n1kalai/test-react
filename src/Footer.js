import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterStyle = styled.footer`
  text-align: center;
  font-weight: bold;
  padding: 30px;
  `
  return (
    <FooterStyle>
      <div>copyright ©</div>
    </FooterStyle>

  )
}

export default Footer
