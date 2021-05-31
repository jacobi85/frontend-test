import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/global";

const AppFooter = styled.footer`
  height: 500px;
  background-color: rgb(31, 39, 44);
`;

const Footer = (props) => {
  return (
    <AppFooter>
      <StyledContainer>footer content</StyledContainer>
    </AppFooter>
  );
};

export default Footer;
