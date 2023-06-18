import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.h2`
  margin-right: 10px;
  color: green;
  font-size: 25px;
  font-weight: bold;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 5px;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <ContactInfo>
          <ContactText>Contact me:</ContactText>
          <ContactLink href="mailto:nik@gmail.com">
            Gmail: nik@gmail.com
          </ContactLink>
          <ContactLink href="tel:+55555555555">
            Number: 555 55 55 55
          </ContactLink>
        </ContactInfo>
      </FooterText>
    </FooterContainer>
  );
};
