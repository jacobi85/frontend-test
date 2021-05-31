import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useAppState } from "../state/AppStateContext";
import { media, StyledContainer } from "../styles/global";

const MoviePageContainer = styled.section`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;


${media.minWidth("l")`
justify-content: flex-start;
`}
`;

const MoviesPage = () => {
  const { movieList } = useAppState();

  if (!movieList) return null;
  return (
    <StyledContainer>
      <MoviePageContainer>
        {movieList.map((movie) => (
          <MovieCard
            key={movie.episode_id}
            movieEpisodeId={movie.episode_id}
          />
        ))}
      </MoviePageContainer>
    </StyledContainer>
  );
};

export default MoviesPage;
