import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useAppState } from "../state/AppStateContext";
import { StyledContainer } from "../styles/global";

const MoviePageContainer = styled.section`
  padding-top: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MoviesPage = () => {
  const { movieList } = useAppState();

  if (!movieList) return null;
  return (
    <StyledContainer>
      <MoviePageContainer>
        {movieList.map((movie) => (
          <MovieCard key={movie.episode_id} movieEpisodeId={movie.episode_id} />
        ))}
      </MoviePageContainer>
    </StyledContainer>
  );
};

export default MoviesPage;
