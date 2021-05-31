import React from "react";
import { StyledContainer } from "../styles/global";
import { useParams } from "react-router-dom";

const MovieDetailPage = (props) => {
  const { episodeId } = useParams();
  return (
    <StyledContainer>
      <section>Star wars movie: {episodeId}</section>
    </StyledContainer>
  );
};

export default MovieDetailPage;
