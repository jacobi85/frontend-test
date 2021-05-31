import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMovieCard = styled.div`
  width: 200px;
  height: 300px;
  margin: 18px 18px 0 0;
  background-image: url(${(props) => props.movieUrl});
  background-size: cover;
`;

const MovieCard = ({ movieEpisodeId }) => {
  return (
    <Link to={`/movie/${movieEpisodeId}`}>
      <StyledMovieCard
        movieUrl={`/images/cover/${movieEpisodeId}.jpg`}
      ></StyledMovieCard>
    </Link>
  );
};

export default MovieCard;
