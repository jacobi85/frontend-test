import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/global";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
  padding-top: 1rem;
  height: 100px;

  a {
    color: lightgreen;
  }
`;

const StyledNav = styled.div`
  margin-top: 0.5rem;
  margin-left: 64px;
`;

const Header = (props) => {
  return (
    <AppHeader>
      <StyledContainer>
        <Link to="/">
          <img src={"images/logo.png"} />
        </Link>
        <StyledNav>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Movies
          </Link>
          <Link to="/characters">Characters</Link>
        </StyledNav>
      </StyledContainer>
    </AppHeader>
  );
};

export default Header;
