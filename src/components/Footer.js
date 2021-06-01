import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/global";

const AppFooter = styled.footer`
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: rgb(31, 39, 44);
`;
const StyledAppFooterContent = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <AppFooter>
      <StyledContainer>
        <figure><img src='./images/logo.png' /></figure>
        <StyledAppFooterContent>
          <div>
            <p>Selected series</p>
            <p>Selected movies</p>
          </div>
          <div>
            <p>Terms and Conditions</p>
            <p>Integrity and cookies</p>
          </div>
          <div>
            <p>Customer service</p>
            <p>Activate account</p>
            <p><a href="mailto:support@comhem.se">support@comhem.se</a></p>
          </div>
        </StyledAppFooterContent>
      </StyledContainer>
    </AppFooter>
  );
};

export default Footer;
