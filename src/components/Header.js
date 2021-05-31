import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/global";

const AppHeader = styled.header`
  height: 100px;
`;

const Header = (props) => {
  return (
    <AppHeader>
      <StyledContainer>Header content</StyledContainer>
    </AppHeader>
  );
};

export default Header;
