import React from "react";
import AutoComplete from "../components/AutoComplete";
import SearchHistory from "../components/SearchHistory";
import { StyledContainer } from "../styles/global";

const CharactersPage = (props) => {
  return (
    <StyledContainer>
      <AutoComplete />
      <SearchHistory />
    </StyledContainer>
  );
};

export default CharactersPage;
